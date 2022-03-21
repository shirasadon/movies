import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './movie';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
@Input() movie?:Movie
  constructor(private ServicesService:ServicesService) { 
 
  }

  ngOnInit(): void {
  }

}
