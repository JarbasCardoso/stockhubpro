import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInterno } from './home-interno';

describe('HomeInterno', () => {
  let component: HomeInterno;
  let fixture: ComponentFixture<HomeInterno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInterno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInterno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
