import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveList } from './automotive-list';

describe('AutomotiveList', () => {
  let component: AutomotiveList;
  let fixture: ComponentFixture<AutomotiveList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutomotiveList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
