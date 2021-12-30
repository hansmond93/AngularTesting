import { Component, OnInit } from '@angular/core';
import { BookDetails } from '../bookDetails';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrls: ['./library-dashboard.component.css']
})
export class LibraryDashboardComponent implements OnInit {
  books: BookDetails[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getBookDetails().subscribe(books => {
      this.books = books;
    });
  }

}
