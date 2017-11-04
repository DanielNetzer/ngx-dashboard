import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTbComponent } from './top-tb.component';

describe('TopTbComponent', () => {
  let component: TopTbComponent;
  let fixture: ComponentFixture<TopTbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
