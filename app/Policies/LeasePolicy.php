<?php

namespace App\Policies;

use App\Models\Lease;
use App\Models\User;

class LeasePolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasRole('admin') || $user->hasRole('manager') || $user->hasRole('owner');
    }

    public function view(User $user, Lease $lease): bool
    {
        return $user->id === $lease->tenant->user_id ||
            $user->id === $lease->propertyUnit->property->owner_user_id ||
            $user->hasRole('admin') ||
            $user->hasRole('manager');
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin') || $user->hasRole('manager');
    }

    public function update(User $user, Lease $lease): bool
    {
        return $user->hasRole('admin') || $user->hasRole('manager');
    }

    public function delete(User $user): bool
    {
        return $user->hasRole('admin');
    }
}
