import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpErrorResponse } from '@angular/common/http';
import { WeatherData } from './models/models';
import { catchError, map, throwError } from 'rxjs';

const handleNext = (response: WeatherData | undefined, callback: (weatherData: WeatherData | undefined) => void) => {
  if (!response) callback(undefined)
  callback(response)
}

const handleError = (error: HttpErrorResponse) => {
  console.error(error.message)
}

const handleComplete = () => {
  console.warn('Fetch Complete')
}

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

  private callbackWeatherData = (weatherData: WeatherData | undefined) => this.weatherData = weatherData

  private getWeatherData = () => {
    this.weatherData = undefined
    this.weatherService.getWeatherData(this.placeName)?.subscribe({
      next: (response => handleNext(response, this.callbackWeatherData)),
      error: handleError,
      complete: handleComplete
    })
  }

  onSubmit() {
    this.getWeatherData()
  }

  ngOnInit(): void {
    this.getWeatherData()
  }
}
