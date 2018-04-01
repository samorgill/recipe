import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Output() whichLink = new EventEmitter<string>();

  linkClicked(which: string){
    this.whichLink.emit(which);
  }
}
