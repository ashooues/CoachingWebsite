import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { NavigComponent } from './navig.component';

export const navigRoute: Routes = [
    {
        path: 'navig',
        component: NavigComponent,
        data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Navig'
    },
    canActivate: [UserRouteAccessService]
} ];




/*
import { Route } from '@angular/router';

import { NavigComponent } from './navig.component';

export const navigRoute: Route = {
    path: '',
    component: NavigComponent,
    outlet: 'navig'
};
*/
