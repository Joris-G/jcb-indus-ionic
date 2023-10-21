import { dinero as money, Dinero as Money, add } from 'dinero.js';
import { EUR } from '@dinero.js/currencies';
import { Part } from './part.interface';
import { Team, User } from './user.interface';

export interface Project {
  name: string;
  client: string;
  jcbTeam: Team;
  clientTeam: Team;
  parts: Part[];
  jalons: Jalon[];
}

export interface Jalon {
  nom: string;
  dateDebutPlanifie: Date;
  dateFinPlanifie: Date;
  dateDebutRealise: Date | undefined;
  dateFinRealise: Date | undefined;
  budget: Money<number>;
  depenses: Money<number>;
}

const jalon: Jalon = {
  budget: money({ amount: -200, currency: EUR }),
  nom: '',
  dateDebutPlanifie: new Date(),
  dateFinPlanifie: new Date(),
  dateDebutRealise: undefined,
  dateFinRealise: undefined,
  depenses: money({ amount: 0, currency: EUR }),
};
