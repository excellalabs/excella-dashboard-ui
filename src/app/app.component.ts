import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Excella Dashboard - Container Management Inquiries';
  data = new Data;
  url = 'http://10.68.245.220:8080/monthly-report/';
  constructor(private httpClient: HttpClient) {}
  chartData = [
    { data: [], label: 'Kubernetes and Helm' },
    { data: [], label: 'OpenShift' },
    { data: [], label: 'Mesos' },
    { data: [], label: 'Nomad' }
  ];
  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Data) => {
      this.data = res;
      this.chartData = [
        { data: [this.data.headCount], label: 'Vanilla Kubernetes' },
        { data: [this.data.bdPipeline], label: 'OpenShift' },
        { data: [this.data.recrutingPipeline], label: 'Mesos' },
        { data: [this.data.benchPluse ], label: 'Nomad' }
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