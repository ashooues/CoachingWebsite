import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { FullWidthComponent } from './full-width.component';

export const fullWidthRoute: Routes = [
    {
        path: 'full-width',
        component: FullWidthComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Full Width'
        },
        canActivate: [UserRouteAccessService]
    } ];
