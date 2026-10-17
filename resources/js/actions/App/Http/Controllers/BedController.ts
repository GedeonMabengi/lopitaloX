import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BedController::index
 * @see [unknown]:0
 * @route '/beds'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/beds',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BedController::index
 * @see [unknown]:0
 * @route '/beds'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BedController::index
 * @see [unknown]:0
 * @route '/beds'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BedController::index
 * @see [unknown]:0
 * @route '/beds'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BedController::index
 * @see [unknown]:0
 * @route '/beds'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BedController::index
 * @see [unknown]:0
 * @route '/beds'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BedController::index
 * @see [unknown]:0
 * @route '/beds'
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
* @see \App\Http\Controllers\BedController::create
 * @see [unknown]:0
 * @route '/beds/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/beds/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BedController::create
 * @see [unknown]:0
 * @route '/beds/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BedController::create
 * @see [unknown]:0
 * @route '/beds/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BedController::create
 * @see [unknown]:0
 * @route '/beds/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BedController::create
 * @see [unknown]:0
 * @route '/beds/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BedController::create
 * @see [unknown]:0
 * @route '/beds/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BedController::create
 * @see [unknown]:0
 * @route '/beds/create'
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
* @see \App\Http\Controllers\BedController::store
 * @see [unknown]:0
 * @route '/beds'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/beds',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BedController::store
 * @see [unknown]:0
 * @route '/beds'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BedController::store
 * @see [unknown]:0
 * @route '/beds'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BedController::store
 * @see [unknown]:0
 * @route '/beds'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BedController::store
 * @see [unknown]:0
 * @route '/beds'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\BedController::show
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
export const show = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/beds/{bed}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BedController::show
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
show.url = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bed: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    bed: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        bed: args.bed,
                }

    return show.definition.url
            .replace('{bed}', parsedArgs.bed.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BedController::show
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
show.get = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BedController::show
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
show.head = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BedController::show
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
    const showForm = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BedController::show
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
        showForm.get = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BedController::show
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
        showForm.head = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BedController::edit
 * @see [unknown]:0
 * @route '/beds/{bed}/edit'
 */
export const edit = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/beds/{bed}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BedController::edit
 * @see [unknown]:0
 * @route '/beds/{bed}/edit'
 */
edit.url = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bed: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    bed: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        bed: args.bed,
                }

    return edit.definition.url
            .replace('{bed}', parsedArgs.bed.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BedController::edit
 * @see [unknown]:0
 * @route '/beds/{bed}/edit'
 */
edit.get = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BedController::edit
 * @see [unknown]:0
 * @route '/beds/{bed}/edit'
 */
edit.head = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BedController::edit
 * @see [unknown]:0
 * @route '/beds/{bed}/edit'
 */
    const editForm = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BedController::edit
 * @see [unknown]:0
 * @route '/beds/{bed}/edit'
 */
        editForm.get = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BedController::edit
 * @see [unknown]:0
 * @route '/beds/{bed}/edit'
 */
        editForm.head = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BedController::update
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
export const update = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/beds/{bed}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\BedController::update
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
update.url = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bed: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    bed: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        bed: args.bed,
                }

    return update.definition.url
            .replace('{bed}', parsedArgs.bed.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BedController::update
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
update.put = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\BedController::update
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
update.patch = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\BedController::update
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
    const updateForm = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BedController::update
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
        updateForm.put = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\BedController::update
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
        updateForm.patch = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\BedController::destroy
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
export const destroy = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/beds/{bed}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BedController::destroy
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
destroy.url = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bed: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    bed: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        bed: args.bed,
                }

    return destroy.definition.url
            .replace('{bed}', parsedArgs.bed.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BedController::destroy
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
destroy.delete = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\BedController::destroy
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
    const destroyForm = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BedController::destroy
 * @see [unknown]:0
 * @route '/beds/{bed}'
 */
        destroyForm.delete = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\BedController::changeStatus
 * @see [unknown]:0
 * @route '/beds/{bed}/change-status'
 */
export const changeStatus = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: changeStatus.url(args, options),
    method: 'post',
})

changeStatus.definition = {
    methods: ["post"],
    url: '/beds/{bed}/change-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BedController::changeStatus
 * @see [unknown]:0
 * @route '/beds/{bed}/change-status'
 */
changeStatus.url = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { bed: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    bed: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        bed: args.bed,
                }

    return changeStatus.definition.url
            .replace('{bed}', parsedArgs.bed.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BedController::changeStatus
 * @see [unknown]:0
 * @route '/beds/{bed}/change-status'
 */
changeStatus.post = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: changeStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BedController::changeStatus
 * @see [unknown]:0
 * @route '/beds/{bed}/change-status'
 */
    const changeStatusForm = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: changeStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BedController::changeStatus
 * @see [unknown]:0
 * @route '/beds/{bed}/change-status'
 */
        changeStatusForm.post = (args: { bed: string | number } | [bed: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: changeStatus.url(args, options),
            method: 'post',
        })
    
    changeStatus.form = changeStatusForm
const BedController = { index, create, store, show, edit, update, destroy, changeStatus }

export default BedController