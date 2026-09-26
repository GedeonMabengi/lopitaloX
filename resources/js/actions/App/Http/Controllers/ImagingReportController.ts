import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ImagingReportController::store
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/report'
*/
export const store = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/imaging-orders/{imagingOrder}/report',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ImagingReportController::store
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/report'
*/
store.url = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imagingOrder: args }
    }

    if (Array.isArray(args)) {
        args = {
            imagingOrder: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        imagingOrder: args.imagingOrder,
    }

    return store.definition.url
            .replace('{imagingOrder}', parsedArgs.imagingOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingReportController::store
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/report'
*/
store.post = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingReportController::store
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/report'
*/
const storeForm = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingReportController::store
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/report'
*/
storeForm.post = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ImagingReportController::update
* @see [unknown]:0
* @route '/imaging-reports/{report}'
*/
export const update = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/imaging-reports/{report}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ImagingReportController::update
* @see [unknown]:0
* @route '/imaging-reports/{report}'
*/
update.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { report: args }
    }

    if (Array.isArray(args)) {
        args = {
            report: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        report: args.report,
    }

    return update.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingReportController::update
* @see [unknown]:0
* @route '/imaging-reports/{report}'
*/
update.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ImagingReportController::update
* @see [unknown]:0
* @route '/imaging-reports/{report}'
*/
const updateForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingReportController::update
* @see [unknown]:0
* @route '/imaging-reports/{report}'
*/
updateForm.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const ImagingReportController = { store, update }

export default ImagingReportController