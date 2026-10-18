import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/patients/{patient}/medical-records'
 */
const indexa1b1420e852c1723f6cd36cae828586d = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa1b1420e852c1723f6cd36cae828586d.url(args, options),
    method: 'get',
})

indexa1b1420e852c1723f6cd36cae828586d.definition = {
    methods: ["get","head"],
    url: '/patients/{patient}/medical-records',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/patients/{patient}/medical-records'
 */
indexa1b1420e852c1723f6cd36cae828586d.url = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return indexa1b1420e852c1723f6cd36cae828586d.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/patients/{patient}/medical-records'
 */
indexa1b1420e852c1723f6cd36cae828586d.get = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa1b1420e852c1723f6cd36cae828586d.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/patients/{patient}/medical-records'
 */
indexa1b1420e852c1723f6cd36cae828586d.head = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexa1b1420e852c1723f6cd36cae828586d.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/patients/{patient}/medical-records'
 */
    const indexa1b1420e852c1723f6cd36cae828586dForm = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexa1b1420e852c1723f6cd36cae828586d.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/patients/{patient}/medical-records'
 */
        indexa1b1420e852c1723f6cd36cae828586dForm.get = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexa1b1420e852c1723f6cd36cae828586d.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/patients/{patient}/medical-records'
 */
        indexa1b1420e852c1723f6cd36cae828586dForm.head = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexa1b1420e852c1723f6cd36cae828586d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexa1b1420e852c1723f6cd36cae828586d.form = indexa1b1420e852c1723f6cd36cae828586dForm
    /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
const index74620a5760e12e6db4d4e6e8330da71a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index74620a5760e12e6db4d4e6e8330da71a.url(options),
    method: 'get',
})

index74620a5760e12e6db4d4e6e8330da71a.definition = {
    methods: ["get","head"],
    url: '/medical-records',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
index74620a5760e12e6db4d4e6e8330da71a.url = (options?: RouteQueryOptions) => {
    return index74620a5760e12e6db4d4e6e8330da71a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
index74620a5760e12e6db4d4e6e8330da71a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index74620a5760e12e6db4d4e6e8330da71a.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
index74620a5760e12e6db4d4e6e8330da71a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index74620a5760e12e6db4d4e6e8330da71a.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
    const index74620a5760e12e6db4d4e6e8330da71aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index74620a5760e12e6db4d4e6e8330da71a.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
        index74620a5760e12e6db4d4e6e8330da71aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index74620a5760e12e6db4d4e6e8330da71a.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:14
 * @route '/medical-records'
 */
        index74620a5760e12e6db4d4e6e8330da71aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index74620a5760e12e6db4d4e6e8330da71a.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index74620a5760e12e6db4d4e6e8330da71a.form = index74620a5760e12e6db4d4e6e8330da71aForm

/**
* Multiple routes resolve to \App\Http\Controllers\MedicalRecordController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/patients/{patient}/medical-records': indexa1b1420e852c1723f6cd36cae828586d,
    '/medical-records': index74620a5760e12e6db4d4e6e8330da71a,
}

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
const MedicalRecordController = { index, store, show, edit, update, destroy, create, attachDocument }

export default MedicalRecordController