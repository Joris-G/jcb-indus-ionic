export interface Chrono{
    id:number
    name:string

}

export type ChronoCreation = Omit<Chrono,"id">;

export type ChronoList = Chrono[];