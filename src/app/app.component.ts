import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Excella Dashboard';
  data = new Data;
  url = 'http://aacd821f2ce3711e899460223b0bba6b-207489040.us-east-2.elb.amazonaws.com:8080/monthly-report/';
  constructor(private httpClient: HttpClient) {}
  chartData = [
    { data: [], label: 'Headcount' },
    { data: [], label: 'BD Pipeline' },
    { data: [], label: 'Recruiting Pipeline' },
    { data: [], label: 'Bench+' }
  ];
  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Data) => {
      this.data = res;
      this.chartData = [
        { data: [this.data.headCount], label: 'Headcount' },
        { data: [this.data.bdPipeline], label: 'BD Pipeline' },
        { data: [this.data.recrutingPipeline], label: 'Recruiting Pipeline' },
        { data: [this.data.benchPluse ], label: 'Bench+' }
      ];
      console.log(this.data);
    });
  }
  chartOptions = {
    responsive: true
  };
 
  
   
  chartLabels = ['September'];

  onChartClick(event) {
    console.log(event);
  }
}