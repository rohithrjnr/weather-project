# WeatherApp 🌦️
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## 📋 Table of Contents
- [Overview](#overview)
- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [Build](#build)
- [Running Unit Tests](#running-unit-tests)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Further Help](#further-help)

## 🌟 Overview
The **WeatherApp** is a responsive weather application built with Angular. It allows users to search for weather information by city and view current conditions, as well as a 5-day forecast. The app also supports geolocation, enabling users to get weather details based on their current location.

## 🚀 Development Server
To start a development server:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-app-angular.git
   cd weather-app-angular
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   ng serve
   ```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 🏗️ Code Scaffolding
Generate new components, directives, pipes, services, classes, guards, interfaces, enums, and modules using Angular CLI:

```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module name
```

## 📦 Build
To build the project:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build:

```bash
ng build --prod
```

## 🧪 Running Unit Tests
Execute unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```

For code coverage reports:
```bash
ng test --code-coverage
```
Coverage reports will be available in the `coverage/` directory.

## 🔄 Running End-to-End Tests
Run end-to-end tests via [Protractor](http://www.protractortest.org/):

```bash
ng e2e
```

## 🔌 API Integration
This app integrates with the OpenWeatherMap API for weather data. To use the API:

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. Create a `environments/environment.ts` file with your API key:
   ```typescript
   export const environment = {
     production: false,
     apiKey: 'YOUR_API_KEY',
     apiUrl: 'https://api.openweathermap.org/data/2.5'
   };
   ```

## 📁 Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── weather-dashboard/
│   │   ├── weather-details/
│   │   └── weather-forecast/
│   ├── services/
│   │   └── weather.service.ts
│   ├── models/
│   │   └── weather.model.ts
│   └── shared/
│       └── components/
├── assets/
│   └── images/
└── environments/
    ├── environment.ts
    └── environment.prod.ts
```

## 🔧 Features
- Current weather conditions display
- 5-day weather forecast
- Geolocation support
- City search functionality
- Responsive design
- Temperature unit conversion (°C/°F)
- Weather icons and animations
- Detailed weather information (humidity, wind speed, pressure)

## 🎨 Styling
This project uses:
- SCSS for styling
- Bootstrap for responsive grid system
- Weather Icons package for weather symbols
- Custom animations for weather effects

## 📱 Progressive Web App (PWA)
This app supports PWA features:
- Offline functionality
- Install to home screen
- Push notifications for weather alerts

## 💡 Further Help
For more help:
- Angular CLI help: `ng help`
- [Angular Documentation](https://angular.io/docs)
- [Angular CLI Documentation](https://cli.angular.io/)
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)

## 📄 License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Contributing
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
