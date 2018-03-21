import { Component } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Principal } from '../../shared';

@Component({
    selector: 'jhi-gallery',
    templateUrl: './gallery.component.html',
/*    encapsulation: ViewEncapsulation.None*/
})
export class GalleryComponent {
/*blogs: Blog[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private galleryService: GalleryService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.blogService.query().subscribe(
            (res: HttpResponse<Blog[]>) => {
                this.blogs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInBlogs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Blog) {
        return item.id;
    }
    registerChangeInBlogs() {
        this.eventSubscriber = this.eventManager.subscribe('blogListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }*/
}
