import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZWorkSpace } from './zwork-space';

describe('ZWorkSpace', () => {
  let component: ZWorkSpace;
  let fixture: ComponentFixture<ZWorkSpace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZWorkSpace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZWorkSpace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
