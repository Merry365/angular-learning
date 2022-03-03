import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycParentBlogComponent } from './myc-parent-blog.component';

describe('MycParentBlogComponent', () => {
  let component: MycParentBlogComponent;
  let fixture: ComponentFixture<MycParentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycParentBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycParentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
