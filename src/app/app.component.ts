import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpErrorResponse } from '@angular/common/http';
import { WeatherData } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  weatherData?: WeatherData
  placeName: string

  constructor(private weatherService: WeatherService) {
    this.placeName = 'cebu'
  }

  onSubmit(place: string) {
    this.weatherService.getWeatherData(place)?.subscribe({
      next: (response) => {
        this.weatherData = response as WeatherData
        console.log(this.weatherData);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
      complete: () => {

      }
    })
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.placeName)?.subscribe({
      next: (response) => {
        this.weatherData = response as WeatherData
        console.log(this.weatherData);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
      complete: () => {
        console.warn('Fetch Complete');
      }
    })
  }
}
