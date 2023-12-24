import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      // Your submission logic here
      console.log(this.contactForm.value); // For example, logging form values
    } else {
      // Mark all fields as touched to trigger validation messages
      this.contactForm.markAllAsTouched();
    }
  }
}
