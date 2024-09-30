import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class todopage {
  items = [
    { name: 'Item 1', checked: false },
    { name: 'Item 2', checked: false },
    { name: 'Item 3', checked: false },
    { name: 'Item 4', checked: false },
  ];

  constructor() {}

  submitSelectedItems() {
    const selectedItems = this.items.filter(item => item.checked);
    console.log('Selected Items:', selectedItems);
  }
}