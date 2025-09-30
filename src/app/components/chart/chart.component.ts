import { Component, Input, OnInit } from '@angular/core';
import { WidgetConfig } from '../../models/config.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() config!: WidgetConfig;
  data: any[] = []; // Mock data

  ngOnInit(): void {
    // Mock data
    this.data = [
      { month: 'Jan', sales: 100 },
      { month: 'Feb', sales: 150 }
    ];
  }
}