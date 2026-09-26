import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import stock0387f8 from './stock'
/**
* @see \App\Http\Controllers\MedicationController::index
* @see [unknown]:0
* @route '/medications'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/medications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicationController::index
* @see [unknown]:0
* @route '/medications'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicationController::index
* @see [unknown]:0
* @route '/medications'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::index
* @see [unknown]:0
* @route '/medications'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MedicationController::index
* @see [unknown]:0
* @route '/medications'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::index
* @see [unknown]:0
* @route '/medications'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::index
* @see [unknown]:0
* @route '/medications'
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
* @see \App\Http\Controllers\MedicationController::create
* @see [unknown]:0
* @route '/medications/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/medications/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicationController::create
* @see [unknown]:0
* @route '/medications/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicationController::create
* @see [unknown]:0
* @route '/medications/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::create
* @see [unknown]:0
* @route '/medications/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MedicationController::create
* @see [unknown]:0
* @route '/medications/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::create
* @see [unknown]:0
* @route '/medications/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::create
* @see [unknown]:0
* @route '/medications/create'
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
* @see \App\Http\Controllers\MedicationController::store
* @see [unknown]:0
* @route '/medications'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/medications',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MedicationController::store
* @see [unknown]:0
* @route '/medications'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicationController::store
* @see [unknown]:0
* @route '/medications'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MedicationController::store
* @see [unknown]:0
* @route '/medications'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MedicationController::store
* @see [unknown]:0
* @route '/medications'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\MedicationController::show
* @see [unknown]:0
* @route '/medications/{medication}'
*/
export const show = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/medications/{medication}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicationController::show
* @see [unknown]:0
* @route '/medications/{medication}'
*/
show.url = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medication: args }
    }

    if (Array.isArray(args)) {
        args = {
            medication: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medication: args.medication,
    }

    return show.definition.url
            .replace('{medication}', parsedArgs.medication.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicationController::show
* @see [unknown]:0
* @route '/medications/{medication}'
*/
show.get = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::show
* @see [unknown]:0
* @route '/medications/{medication}'
*/
show.head = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MedicationController::show
* @see [unknown]:0
* @route '/medications/{medication}'
*/
const showForm = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::show
* @see [unknown]:0
* @route '/medications/{medication}'
*/
showForm.get = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::show
* @see [unknown]:0
* @route '/medications/{medication}'
*/
showForm.head = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MedicationController::edit
* @see [unknown]:0
* @route '/medications/{medication}/edit'
*/
export const edit = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/medications/{medication}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicationController::edit
* @see [unknown]:0
* @route '/medications/{medication}/edit'
*/
edit.url = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medication: args }
    }

    if (Array.isArray(args)) {
        args = {
            medication: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medication: args.medication,
    }

    return edit.definition.url
            .replace('{medication}', parsedArgs.medication.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicationController::edit
* @see [unknown]:0
* @route '/medications/{medication}/edit'
*/
edit.get = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::edit
* @see [unknown]:0
* @route '/medications/{medication}/edit'
*/
edit.head = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MedicationController::edit
* @see [unknown]:0
* @route '/medications/{medication}/edit'
*/
const editForm = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::edit
* @see [unknown]:0
* @route '/medications/{medication}/edit'
*/
editForm.get = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MedicationController::edit
* @see [unknown]:0
* @route '/medications/{medication}/edit'
*/
editForm.head = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MedicationController::update
* @see [unknown]:0
* @route '/medications/{medication}'
*/
export const update = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/medications/{medication}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MedicationController::update
* @see [unknown]:0
* @route '/medications/{medication}'
*/
update.url = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medication: args }
    }

    if (Array.isArray(args)) {
        args = {
            medication: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medication: args.medication,
    }

    return update.definition.url
            .replace('{medication}', parsedArgs.medication.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicationController::update
* @see [unknown]:0
* @route '/medications/{medication}'
*/
update.put = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MedicationController::update
* @see [unknown]:0
* @route '/medications/{medication}'
*/
update.patch = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MedicationController::update
* @see [unknown]:0
* @route '/medications/{medication}'
*/
const updateForm = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MedicationController::update
* @see [unknown]:0
* @route '/medications/{medication}'
*/
updateForm.put = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MedicationController::update
* @see [unknown]:0
* @route '/medications/{medication}'
*/
updateForm.patch = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MedicationController::destroy
* @see [unknown]:0
* @route '/medications/{medication}'
*/
export const destroy = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/medications/{medication}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MedicationController::destroy
* @see [unknown]:0
* @route '/medications/{medication}'
*/
destroy.url = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medication: args }
    }

    if (Array.isArray(args)) {
        args = {
            medication: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medication: args.medication,
    }

    return destroy.definition.url
            .replace('{medication}', parsedArgs.medication.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicationController::destroy
* @see [unknown]:0
* @route '/medications/{medication}'
*/
destroy.delete = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MedicationController::destroy
* @see [unknown]:0
* @route '/medications/{medication}'
*/
const destroyForm = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MedicationController::destroy
* @see [unknown]:0
* @route '/medications/{medication}'
*/
destroyForm.delete = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\StockTransactionController::stock
* @see [unknown]:0
* @route '/medications/{medication}/stock'
*/
export const stock = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stock.url(args, options),
    method: 'get',
})

stock.definition = {
    methods: ["get","head"],
    url: '/medications/{medication}/stock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockTransactionController::stock
* @see [unknown]:0
* @route '/medications/{medication}/stock'
*/
stock.url = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medication: args }
    }

    if (Array.isArray(args)) {
        args = {
            medication: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medication: args.medication,
    }

    return stock.definition.url
            .replace('{medication}', parsedArgs.medication.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockTransactionController::stock
* @see [unknown]:0
* @route '/medications/{medication}/stock'
*/
stock.get = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stock.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StockTransactionController::stock
* @see [unknown]:0
* @route '/medications/{medication}/stock'
*/
stock.head = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stock.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StockTransactionController::stock
* @see [unknown]:0
* @route '/medications/{medication}/stock'
*/
const stockForm = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stock.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StockTransactionController::stock
* @see [unknown]:0
* @route '/medications/{medication}/stock'
*/
stockForm.get = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stock.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StockTransactionController::stock
* @see [unknown]:0
* @route '/medications/{medication}/stock'
*/
stockForm.head = (args: { medication: string | number } | [medication: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stock.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stock.form = stockForm

const medications = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    stock: Object.assign(stock, stock0387f8),
}

export default medications