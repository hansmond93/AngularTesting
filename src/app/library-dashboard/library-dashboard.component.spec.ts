import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {LibraryService} from '../library.service';

import { LibraryDashboardComponent } from './library-dashboard.component';

describe('LibraryDashboardComponent', () => {
  let component: LibraryDashboardComponent;
  let fixture: ComponentFixture<LibraryDashboardComponent>;
  let getBookDetailsSpy: { calls: { any: () => any; }; };
  const books: any = [
    {
      book_name: 'RestAssured12',
      isbn: 'gdfdg12',
      aisle: '3231'
    }
  ];

  beforeEach(async () => {
    const libraryService = jasmine.createSpyObj('LibraryService', ['getBookDetails']);
    getBookDetailsSpy = libraryService.getBookDetails.and.returnValue(of(books));

    await TestBed.configureTestingModule({
      declarations: [ LibraryDashboardComponent ],
      providers: [{provide: LibraryService, useValue: libraryService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDashboardComponent);
    TestBed.inject(LibraryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const element: HTMLElement = fixture.nativeElement;
    const rows = element.querySelectorAll('tr');
    expect(rows.length).toEqual(2);
    expect(getBookDetailsSpy.calls.any()).toBe(true);

  });
});
