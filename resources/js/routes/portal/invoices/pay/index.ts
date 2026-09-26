import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PatientPortalController::process
* @see app/Http/Controllers/PatientPortalController.php:87
* @route '/portal/invoices/{invoice}/pay'
*/
export const process = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(args, options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/portal/invoices/{invoice}/pay',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PatientPortalController::process
* @see app/Http/Controllers/PatientPortalController.php:87
* @route '/portal/invoices/{invoice}/pay'
*/
process.url = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { invoice: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { invoice: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            invoice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        invoice: typeof args.invoice === 'object'
        ? args.invoice.id
        : args.invoice,
    }

    return process.definition.url
            .replace('{invoice}', parsedArgs.invoice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::process
* @see app/Http/Controllers/PatientPortalController.php:87
* @route '/portal/invoices/{invoice}/pay'
*/
process.post = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PatientPortalController::process
* @see app/Http/Controllers/PatientPortalController.php:87
* @route '/portal/invoices/{invoice}/pay'
*/
const processForm = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: process.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PatientPortalController::process
* @see app/Http/Controllers/PatientPortalController.php:87
* @route '/portal/invoices/{invoice}/pay'
*/
processForm.post = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: process.url(args, options),
    method: 'post',
})

process.form = processForm

const pay = {
    process: Object.assign(process, process),
}

export default pay