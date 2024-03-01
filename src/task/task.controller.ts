import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { taskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createTask(@Body() data: taskDto) {
    return this.taskService.createTask(data)
  }

  @Get()
  async getTasks() {
    return this.taskService.getAllTasks()
  }
  
  @Get(':id')
  async getTask(@Param('id') id: string) {
    return this.taskService.getTaskById(id)
  }

  @Patch(':id')
  async updateTask(@Param('id') id: string) {
    return this.taskService.toggleDone(id)
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id)
  }
}
