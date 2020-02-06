import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from './service/service.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResponseUser, DataUser } from './service/interfaces/responseUser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  readonly ngUnSubscribe: Subject<void> = new Subject();
  dataUser: DataUser[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

  private loadData() {
    this.service.getUser()
    .pipe(takeUntil(this.ngUnSubscribe))
    .subscribe((data: ResponseUser) => {
      if ( data ) {
        this.dataUser = data.data;
      }
    });
  }

}
