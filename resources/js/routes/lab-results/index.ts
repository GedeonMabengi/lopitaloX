import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LabResultController::update
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
export const update = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/lab-results/{result}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\LabResultController::update
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
update.url = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { result: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    result: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        result: args.result,
                }

    return update.definition.url
            .replace('{result}', parsedArgs.result.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabResultController::update
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
update.put = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\LabResultController::update
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
    const updateForm = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LabResultController::update
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
        updateForm.put = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\LabResultController::destroy
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
export const destroy = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/lab-results/{result}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LabResultController::destroy
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
destroy.url = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { result: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    result: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        result: args.result,
                }

    return destroy.definition.url
            .replace('{result}', parsedArgs.result.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabResultController::destroy
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
destroy.delete = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\LabResultController::destroy
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
    const destroyForm = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LabResultController::destroy
 * @see [unknown]:0
 * @route '/lab-results/{result}'
 */
        destroyForm.delete = (args: { result: string | number } | [result: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const labResults = {
    update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default labResults