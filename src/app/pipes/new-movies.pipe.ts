import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie/movie';

@Pipe({
  name: 'newMovies'
})
export class NewMoviesPipe implements PipeTransform {

  transform(movies: Movie[]): Movie[] {
    return(movies.filter(movie=>movie.isnew));

  }

}
