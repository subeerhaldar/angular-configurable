export interface WidgetConfig {
  type: 'grid' | 'chart';
  dataSource: string;
  properties: any; // Can be more specific based on type
}

export interface GridProperties {
  columns: string[];
  sortable?: boolean;
  filterable?: boolean;
}

export interface ChartProperties {
  chartType: 'bar' | 'line' | 'pie';
  xAxis?: string;
  yAxis?: string;
  title?: string;
}

export interface PageConfig {
  widgets: WidgetConfig[];
}