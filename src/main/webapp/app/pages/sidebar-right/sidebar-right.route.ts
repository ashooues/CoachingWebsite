import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { SidebarRightComponent } from './sidebar-right.component';

export const sidebarRightRoute: Routes = [
    {
        path: 'sidebar-right',
        component: SidebarRightComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sidebar Right'
        },
        canActivate: [UserRouteAccessService]
    } ];
