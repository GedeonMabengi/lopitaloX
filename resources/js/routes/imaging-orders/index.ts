import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import report from './report'
/**
* @see \App\Http\Controllers\ImagingOrderController::index
* @see [unknown]:0
* @route '/imaging-orders'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/imaging-orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImagingOrderController::index
* @see [unknown]:0
* @route '/imaging-orders'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingOrderController::index
* @see [unknown]:0
* @route '/imaging-orders'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::index
* @see [unknown]:0
* @route '/imaging-orders'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::index
* @see [unknown]:0
* @route '/imaging-orders'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::index
* @see [unknown]:0
* @route '/imaging-orders'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::index
* @see [unknown]:0
* @route '/imaging-orders'
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
* @see \App\Http\Controllers\ImagingOrderController::create
* @see [unknown]:0
* @route '/imaging-orders/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/imaging-orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImagingOrderController::create
* @see [unknown]:0
* @route '/imaging-orders/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingOrderController::create
* @see [unknown]:0
* @route '/imaging-orders/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::create
* @see [unknown]:0
* @route '/imaging-orders/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::create
* @see [unknown]:0
* @route '/imaging-orders/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::create
* @see [unknown]:0
* @route '/imaging-orders/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::create
* @see [unknown]:0
* @route '/imaging-orders/create'
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
* @see \App\Http\Controllers\ImagingOrderController::store
* @see [unknown]:0
* @route '/imaging-orders'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/imaging-orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ImagingOrderController::store
* @see [unknown]:0
* @route '/imaging-orders'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingOrderController::store
* @see [unknown]:0
* @route '/imaging-orders'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::store
* @see [unknown]:0
* @route '/imaging-orders'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::store
* @see [unknown]:0
* @route '/imaging-orders'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ImagingOrderController::show
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
export const show = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/imaging-orders/{imaging_order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImagingOrderController::show
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
show.url = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imaging_order: args }
    }

    if (Array.isArray(args)) {
        args = {
            imaging_order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        imaging_order: args.imaging_order,
    }

    return show.definition.url
            .replace('{imaging_order}', parsedArgs.imaging_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingOrderController::show
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
show.get = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::show
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
show.head = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::show
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
const showForm = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::show
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
showForm.get = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::show
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
showForm.head = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ImagingOrderController::edit
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}/edit'
*/
export const edit = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/imaging-orders/{imaging_order}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImagingOrderController::edit
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}/edit'
*/
edit.url = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imaging_order: args }
    }

    if (Array.isArray(args)) {
        args = {
            imaging_order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        imaging_order: args.imaging_order,
    }

    return edit.definition.url
            .replace('{imaging_order}', parsedArgs.imaging_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingOrderController::edit
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}/edit'
*/
edit.get = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::edit
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}/edit'
*/
edit.head = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::edit
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}/edit'
*/
const editForm = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::edit
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}/edit'
*/
editForm.get = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::edit
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}/edit'
*/
editForm.head = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ImagingOrderController::update
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
export const update = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/imaging-orders/{imaging_order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ImagingOrderController::update
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
update.url = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imaging_order: args }
    }

    if (Array.isArray(args)) {
        args = {
            imaging_order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        imaging_order: args.imaging_order,
    }

    return update.definition.url
            .replace('{imaging_order}', parsedArgs.imaging_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingOrderController::update
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
update.put = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::update
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
update.patch = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::update
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
const updateForm = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::update
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
updateForm.put = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::update
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
updateForm.patch = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ImagingOrderController::destroy
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
export const destroy = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/imaging-orders/{imaging_order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ImagingOrderController::destroy
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
destroy.url = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imaging_order: args }
    }

    if (Array.isArray(args)) {
        args = {
            imaging_order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        imaging_order: args.imaging_order,
    }

    return destroy.definition.url
            .replace('{imaging_order}', parsedArgs.imaging_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingOrderController::destroy
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
destroy.delete = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::destroy
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
const destroyForm = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::destroy
* @see [unknown]:0
* @route '/imaging-orders/{imaging_order}'
*/
destroyForm.delete = (args: { imaging_order: string | number } | [imaging_order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ImagingOrderController::schedule
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/schedule'
*/
export const schedule = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: schedule.url(args, options),
    method: 'post',
})

schedule.definition = {
    methods: ["post"],
    url: '/imaging-orders/{imagingOrder}/schedule',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ImagingOrderController::schedule
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/schedule'
*/
schedule.url = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imagingOrder: args }
    }

    if (Array.isArray(args)) {
        args = {
            imagingOrder: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        imagingOrder: args.imagingOrder,
    }

    return schedule.definition.url
            .replace('{imagingOrder}', parsedArgs.imagingOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingOrderController::schedule
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/schedule'
*/
schedule.post = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: schedule.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::schedule
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/schedule'
*/
const scheduleForm = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: schedule.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::schedule
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/schedule'
*/
scheduleForm.post = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: schedule.url(args, options),
    method: 'post',
})

schedule.form = scheduleForm

/**
* @see \App\Http\Controllers\ImagingOrderController::perform
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/perform'
*/
export const perform = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: perform.url(args, options),
    method: 'post',
})

perform.definition = {
    methods: ["post"],
    url: '/imaging-orders/{imagingOrder}/perform',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ImagingOrderController::perform
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/perform'
*/
perform.url = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imagingOrder: args }
    }

    if (Array.isArray(args)) {
        args = {
            imagingOrder: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        imagingOrder: args.imagingOrder,
    }

    return perform.definition.url
            .replace('{imagingOrder}', parsedArgs.imagingOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImagingOrderController::perform
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/perform'
*/
perform.post = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: perform.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::perform
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/perform'
*/
const performForm = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: perform.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImagingOrderController::perform
* @see [unknown]:0
* @route '/imaging-orders/{imagingOrder}/perform'
*/
performForm.post = (args: { imagingOrder: string | number } | [imagingOrder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: perform.url(args, options),
    method: 'post',
})

perform.form = performForm

const imagingOrders = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    schedule: Object.assign(schedule, schedule),
    perform: Object.assign(perform, perform),
    report: Object.assign(report, report),
}

export default imagingOrders