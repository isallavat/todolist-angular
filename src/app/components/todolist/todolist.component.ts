import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  constructor(private todoService: TodoService) {}

  get items() {
    return this.todoService.items
  }

  deleteItem(index: number) {
    this.todoService.deleteItem(index)
  }
}
