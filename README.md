# Angular Configurable UI Renderer

A dynamic Angular application that renders UI components based on JSON configuration. This project demonstrates a modular, scalable approach to building configurable dashboards with reusable widgets.

## Features

- **Dynamic Rendering**: Renders widgets (grids, charts) based on JSON configuration
- **Modular Architecture**: Organized components with clear separation of concerns
- **Type-Safe Configuration**: Strong TypeScript interfaces for configuration objects
- **Reusable Widgets**: Grid and Chart components designed for enterprise reuse
- **Service-Based Config**: Configuration fetched via HTTP service

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd angular-configurable
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`

The application will load the configuration from `src/assets/config/sample-config.json` and dynamically render the widgets.

## Configuration

The UI is configured via JSON files. The sample configuration includes:

- **Grid Widget**: Displays tabular data with configurable columns
- **Chart Widget**: Placeholder for chart rendering (integrate with Chart.js or similar)

### Configuration Structure

```json
{
  "widgets": [
    {
      "type": "grid",
      "dataSource": "api/users",
      "properties": {
        "columns": ["id", "name", "email"],
        "sortable": true,
        "filterable": true
      }
    },
    {
      "type": "chart",
      "dataSource": "api/sales",
      "properties": {
        "chartType": "bar",
        "xAxis": "month",
        "yAxis": "sales",
        "title": "Monthly Sales"
      }
    }
  ]
}
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dynamic-renderer/     # Main renderer component
│   │   ├── grid/                 # Grid widget component
│   │   ├── chart/                # Chart widget component
│   │   └── components.module.ts  # Components module
│   ├── models/
│   │   └── config.model.ts       # TypeScript interfaces
│   ├── services/
│   │   └── config.service.ts     # Configuration service
│   ├── app.component.*           # Root component
│   └── app.module.ts             # Main app module
└── assets/
    └── config/
        └── sample-config.json    # Sample configuration
```

## Extending the Application

### Adding New Widget Types

1. Define the widget properties interface in `config.model.ts`
2. Create a new component in `src/app/components/`
3. Add the component to `components.module.ts`
4. Update the renderer template to include the new widget type

### Integrating Real Data

Replace mock data in widget components with actual HTTP calls to the specified `dataSource`.

### Adding Chart Library

For actual chart rendering, integrate a library like Chart.js:

```bash
npm install chart.js ng2-charts
```

Then update the ChartComponent to render real charts.

## Building for Production

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.