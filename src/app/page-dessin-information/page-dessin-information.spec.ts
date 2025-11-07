import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDessinInformation } from './page-dessin-information';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('PageDessinInformation', () => {
  let component: PageDessinInformation;
  let fixture: ComponentFixture<PageDessinInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageDessinInformation],
      imports : [
        ReactiveFormsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageDessinInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
