import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsBookCardComponent } from '../dogs-book-card/dogs-book-card.component';
import { DogsBookService } from '../dogs-book.service';

@Component({
  selector: 'app-dogs-book-list',
  standalone: true,
  imports: [CommonModule, DogsBookCardComponent],
  templateUrl: './dogs-book-list.component.html',
  styleUrl: './dogs-book-list.component.scss'
})
export class DogsBookListComponent {
  constructor(readonly dogsService: DogsBookService) {}
}
