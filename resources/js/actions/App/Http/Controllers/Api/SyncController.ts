import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SyncController::index
* @see app/Http/Controllers/Api/SyncController.php:51
* @route '/api/v1/sync'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/sync',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SyncController::index
* @see app/Http/Controllers/Api/SyncController.php:51
* @route '/api/v1/sync'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SyncController::index
* @see app/Http/Controllers/Api/SyncController.php:51
* @route '/api/v1/sync'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SyncController::index
* @see app/Http/Controllers/Api/SyncController.php:51
* @route '/api/v1/sync'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\SyncController::index
* @see app/Http/Controllers/Api/SyncController.php:51
* @route '/api/v1/sync'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SyncController::index
* @see app/Http/Controllers/Api/SyncController.php:51
* @route '/api/v1/sync'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SyncController::index
* @see app/Http/Controllers/Api/SyncController.php:51
* @route '/api/v1/sync'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Api\SyncController::outbox
* @see app/Http/Controllers/Api/SyncController.php:132
* @route '/api/v1/sync/outbox'
*/
export const outbox = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: outbox.url(options),
    method: 'post',
})

outbox.definition = {
    methods: ["post"],
    url: '/api/v1/sync/outbox',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SyncController::outbox
* @see app/Http/Controllers/Api/SyncController.php:132
* @route '/api/v1/sync/outbox'
*/
outbox.url = (options?: RouteQueryOptions) => {
    return outbox.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SyncController::outbox
* @see app/Http/Controllers/Api/SyncController.php:132
* @route '/api/v1/sync/outbox'
*/
outbox.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: outbox.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SyncController::outbox
* @see app/Http/Controllers/Api/SyncController.php:132
* @route '/api/v1/sync/outbox'
*/
const outboxForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: outbox.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SyncController::outbox
* @see app/Http/Controllers/Api/SyncController.php:132
* @route '/api/v1/sync/outbox'
*/
outboxForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: outbox.url(options),
    method: 'post',
})

outbox.form = outboxForm

const SyncController = { index, outbox }

export default SyncController