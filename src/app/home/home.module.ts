import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModuleHome } from './router.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    RouterModuleHome
  ]
})
export class HomeModule { }
