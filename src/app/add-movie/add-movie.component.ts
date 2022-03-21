import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
 movie:Movie[]
 addmovie(name:HTMLInputElement,year:HTMLInputElement,isnew:HTMLInputElement){
   let newMovie={name:name.value,year:year.value,isnew:isnew.checked}
   this.ServicesService.addMovie(newMovie)
   name.value=year.value=isnew.value=""
 }
  constructor(private ServicesService:ServicesService) {
this.movie=[]

   }

  ngOnInit(): void {
  }

}
