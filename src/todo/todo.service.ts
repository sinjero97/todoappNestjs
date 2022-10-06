import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
    private readonly todos: Todo[] = [{id: "dsahda", description: "test"},{id: "dsahjdsa",description: "test2"}];

    create(todo: Todo) {
        todo.id = "id" + Math.random().toString(16).slice(2)
        this.todos.push(todo);
        console.log(todo);
        return todo;
    }

    findAll(): Todo[] {
        return this.todos;
      }
    
      findById(id: string): any {
        console.log(id);
        const catIndex = this.todos.find(elem => elem.id === id);
        console.log(catIndex);
        if (catIndex === undefined) {
          throw new NotFoundException();
        }
        return catIndex;
      }
    
      delete(id: string): any {
        const index = this.todos.findIndex(elem => elem.id === id);
        if (index === -1) {
          throw new NotFoundException();
        }
        this.todos.splice(index);
        return { message: 'Todo Deleted' };
      }
    
      update(id: string, description: string): any {
        const index = this.todos.findIndex(elem => elem.id === id);
        if (index === -1) {
          throw new NotFoundException();
        }
        const singleTodo = this.todos[index];
        if (description) {
          singleTodo.description = description;
        }

        this.todos[index] = singleTodo
        return { message: 'Todo Updated' };
      }
}
