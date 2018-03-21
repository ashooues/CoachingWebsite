import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { BasicGridComponent } from './basic-grid.component';

export const basicGridRoute: Routes = [
    {
        path: 'basic-grid',
        component: BasicGridComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Basic Grid'
        },
        canActivate: [UserRouteAccessService]
    } ];
