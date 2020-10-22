import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moods } from '../../model/moods';
import { DatabaseService } from '../../model/database.service'

@Component({
  selector: 'app-mood-lister',
  templateUrl: './mood-lister.component.html',
  styleUrls: ['./mood-lister.component.scss']
})
export class MoodListerComponent implements OnInit {

  mood;
  genreMovies = []
  keywordMovies = []

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    

    this.route.paramMap.subscribe(params => {
      this.mood = moods[+params.get('id')]
      //console.log(this.mood)
      //console.log("Path name:", this.mood.name)
      //console.log("Path id:", this.mood.id)


      this.databaseService.sendGenreRequest(this.mood.id).subscribe(data => {
        console.log(data)

        this.genreMovies = data.results
      })
    })

  }
} 