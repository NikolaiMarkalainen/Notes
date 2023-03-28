import { runMigrations } from "./db";


const loadMigrations = async () => {
    await runMigrations();
};

loadMigrations().catch((error) => console.error(error));
