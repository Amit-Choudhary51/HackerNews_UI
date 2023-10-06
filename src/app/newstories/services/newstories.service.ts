import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewstoriesService {

  private url = 'https://localhost:44382/api/NewStories';
     
  constructor(private httpClient: HttpClient) { }  
  

  getnewstories(){    
    return this.httpClient.get(this.url);
  }  
}

