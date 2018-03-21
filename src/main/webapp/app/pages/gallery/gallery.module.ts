import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewAppSharedModule } from '../../shared';
import { NewAppAdminModule } from '../../admin/admin.module';
import {
    GalleryComponent,
    galleryRoute,

} from './';

const ENTITY_STATES = [
    ...galleryRoute,

];

@NgModule({
    imports: [
        NewAppSharedModule,
        NewAppAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        GalleryComponent,

    ],
    entryComponents: [
        GalleryComponent,
    ],
    providers: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewAppGalleryModule {}
