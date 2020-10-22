import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private tmdpDiscover = "https://api.themoviedb.org/3/discover/movie"
  private tmdpMovie = "https://api.themoviedb.org/3/movie/"
  private tmdpCredits = "https://api.themoviedb.org/3/movie"
  private KEY = "?api_key=0a7875ebb7e804775dafe978ce854bff";

  constructor(
    private httpClient: HttpClient
  ) { }

  public sendKeywordRequest(id) {
    let defualtInfo = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    let keyword = "&with_keywords="+id
    let request = this.tmdpDiscover+this.KEY+defualtInfo+keyword
    console.log(request)
    return this.httpClient.get<any>(request)
  }

  public sendGenreRequest(id) {
    let defualtInfo = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    let genre = "&with_genres="+id;
    let request = this.tmdpDiscover+this.KEY+defualtInfo+genre;
    console.log(request)
    return this.httpClient.get<any>(request)
  }

  public getMovieDetails(id) {
    let defualtInfo = "&language=en-US"
    let request = this.tmdpMovie+id+this.KEY+defualtInfo;
    console.log(request)
    return this.httpClient.get<any>(request)
  }

  public getMovieCredits(id) {
    let defualtInfo = "/credits"
    let request = this.tmdpMovie+id+defualtInfo+this.KEY;
    console.log(request)
    return this.httpClient.get<any>(request)
  }
}