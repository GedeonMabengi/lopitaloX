import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:16
 * @route '/portal'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/portal',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:16
 * @route '/portal'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:16
 * @route '/portal'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:16
 * @route '/portal'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:16
 * @route '/portal'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:16
 * @route '/portal'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:16
 * @route '/portal'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:30
 * @route '/portal/appointments'
 */
export const appointments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appointments.url(options),
    method: 'get',
})

appointments.definition = {
    methods: ["get","head"],
    url: '/portal/appointments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:30
 * @route '/portal/appointments'
 */
appointments.url = (options?: RouteQueryOptions) => {
    return appointments.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:30
 * @route '/portal/appointments'
 */
appointments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appointments.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:30
 * @route '/portal/appointments'
 */
appointments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: appointments.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:30
 * @route '/portal/appointments'
 */
    const appointmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: appointments.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:30
 * @route '/portal/appointments'
 */
        appointmentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: appointments.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:30
 * @route '/portal/appointments'
 */
        appointmentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: appointments.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    appointments.form = appointmentsForm
/**
* @see \App\Http\Controllers\PatientPortalController::bookAppointment
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
export const bookAppointment = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bookAppointment.url(options),
    method: 'post',
})

bookAppointment.definition = {
    methods: ["post"],
    url: '/portal/appointments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PatientPortalController::bookAppointment
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
bookAppointment.url = (options?: RouteQueryOptions) => {
    return bookAppointment.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::bookAppointment
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
bookAppointment.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bookAppointment.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::bookAppointment
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
    const bookAppointmentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bookAppointment.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::bookAppointment
 * @see app/Http/Controllers/PatientPortalController.php:51
 * @route '/portal/appointments'
 */
        bookAppointmentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bookAppointment.url(options),
            method: 'post',
        })
    
    bookAppointment.form = bookAppointmentForm
/**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:57
 * @route '/portal/medical-records'
 */
export const medicalRecords = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: medicalRecords.url(options),
    method: 'get',
})

medicalRecords.definition = {
    methods: ["get","head"],
    url: '/portal/medical-records',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:57
 * @route '/portal/medical-records'
 */
medicalRecords.url = (options?: RouteQueryOptions) => {
    return medicalRecords.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:57
 * @route '/portal/medical-records'
 */
medicalRecords.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: medicalRecords.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:57
 * @route '/portal/medical-records'
 */
medicalRecords.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: medicalRecords.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:57
 * @route '/portal/medical-records'
 */
    const medicalRecordsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: medicalRecords.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:57
 * @route '/portal/medical-records'
 */
        medicalRecordsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: medicalRecords.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:57
 * @route '/portal/medical-records'
 */
        medicalRecordsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: medicalRecords.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    medicalRecords.form = medicalRecordsForm
/**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:66
 * @route '/portal/results'
 */
export const results = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: results.url(options),
    method: 'get',
})

results.definition = {
    methods: ["get","head"],
    url: '/portal/results',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:66
 * @route '/portal/results'
 */
results.url = (options?: RouteQueryOptions) => {
    return results.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:66
 * @route '/portal/results'
 */
results.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: results.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:66
 * @route '/portal/results'
 */
results.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: results.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:66
 * @route '/portal/results'
 */
    const resultsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: results.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:66
 * @route '/portal/results'
 */
        resultsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: results.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:66
 * @route '/portal/results'
 */
        resultsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: results.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    results.form = resultsForm
/**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:72
 * @route '/portal/invoices'
 */
export const invoices = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoices.url(options),
    method: 'get',
})

invoices.definition = {
    methods: ["get","head"],
    url: '/portal/invoices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:72
 * @route '/portal/invoices'
 */
invoices.url = (options?: RouteQueryOptions) => {
    return invoices.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:72
 * @route '/portal/invoices'
 */
invoices.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoices.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:72
 * @route '/portal/invoices'
 */
invoices.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: invoices.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:72
 * @route '/portal/invoices'
 */
    const invoicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: invoices.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:72
 * @route '/portal/invoices'
 */
        invoicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: invoices.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:72
 * @route '/portal/invoices'
 */
        invoicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: invoices.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    invoices.form = invoicesForm
/**
* @see \App\Http\Controllers\PatientPortalController::payInvoice
 * @see app/Http/Controllers/PatientPortalController.php:81
 * @route '/portal/invoices/{invoice}/pay'
 */
export const payInvoice = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payInvoice.url(args, options),
    method: 'get',
})

payInvoice.definition = {
    methods: ["get","head"],
    url: '/portal/invoices/{invoice}/pay',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PatientPortalController::payInvoice
 * @see app/Http/Controllers/PatientPortalController.php:81
 * @route '/portal/invoices/{invoice}/pay'
 */
payInvoice.url = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return payInvoice.definition.url
            .replace('{invoice}', parsedArgs.invoice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::payInvoice
 * @see app/Http/Controllers/PatientPortalController.php:81
 * @route '/portal/invoices/{invoice}/pay'
 */
payInvoice.get = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payInvoice.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::payInvoice
 * @see app/Http/Controllers/PatientPortalController.php:81
 * @route '/portal/invoices/{invoice}/pay'
 */
payInvoice.head = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: payInvoice.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::payInvoice
 * @see app/Http/Controllers/PatientPortalController.php:81
 * @route '/portal/invoices/{invoice}/pay'
 */
    const payInvoiceForm = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: payInvoice.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::payInvoice
 * @see app/Http/Controllers/PatientPortalController.php:81
 * @route '/portal/invoices/{invoice}/pay'
 */
        payInvoiceForm.get = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: payInvoice.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::payInvoice
 * @see app/Http/Controllers/PatientPortalController.php:81
 * @route '/portal/invoices/{invoice}/pay'
 */
        payInvoiceForm.head = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: payInvoice.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    payInvoice.form = payInvoiceForm
/**
* @see \App\Http\Controllers\PatientPortalController::processPayment
 * @see app/Http/Controllers/PatientPortalController.php:91
 * @route '/portal/invoices/{invoice}/pay'
 */
export const processPayment = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processPayment.url(args, options),
    method: 'post',
})

processPayment.definition = {
    methods: ["post"],
    url: '/portal/invoices/{invoice}/pay',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PatientPortalController::processPayment
 * @see app/Http/Controllers/PatientPortalController.php:91
 * @route '/portal/invoices/{invoice}/pay'
 */
processPayment.url = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return processPayment.definition.url
            .replace('{invoice}', parsedArgs.invoice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::processPayment
 * @see app/Http/Controllers/PatientPortalController.php:91
 * @route '/portal/invoices/{invoice}/pay'
 */
processPayment.post = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processPayment.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::processPayment
 * @see app/Http/Controllers/PatientPortalController.php:91
 * @route '/portal/invoices/{invoice}/pay'
 */
    const processPaymentForm = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: processPayment.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::processPayment
 * @see app/Http/Controllers/PatientPortalController.php:91
 * @route '/portal/invoices/{invoice}/pay'
 */
        processPaymentForm.post = (args: { invoice: number | { id: number } } | [invoice: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: processPayment.url(args, options),
            method: 'post',
        })
    
    processPayment.form = processPaymentForm
/**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:97
 * @route '/portal/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/portal/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:97
 * @route '/portal/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:97
 * @route '/portal/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:97
 * @route '/portal/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:97
 * @route '/portal/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:97
 * @route '/portal/profile'
 */
        profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:97
 * @route '/portal/profile'
 */
        profileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profile.form = profileForm
/**
* @see \App\Http\Controllers\PatientPortalController::updateProfile
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(options),
    method: 'put',
})

updateProfile.definition = {
    methods: ["put"],
    url: '/portal/profile',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PatientPortalController::updateProfile
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::updateProfile
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
updateProfile.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::updateProfile
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
    const updateProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateProfile.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::updateProfile
 * @see app/Http/Controllers/PatientPortalController.php:103
 * @route '/portal/profile'
 */
        updateProfileForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateProfile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateProfile.form = updateProfileForm
/**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:109
 * @route '/portal/messages'
 */
export const messages = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: messages.url(options),
    method: 'get',
})

messages.definition = {
    methods: ["get","head"],
    url: '/portal/messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:109
 * @route '/portal/messages'
 */
messages.url = (options?: RouteQueryOptions) => {
    return messages.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:109
 * @route '/portal/messages'
 */
messages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: messages.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:109
 * @route '/portal/messages'
 */
messages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: messages.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:109
 * @route '/portal/messages'
 */
    const messagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: messages.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:109
 * @route '/portal/messages'
 */
        messagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: messages.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:109
 * @route '/portal/messages'
 */
        messagesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: messages.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    messages.form = messagesForm
/**
* @see \App\Http\Controllers\PatientPortalController::sendMessage
 * @see app/Http/Controllers/PatientPortalController.php:115
 * @route '/portal/messages'
 */
export const sendMessage = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

sendMessage.definition = {
    methods: ["post"],
    url: '/portal/messages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PatientPortalController::sendMessage
 * @see app/Http/Controllers/PatientPortalController.php:115
 * @route '/portal/messages'
 */
sendMessage.url = (options?: RouteQueryOptions) => {
    return sendMessage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::sendMessage
 * @see app/Http/Controllers/PatientPortalController.php:115
 * @route '/portal/messages'
 */
sendMessage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendMessage.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::sendMessage
 * @see app/Http/Controllers/PatientPortalController.php:115
 * @route '/portal/messages'
 */
    const sendMessageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendMessage.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::sendMessage
 * @see app/Http/Controllers/PatientPortalController.php:115
 * @route '/portal/messages'
 */
        sendMessageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendMessage.url(options),
            method: 'post',
        })
    
    sendMessage.form = sendMessageForm
const PatientPortalController = { dashboard, appointments, bookAppointment, medicalRecords, results, invoices, payInvoice, processPayment, profile, updateProfile, messages, sendMessage }

export default PatientPortalController