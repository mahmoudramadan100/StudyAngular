import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfStructureComponentComponent } from './ng-if-structure-component.component';

describe('NgIfStructureComponentComponent', () => {
  let component: NgIfStructureComponentComponent;
  let fixture: ComponentFixture<NgIfStructureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfStructureComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfStructureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
