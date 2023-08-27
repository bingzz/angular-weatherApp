import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  placeName: string

  constructor(private weatherService: WeatherService) {
    this.placeName = 'cebu'
  }

  onSubmit(place: string) {
    this.weatherService.getWeatherData(place)?.subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.placeName)?.subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }
}
