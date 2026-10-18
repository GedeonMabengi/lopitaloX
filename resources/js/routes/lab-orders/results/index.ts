import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\LabResultController::store
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/results'
 */
export const store = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/lab-orders/{labOrder}/results',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LabResultController::store
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/results'
 */
store.url = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { labOrder: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    labOrder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        labOrder: args.labOrder,
                }

    return store.definition.url
            .replace('{labOrder}', parsedArgs.labOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabResultController::store
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/results'
 */
store.post = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LabResultController::store
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/results'
 */
    const storeForm = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LabResultController::store
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/results'
 */
        storeForm.post = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
const results = {
    store: Object.assign(store, store),
}

export default results