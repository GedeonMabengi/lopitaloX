import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
export const showRegistrationForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRegistrationForm.url(options),
    method: 'get',
})

showRegistrationForm.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
showRegistrationForm.url = (options?: RouteQueryOptions) => {
    return showRegistrationForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
showRegistrationForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRegistrationForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
showRegistrationForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showRegistrationForm.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
const showRegistrationFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showRegistrationForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
showRegistrationFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showRegistrationForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::showRegistrationForm
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
showRegistrationFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showRegistrationForm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showRegistrationForm.form = showRegistrationFormForm

/**
* @see \App\Http\Controllers\Auth\RegisterController::register
* @see app/Http/Controllers/Auth/RegisterController.php:18
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\RegisterController::register
* @see app/Http/Controllers/Auth/RegisterController.php:18
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterController::register
* @see app/Http/Controllers/Auth/RegisterController.php:18
* @route '/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::register
* @see app/Http/Controllers/Auth/RegisterController.php:18
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::register
* @see app/Http/Controllers/Auth/RegisterController.php:18
* @route '/register'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

const RegisterController = { showRegistrationForm, register }

export default RegisterController