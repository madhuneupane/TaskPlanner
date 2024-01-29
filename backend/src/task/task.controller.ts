import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService){

    }
    @Get()
    async getAllTasks(): Promise<Task[]>{
        return this.taskService.findAll()
    }

    @Post()
    async createTask(
        @Body()
        task: CreateTaskDto
    ): Promise<Task>{
        return this.taskService.create(task)
    }

     @Put(':id')
    async updateTask(
        @Param('id')
        id: string,
        @Body()
        task: UpdateTaskDto
    ): Promise<Task>{
        return this.taskService.updateCompletion(id, task)
    }

    @Delete(':id')
    async deleteTask(
        @Param('id')
        id: string,
    ): Promise<Task>{
        return this.taskService.deleteTask(id)
    }
}
