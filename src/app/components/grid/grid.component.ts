import { Component, Input, OnInit } from '@angular/core';
import { WidgetConfig } from '../../models/config.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() config!: WidgetConfig;
  data: any[] = []; // Mock data, in real app fetch from dataSource

  ngOnInit(): void {
    // Mock data fetching
    this.data = [
      { id: 1, name: 'John', email: 'john@example.com' },
      { id: 2, name: 'Jane', email: 'jane@example.com' }
    ];
  }
}