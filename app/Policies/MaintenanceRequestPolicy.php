<?php

namespace App\Policies;

use App\Models\MaintenanceRequest;
use App\Models\User;

class MaintenanceRequestPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasRole('admin') || $user->hasRole('manager') || $user->hasRole('technician');
    }

    public function view(User $user, MaintenanceRequest $maintenanceRequest): bool
    {
        return $user->hasRole('admin') ||
            $user->hasRole('manager') ||
            $user->id === $maintenanceRequest->tenant->user_id ||
            ($user->hasRole('technician') && $maintenanceRequest->assignments->contains('technician_user_id', $user->id));
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin') || $user->hasRole('manager') || $user->hasRole('tenant');
    }

    public function update(User $user, MaintenanceRequest $maintenanceRequest): bool
    {
        return $user->hasRole('admin') ||
            $user->hasRole('manager') ||
            ($user->hasRole('technician') && $maintenanceRequest->assignments->contains('technician_user_id', $user->id));
    }

    public function delete(User $user): bool
    {
        return $user->hasRole('admin');
    }
}
