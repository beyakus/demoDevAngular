import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModuleAbout } from './router.module';
import { HttpClientModule } from '@angular/common/http';
import {  MatCardModule,
          MatButtonModule,
          MatIconModule,
          MatTooltipModule } from '@angular/material';


import { AboutComponent } from './about.component';
import { ServiceService } from './service/service.service';

@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    CommonModule,
    RouterModuleAbout,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [ ServiceService ]
})
export class AboutModule { }
