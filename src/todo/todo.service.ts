import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo, CreateTodoDto, UpdateTodoDto } from './todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) throw new NotFoundException('Todo not found');
    return todo;
  }

  create(createDto: CreateTodoDto): Todo {
    const todo: Todo = {
      id: this.idCounter++,
      title: createDto.title,
      description: createDto.description,
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  update(id: number, updateDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);
    if (updateDto.title !== undefined) todo.title = updateDto.title;
    if (updateDto.description !== undefined) todo.description = updateDto.description;
    if (updateDto.completed !== undefined) todo.completed = updateDto.completed;
    return todo;
  }

  remove(id: number): void {
    const idx = this.todos.findIndex((t) => t.id === id);
    if (idx === -1) throw new NotFoundException('Todo not found');
    this.todos.splice(idx, 1);
  }
}
