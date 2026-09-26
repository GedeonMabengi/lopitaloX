import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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

const report = {
    store: Object.assign(store, store),
}

export default report