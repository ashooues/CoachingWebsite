import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewAppSharedModule } from '../../shared';
import { NewAppAdminModule } from '../../admin/admin.module';
import {
    SidebarLeftComponent,
    sidebarLeftRoute,

} from './';

const ENTITY_STATES = [
    ...sidebarLeftRoute,

];

@NgModule({
    imports: [
        NewAppSharedModule,
        NewAppAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        SidebarLeftComponent,

    ],
    entryComponents: [
        SidebarLeftComponent,
    ],
    providers: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewAppSidebarLeftModule {}
