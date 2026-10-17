import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import appointments40eafc from './appointments'
import invoicesD0c47e from './invoices'
import profile937a89 from './profile'
import messages4ba6e9 from './messages'
/**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:13
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
 * @see app/Http/Controllers/PatientPortalController.php:13
 * @route '/portal'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:13
 * @route '/portal'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:13
 * @route '/portal'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:13
 * @route '/portal'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:13
 * @route '/portal'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::dashboard
 * @see app/Http/Controllers/PatientPortalController.php:13
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
 * @see app/Http/Controllers/PatientPortalController.php:38
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
 * @see app/Http/Controllers/PatientPortalController.php:38
 * @route '/portal/appointments'
 */
appointments.url = (options?: RouteQueryOptions) => {
    return appointments.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:38
 * @route '/portal/appointments'
 */
appointments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appointments.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:38
 * @route '/portal/appointments'
 */
appointments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: appointments.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:38
 * @route '/portal/appointments'
 */
    const appointmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: appointments.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:38
 * @route '/portal/appointments'
 */
        appointmentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: appointments.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::appointments
 * @see app/Http/Controllers/PatientPortalController.php:38
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
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:53
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
 * @see app/Http/Controllers/PatientPortalController.php:53
 * @route '/portal/medical-records'
 */
medicalRecords.url = (options?: RouteQueryOptions) => {
    return medicalRecords.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:53
 * @route '/portal/medical-records'
 */
medicalRecords.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: medicalRecords.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:53
 * @route '/portal/medical-records'
 */
medicalRecords.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: medicalRecords.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:53
 * @route '/portal/medical-records'
 */
    const medicalRecordsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: medicalRecords.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:53
 * @route '/portal/medical-records'
 */
        medicalRecordsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: medicalRecords.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::medicalRecords
 * @see app/Http/Controllers/PatientPortalController.php:53
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
 * @see app/Http/Controllers/PatientPortalController.php:62
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
 * @see app/Http/Controllers/PatientPortalController.php:62
 * @route '/portal/results'
 */
results.url = (options?: RouteQueryOptions) => {
    return results.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:62
 * @route '/portal/results'
 */
results.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: results.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:62
 * @route '/portal/results'
 */
results.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: results.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:62
 * @route '/portal/results'
 */
    const resultsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: results.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:62
 * @route '/portal/results'
 */
        resultsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: results.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::results
 * @see app/Http/Controllers/PatientPortalController.php:62
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
 * @see app/Http/Controllers/PatientPortalController.php:68
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
 * @see app/Http/Controllers/PatientPortalController.php:68
 * @route '/portal/invoices'
 */
invoices.url = (options?: RouteQueryOptions) => {
    return invoices.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:68
 * @route '/portal/invoices'
 */
invoices.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoices.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:68
 * @route '/portal/invoices'
 */
invoices.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: invoices.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:68
 * @route '/portal/invoices'
 */
    const invoicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: invoices.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:68
 * @route '/portal/invoices'
 */
        invoicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: invoices.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::invoices
 * @see app/Http/Controllers/PatientPortalController.php:68
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
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:93
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
 * @see app/Http/Controllers/PatientPortalController.php:93
 * @route '/portal/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:93
 * @route '/portal/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:93
 * @route '/portal/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:93
 * @route '/portal/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:93
 * @route '/portal/profile'
 */
        profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::profile
 * @see app/Http/Controllers/PatientPortalController.php:93
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
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:105
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
 * @see app/Http/Controllers/PatientPortalController.php:105
 * @route '/portal/messages'
 */
messages.url = (options?: RouteQueryOptions) => {
    return messages.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:105
 * @route '/portal/messages'
 */
messages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: messages.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:105
 * @route '/portal/messages'
 */
messages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: messages.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:105
 * @route '/portal/messages'
 */
    const messagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: messages.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:105
 * @route '/portal/messages'
 */
        messagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: messages.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PatientPortalController::messages
 * @see app/Http/Controllers/PatientPortalController.php:105
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
const portal = {
    dashboard: Object.assign(dashboard, dashboard),
appointments: Object.assign(appointments, appointments40eafc),
medicalRecords: Object.assign(medicalRecords, medicalRecords),
results: Object.assign(results, results),
invoices: Object.assign(invoices, invoicesD0c47e),
profile: Object.assign(profile, profile937a89),
messages: Object.assign(messages, messages4ba6e9),
}

export default portal