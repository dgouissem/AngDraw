import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-dessin-information',
  standalone: false,
  templateUrl: './page-dessin-information.html',
  styleUrl: './page-dessin-information.scss',
})
export class PageDessinInformation {

  // private readonly  fb: FormBuilder= inject(FormBuilder);

  dessinInfoForm: FormGroup;
  /**
   *on qualifie une variable par private, public ou protected une variable
   */
  constructor(private fb: FormBuilder) {
    //donnée membre
    this.dessinInfoForm = this.fb.group({ // objet litéral {...}
      name: ['', [Validators.required]],
      author: ['',  [Validators.required]],
      description: ['']
    });

  }

  doSubmit(){
    console.log(this.dessinInfoForm.value);
  }
}
