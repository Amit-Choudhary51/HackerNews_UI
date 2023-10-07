import { Component,ViewChild } from '@angular/core';
import { NewstoriesService } from './services/newstories.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { NewStoriesModel } from './models/newstorymodel';

@Component({
  selector: 'app-newstories',
  templateUrl: 'newstories.component.html',
  styleUrls: ['newstories.component.scss']  
})
export class NewstoriesComponent { 
  displayedColumns:string[]=['id','title','url'];
  dataSource!:MatTableDataSource<NewStoriesModel>;   
  newstories:any=<NewStoriesModel>{};  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private service:NewstoriesService) {
    
    this.getnewstories();
  }   
  
  
  // get list of new stories and bind it to data source
  getnewstories(){    
    this.service.getnewstories()
      .subscribe((response: any) => {  
        var jsonData=this.convertObjectToJSON(response.body)

        this.newstories=jsonData;      
        this.dataSource=new MatTableDataSource(this.newstories); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;      
                 
      });
}

  // search filter on key event
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;    
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if(this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
  }

  // Parse object to json
  convertObjectToJSON(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
