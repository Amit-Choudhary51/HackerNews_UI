import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API } from '../models/apiconstants';

@Injectable({
  providedIn: 'root'
})

export class NewstoriesService {   

  constructor(private httpService: HttpService) { }   
  
  // get new stories
  getnewstories(){    
    return  this.httpService.httpGet(API.NewStories);    
  }  
}