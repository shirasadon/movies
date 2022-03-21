import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../movie/movie';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
 @Input() movie:Movie[]
 @Input()search=""
  constructor(private service:ServicesService) { 
    this.movie=[]
    // this.movie=service.showMovies()

  }

  ngOnInit(): void {
  }

}
