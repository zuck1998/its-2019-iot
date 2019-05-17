import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  message = "its";
  list: string[] = [];

  listAdd = (item: string) => {
    this.list.push(item);
  }

  listReset = () => {
    this.list.splice(0, this.list.length);
  }


  showMessage = () => {
    alert(this.message);
  }

  showMessage2 = (prefix: string) => {
    alert(prefix + ": " + this.message);
  }

  deleteItem = (text: string) => {
    var index = this.list.indexOf(text);
    this.list.splice(index, 1);
  }
  

}
