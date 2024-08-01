import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projet1';
  test: boolean = false;
  color: string = 'red';
  List: Array<{ name: string; age: number }> = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
  ];
  style = { background: 'red' };
  setStyle() {
    let style = {
      background: 'green',
      'font-size': '50px',
      color: 'blue',
    };
    return style;
  }
  classbackground = 'backgroundclass';
  isSpecial = true;
  canSave = false;
  setClass() {
    return {
      special: this.isSpecial,
      saveable: this.canSave,
    };
  }
  inputvalue: String = '';
  changevalue() {
    console.log('value', this.inputvalue);
  }
hasSpecialClass() {
  const classes = this.setClass();
  return classes.special;
}
}