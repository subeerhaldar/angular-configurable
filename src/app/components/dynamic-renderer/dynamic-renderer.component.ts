import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { PageConfig, WidgetConfig } from '../../models/config.model';

@Component({
  selector: 'app-dynamic-renderer',
  templateUrl: './dynamic-renderer.component.html',
  styleUrls: ['./dynamic-renderer.component.css']
})
export class DynamicRendererComponent implements OnInit {
  config: PageConfig | null = null;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe(data => {
      this.config = data;
    });
  }
}