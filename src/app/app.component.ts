import { Component } from '@angular/core';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  collegue1 = {
    pseudo : 'c1',
    score : '+10',
    photo : '$'
  }
}
