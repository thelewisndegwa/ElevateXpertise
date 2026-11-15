import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MarketingPageComponent } from './marketing-page.component';

describe('MarketingPageComponent', () => {
  let component: MarketingPageComponent;
  let fixture: ComponentFixture<MarketingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingPageComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
