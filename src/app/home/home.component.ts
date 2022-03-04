import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { TrendMovie } from '../trend-movie';
import { TrendPerson } from '../trend-person';
import { TrendTV } from '../trend-tv';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  trendingMovie:TrendMovie[] = []
  trendingTV:TrendTV[] = []
  trendingPerson:TrendPerson[] = []
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'

  constructor(private _MoviesService:MoviesService ) { }



  ngOnInit(): void {

    this._MoviesService.getTrending('movie').subscribe(
      (response)=>{
        this.trendingMovie = response.results.slice(0,10);
      }
    );

    this._MoviesService.getTrending('tv').subscribe(
      (response)=>{
        this.trendingTV = response.results.slice(0,10);
      }
    );

    this._MoviesService.getTrending('person').subscribe(
      (response)=>{
        this.trendingPerson = response.results.slice(0,10);
      }
    );
  }

}
