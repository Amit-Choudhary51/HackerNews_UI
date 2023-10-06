import { Component, OnInit,ViewChild } from '@angular/core';
import { NewstoriesService } from './services/newstories.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';



export interface NewStoriesModel
{
  id:number;  
  title:string;
  url:string;
}

@Component({
  selector: 'app-newstories',
  templateUrl: 'newstories.component.html',
  styleUrls: ['newstories.component.scss']
})
export class NewstoriesComponent { 
  displayedColumns:string[]=['id','title','url'];
  dataSource!:MatTableDataSource<NewStoriesModel>;
  todo:any;
  newstories:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private service:NewstoriesService) {
    
    this.getnewstories();
  }  
  
  
  getnewstories(){    
      this.service.getnewstories()
        .subscribe((response: any) => {  

          this.newstories=response;      
          this.dataSource=new MatTableDataSource(this.newstories); 
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;      
                   
        });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;    
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if(this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
  }
}
