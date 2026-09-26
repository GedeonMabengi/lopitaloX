import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StaffController::index
* @see [unknown]:0
* @route '/staff'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/staff',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StaffController::index
* @see [unknown]:0
* @route '/staff'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::index
* @see [unknown]:0
* @route '/staff'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::index
* @see [unknown]:0
* @route '/staff'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StaffController::index
* @see [unknown]:0
* @route '/staff'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::index
* @see [unknown]:0
* @route '/staff'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::index
* @see [unknown]:0
* @route '/staff'
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
* @see \App\Http\Controllers\StaffController::create
* @see [unknown]:0
* @route '/staff/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/staff/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StaffController::create
* @see [unknown]:0
* @route '/staff/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::create
* @see [unknown]:0
* @route '/staff/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::create
* @see [unknown]:0
* @route '/staff/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StaffController::create
* @see [unknown]:0
* @route '/staff/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::create
* @see [unknown]:0
* @route '/staff/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::create
* @see [unknown]:0
* @route '/staff/create'
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
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/staff',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\StaffController::show
* @see [unknown]:0
* @route '/staff/{staff}'
*/
export const show = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/staff/{staff}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StaffController::show
* @see [unknown]:0
* @route '/staff/{staff}'
*/
show.url = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        staff: args.staff,
    }

    return show.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::show
* @see [unknown]:0
* @route '/staff/{staff}'
*/
show.get = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::show
* @see [unknown]:0
* @route '/staff/{staff}'
*/
show.head = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StaffController::show
* @see [unknown]:0
* @route '/staff/{staff}'
*/
const showForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::show
* @see [unknown]:0
* @route '/staff/{staff}'
*/
showForm.get = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::show
* @see [unknown]:0
* @route '/staff/{staff}'
*/
showForm.head = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StaffController::edit
* @see [unknown]:0
* @route '/staff/{staff}/edit'
*/
export const edit = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/staff/{staff}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StaffController::edit
* @see [unknown]:0
* @route '/staff/{staff}/edit'
*/
edit.url = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        staff: args.staff,
    }

    return edit.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::edit
* @see [unknown]:0
* @route '/staff/{staff}/edit'
*/
edit.get = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::edit
* @see [unknown]:0
* @route '/staff/{staff}/edit'
*/
edit.head = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StaffController::edit
* @see [unknown]:0
* @route '/staff/{staff}/edit'
*/
const editForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::edit
* @see [unknown]:0
* @route '/staff/{staff}/edit'
*/
editForm.get = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::edit
* @see [unknown]:0
* @route '/staff/{staff}/edit'
*/
editForm.head = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}'
*/
export const update = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/staff/{staff}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}'
*/
update.url = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        staff: args.staff,
    }

    return update.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}'
*/
update.put = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}'
*/
update.patch = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}'
*/
const updateForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}'
*/
updateForm.put = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}'
*/
updateForm.patch = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\StaffController::destroy
* @see [unknown]:0
* @route '/staff/{staff}'
*/
export const destroy = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/staff/{staff}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StaffController::destroy
* @see [unknown]:0
* @route '/staff/{staff}'
*/
destroy.url = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        staff: args.staff,
    }

    return destroy.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::destroy
* @see [unknown]:0
* @route '/staff/{staff}'
*/
destroy.delete = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\StaffController::destroy
* @see [unknown]:0
* @route '/staff/{staff}'
*/
const destroyForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::destroy
* @see [unknown]:0
* @route '/staff/{staff}'
*/
destroyForm.delete = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\StaffController::schedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
export const schedule = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedule.url(args, options),
    method: 'get',
})

schedule.definition = {
    methods: ["get","head"],
    url: '/staff/{staff}/schedule',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StaffController::schedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
schedule.url = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        staff: args.staff,
    }

    return schedule.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::schedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
schedule.get = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedule.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::schedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
schedule.head = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: schedule.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StaffController::schedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
const scheduleForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedule.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::schedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
scheduleForm.get = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedule.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::schedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
scheduleForm.head = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedule.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

schedule.form = scheduleForm

/**
* @see \App\Http\Controllers\StaffController::updateSchedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
export const updateSchedule = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSchedule.url(args, options),
    method: 'post',
})

updateSchedule.definition = {
    methods: ["post"],
    url: '/staff/{staff}/schedule',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StaffController::updateSchedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
updateSchedule.url = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        staff: args.staff,
    }

    return updateSchedule.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::updateSchedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
updateSchedule.post = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSchedule.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::updateSchedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
const updateScheduleForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSchedule.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::updateSchedule
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
updateScheduleForm.post = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSchedule.url(args, options),
    method: 'post',
})

updateSchedule.form = updateScheduleForm

/**
* @see \App\Http\Controllers\StaffController::leaves
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
export const leaves = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: leaves.url(args, options),
    method: 'get',
})

leaves.definition = {
    methods: ["get","head"],
    url: '/staff/{staff}/leaves',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StaffController::leaves
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
leaves.url = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        staff: args.staff,
    }

    return leaves.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::leaves
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
leaves.get = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: leaves.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::leaves
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
leaves.head = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: leaves.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StaffController::leaves
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
const leavesForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: leaves.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::leaves
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
leavesForm.get = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: leaves.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StaffController::leaves
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
leavesForm.head = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: leaves.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

leaves.form = leavesForm

/**
* @see \App\Http\Controllers\StaffController::storeLeave
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
export const storeLeave = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeLeave.url(args, options),
    method: 'post',
})

storeLeave.definition = {
    methods: ["post"],
    url: '/staff/{staff}/leaves',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StaffController::storeLeave
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
storeLeave.url = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        staff: args.staff,
    }

    return storeLeave.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::storeLeave
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
storeLeave.post = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeLeave.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::storeLeave
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
const storeLeaveForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeLeave.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::storeLeave
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
storeLeaveForm.post = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeLeave.url(args, options),
    method: 'post',
})

storeLeave.form = storeLeaveForm

const StaffController = { index, create, store, show, edit, update, destroy, schedule, updateSchedule, leaves, storeLeave }

export default StaffController