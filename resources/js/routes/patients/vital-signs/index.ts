import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\VitalSignController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
export const index = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/patients/{patient}/vital-signs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VitalSignController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
index.url = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { patient: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    patient: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        patient: args.patient,
                }

    return index.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VitalSignController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
index.get = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VitalSignController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
index.head = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VitalSignController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
    const indexForm = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VitalSignController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
        indexForm.get = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VitalSignController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
        indexForm.head = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\VitalSignController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
export const store = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/patients/{patient}/vital-signs',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VitalSignController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
store.url = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { patient: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    patient: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        patient: args.patient,
                }

    return store.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VitalSignController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
store.post = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VitalSignController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
    const storeForm = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VitalSignController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/vital-signs'
 */
        storeForm.post = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
const vitalSigns = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
}

export default vitalSigns