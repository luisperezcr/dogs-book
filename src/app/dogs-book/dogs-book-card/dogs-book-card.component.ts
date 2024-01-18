import { Component, Input } from '@angular/core';
import { Dog } from '../dogs-book.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dogs-book-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, NgOptimizedImage, MatButtonModule],
  templateUrl: './dogs-book-card.component.html',
  styleUrl: './dogs-book-card.component.scss'
})
export class DogsBookCardComponent {
  @Input() dog!: Dog;
  @Input() index!: number;
}
