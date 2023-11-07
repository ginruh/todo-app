import { Injectable } from '@nestjs/common';

type Todo = {
  name: string;
  description: string;
  isComplete: boolean;
};

const todos: Todo[] = [];

@Injectable()
export class TodoService {
  list() {
    return todos;
  }
}

