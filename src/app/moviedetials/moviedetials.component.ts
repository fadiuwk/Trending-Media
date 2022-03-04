import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-moviedetials',
  templateUrl: './moviedetials.component.html',
  styleUrls: ['./moviedetials.component.scss']
})
export class MoviedetialsComponent implements OnInit {

  movieId: string = ''
  movieDetails:any = {}
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'

  constructor(private _ActivatedRoute: ActivatedRoute , private _MoviesService:MoviesService) {
    this.movieId = _ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._MoviesService.getMovieDetails(this.movieId).subscribe(
      (response)=>{
        this.movieDetails = response;
      }
    )
  }

}
