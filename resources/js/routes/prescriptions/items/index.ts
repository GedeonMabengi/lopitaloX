import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PrescriptionItemController::store
 * @see [unknown]:0
 * @route '/prescriptions/{prescription}/items'
 */
export const store = (args: { prescription: string | number } | [prescription: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/prescriptions/{prescription}/items',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PrescriptionItemController::store
 * @see [unknown]:0
 * @route '/prescriptions/{prescription}/items'
 */
store.url = (args: { prescription: string | number } | [prescription: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { prescription: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    prescription: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        prescription: args.prescription,
                }

    return store.definition.url
            .replace('{prescription}', parsedArgs.prescription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionItemController::store
 * @see [unknown]:0
 * @route '/prescriptions/{prescription}/items'
 */
store.post = (args: { prescription: string | number } | [prescription: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PrescriptionItemController::store
 * @see [unknown]:0
 * @route '/prescriptions/{prescription}/items'
 */
    const storeForm = (args: { prescription: string | number } | [prescription: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PrescriptionItemController::store
 * @see [unknown]:0
 * @route '/prescriptions/{prescription}/items'
 */
        storeForm.post = (args: { prescription: string | number } | [prescription: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PrescriptionItemController::update
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
export const update = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/prescriptions/items/{item}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PrescriptionItemController::update
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
update.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    item: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        item: args.item,
                }

    return update.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionItemController::update
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
update.put = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PrescriptionItemController::update
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
    const updateForm = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PrescriptionItemController::update
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
        updateForm.put = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\PrescriptionItemController::destroy
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
export const destroy = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/prescriptions/items/{item}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PrescriptionItemController::destroy
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
destroy.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    item: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        item: args.item,
                }

    return destroy.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionItemController::destroy
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
destroy.delete = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PrescriptionItemController::destroy
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
    const destroyForm = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PrescriptionItemController::destroy
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}'
 */
        destroyForm.delete = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\DispensingRecordController::dispense
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/dispense'
 */
export const dispense = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: dispense.url(args, options),
    method: 'post',
})

dispense.definition = {
    methods: ["post"],
    url: '/prescriptions/items/{item}/dispense',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DispensingRecordController::dispense
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/dispense'
 */
dispense.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    item: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        item: args.item,
                }

    return dispense.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DispensingRecordController::dispense
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/dispense'
 */
dispense.post = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: dispense.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DispensingRecordController::dispense
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/dispense'
 */
    const dispenseForm = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: dispense.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DispensingRecordController::dispense
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/dispense'
 */
        dispenseForm.post = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: dispense.url(args, options),
            method: 'post',
        })
    
    dispense.form = dispenseForm
/**
* @see \App\Http\Controllers\DispensingRecordController::administer
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/administer'
 */
export const administer = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: administer.url(args, options),
    method: 'post',
})

administer.definition = {
    methods: ["post"],
    url: '/prescriptions/items/{item}/administer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DispensingRecordController::administer
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/administer'
 */
administer.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    item: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        item: args.item,
                }

    return administer.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DispensingRecordController::administer
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/administer'
 */
administer.post = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: administer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DispensingRecordController::administer
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/administer'
 */
    const administerForm = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: administer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DispensingRecordController::administer
 * @see [unknown]:0
 * @route '/prescriptions/items/{item}/administer'
 */
        administerForm.post = (args: { item: string | number } | [item: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: administer.url(args, options),
            method: 'post',
        })
    
    administer.form = administerForm
const items = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
dispense: Object.assign(dispense, dispense),
administer: Object.assign(administer, administer),
}

export default items