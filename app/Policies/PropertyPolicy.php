<?php

namespace App\Policies;

use App\Models\Property;
use App\Models\User;

class PropertyPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasRole('admin') || $user->hasRole('manager') || $user->hasRole('owner');
    }

    public function view(User $user, Property $property): bool
    {
        return $user->id === $property->owner_user_id || $user->hasRole('admin') || $user->hasRole('manager');
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin') || $user->hasRole('manager');
    }

    public function update(User $user, Property $property): bool
    {
        return $user->id === $property->owner_user_id || $user->hasRole('admin') || $user->hasRole('manager');
    }

    public function delete(User $user): bool
    {
        return $user->hasRole('admin');
    }
}
