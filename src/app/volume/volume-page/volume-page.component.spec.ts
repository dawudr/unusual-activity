import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumePageComponent } from './volume-page.component';

describe('VolumePageComponent', () => {
  let component: VolumePageComponent;
  let fixture: ComponentFixture<VolumePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
