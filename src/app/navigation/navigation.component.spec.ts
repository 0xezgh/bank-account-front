import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { MaterialModule } from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {

      TestBed.configureTestingModule({
          imports: [
              AppModule,
              RouterTestingModule.withRoutes([])
           ]
      })

      // Get rid of app's Router configuration otherwise many failures.
      // Doing so removes Router declarations; add the Router stubs
      .overrideModule(AppModule, {
          remove: {
              imports: [
                AppRoutingModule
              ]
          },
          add: {
              declarations: [
                NavigationComponent,
                RouterOutletStubComponent
              ]
          }
      })

      .compileComponents()

      .then(() => {
          fixture = TestBed.createComponent(NavigationComponent);
          component    = fixture.componentInstance;
          fixture.detectChanges();
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});