import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { taskDto } from './dto/task.dto';


@Injectable()
export class TaskService {
    constructor(private prismaClient: PrismaService) {}
    
    
    createTask(data: taskDto) {
        const task = this.prismaClient.task.create({
            data: data
        })

        return task
    } 

    getAllTasks() {
        return this.prismaClient.task.findMany()
    }

    getTaskById(id: string) {
        const task = this.prismaClient.task.findUnique({
            where: {
                id
            }
        })
        if(!task) {
            throw new Error('Task is not found')
        }

        return task
    }

    async toggleDone(id: string) {
        const task = await this.getTaskById(id)
        if(!task) {
            throw new Error('Task is not found')
        }

        return this.prismaClient.task.update({
            where: {
                id
            },
            data: {
                isDone: !task.isDone
            }
        })

    }

    async deleteTask(id: string) {
        const task = await this.getTaskById(id)
        if(!task) {
            throw new NotFoundException('Task is not found')
        }

        await this.prismaClient.task.delete({
            where: {
                id
            }
        })

        return 'Task is Deleted'
    }
}
