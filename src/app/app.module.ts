import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';    
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,NbCardModule,NbInputModule,NbCheckboxModule,NbButtonModule,NbListModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SearchComponent } from './search/search.component';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';
import { NewMoviesPipe } from './pipes/new-movies.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    AddMovieComponent,
    SearchComponent,
    SearchByNamePipe,
    NewMoviesPipe,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    NbButtonModule,
    NbListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
