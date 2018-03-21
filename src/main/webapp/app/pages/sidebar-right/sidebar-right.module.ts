import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewAppSharedModule } from '../../shared';
import { NewAppAdminModule } from '../../admin/admin.module';
import {
    SidebarRightComponent,
    sidebarRightRoute,

} from './';

const ENTITY_STATES = [
    ...sidebarRightRoute,

];

@NgModule({
    imports: [
        NewAppSharedModule,
        NewAppAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        SidebarRightComponent,

    ],
    entryComponents: [
        SidebarRightComponent,
    ],
    providers: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewAppSidebarRightModule {}
