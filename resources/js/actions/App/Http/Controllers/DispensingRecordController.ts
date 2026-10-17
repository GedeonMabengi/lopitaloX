import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
const DispensingRecordController = { dispense, administer }

export default DispensingRecordController