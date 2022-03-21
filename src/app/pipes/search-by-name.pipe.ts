import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie/movie';
import { ServicesService } from '../services/services.service';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(movies:Movie[],search:string): Movie[] {
    if(!search) return movies
    return movies.filter(movie => movie.name.includes(search));
  }

}
