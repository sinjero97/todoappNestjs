import { Controller, Get, Req, Post, Header, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}
    @Post()
    async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
    }
    @Get()
    async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: string): Promise<any> {
        return this.todoService.findById(id);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return this.todoService.delete(id);
    }
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateTodoDto: UpdateTodoDto
    ): Promise<any> {
        return this.todoService.update(id, updateTodoDto.description);
    }
}
