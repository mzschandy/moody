import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moods } from '../../model/moods';
import { DatabaseService } from '../../model/database.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie;
  name;
  title;
  overview;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //this.movie = moods[+params.get('id')]
      this.movie = +params['id'];
      //console.log(this.mood)
      //console.log("Path name:", this.mood.name)
      //console.log("Path id:", this.mood.id)


      this.databaseService.getMovieDetails(this.movie.id).subscribe(data => {
        console.log(data)

        this.title = data.title;
        this.overview = data.overview;       
      })
    })
  }

}