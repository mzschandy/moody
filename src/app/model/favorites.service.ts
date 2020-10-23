import { Injectable, ɵɵi18nPostprocess } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  seen = []
  watchlist = []

  addToSeenlist(id, name) {
    const newMovie = {
      movieId: id,
      movieName: name,
    }

    this.seen.push(newMovie)
    console.log(this.seen)
    localStorage.setItem("Watched Movies", JSON.stringify(this.seen))
  }

  getSeenlist() {
    //let movies, movieList
    if(localStorage.getItem("Watched Movies") != null) {
      //movies = localStorage.getItem("WatchedMovies")
      //movieList = JSON.parse(movies)
      console.log("Local Storage found!")

      console.log(localStorage.getItem("Watched Movies"))
      //console.logi
      /*
      let movies = {},
        keys = Object.keys(localStorage.getItem("Watched Movies")),
        i = keys.length;
      
      while(i--) {
        movies[keys[i]] = localStorage.getItem(keys[i])
      }
      */
      //console.log(movies)
      return JSON.parse(localStorage.getItem("Watched Movies"));



    } else {
      console.log("local storage not found")
    }



    return this.seen
  }

  getWatchlist() {
    if(localStorage.getItem("Watchlist") != null) {
      console.log("Favorites Local Storage found!")

      console.log(localStorage.getItem("Watchlist"))
      return JSON.parse(localStorage.getItem("Watchlist"));

    } else {
      console.log("Favorites local storage not found")
    }
    return this.watchlist
  }

  addToWatchlist(id, name, poster, favorited) {
    const newMovie = {
      movieId: id,
      movieName: name,
      poster: poster,
      favorited: favorited
    }

    this.watchlist.push(newMovie)
    console.log(this.watchlist)
    localStorage.setItem("Watchlist", JSON.stringify(this.watchlist))
  }

  /*
  addToWatchlist() {

  }*/

  constructor() { }
}
