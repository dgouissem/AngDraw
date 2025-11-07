import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSource } from '../data-source';
import { DessinType } from '../models';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-page-dessin-information',
  standalone: false,
  templateUrl: './page-dessin-information.html',
  styleUrl: './page-dessin-information.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageDessinInformation {

  // private readonly  fb: FormBuilder= inject(FormBuilder);

  dessinInfoForm: FormGroup;
  /**
   *on qualifie une variable par private, public ou protected une variable
   */
  constructor(private fb: FormBuilder, public dataSource: DataSource) {
    //donnée membre
    this.dessinInfoForm = this.fb.group({ // objet litéral {...}
      name: ['', [Validators.required]],
      author: ['',  [Validators.required]],
      description: ['']
    });

  }

  doSubmit(){
    console.log(this.dessinInfoForm.value);
    const newDessin = new DessinType();
    newDessin.name = this.dessinInfoForm.controls["name"].value;
    newDessin.author = this.dessinInfoForm.controls["author"].value;
    newDessin.description = this.dessinInfoForm.controls["description"].value; 
    // (this.dessinInfoForm.value as DessinType).description;
    console.log(JSON.stringify(newDessin));
    this.dataSource.addNewDessin(newDessin);
  }
}
