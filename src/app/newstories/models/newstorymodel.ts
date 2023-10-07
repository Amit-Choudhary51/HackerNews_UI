export class NewStoriesModel
{
  public id:number;  
  public title:string;
  public url:string;

  constructor(id:number=0,title:string="",url:string="")
  {
    this.id=id;
    this.title=title;
    this.url=url;
  }
}