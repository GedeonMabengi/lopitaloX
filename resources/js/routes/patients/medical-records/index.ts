import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:12
 * @route '/patients/{patient}/medical-records'
 */
export const index = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/patients/{patient}/medical-records',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:12
 * @route '/patients/{patient}/medical-records'
 */
index.url = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { patient: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { patient: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    patient: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        patient: typeof args.patient === 'object'
                ? args.patient.id
                : args.patient,
                }

    return index.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:12
 * @route '/patients/{patient}/medical-records'
 */
index.get = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:12
 * @route '/patients/{patient}/medical-records'
 */
index.head = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:12
 * @route '/patients/{patient}/medical-records'
 */
    const indexForm = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:12
 * @route '/patients/{patient}/medical-records'
 */
        indexForm.get = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MedicalRecordController::index
 * @see app/Http/Controllers/MedicalRecordController.php:12
 * @route '/patients/{patient}/medical-records'
 */
        indexForm.head = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const medicalRecords = {
    index: Object.assign(index, index),
}

export default medicalRecords