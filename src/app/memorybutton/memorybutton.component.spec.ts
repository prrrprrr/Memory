import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorybuttonComponent } from './memorybutton.component';

describe('MemorybuttonComponent', () => {
  let component: MemorybuttonComponent;
  let fixture: ComponentFixture<MemorybuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemorybuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemorybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
