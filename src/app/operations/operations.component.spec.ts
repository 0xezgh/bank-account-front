import { OperationsComponent } from './operations.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('OperationsComponent', () => {
  let component: OperationsComponent;
  let fixture: ComponentFixture<OperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        FormsModule, ReactiveFormsModule
      ],
      declarations: [ OperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});