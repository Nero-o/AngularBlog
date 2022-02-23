import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 api:string = '/api/'

constructor(private httpClient:HttpClient) { }

getPosts():Observable<any[]> {
  const url = `${this.api}posts`

  return this.httpClient.get<any>(url)
}


}
