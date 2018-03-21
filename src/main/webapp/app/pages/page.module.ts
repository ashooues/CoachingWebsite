import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NewAppGalleryModule} from './gallery/gallery.module';
import { NewAppBasicGridModule } from './basic-grid/basic-grid.module';
import { NewAppFullWidthModule } from './full-width/full-width.module';
import { NewAppSidebarLeftModule } from './sidebar-left/sidebar-left.module';
import { NewAppSidebarRightModule } from './sidebar-right/sidebar-right.module';
/*import { NewAppNavigModule } from './navig/navig.component';*/
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
@NgModule({
    imports: [

        NewAppGalleryModule,
        NewAppBasicGridModule,
        NewAppFullWidthModule,
        NewAppSidebarLeftModule,
        NewAppSidebarRightModule,
/*        NewAppNavigModule,*/
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewAppPageModule {}
