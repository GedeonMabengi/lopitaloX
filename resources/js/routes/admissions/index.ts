import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AdmissionController::index
 * @see [unknown]:0
 * @route '/admissions'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdmissionController::index
 * @see [unknown]:0
 * @route '/admissions'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::index
 * @see [unknown]:0
 * @route '/admissions'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdmissionController::index
 * @see [unknown]:0
 * @route '/admissions'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdmissionController::index
 * @see [unknown]:0
 * @route '/admissions'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::index
 * @see [unknown]:0
 * @route '/admissions'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdmissionController::index
 * @see [unknown]:0
 * @route '/admissions'
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
* @see \App\Http\Controllers\AdmissionController::create
 * @see [unknown]:0
 * @route '/admissions/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admissions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdmissionController::create
 * @see [unknown]:0
 * @route '/admissions/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::create
 * @see [unknown]:0
 * @route '/admissions/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdmissionController::create
 * @see [unknown]:0
 * @route '/admissions/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdmissionController::create
 * @see [unknown]:0
 * @route '/admissions/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::create
 * @see [unknown]:0
 * @route '/admissions/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdmissionController::create
 * @see [unknown]:0
 * @route '/admissions/create'
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
* @see \App\Http\Controllers\AdmissionController::store
 * @see [unknown]:0
 * @route '/admissions'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admissions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdmissionController::store
 * @see [unknown]:0
 * @route '/admissions'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::store
 * @see [unknown]:0
 * @route '/admissions'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AdmissionController::store
 * @see [unknown]:0
 * @route '/admissions'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::store
 * @see [unknown]:0
 * @route '/admissions'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AdmissionController::show
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
export const show = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admissions/{admission}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdmissionController::show
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
show.url = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admission: args.admission,
                }

    return show.definition.url
            .replace('{admission}', parsedArgs.admission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::show
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
show.get = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdmissionController::show
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
show.head = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdmissionController::show
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
    const showForm = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::show
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
        showForm.get = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdmissionController::show
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
        showForm.head = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AdmissionController::edit
 * @see [unknown]:0
 * @route '/admissions/{admission}/edit'
 */
export const edit = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admissions/{admission}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdmissionController::edit
 * @see [unknown]:0
 * @route '/admissions/{admission}/edit'
 */
edit.url = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admission: args.admission,
                }

    return edit.definition.url
            .replace('{admission}', parsedArgs.admission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::edit
 * @see [unknown]:0
 * @route '/admissions/{admission}/edit'
 */
edit.get = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdmissionController::edit
 * @see [unknown]:0
 * @route '/admissions/{admission}/edit'
 */
edit.head = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdmissionController::edit
 * @see [unknown]:0
 * @route '/admissions/{admission}/edit'
 */
    const editForm = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::edit
 * @see [unknown]:0
 * @route '/admissions/{admission}/edit'
 */
        editForm.get = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdmissionController::edit
 * @see [unknown]:0
 * @route '/admissions/{admission}/edit'
 */
        editForm.head = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AdmissionController::update
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
export const update = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admissions/{admission}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AdmissionController::update
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
update.url = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admission: args.admission,
                }

    return update.definition.url
            .replace('{admission}', parsedArgs.admission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::update
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
update.put = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AdmissionController::update
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
update.patch = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AdmissionController::update
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
    const updateForm = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::update
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
        updateForm.put = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AdmissionController::update
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
        updateForm.patch = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AdmissionController::destroy
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
export const destroy = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admissions/{admission}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AdmissionController::destroy
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
destroy.url = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admission: args.admission,
                }

    return destroy.definition.url
            .replace('{admission}', parsedArgs.admission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::destroy
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
destroy.delete = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AdmissionController::destroy
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
    const destroyForm = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::destroy
 * @see [unknown]:0
 * @route '/admissions/{admission}'
 */
        destroyForm.delete = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AdmissionController::transfer
 * @see [unknown]:0
 * @route '/admissions/{admission}/transfer'
 */
export const transfer = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(args, options),
    method: 'post',
})

transfer.definition = {
    methods: ["post"],
    url: '/admissions/{admission}/transfer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdmissionController::transfer
 * @see [unknown]:0
 * @route '/admissions/{admission}/transfer'
 */
transfer.url = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admission: args.admission,
                }

    return transfer.definition.url
            .replace('{admission}', parsedArgs.admission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::transfer
 * @see [unknown]:0
 * @route '/admissions/{admission}/transfer'
 */
transfer.post = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AdmissionController::transfer
 * @see [unknown]:0
 * @route '/admissions/{admission}/transfer'
 */
    const transferForm = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: transfer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::transfer
 * @see [unknown]:0
 * @route '/admissions/{admission}/transfer'
 */
        transferForm.post = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: transfer.url(args, options),
            method: 'post',
        })
    
    transfer.form = transferForm
/**
* @see \App\Http\Controllers\AdmissionController::discharge
 * @see [unknown]:0
 * @route '/admissions/{admission}/discharge'
 */
export const discharge = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: discharge.url(args, options),
    method: 'post',
})

discharge.definition = {
    methods: ["post"],
    url: '/admissions/{admission}/discharge',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdmissionController::discharge
 * @see [unknown]:0
 * @route '/admissions/{admission}/discharge'
 */
discharge.url = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admission: args.admission,
                }

    return discharge.definition.url
            .replace('{admission}', parsedArgs.admission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::discharge
 * @see [unknown]:0
 * @route '/admissions/{admission}/discharge'
 */
discharge.post = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: discharge.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AdmissionController::discharge
 * @see [unknown]:0
 * @route '/admissions/{admission}/discharge'
 */
    const dischargeForm = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: discharge.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::discharge
 * @see [unknown]:0
 * @route '/admissions/{admission}/discharge'
 */
        dischargeForm.post = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: discharge.url(args, options),
            method: 'post',
        })
    
    discharge.form = dischargeForm
/**
* @see \App\Http\Controllers\AdmissionController::availableBeds
 * @see [unknown]:0
 * @route '/admissions/{admission}/beds'
 */
export const availableBeds = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: availableBeds.url(args, options),
    method: 'get',
})

availableBeds.definition = {
    methods: ["get","head"],
    url: '/admissions/{admission}/beds',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdmissionController::availableBeds
 * @see [unknown]:0
 * @route '/admissions/{admission}/beds'
 */
availableBeds.url = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admission: args.admission,
                }

    return availableBeds.definition.url
            .replace('{admission}', parsedArgs.admission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdmissionController::availableBeds
 * @see [unknown]:0
 * @route '/admissions/{admission}/beds'
 */
availableBeds.get = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: availableBeds.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdmissionController::availableBeds
 * @see [unknown]:0
 * @route '/admissions/{admission}/beds'
 */
availableBeds.head = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: availableBeds.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdmissionController::availableBeds
 * @see [unknown]:0
 * @route '/admissions/{admission}/beds'
 */
    const availableBedsForm = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: availableBeds.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdmissionController::availableBeds
 * @see [unknown]:0
 * @route '/admissions/{admission}/beds'
 */
        availableBedsForm.get = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: availableBeds.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdmissionController::availableBeds
 * @see [unknown]:0
 * @route '/admissions/{admission}/beds'
 */
        availableBedsForm.head = (args: { admission: string | number } | [admission: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: availableBeds.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    availableBeds.form = availableBedsForm
const admissions = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
transfer: Object.assign(transfer, transfer),
discharge: Object.assign(discharge, discharge),
availableBeds: Object.assign(availableBeds, availableBeds),
}

export default admissions