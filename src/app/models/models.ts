export interface WeatherData {
  base: string
  cod: number
  dt: number
  id: number
  name: string
  timezone: number
  visibility: number
  coord: Coordinates
  clouds: Clouds
  sys: SystemDetails
  main: Temperature
  weather: Weather[]
  wind: Wind
}

interface Coordinates {
  lon: number
  lat: number
}

interface Temperature {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

interface Clouds {
  all: number
}

interface SystemDetails {
  country: string
  id: number
  sunrise: number
  sunset: number
  type: number
}

interface Weather {
  description: string
  icon: string
  id: number
  main: string
}

interface Wind {
  deg: number
  speed: number
}
