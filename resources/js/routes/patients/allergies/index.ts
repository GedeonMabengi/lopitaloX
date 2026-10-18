import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\AllergyController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
 */
export const index = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/patients/{patient}/allergies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AllergyController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
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
* @see \App\Http\Controllers\AllergyController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
 */
index.get = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AllergyController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
 */
index.head = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AllergyController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
 */
    const indexForm = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AllergyController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
 */
        indexForm.get = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AllergyController::index
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
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
* @see \App\Http\Controllers\AllergyController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
 */
export const store = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/patients/{patient}/allergies',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AllergyController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
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
* @see \App\Http\Controllers\AllergyController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
 */
store.post = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AllergyController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
 */
    const storeForm = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AllergyController::store
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies'
 */
        storeForm.post = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AllergyController::destroy
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies/{allergy}'
 */
export const destroy = (args: { patient: string | number, allergy: string | number } | [patient: string | number, allergy: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/patients/{patient}/allergies/{allergy}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AllergyController::destroy
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies/{allergy}'
 */
destroy.url = (args: { patient: string | number, allergy: string | number } | [patient: string | number, allergy: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    patient: args[0],
                    allergy: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        patient: args.patient,
                                allergy: args.allergy,
                }

    return destroy.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace('{allergy}', parsedArgs.allergy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AllergyController::destroy
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies/{allergy}'
 */
destroy.delete = (args: { patient: string | number, allergy: string | number } | [patient: string | number, allergy: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AllergyController::destroy
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies/{allergy}'
 */
    const destroyForm = (args: { patient: string | number, allergy: string | number } | [patient: string | number, allergy: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AllergyController::destroy
 * @see [unknown]:0
 * @route '/patients/{patient}/allergies/{allergy}'
 */
        destroyForm.delete = (args: { patient: string | number, allergy: string | number } | [patient: string | number, allergy: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const allergies = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
destroy: Object.assign(destroy, destroy),
}

export default allergies