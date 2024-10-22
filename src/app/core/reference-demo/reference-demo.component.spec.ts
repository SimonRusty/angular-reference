import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDemoComponent } from './reference-demo.component';

describe('ReferenceDemoComponent', () => {
  let component: ReferenceDemoComponent;
  let fixture: ComponentFixture<ReferenceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
