import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MessageController::index
* @see app/Http/Controllers/Api/MessageController.php:18
* @route '/api/v1/threads'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/threads',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MessageController::index
* @see app/Http/Controllers/Api/MessageController.php:18
* @route '/api/v1/threads'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MessageController::index
* @see app/Http/Controllers/Api/MessageController.php:18
* @route '/api/v1/threads'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MessageController::index
* @see app/Http/Controllers/Api/MessageController.php:18
* @route '/api/v1/threads'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MessageController::index
* @see app/Http/Controllers/Api/MessageController.php:18
* @route '/api/v1/threads'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MessageController::index
* @see app/Http/Controllers/Api/MessageController.php:18
* @route '/api/v1/threads'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MessageController::index
* @see app/Http/Controllers/Api/MessageController.php:18
* @route '/api/v1/threads'
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
* @see \App\Http\Controllers\Api\MessageController::show
* @see app/Http/Controllers/Api/MessageController.php:30
* @route '/api/v1/threads/{thread}'
*/
export const show = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/threads/{thread}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MessageController::show
* @see app/Http/Controllers/Api/MessageController.php:30
* @route '/api/v1/threads/{thread}'
*/
show.url = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { thread: args }
    }

    if (Array.isArray(args)) {
        args = {
            thread: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        thread: args.thread,
    }

    return show.definition.url
            .replace('{thread}', parsedArgs.thread.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MessageController::show
* @see app/Http/Controllers/Api/MessageController.php:30
* @route '/api/v1/threads/{thread}'
*/
show.get = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MessageController::show
* @see app/Http/Controllers/Api/MessageController.php:30
* @route '/api/v1/threads/{thread}'
*/
show.head = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\MessageController::show
* @see app/Http/Controllers/Api/MessageController.php:30
* @route '/api/v1/threads/{thread}'
*/
const showForm = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MessageController::show
* @see app/Http/Controllers/Api/MessageController.php:30
* @route '/api/v1/threads/{thread}'
*/
showForm.get = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\MessageController::show
* @see app/Http/Controllers/Api/MessageController.php:30
* @route '/api/v1/threads/{thread}'
*/
showForm.head = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\MessageController::storeMessage
* @see app/Http/Controllers/Api/MessageController.php:37
* @route '/api/v1/threads/{thread}/messages'
*/
export const storeMessage = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeMessage.url(args, options),
    method: 'post',
})

storeMessage.definition = {
    methods: ["post"],
    url: '/api/v1/threads/{thread}/messages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\MessageController::storeMessage
* @see app/Http/Controllers/Api/MessageController.php:37
* @route '/api/v1/threads/{thread}/messages'
*/
storeMessage.url = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { thread: args }
    }

    if (Array.isArray(args)) {
        args = {
            thread: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        thread: args.thread,
    }

    return storeMessage.definition.url
            .replace('{thread}', parsedArgs.thread.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MessageController::storeMessage
* @see app/Http/Controllers/Api/MessageController.php:37
* @route '/api/v1/threads/{thread}/messages'
*/
storeMessage.post = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeMessage.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MessageController::storeMessage
* @see app/Http/Controllers/Api/MessageController.php:37
* @route '/api/v1/threads/{thread}/messages'
*/
const storeMessageForm = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeMessage.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\MessageController::storeMessage
* @see app/Http/Controllers/Api/MessageController.php:37
* @route '/api/v1/threads/{thread}/messages'
*/
storeMessageForm.post = (args: { thread: string | number } | [thread: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeMessage.url(args, options),
    method: 'post',
})

storeMessage.form = storeMessageForm

const MessageController = { index, show, storeMessage }

export default MessageController