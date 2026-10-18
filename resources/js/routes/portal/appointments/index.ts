import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PatientPortalController::book
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
export const book = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: book.url(options),
    method: 'post',
})

book.definition = {
    methods: ["post"],
    url: '/portal/appointments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PatientPortalController::book
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
book.url = (options?: RouteQueryOptions) => {
    return book.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::book
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
book.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: book.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::book
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
    const bookForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: book.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::book
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
        bookForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: book.url(options),
            method: 'post',
        })
    
    book.form = bookForm
const appointments = {
    book: Object.assign(book, book),
}

export default appointments