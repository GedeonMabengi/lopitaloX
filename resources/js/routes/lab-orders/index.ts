import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import results from './results'
/**
* @see \App\Http\Controllers\LabOrderController::index
 * @see [unknown]:0
 * @route '/lab-orders'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/lab-orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LabOrderController::index
 * @see [unknown]:0
 * @route '/lab-orders'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::index
 * @see [unknown]:0
 * @route '/lab-orders'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LabOrderController::index
 * @see [unknown]:0
 * @route '/lab-orders'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LabOrderController::index
 * @see [unknown]:0
 * @route '/lab-orders'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::index
 * @see [unknown]:0
 * @route '/lab-orders'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LabOrderController::index
 * @see [unknown]:0
 * @route '/lab-orders'
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
* @see \App\Http\Controllers\LabOrderController::create
 * @see [unknown]:0
 * @route '/lab-orders/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/lab-orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LabOrderController::create
 * @see [unknown]:0
 * @route '/lab-orders/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::create
 * @see [unknown]:0
 * @route '/lab-orders/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LabOrderController::create
 * @see [unknown]:0
 * @route '/lab-orders/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LabOrderController::create
 * @see [unknown]:0
 * @route '/lab-orders/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::create
 * @see [unknown]:0
 * @route '/lab-orders/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LabOrderController::create
 * @see [unknown]:0
 * @route '/lab-orders/create'
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
* @see \App\Http\Controllers\LabOrderController::store
 * @see [unknown]:0
 * @route '/lab-orders'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/lab-orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LabOrderController::store
 * @see [unknown]:0
 * @route '/lab-orders'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::store
 * @see [unknown]:0
 * @route '/lab-orders'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LabOrderController::store
 * @see [unknown]:0
 * @route '/lab-orders'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::store
 * @see [unknown]:0
 * @route '/lab-orders'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\LabOrderController::show
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
export const show = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/lab-orders/{lab_order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LabOrderController::show
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
show.url = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lab_order: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    lab_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lab_order: args.lab_order,
                }

    return show.definition.url
            .replace('{lab_order}', parsedArgs.lab_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::show
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
show.get = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LabOrderController::show
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
show.head = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LabOrderController::show
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
    const showForm = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::show
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
        showForm.get = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LabOrderController::show
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
        showForm.head = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LabOrderController::edit
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}/edit'
 */
export const edit = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/lab-orders/{lab_order}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LabOrderController::edit
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}/edit'
 */
edit.url = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lab_order: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    lab_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lab_order: args.lab_order,
                }

    return edit.definition.url
            .replace('{lab_order}', parsedArgs.lab_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::edit
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}/edit'
 */
edit.get = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LabOrderController::edit
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}/edit'
 */
edit.head = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LabOrderController::edit
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}/edit'
 */
    const editForm = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::edit
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}/edit'
 */
        editForm.get = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LabOrderController::edit
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}/edit'
 */
        editForm.head = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LabOrderController::update
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
export const update = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/lab-orders/{lab_order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LabOrderController::update
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
update.url = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lab_order: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    lab_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lab_order: args.lab_order,
                }

    return update.definition.url
            .replace('{lab_order}', parsedArgs.lab_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::update
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
update.put = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LabOrderController::update
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
update.patch = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\LabOrderController::update
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
    const updateForm = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::update
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
        updateForm.put = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\LabOrderController::update
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
        updateForm.patch = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\LabOrderController::destroy
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
export const destroy = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/lab-orders/{lab_order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LabOrderController::destroy
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
destroy.url = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lab_order: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    lab_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        lab_order: args.lab_order,
                }

    return destroy.definition.url
            .replace('{lab_order}', parsedArgs.lab_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::destroy
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
destroy.delete = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\LabOrderController::destroy
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
    const destroyForm = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::destroy
 * @see [unknown]:0
 * @route '/lab-orders/{lab_order}'
 */
        destroyForm.delete = (args: { lab_order: string | number } | [lab_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\LabOrderController::collectSample
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/collect-sample'
 */
export const collectSample = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: collectSample.url(args, options),
    method: 'post',
})

collectSample.definition = {
    methods: ["post"],
    url: '/lab-orders/{labOrder}/collect-sample',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LabOrderController::collectSample
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/collect-sample'
 */
collectSample.url = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { labOrder: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    labOrder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        labOrder: args.labOrder,
                }

    return collectSample.definition.url
            .replace('{labOrder}', parsedArgs.labOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::collectSample
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/collect-sample'
 */
collectSample.post = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: collectSample.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LabOrderController::collectSample
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/collect-sample'
 */
    const collectSampleForm = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: collectSample.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::collectSample
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/collect-sample'
 */
        collectSampleForm.post = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: collectSample.url(args, options),
            method: 'post',
        })
    
    collectSample.form = collectSampleForm
/**
* @see \App\Http\Controllers\LabOrderController::startAnalysis
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/start-analysis'
 */
export const startAnalysis = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startAnalysis.url(args, options),
    method: 'post',
})

startAnalysis.definition = {
    methods: ["post"],
    url: '/lab-orders/{labOrder}/start-analysis',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LabOrderController::startAnalysis
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/start-analysis'
 */
startAnalysis.url = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { labOrder: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    labOrder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        labOrder: args.labOrder,
                }

    return startAnalysis.definition.url
            .replace('{labOrder}', parsedArgs.labOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::startAnalysis
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/start-analysis'
 */
startAnalysis.post = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startAnalysis.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LabOrderController::startAnalysis
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/start-analysis'
 */
    const startAnalysisForm = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: startAnalysis.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::startAnalysis
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/start-analysis'
 */
        startAnalysisForm.post = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: startAnalysis.url(args, options),
            method: 'post',
        })
    
    startAnalysis.form = startAnalysisForm
/**
* @see \App\Http\Controllers\LabOrderController::complete
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/complete'
 */
export const complete = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/lab-orders/{labOrder}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LabOrderController::complete
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/complete'
 */
complete.url = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { labOrder: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    labOrder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        labOrder: args.labOrder,
                }

    return complete.definition.url
            .replace('{labOrder}', parsedArgs.labOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LabOrderController::complete
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/complete'
 */
complete.post = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LabOrderController::complete
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/complete'
 */
    const completeForm = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LabOrderController::complete
 * @see [unknown]:0
 * @route '/lab-orders/{labOrder}/complete'
 */
        completeForm.post = (args: { labOrder: string | number } | [labOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
const labOrders = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
collectSample: Object.assign(collectSample, collectSample),
startAnalysis: Object.assign(startAnalysis, startAnalysis),
complete: Object.assign(complete, complete),
results: Object.assign(results, results),
}

export default labOrders