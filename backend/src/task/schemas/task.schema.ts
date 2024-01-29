import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({})
export class Task {

    @Prop()
    name: string;

    @Prop({default: false})
    completed: boolean;
    
}

export const TaskSchema = SchemaFactory.createForClass(Task)