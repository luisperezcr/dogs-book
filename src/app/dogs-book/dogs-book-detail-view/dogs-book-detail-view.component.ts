import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dog, DogsBookService } from '../dogs-book.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dogs-book-detail-view',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, NgOptimizedImage],
  templateUrl: './dogs-book-detail-view.component.html',
  styleUrl: './dogs-book-detail-view.component.scss'
})
export class DogsBookDetailViewComponent implements OnInit {
  dog$!: Observable<Dog | undefined>;

  constructor(private dogsService: DogsBookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dog$ = this.route.paramMap.pipe(map(params => {
      return this.dogsService.dogs[Number(params.get('index')) - 1]
    }))
  }
}
