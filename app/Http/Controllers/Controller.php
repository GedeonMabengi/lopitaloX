<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

abstract class Controller
{
    /** Notification affichée par le front après la prochaine navigation (voir use-flash-toast.ts). */
    protected function toast(string $message, string $type = 'success'): void
    {
        Inertia::flash('toast', ['type' => $type, 'message' => $message]);
    }
}
