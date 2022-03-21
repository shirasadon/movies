import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
@Input() movie:Movie[]
@Input()search=""
doSomething(){
 console.log(this.search);
}

   

  constructor(private service:ServicesService ) {
    this.movie=[] 
    this.movie=service.showMovies()
   }

  ngOnInit(): void {
  }

}
