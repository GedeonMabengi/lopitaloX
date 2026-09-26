import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\NotificationController::index
* @see app/Http/Controllers/Api/NotificationController.php:15
* @route '/api/v1/notifications'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NotificationController::index
* @see app/Http/Controllers/Api/NotificationController.php:15
* @route '/api/v1/notifications'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NotificationController::index
* @see app/Http/Controllers/Api/NotificationController.php:15
* @route '/api/v1/notifications'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NotificationController::index
* @see app/Http/Controllers/Api/NotificationController.php:15
* @route '/api/v1/notifications'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\NotificationController::index
* @see app/Http/Controllers/Api/NotificationController.php:15
* @route '/api/v1/notifications'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NotificationController::index
* @see app/Http/Controllers/Api/NotificationController.php:15
* @route '/api/v1/notifications'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NotificationController::index
* @see app/Http/Controllers/Api/NotificationController.php:15
* @route '/api/v1/notifications'
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
* @see \App\Http\Controllers\Api\NotificationController::markRead
* @see app/Http/Controllers/Api/NotificationController.php:24
* @route '/api/v1/notifications/{notificationId}/read'
*/
export const markRead = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markRead.url(args, options),
    method: 'post',
})

markRead.definition = {
    methods: ["post"],
    url: '/api/v1/notifications/{notificationId}/read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\NotificationController::markRead
* @see app/Http/Controllers/Api/NotificationController.php:24
* @route '/api/v1/notifications/{notificationId}/read'
*/
markRead.url = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notificationId: args }
    }

    if (Array.isArray(args)) {
        args = {
            notificationId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notificationId: args.notificationId,
    }

    return markRead.definition.url
            .replace('{notificationId}', parsedArgs.notificationId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NotificationController::markRead
* @see app/Http/Controllers/Api/NotificationController.php:24
* @route '/api/v1/notifications/{notificationId}/read'
*/
markRead.post = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markRead.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\NotificationController::markRead
* @see app/Http/Controllers/Api/NotificationController.php:24
* @route '/api/v1/notifications/{notificationId}/read'
*/
const markReadForm = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markRead.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\NotificationController::markRead
* @see app/Http/Controllers/Api/NotificationController.php:24
* @route '/api/v1/notifications/{notificationId}/read'
*/
markReadForm.post = (args: { notificationId: string | number } | [notificationId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markRead.url(args, options),
    method: 'post',
})

markRead.form = markReadForm

/**
* @see \App\Http\Controllers\Api\NotificationController::markAllRead
* @see app/Http/Controllers/Api/NotificationController.php:32
* @route '/api/v1/notifications/read-all'
*/
export const markAllRead = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllRead.url(options),
    method: 'post',
})

markAllRead.definition = {
    methods: ["post"],
    url: '/api/v1/notifications/read-all',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\NotificationController::markAllRead
* @see app/Http/Controllers/Api/NotificationController.php:32
* @route '/api/v1/notifications/read-all'
*/
markAllRead.url = (options?: RouteQueryOptions) => {
    return markAllRead.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NotificationController::markAllRead
* @see app/Http/Controllers/Api/NotificationController.php:32
* @route '/api/v1/notifications/read-all'
*/
markAllRead.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllRead.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\NotificationController::markAllRead
* @see app/Http/Controllers/Api/NotificationController.php:32
* @route '/api/v1/notifications/read-all'
*/
const markAllReadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAllRead.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\NotificationController::markAllRead
* @see app/Http/Controllers/Api/NotificationController.php:32
* @route '/api/v1/notifications/read-all'
*/
markAllReadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAllRead.url(options),
    method: 'post',
})

markAllRead.form = markAllReadForm

const NotificationController = { index, markRead, markAllRead }

export default NotificationController