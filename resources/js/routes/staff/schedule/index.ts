import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
export const update = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/staff/{staff}/schedule',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
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
* @route '/staff/{staff}/schedule'
*/
update.post = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
const updateForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::update
* @see [unknown]:0
* @route '/staff/{staff}/schedule'
*/
updateForm.post = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

update.form = updateForm

const schedule = {
    update: Object.assign(update, update),
}

export default schedule