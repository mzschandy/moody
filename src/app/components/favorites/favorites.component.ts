import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DatabaseService } from '../../model/database.service'
import { FavoritesService } from '../../model/favorites.service'
import * as $ from "jquery";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites

  getFavorites() {
    this.favorites = this.favoritesService.getWatchlist()
    console.log("favorites", this.favorites)
  }

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.getFavorites()
    //this.route.paramMap.subscribe(params)
  }

}
