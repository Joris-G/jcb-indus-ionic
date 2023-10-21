export interface Part {
  partNumber: string;
  designation: string;
}

export enum Typologie {
  Composite = 'COMPOSITE',
  Equipement = 'EQUIPEMENT',
  Equipee = 'EQUIPEE',
  Assemblage = 'ASSY',
  Meca = 'MECA',
}

export interface AssyPart extends Part {}
export interface EquipedPart extends Part {}
export interface ElementaryPart extends Part {}

export interface MecaPart extends ElementaryPart {}
export interface CompositePart extends ElementaryPart {}

export interface SheetMetalPart extends MecaPart {}
export interface MachinedPart extends MecaPart {}

export interface MonoliticPart extends CompositePart {}
export interface SandwichPart extends CompositePart {}
