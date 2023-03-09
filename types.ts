import { QueryInterface } from "sequelize";

export type NoteAttributes = {
    id: number,
    title: string,
    content: string,
    author: string
}

export interface Migration {
    name: string;
    timestamp: number;
  }

export interface MigrationContext {
    context: QueryInterface
}