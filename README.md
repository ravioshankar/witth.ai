# Witth.ai

This project is an Angular-based application designed for data visualization and mapping, leveraging libraries like Chart.js, D3.js, and OpenLayers. It includes features for chart rendering, map viewing, and data editing.

## Table of Contents

- [High-Level Application Design](#high-level-application-design)
- [Development Server](#development-server)
- [Build](#build)
- [Running Unit Tests](#running-unit-tests)
- [Documentation](#documentation)
- [Further Help](#further-help)

---

## High-Level Application Design

The project structure is as follows:

```sh
./src
├── app
|   ├── charts-container
|   |   ├── chartjs
|   |   ├── d3js
|   |   ├── charts-container.component.html
|   |   ├── charts-container.component.scss
|   |   ├── charts-container.component.ts
|   |   └── charts.module.ts
|   ├── map-viewer
|   ├── data-editor
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app-routing.module.ts
│   └── app.module.ts
|
├── assets
│   ├── data
│   |   ├── [homePageData.json](http://_vscodecontentref_/0)
│   ├── ...
│
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
│
├── ...
```

## Development Server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Documentation

Documentation for this project is available in the `docs/` directory.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
