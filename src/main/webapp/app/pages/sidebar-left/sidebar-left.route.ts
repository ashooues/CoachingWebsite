import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { SidebarLeftComponent } from './sidebar-left.component';

export const sidebarLeftRoute: Routes = [
    {
        path: 'sidebar-left',
        component: SidebarLeftComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sidebar Left'
        },
        canActivate: [UserRouteAccessService]
    } ];
