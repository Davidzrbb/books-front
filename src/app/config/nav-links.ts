import { BibliothequeComponent } from '../bibliotheque/bibliotheque.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { AddBookComponent } from '../add-book/add-book.component';

export const routes = [

  {
    path: 'bibliotheque',
    label: 'Bibliotheque',
    component: BibliothequeComponent,
  },
  {
    path: 'add-book',
    label: 'Add',
    component: AddBookComponent,
  },
    {
      path: 'connexion',
      label: 'Connexion',
      component: ConnexionComponent,
    },
];
