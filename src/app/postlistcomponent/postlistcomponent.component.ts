import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistcomponent',
  templateUrl: './postlistcomponent.component.html',
  styleUrls: ['./postlistcomponent.component.scss']
})
export class PostlistcomponentComponent implements OnInit {

  title = 'Mos Gerila';

  @Input() articlesList: string;

  constructor() { }

  ngOnInit() {
  }

}
 