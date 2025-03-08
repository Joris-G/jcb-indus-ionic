export interface Chrono{
    id:number
    name:string
    project: string
    designation: string
    partNumber: string
}

export type ChronoCreation = Omit<Chrono,"id">;

export type ChronoList = Chrono[];