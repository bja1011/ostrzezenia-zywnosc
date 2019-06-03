import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1Page } from './tab1.page';
import { PostsService } from '../modules/data-provider/services/posts.service';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let postsService: PostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [PostsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
    postsService = TestBed.get(PostsService);
  });

  it('shoud handle empty posts array from postsService', () => {
    spyOn(postsService, 'getPosts').and.returnValue(Promise.resolve([]));
    postsService.getPosts().then(value => {
      expect(value).toEqual([]);
    });
  });

  it('shoud get non empty posts array from postsService', () => {
    spyOn(postsService, 'getPosts').and.returnValue(Promise.resolve(MOCKED_POSTS));
    postsService.getPosts().then(value => {
      expect(value.length).toBeGreaterThan(0);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

const MOCKED_POSTS = [
  {
    id: 234,
    image: 'image',
    title: 'title',
    url: 'url'
  }
];
