import { rollBackMigration } from "./db";


const revertMigration = async () => {
    await rollBackMigration();
};

revertMigration().catch((error) => console.error(error));
