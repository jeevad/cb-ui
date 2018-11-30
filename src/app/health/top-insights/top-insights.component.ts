import { Component, OnInit } from '@angular/core';
import { TopInsightsService } from '../../services/top-insights.service';

@Component({
  selector: 'app-top-insights',
  templateUrl: './top-insights.component.html',
  styleUrls: ['./top-insights.component.scss']
})
export class TopInsightsComponent implements OnInit {

  private insights: any;

  constructor(private instance: TopInsightsService) {}

  ngOnInit() {
    this.instance.getInsights().subscribe(data => {
      console.log(data);
      this.insights = data;
    });

}
