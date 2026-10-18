import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AppointmentController::index
 * @see app/Http/Controllers/AppointmentController.php:17
 * @route '/appointments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/appointments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::index
 * @see app/Http/Controllers/AppointmentController.php:17
 * @route '/appointments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::index
 * @see app/Http/Controllers/AppointmentController.php:17
 * @route '/appointments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AppointmentController::index
 * @see app/Http/Controllers/AppointmentController.php:17
 * @route '/appointments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AppointmentController::index
 * @see app/Http/Controllers/AppointmentController.php:17
 * @route '/appointments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::index
 * @see app/Http/Controllers/AppointmentController.php:17
 * @route '/appointments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AppointmentController::index
 * @see app/Http/Controllers/AppointmentController.php:17
 * @route '/appointments'
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
* @see \App\Http\Controllers\AppointmentController::create
 * @see app/Http/Controllers/AppointmentController.php:44
 * @route '/appointments/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/appointments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::create
 * @see app/Http/Controllers/AppointmentController.php:44
 * @route '/appointments/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::create
 * @see app/Http/Controllers/AppointmentController.php:44
 * @route '/appointments/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AppointmentController::create
 * @see app/Http/Controllers/AppointmentController.php:44
 * @route '/appointments/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AppointmentController::create
 * @see app/Http/Controllers/AppointmentController.php:44
 * @route '/appointments/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::create
 * @see app/Http/Controllers/AppointmentController.php:44
 * @route '/appointments/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AppointmentController::create
 * @see app/Http/Controllers/AppointmentController.php:44
 * @route '/appointments/create'
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
* @see \App\Http\Controllers\AppointmentController::store
 * @see app/Http/Controllers/AppointmentController.php:57
 * @route '/appointments'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/appointments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AppointmentController::store
 * @see app/Http/Controllers/AppointmentController.php:57
 * @route '/appointments'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::store
 * @see app/Http/Controllers/AppointmentController.php:57
 * @route '/appointments'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AppointmentController::store
 * @see app/Http/Controllers/AppointmentController.php:57
 * @route '/appointments'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::store
 * @see app/Http/Controllers/AppointmentController.php:57
 * @route '/appointments'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AppointmentController::show
 * @see app/Http/Controllers/AppointmentController.php:79
 * @route '/appointments/{appointment}'
 */
export const show = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/appointments/{appointment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::show
 * @see app/Http/Controllers/AppointmentController.php:79
 * @route '/appointments/{appointment}'
 */
show.url = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { appointment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    appointment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        appointment: typeof args.appointment === 'object'
                ? args.appointment.id
                : args.appointment,
                }

    return show.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::show
 * @see app/Http/Controllers/AppointmentController.php:79
 * @route '/appointments/{appointment}'
 */
show.get = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AppointmentController::show
 * @see app/Http/Controllers/AppointmentController.php:79
 * @route '/appointments/{appointment}'
 */
show.head = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AppointmentController::show
 * @see app/Http/Controllers/AppointmentController.php:79
 * @route '/appointments/{appointment}'
 */
    const showForm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::show
 * @see app/Http/Controllers/AppointmentController.php:79
 * @route '/appointments/{appointment}'
 */
        showForm.get = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AppointmentController::show
 * @see app/Http/Controllers/AppointmentController.php:79
 * @route '/appointments/{appointment}'
 */
        showForm.head = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AppointmentController::edit
 * @see app/Http/Controllers/AppointmentController.php:85
 * @route '/appointments/{appointment}/edit'
 */
export const edit = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/appointments/{appointment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::edit
 * @see app/Http/Controllers/AppointmentController.php:85
 * @route '/appointments/{appointment}/edit'
 */
edit.url = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { appointment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    appointment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        appointment: typeof args.appointment === 'object'
                ? args.appointment.id
                : args.appointment,
                }

    return edit.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::edit
 * @see app/Http/Controllers/AppointmentController.php:85
 * @route '/appointments/{appointment}/edit'
 */
edit.get = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AppointmentController::edit
 * @see app/Http/Controllers/AppointmentController.php:85
 * @route '/appointments/{appointment}/edit'
 */
edit.head = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AppointmentController::edit
 * @see app/Http/Controllers/AppointmentController.php:85
 * @route '/appointments/{appointment}/edit'
 */
    const editForm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::edit
 * @see app/Http/Controllers/AppointmentController.php:85
 * @route '/appointments/{appointment}/edit'
 */
        editForm.get = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AppointmentController::edit
 * @see app/Http/Controllers/AppointmentController.php:85
 * @route '/appointments/{appointment}/edit'
 */
        editForm.head = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AppointmentController::update
 * @see app/Http/Controllers/AppointmentController.php:93
 * @route '/appointments/{appointment}'
 */
export const update = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/appointments/{appointment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AppointmentController::update
 * @see app/Http/Controllers/AppointmentController.php:93
 * @route '/appointments/{appointment}'
 */
update.url = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { appointment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    appointment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        appointment: typeof args.appointment === 'object'
                ? args.appointment.id
                : args.appointment,
                }

    return update.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::update
 * @see app/Http/Controllers/AppointmentController.php:93
 * @route '/appointments/{appointment}'
 */
update.put = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AppointmentController::update
 * @see app/Http/Controllers/AppointmentController.php:93
 * @route '/appointments/{appointment}'
 */
update.patch = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AppointmentController::update
 * @see app/Http/Controllers/AppointmentController.php:93
 * @route '/appointments/{appointment}'
 */
    const updateForm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::update
 * @see app/Http/Controllers/AppointmentController.php:93
 * @route '/appointments/{appointment}'
 */
        updateForm.put = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AppointmentController::update
 * @see app/Http/Controllers/AppointmentController.php:93
 * @route '/appointments/{appointment}'
 */
        updateForm.patch = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AppointmentController::destroy
 * @see app/Http/Controllers/AppointmentController.php:111
 * @route '/appointments/{appointment}'
 */
export const destroy = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/appointments/{appointment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AppointmentController::destroy
 * @see app/Http/Controllers/AppointmentController.php:111
 * @route '/appointments/{appointment}'
 */
destroy.url = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { appointment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    appointment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        appointment: typeof args.appointment === 'object'
                ? args.appointment.id
                : args.appointment,
                }

    return destroy.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::destroy
 * @see app/Http/Controllers/AppointmentController.php:111
 * @route '/appointments/{appointment}'
 */
destroy.delete = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AppointmentController::destroy
 * @see app/Http/Controllers/AppointmentController.php:111
 * @route '/appointments/{appointment}'
 */
    const destroyForm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::destroy
 * @see app/Http/Controllers/AppointmentController.php:111
 * @route '/appointments/{appointment}'
 */
        destroyForm.delete = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AppointmentController::confirm
 * @see app/Http/Controllers/AppointmentController.php:119
 * @route '/appointments/{appointment}/confirm'
 */
export const confirm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

confirm.definition = {
    methods: ["post"],
    url: '/appointments/{appointment}/confirm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AppointmentController::confirm
 * @see app/Http/Controllers/AppointmentController.php:119
 * @route '/appointments/{appointment}/confirm'
 */
confirm.url = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { appointment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    appointment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        appointment: typeof args.appointment === 'object'
                ? args.appointment.id
                : args.appointment,
                }

    return confirm.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::confirm
 * @see app/Http/Controllers/AppointmentController.php:119
 * @route '/appointments/{appointment}/confirm'
 */
confirm.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AppointmentController::confirm
 * @see app/Http/Controllers/AppointmentController.php:119
 * @route '/appointments/{appointment}/confirm'
 */
    const confirmForm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: confirm.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::confirm
 * @see app/Http/Controllers/AppointmentController.php:119
 * @route '/appointments/{appointment}/confirm'
 */
        confirmForm.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: confirm.url(args, options),
            method: 'post',
        })
    
    confirm.form = confirmForm
/**
* @see \App\Http\Controllers\AppointmentController::checkIn
 * @see app/Http/Controllers/AppointmentController.php:126
 * @route '/appointments/{appointment}/check-in'
 */
export const checkIn = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkIn.url(args, options),
    method: 'post',
})

checkIn.definition = {
    methods: ["post"],
    url: '/appointments/{appointment}/check-in',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AppointmentController::checkIn
 * @see app/Http/Controllers/AppointmentController.php:126
 * @route '/appointments/{appointment}/check-in'
 */
checkIn.url = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { appointment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    appointment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        appointment: typeof args.appointment === 'object'
                ? args.appointment.id
                : args.appointment,
                }

    return checkIn.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::checkIn
 * @see app/Http/Controllers/AppointmentController.php:126
 * @route '/appointments/{appointment}/check-in'
 */
checkIn.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkIn.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AppointmentController::checkIn
 * @see app/Http/Controllers/AppointmentController.php:126
 * @route '/appointments/{appointment}/check-in'
 */
    const checkInForm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: checkIn.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::checkIn
 * @see app/Http/Controllers/AppointmentController.php:126
 * @route '/appointments/{appointment}/check-in'
 */
        checkInForm.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: checkIn.url(args, options),
            method: 'post',
        })
    
    checkIn.form = checkInForm
/**
* @see \App\Http\Controllers\AppointmentController::complete
 * @see app/Http/Controllers/AppointmentController.php:133
 * @route '/appointments/{appointment}/complete'
 */
export const complete = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/appointments/{appointment}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AppointmentController::complete
 * @see app/Http/Controllers/AppointmentController.php:133
 * @route '/appointments/{appointment}/complete'
 */
complete.url = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { appointment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    appointment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        appointment: typeof args.appointment === 'object'
                ? args.appointment.id
                : args.appointment,
                }

    return complete.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::complete
 * @see app/Http/Controllers/AppointmentController.php:133
 * @route '/appointments/{appointment}/complete'
 */
complete.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AppointmentController::complete
 * @see app/Http/Controllers/AppointmentController.php:133
 * @route '/appointments/{appointment}/complete'
 */
    const completeForm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::complete
 * @see app/Http/Controllers/AppointmentController.php:133
 * @route '/appointments/{appointment}/complete'
 */
        completeForm.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
/**
* @see \App\Http\Controllers\AppointmentController::cancel
 * @see app/Http/Controllers/AppointmentController.php:140
 * @route '/appointments/{appointment}/cancel'
 */
export const cancel = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/appointments/{appointment}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AppointmentController::cancel
 * @see app/Http/Controllers/AppointmentController.php:140
 * @route '/appointments/{appointment}/cancel'
 */
cancel.url = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { appointment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    appointment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        appointment: typeof args.appointment === 'object'
                ? args.appointment.id
                : args.appointment,
                }

    return cancel.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::cancel
 * @see app/Http/Controllers/AppointmentController.php:140
 * @route '/appointments/{appointment}/cancel'
 */
cancel.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AppointmentController::cancel
 * @see app/Http/Controllers/AppointmentController.php:140
 * @route '/appointments/{appointment}/cancel'
 */
    const cancelForm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: cancel.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::cancel
 * @see app/Http/Controllers/AppointmentController.php:140
 * @route '/appointments/{appointment}/cancel'
 */
        cancelForm.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: cancel.url(args, options),
            method: 'post',
        })
    
    cancel.form = cancelForm
/**
* @see \App\Http\Controllers\AppointmentController::noShow
 * @see app/Http/Controllers/AppointmentController.php:147
 * @route '/appointments/{appointment}/no-show'
 */
export const noShow = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: noShow.url(args, options),
    method: 'post',
})

noShow.definition = {
    methods: ["post"],
    url: '/appointments/{appointment}/no-show',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AppointmentController::noShow
 * @see app/Http/Controllers/AppointmentController.php:147
 * @route '/appointments/{appointment}/no-show'
 */
noShow.url = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { appointment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    appointment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        appointment: typeof args.appointment === 'object'
                ? args.appointment.id
                : args.appointment,
                }

    return noShow.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::noShow
 * @see app/Http/Controllers/AppointmentController.php:147
 * @route '/appointments/{appointment}/no-show'
 */
noShow.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: noShow.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AppointmentController::noShow
 * @see app/Http/Controllers/AppointmentController.php:147
 * @route '/appointments/{appointment}/no-show'
 */
    const noShowForm = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: noShow.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AppointmentController::noShow
 * @see app/Http/Controllers/AppointmentController.php:147
 * @route '/appointments/{appointment}/no-show'
 */
        noShowForm.post = (args: { appointment: number | { id: number } } | [appointment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: noShow.url(args, options),
            method: 'post',
        })
    
    noShow.form = noShowForm
const appointments = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
confirm: Object.assign(confirm, confirm),
checkIn: Object.assign(checkIn, checkIn),
complete: Object.assign(complete, complete),
cancel: Object.assign(cancel, cancel),
noShow: Object.assign(noShow, noShow),
}

export default appointments