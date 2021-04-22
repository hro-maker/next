export interface ItodosInitialstate{
    todos:Itodo[],
    loading:Boolean,
    error:null | String
}
export interface Itodo{
    userId: Number,
    id: number,
    title: string,
    completed: boolean
}
export enum todoactiontypes{
fetcht_request='fetcht_request',
fetcht_success='fetcht_success',
fetcht_failure='fetcht_failure'
}
interface fetchrequest{
            type:todoactiontypes.fetcht_request
}
interface fetchsuccess{
    type:todoactiontypes.fetcht_success,
    payload:Itodo[]
}
interface fetchfailure{
    type:todoactiontypes.fetcht_failure,
    payload:String | null
}
export type TodosActionsTypes = fetchrequest | fetchsuccess | fetchfailure