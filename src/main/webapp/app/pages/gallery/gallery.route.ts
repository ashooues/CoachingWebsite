import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { GalleryComponent } from './gallery.component';

export const galleryRoute: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Gallery'
        },
        canActivate: [UserRouteAccessService]
    } ];
