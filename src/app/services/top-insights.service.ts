import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopInsightsService {

  private url = '/getInsights';
  insights: any = [
    {
      'type': 'Most Available Service Instances:',
      'instances': [
        { 'id': 1, 'name': 'instance toi-demo-12-cb 2' },
        { 'id': 1, 'name': 'instance toi-demo-12-cb 1' },
        { 'id': 1, 'name': 'toi-demo-12' }]
    },
    {
      'type': 'Least Available Service Instances:',
      'instances': [
        { 'id': 1, 'name': 'instance toi-demo-12-cb 2' },
        { 'id': 1, 'name': 'instance toi-demo-12-cb 1' },
        { 'id': 1, 'name': 'toi-demo-12' }]
    },
    {
      'type': 'Service Instances with the Most Incidents:',
      'instances': [
        { 'id': 1, 'name': 'instance toi-demo-12-cb 2' },
        { 'id': 1, 'name': 'instance toi-demo-12-cb 1' },
        { 'id': 1, 'name': 'toi-demo-12' }]
    },
    {
      'type': 'Service Instances with the Least Incidents:',
      'instances': [
        { 'id': 1, 'name': 'instance toi-demo-12-cb 2' },
        { 'id': 1, 'name': 'instance toi-demo-12-cb 1' },
        { 'id': 1, 'name': 'toi-demo-12' }]
    },
    {
      'type': 'Service Instances with the Most Changes:',
      'instances': [
        { 'id': 1, 'name': 'instance toi-demo-12-cb 2' },
        { 'id': 1, 'name': 'instance toi-demo-12-cb 1' },
        { 'id': 1, 'name': 'toi-demo-12' }]
    }
  ];

  constructor(private http: HttpClient) { }

  getInsights(): Observable<any> {
    // return this.http.get<any>(this.url);
    return of(this.insights);
  }
}