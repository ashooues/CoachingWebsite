import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { GalleryComponent } from './gallery.component';
/*
import { BlogDetailComponent } from './blog-detail.component';
import { BlogPopupComponent } from './blog-dialog.component';
import { BlogDeletePopupComponent } from './blog-delete-dialog.component';
*/

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
/*
,

    {
        path: 'blog/:id',
        component: BlogDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Blogs'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const blogPopupRoute: Routes = [
    {
        path: 'blog-new',
        component: BlogPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Blogs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'blog/:id/edit',
        component: BlogPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Blogs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'blog/:id/delete',
        component: BlogDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Blogs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
*/
