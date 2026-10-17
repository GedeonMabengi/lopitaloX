import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ReportController::occupancy
 * @see [unknown]:0
 * @route '/reports/occupancy'
 */
export const occupancy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: occupancy.url(options),
    method: 'get',
})

occupancy.definition = {
    methods: ["get","head"],
    url: '/reports/occupancy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::occupancy
 * @see [unknown]:0
 * @route '/reports/occupancy'
 */
occupancy.url = (options?: RouteQueryOptions) => {
    return occupancy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::occupancy
 * @see [unknown]:0
 * @route '/reports/occupancy'
 */
occupancy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: occupancy.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::occupancy
 * @see [unknown]:0
 * @route '/reports/occupancy'
 */
occupancy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: occupancy.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::occupancy
 * @see [unknown]:0
 * @route '/reports/occupancy'
 */
    const occupancyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: occupancy.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::occupancy
 * @see [unknown]:0
 * @route '/reports/occupancy'
 */
        occupancyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: occupancy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::occupancy
 * @see [unknown]:0
 * @route '/reports/occupancy'
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
* @see \App\Http\Controllers\ReportController::activity
 * @see [unknown]:0
 * @route '/reports/activity'
 */
export const activity = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activity.url(options),
    method: 'get',
})

activity.definition = {
    methods: ["get","head"],
    url: '/reports/activity',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::activity
 * @see [unknown]:0
 * @route '/reports/activity'
 */
activity.url = (options?: RouteQueryOptions) => {
    return activity.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::activity
 * @see [unknown]:0
 * @route '/reports/activity'
 */
activity.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activity.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::activity
 * @see [unknown]:0
 * @route '/reports/activity'
 */
activity.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activity.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::activity
 * @see [unknown]:0
 * @route '/reports/activity'
 */
    const activityForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: activity.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::activity
 * @see [unknown]:0
 * @route '/reports/activity'
 */
        activityForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activity.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::activity
 * @see [unknown]:0
 * @route '/reports/activity'
 */
        activityForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activity.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    activity.form = activityForm
/**
* @see \App\Http\Controllers\ReportController::finance
 * @see [unknown]:0
 * @route '/reports/finance'
 */
export const finance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: finance.url(options),
    method: 'get',
})

finance.definition = {
    methods: ["get","head"],
    url: '/reports/finance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::finance
 * @see [unknown]:0
 * @route '/reports/finance'
 */
finance.url = (options?: RouteQueryOptions) => {
    return finance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::finance
 * @see [unknown]:0
 * @route '/reports/finance'
 */
finance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: finance.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::finance
 * @see [unknown]:0
 * @route '/reports/finance'
 */
finance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: finance.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::finance
 * @see [unknown]:0
 * @route '/reports/finance'
 */
    const financeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: finance.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::finance
 * @see [unknown]:0
 * @route '/reports/finance'
 */
        financeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: finance.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::finance
 * @see [unknown]:0
 * @route '/reports/finance'
 */
        financeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: finance.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    finance.form = financeForm
/**
* @see \App\Http\Controllers\ReportController::quality
 * @see [unknown]:0
 * @route '/reports/quality'
 */
export const quality = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quality.url(options),
    method: 'get',
})

quality.definition = {
    methods: ["get","head"],
    url: '/reports/quality',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::quality
 * @see [unknown]:0
 * @route '/reports/quality'
 */
quality.url = (options?: RouteQueryOptions) => {
    return quality.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::quality
 * @see [unknown]:0
 * @route '/reports/quality'
 */
quality.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quality.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::quality
 * @see [unknown]:0
 * @route '/reports/quality'
 */
quality.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: quality.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::quality
 * @see [unknown]:0
 * @route '/reports/quality'
 */
    const qualityForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: quality.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::quality
 * @see [unknown]:0
 * @route '/reports/quality'
 */
        qualityForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: quality.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::quality
 * @see [unknown]:0
 * @route '/reports/quality'
 */
        qualityForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: quality.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    quality.form = qualityForm
const reports = {
    occupancy: Object.assign(occupancy, occupancy),
activity: Object.assign(activity, activity),
finance: Object.assign(finance, finance),
quality: Object.assign(quality, quality),
}

export default reports