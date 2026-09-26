import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PrescriptionController::index
* @see app/Http/Controllers/PrescriptionController.php:13
* @route '/prescriptions'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/prescriptions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrescriptionController::index
* @see app/Http/Controllers/PrescriptionController.php:13
* @route '/prescriptions'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionController::index
* @see app/Http/Controllers/PrescriptionController.php:13
* @route '/prescriptions'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::index
* @see app/Http/Controllers/PrescriptionController.php:13
* @route '/prescriptions'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PrescriptionController::index
* @see app/Http/Controllers/PrescriptionController.php:13
* @route '/prescriptions'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::index
* @see app/Http/Controllers/PrescriptionController.php:13
* @route '/prescriptions'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::index
* @see app/Http/Controllers/PrescriptionController.php:13
* @route '/prescriptions'
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
* @see \App\Http\Controllers\PrescriptionController::create
* @see app/Http/Controllers/PrescriptionController.php:25
* @route '/prescriptions/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/prescriptions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrescriptionController::create
* @see app/Http/Controllers/PrescriptionController.php:25
* @route '/prescriptions/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionController::create
* @see app/Http/Controllers/PrescriptionController.php:25
* @route '/prescriptions/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::create
* @see app/Http/Controllers/PrescriptionController.php:25
* @route '/prescriptions/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PrescriptionController::create
* @see app/Http/Controllers/PrescriptionController.php:25
* @route '/prescriptions/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::create
* @see app/Http/Controllers/PrescriptionController.php:25
* @route '/prescriptions/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::create
* @see app/Http/Controllers/PrescriptionController.php:25
* @route '/prescriptions/create'
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
* @see \App\Http\Controllers\PrescriptionController::store
* @see app/Http/Controllers/PrescriptionController.php:35
* @route '/prescriptions'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/prescriptions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PrescriptionController::store
* @see app/Http/Controllers/PrescriptionController.php:35
* @route '/prescriptions'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionController::store
* @see app/Http/Controllers/PrescriptionController.php:35
* @route '/prescriptions'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PrescriptionController::store
* @see app/Http/Controllers/PrescriptionController.php:35
* @route '/prescriptions'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PrescriptionController::store
* @see app/Http/Controllers/PrescriptionController.php:35
* @route '/prescriptions'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PrescriptionController::show
* @see app/Http/Controllers/PrescriptionController.php:52
* @route '/prescriptions/{prescription}'
*/
export const show = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/prescriptions/{prescription}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrescriptionController::show
* @see app/Http/Controllers/PrescriptionController.php:52
* @route '/prescriptions/{prescription}'
*/
show.url = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { prescription: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { prescription: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            prescription: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        prescription: typeof args.prescription === 'object'
        ? args.prescription.id
        : args.prescription,
    }

    return show.definition.url
            .replace('{prescription}', parsedArgs.prescription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionController::show
* @see app/Http/Controllers/PrescriptionController.php:52
* @route '/prescriptions/{prescription}'
*/
show.get = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::show
* @see app/Http/Controllers/PrescriptionController.php:52
* @route '/prescriptions/{prescription}'
*/
show.head = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PrescriptionController::show
* @see app/Http/Controllers/PrescriptionController.php:52
* @route '/prescriptions/{prescription}'
*/
const showForm = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::show
* @see app/Http/Controllers/PrescriptionController.php:52
* @route '/prescriptions/{prescription}'
*/
showForm.get = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::show
* @see app/Http/Controllers/PrescriptionController.php:52
* @route '/prescriptions/{prescription}'
*/
showForm.head = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PrescriptionController::edit
* @see app/Http/Controllers/PrescriptionController.php:58
* @route '/prescriptions/{prescription}/edit'
*/
export const edit = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/prescriptions/{prescription}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrescriptionController::edit
* @see app/Http/Controllers/PrescriptionController.php:58
* @route '/prescriptions/{prescription}/edit'
*/
edit.url = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { prescription: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { prescription: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            prescription: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        prescription: typeof args.prescription === 'object'
        ? args.prescription.id
        : args.prescription,
    }

    return edit.definition.url
            .replace('{prescription}', parsedArgs.prescription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionController::edit
* @see app/Http/Controllers/PrescriptionController.php:58
* @route '/prescriptions/{prescription}/edit'
*/
edit.get = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::edit
* @see app/Http/Controllers/PrescriptionController.php:58
* @route '/prescriptions/{prescription}/edit'
*/
edit.head = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PrescriptionController::edit
* @see app/Http/Controllers/PrescriptionController.php:58
* @route '/prescriptions/{prescription}/edit'
*/
const editForm = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::edit
* @see app/Http/Controllers/PrescriptionController.php:58
* @route '/prescriptions/{prescription}/edit'
*/
editForm.get = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrescriptionController::edit
* @see app/Http/Controllers/PrescriptionController.php:58
* @route '/prescriptions/{prescription}/edit'
*/
editForm.head = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PrescriptionController::update
* @see app/Http/Controllers/PrescriptionController.php:66
* @route '/prescriptions/{prescription}'
*/
export const update = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/prescriptions/{prescription}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PrescriptionController::update
* @see app/Http/Controllers/PrescriptionController.php:66
* @route '/prescriptions/{prescription}'
*/
update.url = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { prescription: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { prescription: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            prescription: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        prescription: typeof args.prescription === 'object'
        ? args.prescription.id
        : args.prescription,
    }

    return update.definition.url
            .replace('{prescription}', parsedArgs.prescription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionController::update
* @see app/Http/Controllers/PrescriptionController.php:66
* @route '/prescriptions/{prescription}'
*/
update.put = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PrescriptionController::update
* @see app/Http/Controllers/PrescriptionController.php:66
* @route '/prescriptions/{prescription}'
*/
update.patch = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PrescriptionController::update
* @see app/Http/Controllers/PrescriptionController.php:66
* @route '/prescriptions/{prescription}'
*/
const updateForm = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PrescriptionController::update
* @see app/Http/Controllers/PrescriptionController.php:66
* @route '/prescriptions/{prescription}'
*/
updateForm.put = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PrescriptionController::update
* @see app/Http/Controllers/PrescriptionController.php:66
* @route '/prescriptions/{prescription}'
*/
updateForm.patch = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PrescriptionController::destroy
* @see app/Http/Controllers/PrescriptionController.php:81
* @route '/prescriptions/{prescription}'
*/
export const destroy = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/prescriptions/{prescription}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PrescriptionController::destroy
* @see app/Http/Controllers/PrescriptionController.php:81
* @route '/prescriptions/{prescription}'
*/
destroy.url = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { prescription: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { prescription: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            prescription: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        prescription: typeof args.prescription === 'object'
        ? args.prescription.id
        : args.prescription,
    }

    return destroy.definition.url
            .replace('{prescription}', parsedArgs.prescription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrescriptionController::destroy
* @see app/Http/Controllers/PrescriptionController.php:81
* @route '/prescriptions/{prescription}'
*/
destroy.delete = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PrescriptionController::destroy
* @see app/Http/Controllers/PrescriptionController.php:81
* @route '/prescriptions/{prescription}'
*/
const destroyForm = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PrescriptionController::destroy
* @see app/Http/Controllers/PrescriptionController.php:81
* @route '/prescriptions/{prescription}'
*/
destroyForm.delete = (args: { prescription: number | { id: number } } | [prescription: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const PrescriptionController = { index, create, store, show, edit, update, destroy }

export default PrescriptionController