import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitemcomponent',
  templateUrl: './postlistitemcomponent.component.html',
  styleUrls: ['./postlistitemcomponent.component.scss']
})
export class PostlistitemcomponentComponent implements OnInit {

  @Input() articleTitre: string;
  @Input() articleContent: string;
  @Input() articleLoveIts: number;
  @Input() articleCreatedDate: string;



  constructor() { }

  ngOnInit() {
  }

  getColor(){
    if(this.articleLoveIts > 0) {
      return 'green';
    } else if(this.articleLoveIts < 0){
      return 'red';
    } 
  }

  onLoveIt(){
    // console.log(this.articleLoveIts);
    this.articleLoveIts += 1;
  }

  onDissLoveIt(){
    // console.log(this.articleLoveIts);
    this.articleLoveIts -= 1;
  }
}
