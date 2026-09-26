<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\WorkOrderResource;
use App\Models\WorkOrder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class WorkOrderController extends Controller
{
    use RoleScoping;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = WorkOrder::query()->with('property', 'propertyUnit');
        $this->scopeByProperty($query);

        return WorkOrderResource::collection(
            $query->orderByDesc('created_at')->paginate($request->integer('per_page', 100))
        );
    }

    public function show(WorkOrder $workOrder): WorkOrderResource
    {
        $ids = $this->visiblePropertyIds();
        abort_if($ids !== null && ! $ids->contains($workOrder->property_id), 403, 'Accès refusé.');

        return new WorkOrderResource($workOrder->load('property', 'propertyUnit', 'quotes'));
    }

    public function updateStatus(Request $request, WorkOrder $workOrder): WorkOrderResource
    {
        $ids = $this->visiblePropertyIds();
        abort_if($ids !== null && ! $ids->contains($workOrder->property_id), 403, 'Accès refusé.');

        $data = $request->validate([
            'status' => ['required', 'string', 'in:planned,in_progress,on_hold,completed,cancelled'],
        ]);

        $workOrder->update(['status' => $data['status']]);

        return new WorkOrderResource($workOrder->load('property', 'propertyUnit'));
    }
}
