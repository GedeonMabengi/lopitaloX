import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/medications/{medication}/stock'
 */
const index08040c1cfa097d2c94bb580f6f6b49cf = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index08040c1cfa097d2c94bb580f6f6b49cf.url(args, options),
    method: 'get',
})

index08040c1cfa097d2c94bb580f6f6b49cf.definition = {
    methods: ["get","head"],
    url: '/medications/{medication}/stock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/medications/{medication}/stock'
 */
index08040c1cfa097d2c94bb580f6f6b49cf.url = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medication: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    medication: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        medication: args.medication,
                }

    return index08040c1cfa097d2c94bb580f6f6b49cf.definition.url
            .replace('{medication}', parsedArgs.medication.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/medications/{medication}/stock'
 */
index08040c1cfa097d2c94bb580f6f6b49cf.get = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index08040c1cfa097d2c94bb580f6f6b49cf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/medications/{medication}/stock'
 */
index08040c1cfa097d2c94bb580f6f6b49cf.head = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index08040c1cfa097d2c94bb580f6f6b49cf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/medications/{medication}/stock'
 */
    const index08040c1cfa097d2c94bb580f6f6b49cfForm = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index08040c1cfa097d2c94bb580f6f6b49cf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/medications/{medication}/stock'
 */
        index08040c1cfa097d2c94bb580f6f6b49cfForm.get = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index08040c1cfa097d2c94bb580f6f6b49cf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/medications/{medication}/stock'
 */
        index08040c1cfa097d2c94bb580f6f6b49cfForm.head = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index08040c1cfa097d2c94bb580f6f6b49cf.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index08040c1cfa097d2c94bb580f6f6b49cf.form = index08040c1cfa097d2c94bb580f6f6b49cfForm
    /**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/stock-transactions'
 */
const indexc151a442228beb83d0781396688b8b17 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc151a442228beb83d0781396688b8b17.url(options),
    method: 'get',
})

indexc151a442228beb83d0781396688b8b17.definition = {
    methods: ["get","head"],
    url: '/stock-transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/stock-transactions'
 */
indexc151a442228beb83d0781396688b8b17.url = (options?: RouteQueryOptions) => {
    return indexc151a442228beb83d0781396688b8b17.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/stock-transactions'
 */
indexc151a442228beb83d0781396688b8b17.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc151a442228beb83d0781396688b8b17.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/stock-transactions'
 */
indexc151a442228beb83d0781396688b8b17.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc151a442228beb83d0781396688b8b17.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/stock-transactions'
 */
    const indexc151a442228beb83d0781396688b8b17Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexc151a442228beb83d0781396688b8b17.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/stock-transactions'
 */
        indexc151a442228beb83d0781396688b8b17Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc151a442228beb83d0781396688b8b17.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockTransactionController::index
 * @see [unknown]:0
 * @route '/stock-transactions'
 */
        indexc151a442228beb83d0781396688b8b17Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc151a442228beb83d0781396688b8b17.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexc151a442228beb83d0781396688b8b17.form = indexc151a442228beb83d0781396688b8b17Form

/**
* Multiple routes resolve to \App\Http\Controllers\StockTransactionController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/medications/{medication}/stock': index08040c1cfa097d2c94bb580f6f6b49cf,
    '/stock-transactions': indexc151a442228beb83d0781396688b8b17,
}

/**
* @see \App\Http\Controllers\StockTransactionController::adjust
 * @see [unknown]:0
 * @route '/medications/{medication}/stock/adjust'
 */
export const adjust = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adjust.url(args, options),
    method: 'post',
})

adjust.definition = {
    methods: ["post"],
    url: '/medications/{medication}/stock/adjust',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StockTransactionController::adjust
 * @see [unknown]:0
 * @route '/medications/{medication}/stock/adjust'
 */
adjust.url = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medication: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    medication: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        medication: args.medication,
                }

    return adjust.definition.url
            .replace('{medication}', parsedArgs.medication.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockTransactionController::adjust
 * @see [unknown]:0
 * @route '/medications/{medication}/stock/adjust'
 */
adjust.post = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adjust.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StockTransactionController::adjust
 * @see [unknown]:0
 * @route '/medications/{medication}/stock/adjust'
 */
    const adjustForm = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: adjust.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StockTransactionController::adjust
 * @see [unknown]:0
 * @route '/medications/{medication}/stock/adjust'
 */
        adjustForm.post = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: adjust.url(args, options),
            method: 'post',
        })
    
    adjust.form = adjustForm
const StockTransactionController = { index, adjust }

export default StockTransactionController