import { Optional, CreationOptional, Model } from "sequelize";
import { NoteAttributes } from "../types";
type NoteCreationAttributes = Optional<NoteAttributes, 'id'>;
declare class Note extends Model<NoteAttributes, NoteCreationAttributes> {
    id: CreationOptional<number>;
    title: string;
    author: string;
    content: string;
    userId: CreationOptional<number>;
    teamId: CreationOptional<number>;
}
export default Note;
