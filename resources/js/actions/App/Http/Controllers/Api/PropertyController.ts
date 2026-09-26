import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PropertyController::index
* @see app/Http/Controllers/Api/PropertyController.php:15
* @route '/api/v1/properties'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/properties',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PropertyController::index
* @see app/Http/Controllers/Api/PropertyController.php:15
* @route '/api/v1/properties'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PropertyController::index
* @see app/Http/Controllers/Api/PropertyController.php:15
* @route '/api/v1/properties'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PropertyController::index
* @see app/Http/Controllers/Api/PropertyController.php:15
* @route '/api/v1/properties'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PropertyController::index
* @see app/Http/Controllers/Api/PropertyController.php:15
* @route '/api/v1/properties'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PropertyController::index
* @see app/Http/Controllers/Api/PropertyController.php:15
* @route '/api/v1/properties'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PropertyController::index
* @see app/Http/Controllers/Api/PropertyController.php:15
* @route '/api/v1/properties'
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
* @see \App\Http\Controllers\Api\PropertyController::show
* @see app/Http/Controllers/Api/PropertyController.php:28
* @route '/api/v1/properties/{property}'
*/
export const show = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/properties/{property}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PropertyController::show
* @see app/Http/Controllers/Api/PropertyController.php:28
* @route '/api/v1/properties/{property}'
*/
show.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

    if (Array.isArray(args)) {
        args = {
            property: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        property: args.property,
    }

    return show.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PropertyController::show
* @see app/Http/Controllers/Api/PropertyController.php:28
* @route '/api/v1/properties/{property}'
*/
show.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PropertyController::show
* @see app/Http/Controllers/Api/PropertyController.php:28
* @route '/api/v1/properties/{property}'
*/
show.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PropertyController::show
* @see app/Http/Controllers/Api/PropertyController.php:28
* @route '/api/v1/properties/{property}'
*/
const showForm = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PropertyController::show
* @see app/Http/Controllers/Api/PropertyController.php:28
* @route '/api/v1/properties/{property}'
*/
showForm.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PropertyController::show
* @see app/Http/Controllers/Api/PropertyController.php:28
* @route '/api/v1/properties/{property}'
*/
showForm.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const PropertyController = { index, show }

export default PropertyController