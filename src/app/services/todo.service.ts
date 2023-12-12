import { Injectable } from '@angular/core';

interface TodoItem {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: TodoItem[] = [];

  addItem(title: string) {
    this.items.unshift({ title });
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
