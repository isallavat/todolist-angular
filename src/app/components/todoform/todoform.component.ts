import { Component } from '@angular/core'
import { TodoService } from '../../services/todo.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.scss'
})
export class TodoformComponent {
  title: string = ''
  constructor(private todoService: TodoService) {}

  addItem($event: SubmitEvent) {
    $event.preventDefault()
    const title = this.title.trim()

    if (title) {
      this.todoService.addItem(this.title)
      this.title = ''
    }
  }
}
