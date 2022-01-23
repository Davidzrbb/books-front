import { BibliothequeComponent } from '../bibliotheque/bibliotheque.component';
import { ConnexionComponent } from '../connexion/connexion.component';

export const routes = [
  {
    path: 'connexion',
    label: 'Connexion',
    component: ConnexionComponent,
  },
  {
    path: 'bibliotheque',
    label: 'Bibliotheque',
    component: BibliothequeComponent,
  }
];
