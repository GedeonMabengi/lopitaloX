import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::index
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:18
* @route '/api/v1/maintenance-requests'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/maintenance-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::index
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:18
* @route '/api/v1/maintenance-requests'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::index
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:18
* @route '/api/v1/maintenance-requests'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::index
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:18
* @route '/api/v1/maintenance-requests'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::index
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:18
* @route '/api/v1/maintenance-requests'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::index
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:18
* @route '/api/v1/maintenance-requests'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::index
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:18
* @route '/api/v1/maintenance-requests'
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
* @see \App\Http\Controllers\Api\MaintenanceRequestController::store
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:45
* @route '/api/v1/maintenance-requests'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/maintenance-requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::store
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:45
* @route '/api/v1/maintenance-requests'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::store
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:45
* @route '/api/v1/maintenance-requests'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::store
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:45
* @route '/api/v1/maintenance-requests'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::store
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:45
* @route '/api/v1/maintenance-requests'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::show
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:38
* @route '/api/v1/maintenance-requests/{maintenanceRequest}'
*/
export const show = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/maintenance-requests/{maintenanceRequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::show
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:38
* @route '/api/v1/maintenance-requests/{maintenanceRequest}'
*/
show.url = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { maintenanceRequest: args }
    }

    if (Array.isArray(args)) {
        args = {
            maintenanceRequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        maintenanceRequest: args.maintenanceRequest,
    }

    return show.definition.url
            .replace('{maintenanceRequest}', parsedArgs.maintenanceRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::show
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:38
* @route '/api/v1/maintenance-requests/{maintenanceRequest}'
*/
show.get = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::show
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:38
* @route '/api/v1/maintenance-requests/{maintenanceRequest}'
*/
show.head = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::show
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:38
* @route '/api/v1/maintenance-requests/{maintenanceRequest}'
*/
const showForm = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::show
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:38
* @route '/api/v1/maintenance-requests/{maintenanceRequest}'
*/
showForm.get = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::show
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:38
* @route '/api/v1/maintenance-requests/{maintenanceRequest}'
*/
showForm.head = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::updateStatus
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:97
* @route '/api/v1/maintenance-requests/{maintenanceRequest}/status'
*/
export const updateStatus = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

updateStatus.definition = {
    methods: ["post"],
    url: '/api/v1/maintenance-requests/{maintenanceRequest}/status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::updateStatus
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:97
* @route '/api/v1/maintenance-requests/{maintenanceRequest}/status'
*/
updateStatus.url = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { maintenanceRequest: args }
    }

    if (Array.isArray(args)) {
        args = {
            maintenanceRequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        maintenanceRequest: args.maintenanceRequest,
    }

    return updateStatus.definition.url
            .replace('{maintenanceRequest}', parsedArgs.maintenanceRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::updateStatus
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:97
* @route '/api/v1/maintenance-requests/{maintenanceRequest}/status'
*/
updateStatus.post = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::updateStatus
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:97
* @route '/api/v1/maintenance-requests/{maintenanceRequest}/status'
*/
const updateStatusForm = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MaintenanceRequestController::updateStatus
* @see app/Http/Controllers/Api/MaintenanceRequestController.php:97
* @route '/api/v1/maintenance-requests/{maintenanceRequest}/status'
*/
updateStatusForm.post = (args: { maintenanceRequest: string | number } | [maintenanceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, options),
    method: 'post',
})

updateStatus.form = updateStatusForm

const MaintenanceRequestController = { index, store, show, updateStatus }

export default MaintenanceRequestController