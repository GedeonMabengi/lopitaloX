import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\EmergencyVisitController::index
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/emergency-visits',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::index
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::index
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmergencyVisitController::index
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::index
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::index
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EmergencyVisitController::index
 * @see [unknown]:0
 * @route '/emergency-visits'
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
* @see \App\Http\Controllers\EmergencyVisitController::create
 * @see [unknown]:0
 * @route '/emergency-visits/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/emergency-visits/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::create
 * @see [unknown]:0
 * @route '/emergency-visits/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::create
 * @see [unknown]:0
 * @route '/emergency-visits/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmergencyVisitController::create
 * @see [unknown]:0
 * @route '/emergency-visits/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::create
 * @see [unknown]:0
 * @route '/emergency-visits/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::create
 * @see [unknown]:0
 * @route '/emergency-visits/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EmergencyVisitController::create
 * @see [unknown]:0
 * @route '/emergency-visits/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\EmergencyVisitController::store
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/emergency-visits',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::store
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::store
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::store
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::store
 * @see [unknown]:0
 * @route '/emergency-visits'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\EmergencyVisitController::show
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
export const show = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/emergency-visits/{emergency_visit}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::show
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
show.url = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergency_visit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    emergency_visit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        emergency_visit: args.emergency_visit,
                }

    return show.definition.url
            .replace('{emergency_visit}', parsedArgs.emergency_visit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::show
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
show.get = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmergencyVisitController::show
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
show.head = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::show
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
    const showForm = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::show
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
        showForm.get = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EmergencyVisitController::show
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
        showForm.head = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\EmergencyVisitController::edit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}/edit'
 */
export const edit = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/emergency-visits/{emergency_visit}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::edit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}/edit'
 */
edit.url = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergency_visit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    emergency_visit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        emergency_visit: args.emergency_visit,
                }

    return edit.definition.url
            .replace('{emergency_visit}', parsedArgs.emergency_visit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::edit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}/edit'
 */
edit.get = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EmergencyVisitController::edit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}/edit'
 */
edit.head = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::edit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}/edit'
 */
    const editForm = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::edit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}/edit'
 */
        editForm.get = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EmergencyVisitController::edit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}/edit'
 */
        editForm.head = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\EmergencyVisitController::update
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
export const update = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/emergency-visits/{emergency_visit}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::update
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
update.url = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergency_visit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    emergency_visit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        emergency_visit: args.emergency_visit,
                }

    return update.definition.url
            .replace('{emergency_visit}', parsedArgs.emergency_visit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::update
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
update.put = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\EmergencyVisitController::update
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
update.patch = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::update
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
    const updateForm = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::update
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
        updateForm.put = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\EmergencyVisitController::update
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
        updateForm.patch = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\EmergencyVisitController::destroy
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
export const destroy = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/emergency-visits/{emergency_visit}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::destroy
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
destroy.url = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergency_visit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    emergency_visit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        emergency_visit: args.emergency_visit,
                }

    return destroy.definition.url
            .replace('{emergency_visit}', parsedArgs.emergency_visit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::destroy
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
destroy.delete = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::destroy
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
    const destroyForm = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::destroy
 * @see [unknown]:0
 * @route '/emergency-visits/{emergency_visit}'
 */
        destroyForm.delete = (args: { emergency_visit: string | number } | [emergency_visit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\EmergencyVisitController::triage
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/triage'
 */
export const triage = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: triage.url(args, options),
    method: 'post',
})

triage.definition = {
    methods: ["post"],
    url: '/emergency-visits/{emergencyVisit}/triage',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::triage
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/triage'
 */
triage.url = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergencyVisit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    emergencyVisit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        emergencyVisit: args.emergencyVisit,
                }

    return triage.definition.url
            .replace('{emergencyVisit}', parsedArgs.emergencyVisit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::triage
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/triage'
 */
triage.post = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: triage.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::triage
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/triage'
 */
    const triageForm = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: triage.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::triage
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/triage'
 */
        triageForm.post = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: triage.url(args, options),
            method: 'post',
        })
    
    triage.form = triageForm
/**
* @see \App\Http\Controllers\EmergencyVisitController::admit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/admit'
 */
export const admit = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: admit.url(args, options),
    method: 'post',
})

admit.definition = {
    methods: ["post"],
    url: '/emergency-visits/{emergencyVisit}/admit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::admit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/admit'
 */
admit.url = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergencyVisit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    emergencyVisit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        emergencyVisit: args.emergencyVisit,
                }

    return admit.definition.url
            .replace('{emergencyVisit}', parsedArgs.emergencyVisit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::admit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/admit'
 */
admit.post = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: admit.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::admit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/admit'
 */
    const admitForm = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: admit.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::admit
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/admit'
 */
        admitForm.post = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: admit.url(args, options),
            method: 'post',
        })
    
    admit.form = admitForm
/**
* @see \App\Http\Controllers\EmergencyVisitController::discharge
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/discharge'
 */
export const discharge = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: discharge.url(args, options),
    method: 'post',
})

discharge.definition = {
    methods: ["post"],
    url: '/emergency-visits/{emergencyVisit}/discharge',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EmergencyVisitController::discharge
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/discharge'
 */
discharge.url = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { emergencyVisit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    emergencyVisit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        emergencyVisit: args.emergencyVisit,
                }

    return discharge.definition.url
            .replace('{emergencyVisit}', parsedArgs.emergencyVisit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EmergencyVisitController::discharge
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/discharge'
 */
discharge.post = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: discharge.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EmergencyVisitController::discharge
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/discharge'
 */
    const dischargeForm = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: discharge.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EmergencyVisitController::discharge
 * @see [unknown]:0
 * @route '/emergency-visits/{emergencyVisit}/discharge'
 */
        dischargeForm.post = (args: { emergencyVisit: string | number } | [emergencyVisit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: discharge.url(args, options),
            method: 'post',
        })
    
    discharge.form = dischargeForm
const emergencyVisits = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
triage: Object.assign(triage, triage),
admit: Object.assign(admit, admit),
discharge: Object.assign(discharge, discharge),
}

export default emergencyVisits