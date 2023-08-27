import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    if (!cityName.trim()) return

    const appID = 'daaacd6ef2b8d4cbeb896b6ab1493f13'
    return this.http.get(environment.weatherApiBaseUrl, {
      params: new HttpParams()
        .set('APPID', appID)
        .set('q', cityName.trim())
    })
  }
}
