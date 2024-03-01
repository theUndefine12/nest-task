import { IsNotEmpty } from "class-validator";

export class taskDto {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    description: string
}