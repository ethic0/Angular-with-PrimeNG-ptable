import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from './todos';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  // data: any [] = []
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos')
    // .toPromise()
    // .then(res => <Todos[]>res.data)
    // .then(data => { return data; })
    
  }
}
