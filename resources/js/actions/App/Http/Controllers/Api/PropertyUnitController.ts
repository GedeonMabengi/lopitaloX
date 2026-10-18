import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PropertyUnitController::index
 * @see app/Http/Controllers/Api/PropertyUnitController.php:15
 * @route '/api/v1/property-units'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/property-units',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PropertyUnitController::index
 * @see app/Http/Controllers/Api/PropertyUnitController.php:15
 * @route '/api/v1/property-units'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PropertyUnitController::index
 * @see app/Http/Controllers/Api/PropertyUnitController.php:15
 * @route '/api/v1/property-units'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\PropertyUnitController::index
 * @see app/Http/Controllers/Api/PropertyUnitController.php:15
 * @route '/api/v1/property-units'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\PropertyUnitController::index
 * @see app/Http/Controllers/Api/PropertyUnitController.php:15
 * @route '/api/v1/property-units'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\PropertyUnitController::index
 * @see app/Http/Controllers/Api/PropertyUnitController.php:15
 * @route '/api/v1/property-units'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\PropertyUnitController::index
 * @see app/Http/Controllers/Api/PropertyUnitController.php:15
 * @route '/api/v1/property-units'
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
* @see \App\Http\Controllers\Api\PropertyUnitController::show
 * @see app/Http/Controllers/Api/PropertyUnitController.php:28
 * @route '/api/v1/property-units/{propertyUnit}'
 */
export const show = (args: { propertyUnit: string | number } | [propertyUnit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/property-units/{propertyUnit}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PropertyUnitController::show
 * @see app/Http/Controllers/Api/PropertyUnitController.php:28
 * @route '/api/v1/property-units/{propertyUnit}'
 */
show.url = (args: { propertyUnit: string | number } | [propertyUnit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { propertyUnit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    propertyUnit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        propertyUnit: args.propertyUnit,
                }

    return show.definition.url
            .replace('{propertyUnit}', parsedArgs.propertyUnit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PropertyUnitController::show
 * @see app/Http/Controllers/Api/PropertyUnitController.php:28
 * @route '/api/v1/property-units/{propertyUnit}'
 */
show.get = (args: { propertyUnit: string | number } | [propertyUnit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\PropertyUnitController::show
 * @see app/Http/Controllers/Api/PropertyUnitController.php:28
 * @route '/api/v1/property-units/{propertyUnit}'
 */
show.head = (args: { propertyUnit: string | number } | [propertyUnit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\PropertyUnitController::show
 * @see app/Http/Controllers/Api/PropertyUnitController.php:28
 * @route '/api/v1/property-units/{propertyUnit}'
 */
    const showForm = (args: { propertyUnit: string | number } | [propertyUnit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\PropertyUnitController::show
 * @see app/Http/Controllers/Api/PropertyUnitController.php:28
 * @route '/api/v1/property-units/{propertyUnit}'
 */
        showForm.get = (args: { propertyUnit: string | number } | [propertyUnit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\PropertyUnitController::show
 * @see app/Http/Controllers/Api/PropertyUnitController.php:28
 * @route '/api/v1/property-units/{propertyUnit}'
 */
        showForm.head = (args: { propertyUnit: string | number } | [propertyUnit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const PropertyUnitController = { index, show }

export default PropertyUnitController