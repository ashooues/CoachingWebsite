import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewAppSharedModule } from '../../shared';
import { NewAppAdminModule } from '../../admin/admin.module';
import {
    FullWidthComponent,
    fullWidthRoute,

} from './';

const ENTITY_STATES = [
    ...fullWidthRoute,

];

@NgModule({
    imports: [
        NewAppSharedModule,
        NewAppAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        FullWidthComponent,

    ],
    entryComponents: [
        FullWidthComponent,
    ],
    providers: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewAppFullWidthModule {}
