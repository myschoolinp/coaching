import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StrengthPipe } from './pipes/strength.pipe';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        StrengthPipe
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {

    expect(app).toBeTruthy();
  });

  it(`should have as title 'coaching'`, () => {
    expect(app.title).toEqual('coaching');
  });

  it("should be true if true", () => {
    let x = true;
    expect(x).toBe(true);
  })
});
