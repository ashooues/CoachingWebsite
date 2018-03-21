import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewAppSharedModule } from '../../shared';
import { NewAppAdminModule } from '../../admin/admin.module';
import {
    BasicGridComponent,
    basicGridRoute,

} from './';

const ENTITY_STATES = [
    ...basicGridRoute,

];

@NgModule({
    imports: [
        NewAppSharedModule,
        NewAppAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BasicGridComponent,

    ],
    entryComponents: [
        BasicGridComponent,
    ],
    providers: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewAppBasicGridModule {}
