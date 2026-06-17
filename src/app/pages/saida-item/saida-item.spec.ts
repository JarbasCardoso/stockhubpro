import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaItem } from './saida-item';

describe('SaidaItem', () => {
  let component: SaidaItem;
  let fixture: ComponentFixture<SaidaItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaidaItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaidaItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
