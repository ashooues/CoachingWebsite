import { Route } from '@angular/router';

import { NavigComponent } from './navig.component';

export const navigRoute: Route = {
    path: '',
    component: NavigComponent,
    outlet: 'navig'
};
