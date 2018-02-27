import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NewAppRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { NewAppCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { NewAppLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { NewAppDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { NewAppTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { NewAppEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { NewAppJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { NewAppJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
import { NewAppBlogModule } from './blog/blog.module';
import { NewAppEntryModule } from './entry/entry.module';
import { NewAppTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        NewAppRegionMySuffixModule,
        NewAppCountryMySuffixModule,
        NewAppLocationMySuffixModule,
        NewAppDepartmentMySuffixModule,
        NewAppTaskMySuffixModule,
        NewAppEmployeeMySuffixModule,
        NewAppJobMySuffixModule,
        NewAppJobHistoryMySuffixModule,
        NewAppBlogModule,
        NewAppEntryModule,
        NewAppTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewAppEntityModule {}
