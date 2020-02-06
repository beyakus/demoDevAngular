import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessagesForm } from '../helpers/messagesError';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  success: boolean;

  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
    this.loadForm();
  }

  private loadForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      mail: ['', Validators.required],
      messages: ['', Validators.required]
    });
  }

  sendMessages() {
    if(this.contactForm.valid) {
      this.success = true;
    } else {
      this.success = false;
      Object.keys(this.contactForm.value).forEach(x => {
        this.contactForm.get(x).markAsTouched();
      });
    }
  }

  messages(form) {
    return MessagesForm.messages(form);
  }

}
