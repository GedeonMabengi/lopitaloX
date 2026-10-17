import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ReportController::dashboard
 * @see app/Http/Controllers/Api/ReportController.php:21
 * @route '/api/v1/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/api/v1/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::dashboard
 * @see app/Http/Controllers/Api/ReportController.php:21
 * @route '/api/v1/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::dashboard
 * @see app/Http/Controllers/Api/ReportController.php:21
 * @route '/api/v1/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::dashboard
 * @see app/Http/Controllers/Api/ReportController.php:21
 * @route '/api/v1/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::dashboard
 * @see app/Http/Controllers/Api/ReportController.php:21
 * @route '/api/v1/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::dashboard
 * @see app/Http/Controllers/Api/ReportController.php:21
 * @route '/api/v1/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::dashboard
 * @see app/Http/Controllers/Api/ReportController.php:21
 * @route '/api/v1/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\Api\ReportController::occupancy
 * @see app/Http/Controllers/Api/ReportController.php:67
 * @route '/api/v1/reports/occupancy'
 */
export const occupancy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: occupancy.url(options),
    method: 'get',
})

occupancy.definition = {
    methods: ["get","head"],
    url: '/api/v1/reports/occupancy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::occupancy
 * @see app/Http/Controllers/Api/ReportController.php:67
 * @route '/api/v1/reports/occupancy'
 */
occupancy.url = (options?: RouteQueryOptions) => {
    return occupancy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::occupancy
 * @see app/Http/Controllers/Api/ReportController.php:67
 * @route '/api/v1/reports/occupancy'
 */
occupancy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: occupancy.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::occupancy
 * @see app/Http/Controllers/Api/ReportController.php:67
 * @route '/api/v1/reports/occupancy'
 */
occupancy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: occupancy.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::occupancy
 * @see app/Http/Controllers/Api/ReportController.php:67
 * @route '/api/v1/reports/occupancy'
 */
    const occupancyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: occupancy.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::occupancy
 * @see app/Http/Controllers/Api/ReportController.php:67
 * @route '/api/v1/reports/occupancy'
 */
        occupancyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: occupancy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::occupancy
 * @see app/Http/Controllers/Api/ReportController.php:67
 * @route '/api/v1/reports/occupancy'
 */
        occupancyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: occupancy.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    occupancy.form = occupancyForm
/**
* @see \App\Http\Controllers\Api\ReportController::rentability
 * @see app/Http/Controllers/Api/ReportController.php:94
 * @route '/api/v1/reports/rentability'
 */
export const rentability = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rentability.url(options),
    method: 'get',
})

rentability.definition = {
    methods: ["get","head"],
    url: '/api/v1/reports/rentability',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::rentability
 * @see app/Http/Controllers/Api/ReportController.php:94
 * @route '/api/v1/reports/rentability'
 */
rentability.url = (options?: RouteQueryOptions) => {
    return rentability.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::rentability
 * @see app/Http/Controllers/Api/ReportController.php:94
 * @route '/api/v1/reports/rentability'
 */
rentability.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rentability.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::rentability
 * @see app/Http/Controllers/Api/ReportController.php:94
 * @route '/api/v1/reports/rentability'
 */
rentability.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rentability.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::rentability
 * @see app/Http/Controllers/Api/ReportController.php:94
 * @route '/api/v1/reports/rentability'
 */
    const rentabilityForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: rentability.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::rentability
 * @see app/Http/Controllers/Api/ReportController.php:94
 * @route '/api/v1/reports/rentability'
 */
        rentabilityForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: rentability.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::rentability
 * @see app/Http/Controllers/Api/ReportController.php:94
 * @route '/api/v1/reports/rentability'
 */
        rentabilityForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: rentability.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    rentability.form = rentabilityForm
/**
* @see \App\Http\Controllers\Api\ReportController::financial
 * @see app/Http/Controllers/Api/ReportController.php:125
 * @route '/api/v1/reports/financial'
 */
export const financial = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: financial.url(options),
    method: 'get',
})

financial.definition = {
    methods: ["get","head"],
    url: '/api/v1/reports/financial',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::financial
 * @see app/Http/Controllers/Api/ReportController.php:125
 * @route '/api/v1/reports/financial'
 */
financial.url = (options?: RouteQueryOptions) => {
    return financial.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::financial
 * @see app/Http/Controllers/Api/ReportController.php:125
 * @route '/api/v1/reports/financial'
 */
financial.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: financial.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::financial
 * @see app/Http/Controllers/Api/ReportController.php:125
 * @route '/api/v1/reports/financial'
 */
financial.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: financial.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::financial
 * @see app/Http/Controllers/Api/ReportController.php:125
 * @route '/api/v1/reports/financial'
 */
    const financialForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: financial.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::financial
 * @see app/Http/Controllers/Api/ReportController.php:125
 * @route '/api/v1/reports/financial'
 */
        financialForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: financial.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::financial
 * @see app/Http/Controllers/Api/ReportController.php:125
 * @route '/api/v1/reports/financial'
 */
        financialForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: financial.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    financial.form = financialForm
const ReportController = { dashboard, occupancy, rentability, financial }

export default ReportController