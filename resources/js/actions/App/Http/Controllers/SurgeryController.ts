import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SurgeryController::index
* @see [unknown]:0
* @route '/surgeries'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/surgeries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SurgeryController::index
* @see [unknown]:0
* @route '/surgeries'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::index
* @see [unknown]:0
* @route '/surgeries'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::index
* @see [unknown]:0
* @route '/surgeries'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SurgeryController::index
* @see [unknown]:0
* @route '/surgeries'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::index
* @see [unknown]:0
* @route '/surgeries'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::index
* @see [unknown]:0
* @route '/surgeries'
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
* @see \App\Http\Controllers\SurgeryController::create
* @see [unknown]:0
* @route '/surgeries/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/surgeries/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SurgeryController::create
* @see [unknown]:0
* @route '/surgeries/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::create
* @see [unknown]:0
* @route '/surgeries/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::create
* @see [unknown]:0
* @route '/surgeries/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SurgeryController::create
* @see [unknown]:0
* @route '/surgeries/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::create
* @see [unknown]:0
* @route '/surgeries/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::create
* @see [unknown]:0
* @route '/surgeries/create'
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
* @see \App\Http\Controllers\SurgeryController::store
* @see [unknown]:0
* @route '/surgeries'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/surgeries',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SurgeryController::store
* @see [unknown]:0
* @route '/surgeries'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::store
* @see [unknown]:0
* @route '/surgeries'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::store
* @see [unknown]:0
* @route '/surgeries'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::store
* @see [unknown]:0
* @route '/surgeries'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\SurgeryController::show
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
export const show = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/surgeries/{surgery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SurgeryController::show
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
show.url = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { surgery: args }
    }

    if (Array.isArray(args)) {
        args = {
            surgery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        surgery: args.surgery,
    }

    return show.definition.url
            .replace('{surgery}', parsedArgs.surgery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::show
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
show.get = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::show
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
show.head = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SurgeryController::show
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
const showForm = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::show
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
showForm.get = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::show
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
showForm.head = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SurgeryController::edit
* @see [unknown]:0
* @route '/surgeries/{surgery}/edit'
*/
export const edit = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/surgeries/{surgery}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SurgeryController::edit
* @see [unknown]:0
* @route '/surgeries/{surgery}/edit'
*/
edit.url = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { surgery: args }
    }

    if (Array.isArray(args)) {
        args = {
            surgery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        surgery: args.surgery,
    }

    return edit.definition.url
            .replace('{surgery}', parsedArgs.surgery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::edit
* @see [unknown]:0
* @route '/surgeries/{surgery}/edit'
*/
edit.get = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::edit
* @see [unknown]:0
* @route '/surgeries/{surgery}/edit'
*/
edit.head = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SurgeryController::edit
* @see [unknown]:0
* @route '/surgeries/{surgery}/edit'
*/
const editForm = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::edit
* @see [unknown]:0
* @route '/surgeries/{surgery}/edit'
*/
editForm.get = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurgeryController::edit
* @see [unknown]:0
* @route '/surgeries/{surgery}/edit'
*/
editForm.head = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SurgeryController::update
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
export const update = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/surgeries/{surgery}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\SurgeryController::update
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
update.url = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { surgery: args }
    }

    if (Array.isArray(args)) {
        args = {
            surgery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        surgery: args.surgery,
    }

    return update.definition.url
            .replace('{surgery}', parsedArgs.surgery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::update
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
update.put = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\SurgeryController::update
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
update.patch = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\SurgeryController::update
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
const updateForm = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::update
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
updateForm.put = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::update
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
updateForm.patch = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SurgeryController::destroy
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
export const destroy = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/surgeries/{surgery}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SurgeryController::destroy
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
destroy.url = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { surgery: args }
    }

    if (Array.isArray(args)) {
        args = {
            surgery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        surgery: args.surgery,
    }

    return destroy.definition.url
            .replace('{surgery}', parsedArgs.surgery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::destroy
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
destroy.delete = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\SurgeryController::destroy
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
const destroyForm = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::destroy
* @see [unknown]:0
* @route '/surgeries/{surgery}'
*/
destroyForm.delete = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SurgeryController::start
* @see [unknown]:0
* @route '/surgeries/{surgery}/start'
*/
export const start = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/surgeries/{surgery}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SurgeryController::start
* @see [unknown]:0
* @route '/surgeries/{surgery}/start'
*/
start.url = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { surgery: args }
    }

    if (Array.isArray(args)) {
        args = {
            surgery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        surgery: args.surgery,
    }

    return start.definition.url
            .replace('{surgery}', parsedArgs.surgery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::start
* @see [unknown]:0
* @route '/surgeries/{surgery}/start'
*/
start.post = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::start
* @see [unknown]:0
* @route '/surgeries/{surgery}/start'
*/
const startForm = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::start
* @see [unknown]:0
* @route '/surgeries/{surgery}/start'
*/
startForm.post = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

start.form = startForm

/**
* @see \App\Http\Controllers\SurgeryController::complete
* @see [unknown]:0
* @route '/surgeries/{surgery}/complete'
*/
export const complete = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/surgeries/{surgery}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SurgeryController::complete
* @see [unknown]:0
* @route '/surgeries/{surgery}/complete'
*/
complete.url = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { surgery: args }
    }

    if (Array.isArray(args)) {
        args = {
            surgery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        surgery: args.surgery,
    }

    return complete.definition.url
            .replace('{surgery}', parsedArgs.surgery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::complete
* @see [unknown]:0
* @route '/surgeries/{surgery}/complete'
*/
complete.post = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::complete
* @see [unknown]:0
* @route '/surgeries/{surgery}/complete'
*/
const completeForm = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::complete
* @see [unknown]:0
* @route '/surgeries/{surgery}/complete'
*/
completeForm.post = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

complete.form = completeForm

/**
* @see \App\Http\Controllers\SurgeryController::cancel
* @see [unknown]:0
* @route '/surgeries/{surgery}/cancel'
*/
export const cancel = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/surgeries/{surgery}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SurgeryController::cancel
* @see [unknown]:0
* @route '/surgeries/{surgery}/cancel'
*/
cancel.url = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { surgery: args }
    }

    if (Array.isArray(args)) {
        args = {
            surgery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        surgery: args.surgery,
    }

    return cancel.definition.url
            .replace('{surgery}', parsedArgs.surgery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurgeryController::cancel
* @see [unknown]:0
* @route '/surgeries/{surgery}/cancel'
*/
cancel.post = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::cancel
* @see [unknown]:0
* @route '/surgeries/{surgery}/cancel'
*/
const cancelForm = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SurgeryController::cancel
* @see [unknown]:0
* @route '/surgeries/{surgery}/cancel'
*/
cancelForm.post = (args: { surgery: string | number } | [surgery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

cancel.form = cancelForm

const SurgeryController = { index, create, store, show, edit, update, destroy, start, complete, cancel }

export default SurgeryController