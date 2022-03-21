import { Injectable } from '@angular/core';
import { Movie } from '../movie/movie';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
private movie:Movie[]
  constructor() { 
    this.movie=[
        {
          id:"1",
          name:"baby boss",
          year:"26.12.2020",
          isnew:true
        },{
          id:"2",
          name:"baby boss2",
          year:"25.02.2020",
          isnew:false
        },{
          id:"3",
          name:"the frog prince",
          year:"25.02.2020",
          isnew:false
        },{
          id:"4",
          name:"cat-hat",
          year:"25.02.2020",
          isnew:false
        },{
          id:"5",
          name:"jack frost",
          year:"25.02.2020",
          isnew:false
        }
      
    ]
  }
  addMovie(movie:Movie):void{
    this.movie.push(movie)
  }
  showMovies():Movie[]{
return this.movie
  }
}
