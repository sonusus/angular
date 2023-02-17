import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtformPageComponent } from './artform-page.component';

describe('ArtformPageComponent', () => {
  let component: ArtformPageComponent;
  let fixture: ComponentFixture<ArtformPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtformPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtformPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
