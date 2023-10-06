import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstoriesComponent } from './newstories.component';

describe('NewstoriesComponent', () => {
  let component: NewstoriesComponent;
  let fixture: ComponentFixture<NewstoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewstoriesComponent]
    });
    fixture = TestBed.createComponent(NewstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
