import { Optional, CreationOptional, Model } from "sequelize";
import { TeamAttributes } from "../types";
type TeamCreationAttributes = Optional<TeamAttributes, 'id'>;
declare class Team extends Model<TeamAttributes, TeamCreationAttributes> {
    id: CreationOptional<number>;
    name: string;
    userId: CreationOptional<number>;
}
export default Team;
