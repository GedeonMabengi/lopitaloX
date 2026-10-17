import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ExpenseController::index
 * @see app/Http/Controllers/Api/ExpenseController.php:16
 * @route '/api/v1/expenses'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/expenses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ExpenseController::index
 * @see app/Http/Controllers/Api/ExpenseController.php:16
 * @route '/api/v1/expenses'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ExpenseController::index
 * @see app/Http/Controllers/Api/ExpenseController.php:16
 * @route '/api/v1/expenses'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ExpenseController::index
 * @see app/Http/Controllers/Api/ExpenseController.php:16
 * @route '/api/v1/expenses'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ExpenseController::index
 * @see app/Http/Controllers/Api/ExpenseController.php:16
 * @route '/api/v1/expenses'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ExpenseController::index
 * @see app/Http/Controllers/Api/ExpenseController.php:16
 * @route '/api/v1/expenses'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ExpenseController::index
 * @see app/Http/Controllers/Api/ExpenseController.php:16
 * @route '/api/v1/expenses'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Api\ExpenseController::store
 * @see app/Http/Controllers/Api/ExpenseController.php:34
 * @route '/api/v1/expenses'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/expenses',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ExpenseController::store
 * @see app/Http/Controllers/Api/ExpenseController.php:34
 * @route '/api/v1/expenses'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ExpenseController::store
 * @see app/Http/Controllers/Api/ExpenseController.php:34
 * @route '/api/v1/expenses'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\ExpenseController::store
 * @see app/Http/Controllers/Api/ExpenseController.php:34
 * @route '/api/v1/expenses'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ExpenseController::store
 * @see app/Http/Controllers/Api/ExpenseController.php:34
 * @route '/api/v1/expenses'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\ExpenseController::show
 * @see app/Http/Controllers/Api/ExpenseController.php:26
 * @route '/api/v1/expenses/{expense}'
 */
export const show = (args: { expense: string | number } | [expense: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/expenses/{expense}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ExpenseController::show
 * @see app/Http/Controllers/Api/ExpenseController.php:26
 * @route '/api/v1/expenses/{expense}'
 */
show.url = (args: { expense: string | number } | [expense: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { expense: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    expense: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        expense: args.expense,
                }

    return show.definition.url
            .replace('{expense}', parsedArgs.expense.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ExpenseController::show
 * @see app/Http/Controllers/Api/ExpenseController.php:26
 * @route '/api/v1/expenses/{expense}'
 */
show.get = (args: { expense: string | number } | [expense: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ExpenseController::show
 * @see app/Http/Controllers/Api/ExpenseController.php:26
 * @route '/api/v1/expenses/{expense}'
 */
show.head = (args: { expense: string | number } | [expense: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ExpenseController::show
 * @see app/Http/Controllers/Api/ExpenseController.php:26
 * @route '/api/v1/expenses/{expense}'
 */
    const showForm = (args: { expense: string | number } | [expense: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ExpenseController::show
 * @see app/Http/Controllers/Api/ExpenseController.php:26
 * @route '/api/v1/expenses/{expense}'
 */
        showForm.get = (args: { expense: string | number } | [expense: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ExpenseController::show
 * @see app/Http/Controllers/Api/ExpenseController.php:26
 * @route '/api/v1/expenses/{expense}'
 */
        showForm.head = (args: { expense: string | number } | [expense: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const ExpenseController = { index, store, show }

export default ExpenseController