import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the portfolio dashboard heading and summary cards', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h1')?.textContent).toContain('Good morning, Anuj');
    expect(element.querySelectorAll('.metric-card').length).toBe(4);
    expect(element.textContent).toContain('Total portfolio value');
  });

  it('shows linked accounts and recent orders', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelectorAll('.account-row').length).toBe(3);
    expect(element.querySelectorAll('.order-row').length).toBe(3);
  });
});
