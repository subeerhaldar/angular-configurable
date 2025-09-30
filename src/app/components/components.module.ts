import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DynamicRendererComponent } from './dynamic-renderer/dynamic-renderer.component';
import { GridComponent } from './grid/grid.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    DynamicRendererComponent,
    GridComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DynamicRendererComponent
  ]
})
export class ComponentsModule { }