import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import payF2d398 from './pay'
/**
* @see \App\Http\Controllers\PatientPortalController::pay
 * @see app/Http/Controllers/PatientPortalController.php:77
 * @route '/portal/invoices/{invoice}/pay'
 */
export const pay = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pay.url(args, options),
    method: 'get',
})

pay.definition = {
    methods: ["get","head"],
    url: '/portal/invoices/{invoice}/pay',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PatientPortalController::pay
 * @see app/Http/Controllers/PatientPortalController.php:77
 * @route '/portal/invoices/{invoice}/pay'
 */
pay.url = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return pay.definition.url
            .replace('{invoice}', parsedArgs.invoice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::pay
 * @see app/Http/Controllers/PatientPortalController.php:77
 * @route '/portal/invoices/{invoice}/pay'
 */
pay.get = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pay.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::pay
 * @see app/Http/Controllers/PatientPortalController.php:77
 * @route '/portal/invoices/{invoice}/pay'
 */
pay.head = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pay.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::pay
 * @see app/Http/Controllers/PatientPortalController.php:77
 * @route '/portal/invoices/{invoice}/pay'
 */
    const payForm = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pay.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::pay
 * @see app/Http/Controllers/PatientPortalController.php:77
 * @route '/portal/invoices/{invoice}/pay'
 */
        payForm.get = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pay.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::pay
 * @see app/Http/Controllers/PatientPortalController.php:77
 * @route '/portal/invoices/{invoice}/pay'
 */
        payForm.head = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pay.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pay.form = payForm
const invoices = {
    pay: Object.assign(pay, payF2d398),
}

export default invoices