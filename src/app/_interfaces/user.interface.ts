import { UserService } from '../_services/user.service';

export type User = {
  nom: string;
  prenom: string;
  email: string;
  role: string;
  service: string;
  projets: string;
  motDePasse: string;
}