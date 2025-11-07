import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDessin } from './page-dessin';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';

describe('PageDessin', () => {
  let component: PageDessin;
  let fixture: ComponentFixture<PageDessin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageDessin],
      imports : [
        ReactiveFormsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDessin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
