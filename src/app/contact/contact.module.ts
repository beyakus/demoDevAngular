import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatIconModule,MatFormFieldModule } from '@angular/material';


import { RouterModuleContact } from './router.module';

import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ ContactComponent ],
  imports: [
    CommonModule,
    RouterModuleContact,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class ContactModule { }
