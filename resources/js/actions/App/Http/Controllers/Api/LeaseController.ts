import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\LeaseController::index
* @see app/Http/Controllers/Api/LeaseController.php:15
* @route '/api/v1/leases'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/leases',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\LeaseController::index
* @see app/Http/Controllers/Api/LeaseController.php:15
* @route '/api/v1/leases'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\LeaseController::index
* @see app/Http/Controllers/Api/LeaseController.php:15
* @route '/api/v1/leases'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\LeaseController::index
* @see app/Http/Controllers/Api/LeaseController.php:15
* @route '/api/v1/leases'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\LeaseController::index
* @see app/Http/Controllers/Api/LeaseController.php:15
* @route '/api/v1/leases'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\LeaseController::index
* @see app/Http/Controllers/Api/LeaseController.php:15
* @route '/api/v1/leases'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\LeaseController::index
* @see app/Http/Controllers/Api/LeaseController.php:15
* @route '/api/v1/leases'
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
* @see \App\Http\Controllers\Api\LeaseController::show
* @see app/Http/Controllers/Api/LeaseController.php:28
* @route '/api/v1/leases/{lease}'
*/
export const show = (args: { lease: string | number } | [lease: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/leases/{lease}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\LeaseController::show
* @see app/Http/Controllers/Api/LeaseController.php:28
* @route '/api/v1/leases/{lease}'
*/
show.url = (args: { lease: string | number } | [lease: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lease: args }
    }

    if (Array.isArray(args)) {
        args = {
            lease: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        lease: args.lease,
    }

    return show.definition.url
            .replace('{lease}', parsedArgs.lease.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\LeaseController::show
* @see app/Http/Controllers/Api/LeaseController.php:28
* @route '/api/v1/leases/{lease}'
*/
show.get = (args: { lease: string | number } | [lease: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\LeaseController::show
* @see app/Http/Controllers/Api/LeaseController.php:28
* @route '/api/v1/leases/{lease}'
*/
show.head = (args: { lease: string | number } | [lease: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\LeaseController::show
* @see app/Http/Controllers/Api/LeaseController.php:28
* @route '/api/v1/leases/{lease}'
*/
const showForm = (args: { lease: string | number } | [lease: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\LeaseController::show
* @see app/Http/Controllers/Api/LeaseController.php:28
* @route '/api/v1/leases/{lease}'
*/
showForm.get = (args: { lease: string | number } | [lease: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\LeaseController::show
* @see app/Http/Controllers/Api/LeaseController.php:28
* @route '/api/v1/leases/{lease}'
*/
showForm.head = (args: { lease: string | number } | [lease: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const LeaseController = { index, show }

export default LeaseController