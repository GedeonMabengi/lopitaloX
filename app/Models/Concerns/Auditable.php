<?php

namespace App\Models\Concerns;

use App\Models\AuditLog;
use Illuminate\Database\Eloquent\Model;

/**
 * Trace qui a créé, modifié ou supprimé l'enregistrement, et quand.
 * Les valeurs sont stockées brutes : un champ chiffré reste chiffré dans le journal.
 */
trait Auditable
{
    protected static function bootAuditable(): void
    {
        static::created(fn (Model $model) => $model->writeAuditLog('created', [], $model->getAttributes()));

        static::updated(fn (Model $model) => $model->writeAuditLog(
            'updated',
            array_intersect_key($model->getRawOriginal(), $model->getChanges()),
            $model->getChanges(),
        ));

        static::deleted(fn (Model $model) => $model->writeAuditLog('deleted', $model->getRawOriginal(), []));
    }

    public function auditLogs()
    {
        return $this->morphMany(AuditLog::class, 'auditable');
    }

    protected function writeAuditLog(string $action, array $old, array $new): void
    {
        unset($old['updated_at'], $new['updated_at']);

        if ($action === 'updated' && $new === []) {
            return;
        }

        $this->auditLogs()->create([
            'user_id' => auth()->id(),
            'action' => $action,
            'old_values' => $old ?: null,
            'new_values' => $new ?: null,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
        ]);
    }
}
