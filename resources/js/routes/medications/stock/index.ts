import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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

const stock = {
    adjust: Object.assign(adjust, adjust),
}

export default stock