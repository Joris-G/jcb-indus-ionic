import { Part } from "./part.interface";
export interface ChronoProject {
    id:number
    name:string
    project: string
    chronos: ChronoList
}

export type ChronoList = Chrono[];
export interface Chrono {
    id?: number
    parts: ChronoPartList
}
export type ChronoPartList = ChronoPart[];
export interface ChronoPart extends Part {
    workorder?: number
    serialNumber?: number
}



export type ChronoProjectCreation = Omit<ChronoProject, "id">;
export type ChronoCreation = Omit<Chrono, "id">;
export type ChronoProjectList = ChronoProject[];