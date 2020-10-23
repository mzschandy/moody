import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moods } from '../../model/moods';
import { DatabaseService } from '../../model/database.service'
import { FavoritesService } from '../../model/favorites.service'
import * as $ from "jquery";
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie;
  genres = [];
  backdrop;
  poster;
  title;
  overview;
  actors = [];
  trailer;
  watchedMovies;
  watchedMoviesStringify = [];
  favorites;
  favorited = "favorited"
  //watchedMovies = this.favoritesService.
  
  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private favoritesService: FavoritesService
  ) { }

  addToWatchedlist(id, name) {
    this.favoritesService.addToSeenlist(id, name)
    $("#addToWatched").addClass("watched")
    //document.getElementById("addToWatched").className = "watched"
  }

  getWatchedMOvies() {
    //this.watchedMovies = JSON.parse(this.favoritesService.getSeenlist());
    this.watchedMovies = this.favoritesService.getSeenlist()
    //this.watchedMoviesStringify = JSON.stringify(this.favoritesService.getSeenlist())
    console.log('Watched movies ' + this.watchedMovies)
    //console.log('Watched movies stringify ' + this.watchedMoviesStringify)
    console.log(this.watchedMovies[0].movieId, this.watchedMovies[0].movieName)

    /*
    for(const watchedMovie of this.watchedMovies) {
      
    }*/
  }

  getFavorites() {
    this.favorites = this.favoritesService.getWatchlist()
    console.log("favorites", this.favorites)

    //$(".favorited button").html('Favorited!')

  }

  addToFavorites(id, name, poster, favorited) {
    this.favoritesService.addToWatchlist(id, name, poster, favorited)
    $("#addToFavorites").html("Favorited!")
    $("#addToFavorites").parent().parent().parent().parent().addClass("favorited")
  }

  testFunction()
   {
     $(".header").css("color", "yellow")
   }


  ngOnInit(): void {

    this.getWatchedMOvies()
    
    
    
    this.route.paramMap.subscribe(params => {
      //this.movie = moods[+params.get('id')]
      //this.movie = +params['id'];
      this.movie = params.get("id")
      console.log(this.movie)
      //console.log("Path name:", this.mood.name)
      console.log("Path id:", this.movie.id)


      this.databaseService.getMovieDetails(this.movie).subscribe(data => {
        console.log(data)

        this.title = data.title;
        //console.log(data.title)
        //console.log(this.title)
        this.overview = data.overview;
        this.poster = data.poster_path;
        //console.log(data.overview)    
        //console.log(this.overview)   
      })

      

      console.log(this.title)
    })
  }

}