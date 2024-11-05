import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: any;
  error: string | null = null;
  loading: boolean = false;
  animationState: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather() {
    if (this.city) {
      this.loading = true;
      this.weatherService.getWeatherByCity(this.city).subscribe({
        next: (data) => {
          this.weatherData = data;
          this.error = null;
          this.loading = false;
          this.animationState = !this.animationState; // Toggle animation state
        },
        error: (error) => {
          this.error = 'City not found';
          this.weatherData = null;
          this.loading = false;
        }
      });
    }
  }

  getWindDirection(degrees: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }

  formatTime(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
