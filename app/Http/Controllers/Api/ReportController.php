<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Expense;
use App\Models\Lease;
use App\Models\MaintenanceRequest;
use App\Models\Payment;
use App\Models\Property;
use App\Models\PropertyUnit;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class ReportController extends Controller
{
    use RoleScoping;

    public function dashboard(Request $request): JsonResponse
    {
        $propertyIds = $this->visiblePropertyIds();
        $leaseIds = $this->visibleLeaseIds();

        $propertiesQuery = Property::query();
        $this->filterByIds($propertiesQuery, 'id', $propertyIds);
        $propertyCount = $propertiesQuery->count();

        $unitsQuery = PropertyUnit::query();
        $this->filterByIds($unitsQuery, 'property_id', $propertyIds);
        $unitCount = $unitsQuery->count();

        $leasesQuery = Lease::query();
        $this->filterByIds($leasesQuery, 'id', $leaseIds);
        $activeLeases = (clone $leasesQuery)->where('status', 'active')->count();
        $occupiedUnits = (clone $leasesQuery)->where('status', 'active')->distinct()->count('property_unit_id');
        $monthlyRent = (clone $leasesQuery)->where('status', 'active')->sum('rent_amount');

        $mrQuery = MaintenanceRequest::query();
        if ($this->isRole('tenant')) {
            $mrQuery->where('tenant_id', $this->tenantRecord()?->id);
        } elseif ($this->isRole('technician')) {
            $mrQuery->whereHas('assignments', fn ($q) => $q->where('technician_user_id', $this->user()->id));
        } elseif ($propertyIds !== null) {
            $unitIds = PropertyUnit::query()->whereIn('property_id', $propertyIds)->pluck('id');
            $mrQuery->whereIn('property_unit_id', $unitIds);
        }
        $openRequests = (clone $mrQuery)->whereIn('status', ['open', 'in_progress'])->count();

        $paymentsQuery = Payment::query();
        $this->filterByIds($paymentsQuery, 'lease_id', $leaseIds);
        $pendingPayments = (clone $paymentsQuery)->where('status', 'pending')->sum('amount');

        return response()->json([
            'property_count' => $propertyCount,
            'unit_count' => $unitCount,
            'occupied_units' => $occupiedUnits,
            'occupancy_rate' => $unitCount > 0 ? round($occupiedUnits / $unitCount * 100, 1) : 0.0,
            'active_leases' => $activeLeases,
            'open_maintenance_requests' => $openRequests,
            'pending_payments_total' => (float) $pendingPayments,
            'monthly_rent_total' => (float) $monthlyRent,
        ]);
    }

    public function occupancy(Request $request): JsonResponse
    {
        $propertyIds = $this->visiblePropertyIds();

        $propertiesQuery = Property::query()->with('units');
        $this->filterByIds($propertiesQuery, 'id', $propertyIds);

        $activeLeaseUnitIds = Lease::query()->where('status', 'active')->pluck('property_unit_id')->unique();

        $rows = $propertiesQuery->get()->map(function (Property $property) use ($activeLeaseUnitIds) {
            $unitIds = $property->units->pluck('id');
            $occupied = $unitIds->intersect($activeLeaseUnitIds)->count();
            $total = $unitIds->count();

            return [
                'property_id' => $property->id,
                'property_name' => $property->name,
                'total_units' => $total,
                'occupied_units' => $occupied,
                'vacant_units' => $total - $occupied,
                'occupancy_rate' => $total > 0 ? round($occupied / $total * 100, 1) : 0.0,
            ];
        });

        return response()->json(['data' => $rows]);
    }

    public function rentability(Request $request): JsonResponse
    {
        $propertyIds = $this->visiblePropertyIds();
        $leaseIds = $this->visibleLeaseIds();

        $propertiesQuery = Property::query()->with('units');
        $this->filterByIds($propertiesQuery, 'id', $propertyIds);

        $incomeQuery = Payment::query()->where('status', 'completed');
        $this->filterByIds($incomeQuery, 'lease_id', $leaseIds);

        $rows = $propertiesQuery->get()->map(function (Property $property) use ($incomeQuery) {
            $unitIds = $property->units->pluck('id');
            $leaseIds = Lease::query()->whereIn('property_unit_id', $unitIds)->pluck('id');

            $income = (float) (clone $incomeQuery)->whereIn('lease_id', $leaseIds)->sum('amount');
            $expenses = (float) $property->expenses()->sum('amount');

            return [
                'property_id' => $property->id,
                'property_name' => $property->name,
                'income' => $income,
                'expenses' => $expenses,
                'net' => $income - $expenses,
                'margin' => $income > 0 ? round(($income - $expenses) / $income * 100, 1) : 0.0,
            ];
        });

        return response()->json(['data' => $rows]);
    }

    public function financial(Request $request): JsonResponse
    {
        $leaseIds = $this->visibleLeaseIds();
        $propertyIds = $this->visiblePropertyIds();

        $paymentsQuery = Payment::query();
        $this->filterByIds($paymentsQuery, 'lease_id', $leaseIds);

        $income = (float) (clone $paymentsQuery)->where('status', 'completed')->sum('amount');
        $pending = (float) (clone $paymentsQuery)->where('status', 'pending')->sum('amount');

        $expensesQuery = Expense::query();
        $this->filterByIds($expensesQuery, 'property_id', $propertyIds);
        $expenses = (float) $expensesQuery->sum('amount');

        return response()->json([
            'income' => $income,
            'pending' => $pending,
            'expenses' => $expenses,
            'net' => $income - $expenses,
        ]);
    }

    private function filterByIds(Builder $query, string $column, ?Collection $ids): void
    {
        if ($ids !== null) {
            $query->whereIn($column, $ids);
        }
    }
}
