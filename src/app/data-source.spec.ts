import { TestBed } from '@angular/core/testing';

import { DataSource } from './data-source';
import { DessinType } from './models';

describe('DataSource', () => {
  let service: DataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add new DessinInfo', () => {
    const tempDessin: DessinType = new DessinType();
    service.addNewDessin(tempDessin);
    expect(service.size).toEqual(1);
  });

  it('check size after creation', () => {
    const tempDessin: DessinType = new DessinType();
    service.addNewDessin(tempDessin);
    expect(service.size).toEqual(1);
  });


});
