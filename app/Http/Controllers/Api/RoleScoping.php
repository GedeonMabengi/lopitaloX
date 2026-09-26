<?php

namespace App\Http\Controllers\Api;

use App\Models\Lease;
use App\Models\MaintenanceAssignment;
use App\Models\MaintenanceRequest;
use App\Models\Property;
use App\Models\PropertyUnit;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

/**
 * Helpers de scoping par rôle partagés par les contrôleurs API.
 *
 * Les rôles possibles (cf. table `roles`) : manager, owner, tenant, technician.
 *  - manager    : accès complet à toutes les données (retourne `null` = non filtré).
 *  - owner      : limité à ses biens (owner_user_id) et aux données rattachées.
 *  - tenant     : limité à son dossier locataire (tenant.user_id = user.id).
 *  - technician : limité à ses affectations de maintenance.
 */
trait RoleScoping
{
    protected function user(): ?User
    {
        return Auth::user();
    }

    /** @return array<int, string> */
    protected function roles(): array
    {
        $user = $this->user();

        return $user ? $user->roles()->pluck('name')->all() : [];
    }

    protected function isRole(string $role): bool
    {
        return in_array($role, $this->roles(), true);
    }

    protected function isManager(): bool
    {
        return $this->isRole('manager') || $this->isRole('admin') || empty($this->roles());
    }

    protected function tenantRecord(): ?Tenant
    {
        $user = $this->user();

        return $user ? Tenant::query()->where('user_id', $user->id)->first() : null;
    }

    /**
     * Ids des biens visibles par l'utilisateur courant.
     * Retourne `null` pour un manager (aucun filtre).
     *
     * @return Collection<int, int>|null
     */
    protected function visiblePropertyIds(): ?Collection
    {
        if ($this->isManager()) {
            return null;
        }

        if ($this->isRole('owner')) {
            return Property::query()->where('owner_user_id', $this->user()->id)->pluck('id');
        }

        if ($this->isRole('tenant')) {
            $tenant = $this->tenantRecord();
            if (! $tenant) {
                return collect();
            }

            $unitIds = $tenant->leases()->pluck('property_unit_id');

            return PropertyUnit::query()->whereIn('id', $unitIds)->pluck('property_id');
        }

        if ($this->isRole('technician')) {
            $requestIds = MaintenanceAssignment::query()
                ->where('technician_user_id', $this->user()->id)
                ->pluck('maintenance_request_id');

            $unitIds = MaintenanceRequest::query()
                ->whereIn('id', $requestIds)
                ->pluck('property_unit_id');

            return PropertyUnit::query()->whereIn('id', $unitIds)->pluck('property_id');
        }

        return collect();
    }

    /**
     * Ids des baux visibles. `null` = manager (non filtré).
     *
     * @return Collection<int, int>|null
     */
    protected function visibleLeaseIds(): ?Collection
    {
        if ($this->isManager()) {
            return null;
        }

        if ($this->isRole('tenant')) {
            $tenant = $this->tenantRecord();

            return $tenant ? $tenant->leases()->pluck('id') : collect();
        }

        $propertyIds = $this->visiblePropertyIds();
        if ($propertyIds !== null && $propertyIds->isEmpty()) {
            return collect();
        }

        $unitIds = PropertyUnit::query()->whereIn('property_id', $propertyIds ?? [])->pluck('id');

        return Lease::query()->whereIn('property_unit_id', $unitIds)->pluck('id');
    }

    /**
     * Ids des locataires visibles. `null` = manager (non filtré).
     *
     * @return Collection<int, int>|null
     */
    protected function visibleTenantIds(): ?Collection
    {
        if ($this->isManager()) {
            return null;
        }

        if ($this->isRole('tenant')) {
            $tenant = $this->tenantRecord();

            return $tenant ? collect([$tenant->id]) : collect();
        }

        $leaseIds = $this->visibleLeaseIds();

        return Lease::query()->whereIn('id', $leaseIds ?? [])->pluck('tenant_id');
    }

    /**
     * Applique un filtre de visibilité par `property_id` sur une requête.
     */
    protected function scopeByProperty(Builder $query): Builder
    {
        $ids = $this->visiblePropertyIds();
        if ($ids !== null) {
            $query->whereIn('property_id', $ids);
        }

        return $query;
    }
}
