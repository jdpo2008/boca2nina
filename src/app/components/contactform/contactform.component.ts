import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  addressForm: FormGroup;
  summited = false;
  validationMessages: any;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      name: [null, Validators.required],
      apellido: [null, Validators.required],
      email: [null, Validators.required],
      subject: null,
      message: [null, Validators.required],
      celular: [
        null,
        [
          Validators.compose([
            Validators.minLength(10),
            Validators.maxLength(12),
            Validators.pattern(/^[0-9]\d{6,10}$/)
          ])
        ]
      ],
      telefono: [
        null,
        Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(12),
          Validators.pattern(/^[0-9]\d{6,10}$/)
        ])
      ]
    });
    this.validationMessages = {
      celular: [
        {
          type: "minlength",
          message: "El numero es invalido debe tener 12 digitos"
        },
        {
          type: "maxlength",
          message: "El numero es invalido debe tener 12 digitos"
        },
        { type: "pattern", message: "El campo solo debe contener numeros" }
      ],
      telefono: [
        {
          type: "minlength",
          message: "El numero es invalido debe tener 12 digitos"
        },
        {
          type: "maxlength",
          message: "El numero es invalido debe tener 12 digitos"
        },
        { type: "pattern", message: "El campo solo debe contener numeros" }
      ]
    };
  }

  onSubmit() {
    this.summited = true;

    if (this.addressForm.invalid) {
      return;
    }

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'contact_process.php',
      data: $('form').serialize(),
      success: (response) => {
         console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
