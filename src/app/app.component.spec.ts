import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { AppModule } from './app.module';

import { MaterialModule } from './material.module';

describe('AppComponent', () => {

  let component:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        MaterialModule
      ],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component    = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bank-account-front'`, () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bank-account-front');
  });

  it('should render title in a h1 tag', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const item = compiled.querySelector('div.container-fluid>div.footer');
    expect(item).toBeTruthy();
  });
});