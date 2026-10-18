import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PatientPortalController::update
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/portal/profile',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PatientPortalController::update
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::update
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::update
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::update
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const profile = {
    update: Object.assign(update, update),
}

export default profile