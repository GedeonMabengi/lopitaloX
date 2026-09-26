import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
export const store = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/staff/{staff}/leaves',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
store.url = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
store.post = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
const storeForm = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StaffController::store
* @see [unknown]:0
* @route '/staff/{staff}/leaves'
*/
storeForm.post = (args: { staff: string | number } | [staff: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const leaves = {
    store: Object.assign(store, store),
}

export default leaves