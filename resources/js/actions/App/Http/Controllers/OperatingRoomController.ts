import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OperatingRoomController::index
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/operating-rooms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatingRoomController::index
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatingRoomController::index
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OperatingRoomController::index
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OperatingRoomController::index
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OperatingRoomController::index
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OperatingRoomController::index
 * @see [unknown]:0
 * @route '/operating-rooms'
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
* @see \App\Http\Controllers\OperatingRoomController::create
 * @see [unknown]:0
 * @route '/operating-rooms/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/operating-rooms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatingRoomController::create
 * @see [unknown]:0
 * @route '/operating-rooms/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatingRoomController::create
 * @see [unknown]:0
 * @route '/operating-rooms/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OperatingRoomController::create
 * @see [unknown]:0
 * @route '/operating-rooms/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OperatingRoomController::create
 * @see [unknown]:0
 * @route '/operating-rooms/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OperatingRoomController::create
 * @see [unknown]:0
 * @route '/operating-rooms/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OperatingRoomController::create
 * @see [unknown]:0
 * @route '/operating-rooms/create'
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
* @see \App\Http\Controllers\OperatingRoomController::store
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/operating-rooms',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OperatingRoomController::store
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatingRoomController::store
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\OperatingRoomController::store
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\OperatingRoomController::store
 * @see [unknown]:0
 * @route '/operating-rooms'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\OperatingRoomController::show
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
export const show = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/operating-rooms/{operating_room}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatingRoomController::show
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
show.url = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operating_room: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    operating_room: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        operating_room: args.operating_room,
                }

    return show.definition.url
            .replace('{operating_room}', parsedArgs.operating_room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatingRoomController::show
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
show.get = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OperatingRoomController::show
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
show.head = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OperatingRoomController::show
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
    const showForm = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OperatingRoomController::show
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
        showForm.get = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OperatingRoomController::show
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
        showForm.head = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\OperatingRoomController::edit
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}/edit'
 */
export const edit = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/operating-rooms/{operating_room}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatingRoomController::edit
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}/edit'
 */
edit.url = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operating_room: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    operating_room: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        operating_room: args.operating_room,
                }

    return edit.definition.url
            .replace('{operating_room}', parsedArgs.operating_room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatingRoomController::edit
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}/edit'
 */
edit.get = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OperatingRoomController::edit
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}/edit'
 */
edit.head = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OperatingRoomController::edit
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}/edit'
 */
    const editForm = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OperatingRoomController::edit
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}/edit'
 */
        editForm.get = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OperatingRoomController::edit
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}/edit'
 */
        editForm.head = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\OperatingRoomController::update
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
export const update = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/operating-rooms/{operating_room}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\OperatingRoomController::update
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
update.url = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operating_room: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    operating_room: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        operating_room: args.operating_room,
                }

    return update.definition.url
            .replace('{operating_room}', parsedArgs.operating_room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatingRoomController::update
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
update.put = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\OperatingRoomController::update
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
update.patch = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\OperatingRoomController::update
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
    const updateForm = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\OperatingRoomController::update
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
        updateForm.put = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\OperatingRoomController::update
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
        updateForm.patch = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\OperatingRoomController::destroy
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
export const destroy = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/operating-rooms/{operating_room}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\OperatingRoomController::destroy
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
destroy.url = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operating_room: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    operating_room: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        operating_room: args.operating_room,
                }

    return destroy.definition.url
            .replace('{operating_room}', parsedArgs.operating_room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatingRoomController::destroy
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
destroy.delete = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\OperatingRoomController::destroy
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
    const destroyForm = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\OperatingRoomController::destroy
 * @see [unknown]:0
 * @route '/operating-rooms/{operating_room}'
 */
        destroyForm.delete = (args: { operating_room: string | number } | [operating_room: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const OperatingRoomController = { index, create, store, show, edit, update, destroy }

export default OperatingRoomController