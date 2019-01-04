import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsHistoryComponent } from './operations-history.component';

describe('OperationsHistoryComponent', () => {
  let component: OperationsHistoryComponent;
  let fixture: ComponentFixture<OperationsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        FormsModule, ReactiveFormsModule
      ],
      declarations: [ OperationsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
