import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\WorkOrderController::index
 * @see app/Http/Controllers/Api/WorkOrderController.php:15
 * @route '/api/v1/work-orders'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/work-orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\WorkOrderController::index
 * @see app/Http/Controllers/Api/WorkOrderController.php:15
 * @route '/api/v1/work-orders'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\WorkOrderController::index
 * @see app/Http/Controllers/Api/WorkOrderController.php:15
 * @route '/api/v1/work-orders'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\WorkOrderController::index
 * @see app/Http/Controllers/Api/WorkOrderController.php:15
 * @route '/api/v1/work-orders'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\WorkOrderController::index
 * @see app/Http/Controllers/Api/WorkOrderController.php:15
 * @route '/api/v1/work-orders'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\WorkOrderController::index
 * @see app/Http/Controllers/Api/WorkOrderController.php:15
 * @route '/api/v1/work-orders'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\WorkOrderController::index
 * @see app/Http/Controllers/Api/WorkOrderController.php:15
 * @route '/api/v1/work-orders'
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
* @see \App\Http\Controllers\Api\WorkOrderController::show
 * @see app/Http/Controllers/Api/WorkOrderController.php:25
 * @route '/api/v1/work-orders/{workOrder}'
 */
export const show = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/work-orders/{workOrder}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\WorkOrderController::show
 * @see app/Http/Controllers/Api/WorkOrderController.php:25
 * @route '/api/v1/work-orders/{workOrder}'
 */
show.url = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { workOrder: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { workOrder: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    workOrder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        workOrder: typeof args.workOrder === 'object'
                ? args.workOrder.id
                : args.workOrder,
                }

    return show.definition.url
            .replace('{workOrder}', parsedArgs.workOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\WorkOrderController::show
 * @see app/Http/Controllers/Api/WorkOrderController.php:25
 * @route '/api/v1/work-orders/{workOrder}'
 */
show.get = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\WorkOrderController::show
 * @see app/Http/Controllers/Api/WorkOrderController.php:25
 * @route '/api/v1/work-orders/{workOrder}'
 */
show.head = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\WorkOrderController::show
 * @see app/Http/Controllers/Api/WorkOrderController.php:25
 * @route '/api/v1/work-orders/{workOrder}'
 */
    const showForm = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\WorkOrderController::show
 * @see app/Http/Controllers/Api/WorkOrderController.php:25
 * @route '/api/v1/work-orders/{workOrder}'
 */
        showForm.get = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\WorkOrderController::show
 * @see app/Http/Controllers/Api/WorkOrderController.php:25
 * @route '/api/v1/work-orders/{workOrder}'
 */
        showForm.head = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\WorkOrderController::updateStatus
 * @see app/Http/Controllers/Api/WorkOrderController.php:33
 * @route '/api/v1/work-orders/{workOrder}/status'
 */
export const updateStatus = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

updateStatus.definition = {
    methods: ["post"],
    url: '/api/v1/work-orders/{workOrder}/status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\WorkOrderController::updateStatus
 * @see app/Http/Controllers/Api/WorkOrderController.php:33
 * @route '/api/v1/work-orders/{workOrder}/status'
 */
updateStatus.url = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { workOrder: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { workOrder: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    workOrder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        workOrder: typeof args.workOrder === 'object'
                ? args.workOrder.id
                : args.workOrder,
                }

    return updateStatus.definition.url
            .replace('{workOrder}', parsedArgs.workOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\WorkOrderController::updateStatus
 * @see app/Http/Controllers/Api/WorkOrderController.php:33
 * @route '/api/v1/work-orders/{workOrder}/status'
 */
updateStatus.post = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\WorkOrderController::updateStatus
 * @see app/Http/Controllers/Api/WorkOrderController.php:33
 * @route '/api/v1/work-orders/{workOrder}/status'
 */
    const updateStatusForm = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\WorkOrderController::updateStatus
 * @see app/Http/Controllers/Api/WorkOrderController.php:33
 * @route '/api/v1/work-orders/{workOrder}/status'
 */
        updateStatusForm.post = (args: { workOrder: string | number | { id: string | number } } | [workOrder: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateStatus.url(args, options),
            method: 'post',
        })
    
    updateStatus.form = updateStatusForm
const WorkOrderController = { index, show, updateStatus }

export default WorkOrderController