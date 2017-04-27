import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';

describe(`App`, () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AppState]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it(`should be @AngularClass`, () => {
    expect(comp.url).toEqual('https://twitter.com/AngularClass');
    expect(comp.angularclassLogo).toEqual('/_karma_webpack_/a1f5dbf78383c2345288642a7afce0f1.png');
    // tslint:disable-next-line:max-line-length
    expect(comp.favicon).toEqual('data:image/png;base64,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');
    expect(comp.name).toEqual('Angular 2 Webpack Starter');
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});
