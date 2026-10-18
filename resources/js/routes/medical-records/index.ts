import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/medical-records',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
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
* @see \App\Http\Controllers\MedicalRecordController::store
 * @see app/Http/Controllers/MedicalRecordController.php:44
 * @route '/medical-records'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/medical-records',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::store
 * @see app/Http/Controllers/MedicalRecordController.php:44
 * @route '/medical-records'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::store
 * @see app/Http/Controllers/MedicalRecordController.php:44
 * @route '/medical-records'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::store
 * @see app/Http/Controllers/MedicalRecordController.php:44
 * @route '/medical-records'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::store
 * @see app/Http/Controllers/MedicalRecordController.php:44
 * @route '/medical-records'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MedicalRecordController::show
 * @see app/Http/Controllers/MedicalRecordController.php:65
 * @route '/medical-records/{medical_record}'
 */
export const show = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/medical-records/{medical_record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::show
 * @see app/Http/Controllers/MedicalRecordController.php:65
 * @route '/medical-records/{medical_record}'
 */
show.url = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medical_record: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { medical_record: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    medical_record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        medical_record: typeof args.medical_record === 'object'
                ? args.medical_record.id
                : args.medical_record,
                }

    return show.definition.url
            .replace('{medical_record}', parsedArgs.medical_record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::show
 * @see app/Http/Controllers/MedicalRecordController.php:65
 * @route '/medical-records/{medical_record}'
 */
show.get = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MedicalRecordController::show
 * @see app/Http/Controllers/MedicalRecordController.php:65
 * @route '/medical-records/{medical_record}'
 */
show.head = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::show
 * @see app/Http/Controllers/MedicalRecordController.php:65
 * @route '/medical-records/{medical_record}'
 */
    const showForm = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::show
 * @see app/Http/Controllers/MedicalRecordController.php:65
 * @route '/medical-records/{medical_record}'
 */
        showForm.get = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MedicalRecordController::show
 * @see app/Http/Controllers/MedicalRecordController.php:65
 * @route '/medical-records/{medical_record}'
 */
        showForm.head = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MedicalRecordController::edit
 * @see app/Http/Controllers/MedicalRecordController.php:71
 * @route '/medical-records/{medical_record}/edit'
 */
export const edit = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/medical-records/{medical_record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::edit
 * @see app/Http/Controllers/MedicalRecordController.php:71
 * @route '/medical-records/{medical_record}/edit'
 */
edit.url = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medical_record: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { medical_record: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    medical_record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        medical_record: typeof args.medical_record === 'object'
                ? args.medical_record.id
                : args.medical_record,
                }

    return edit.definition.url
            .replace('{medical_record}', parsedArgs.medical_record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::edit
 * @see app/Http/Controllers/MedicalRecordController.php:71
 * @route '/medical-records/{medical_record}/edit'
 */
edit.get = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MedicalRecordController::edit
 * @see app/Http/Controllers/MedicalRecordController.php:71
 * @route '/medical-records/{medical_record}/edit'
 */
edit.head = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::edit
 * @see app/Http/Controllers/MedicalRecordController.php:71
 * @route '/medical-records/{medical_record}/edit'
 */
    const editForm = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::edit
 * @see app/Http/Controllers/MedicalRecordController.php:71
 * @route '/medical-records/{medical_record}/edit'
 */
        editForm.get = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MedicalRecordController::edit
 * @see app/Http/Controllers/MedicalRecordController.php:71
 * @route '/medical-records/{medical_record}/edit'
 */
        editForm.head = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MedicalRecordController::update
 * @see app/Http/Controllers/MedicalRecordController.php:77
 * @route '/medical-records/{medical_record}'
 */
export const update = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/medical-records/{medical_record}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::update
 * @see app/Http/Controllers/MedicalRecordController.php:77
 * @route '/medical-records/{medical_record}'
 */
update.url = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medical_record: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { medical_record: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    medical_record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        medical_record: typeof args.medical_record === 'object'
                ? args.medical_record.id
                : args.medical_record,
                }

    return update.definition.url
            .replace('{medical_record}', parsedArgs.medical_record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::update
 * @see app/Http/Controllers/MedicalRecordController.php:77
 * @route '/medical-records/{medical_record}'
 */
update.put = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MedicalRecordController::update
 * @see app/Http/Controllers/MedicalRecordController.php:77
 * @route '/medical-records/{medical_record}'
 */
update.patch = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::update
 * @see app/Http/Controllers/MedicalRecordController.php:77
 * @route '/medical-records/{medical_record}'
 */
    const updateForm = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::update
 * @see app/Http/Controllers/MedicalRecordController.php:77
 * @route '/medical-records/{medical_record}'
 */
        updateForm.put = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MedicalRecordController::update
 * @see app/Http/Controllers/MedicalRecordController.php:77
 * @route '/medical-records/{medical_record}'
 */
        updateForm.patch = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MedicalRecordController::destroy
 * @see app/Http/Controllers/MedicalRecordController.php:95
 * @route '/medical-records/{medical_record}'
 */
export const destroy = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/medical-records/{medical_record}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::destroy
 * @see app/Http/Controllers/MedicalRecordController.php:95
 * @route '/medical-records/{medical_record}'
 */
destroy.url = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medical_record: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { medical_record: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    medical_record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        medical_record: typeof args.medical_record === 'object'
                ? args.medical_record.id
                : args.medical_record,
                }

    return destroy.definition.url
            .replace('{medical_record}', parsedArgs.medical_record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::destroy
 * @see app/Http/Controllers/MedicalRecordController.php:95
 * @route '/medical-records/{medical_record}'
 */
destroy.delete = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::destroy
 * @see app/Http/Controllers/MedicalRecordController.php:95
 * @route '/medical-records/{medical_record}'
 */
    const destroyForm = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::destroy
 * @see app/Http/Controllers/MedicalRecordController.php:95
 * @route '/medical-records/{medical_record}'
 */
        destroyForm.delete = (args: { medical_record: number | { id: number } } | [medical_record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MedicalRecordController::create
 * @see app/Http/Controllers/MedicalRecordController.php:31
 * @route '/medical-records/create/{patient}'
 */
export const create = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/medical-records/create/{patient}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::create
 * @see app/Http/Controllers/MedicalRecordController.php:31
 * @route '/medical-records/create/{patient}'
 */
create.url = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { patient: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { patient: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    patient: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        patient: typeof args.patient === 'object'
                ? args.patient.id
                : args.patient,
                }

    return create.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::create
 * @see app/Http/Controllers/MedicalRecordController.php:31
 * @route '/medical-records/create/{patient}'
 */
create.get = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MedicalRecordController::create
 * @see app/Http/Controllers/MedicalRecordController.php:31
 * @route '/medical-records/create/{patient}'
 */
create.head = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::create
 * @see app/Http/Controllers/MedicalRecordController.php:31
 * @route '/medical-records/create/{patient}'
 */
    const createForm = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::create
 * @see app/Http/Controllers/MedicalRecordController.php:31
 * @route '/medical-records/create/{patient}'
 */
        createForm.get = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MedicalRecordController::create
 * @see app/Http/Controllers/MedicalRecordController.php:31
 * @route '/medical-records/create/{patient}'
 */
        createForm.head = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\MedicalRecordController::attachDocument
 * @see app/Http/Controllers/MedicalRecordController.php:102
 * @route '/medical-records/{medicalRecord}/attach-document'
 */
export const attachDocument = (args: { medicalRecord: number | { id: number } } | [medicalRecord: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: attachDocument.url(args, options),
    method: 'post',
})

attachDocument.definition = {
    methods: ["post"],
    url: '/medical-records/{medicalRecord}/attach-document',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::attachDocument
 * @see app/Http/Controllers/MedicalRecordController.php:102
 * @route '/medical-records/{medicalRecord}/attach-document'
 */
attachDocument.url = (args: { medicalRecord: number | { id: number } } | [medicalRecord: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medicalRecord: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { medicalRecord: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    medicalRecord: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        medicalRecord: typeof args.medicalRecord === 'object'
                ? args.medicalRecord.id
                : args.medicalRecord,
                }

    return attachDocument.definition.url
            .replace('{medicalRecord}', parsedArgs.medicalRecord.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::attachDocument
 * @see app/Http/Controllers/MedicalRecordController.php:102
 * @route '/medical-records/{medicalRecord}/attach-document'
 */
attachDocument.post = (args: { medicalRecord: number | { id: number } } | [medicalRecord: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: attachDocument.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::attachDocument
 * @see app/Http/Controllers/MedicalRecordController.php:102
 * @route '/medical-records/{medicalRecord}/attach-document'
 */
    const attachDocumentForm = (args: { medicalRecord: number | { id: number } } | [medicalRecord: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: attachDocument.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::attachDocument
 * @see app/Http/Controllers/MedicalRecordController.php:102
 * @route '/medical-records/{medicalRecord}/attach-document'
 */
        attachDocumentForm.post = (args: { medicalRecord: number | { id: number } } | [medicalRecord: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: attachDocument.url(args, options),
            method: 'post',
        })
    
    attachDocument.form = attachDocumentForm
const medicalRecords = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
create: Object.assign(create, create),
attachDocument: Object.assign(attachDocument, attachDocument),
}

export default medicalRecords