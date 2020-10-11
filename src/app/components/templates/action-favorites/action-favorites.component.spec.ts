import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFavoritesComponent } from './action-favorites.component';

describe('ActionFavoritesComponent', () => {
  let component: ActionFavoritesComponent;
  let fixture: ComponentFixture<ActionFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
