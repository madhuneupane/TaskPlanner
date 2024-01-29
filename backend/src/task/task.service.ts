import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import {Task} from './schemas/task.schema'

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name)
        private taskModel: mongoose.Model<Task>
    ){}


    async findAll(): Promise<Task[]> {
        const tasks = await this.taskModel.find()
        return tasks;
    }

    async create(task: Task): Promise<Task>{
        const res = await this.taskModel.create(task)
        return res;
    }

    async updateCompletion(id: string, task: Task): Promise<Task>{
        return await this.taskModel.findByIdAndUpdate(id, task, {
            new: true,
            runValidators: true,
        });
    }

      async deleteTask(id: string): Promise<Task>{
        return await this.taskModel.findByIdAndDelete(id);
    }
}
