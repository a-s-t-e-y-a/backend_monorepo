import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
 
// for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });

 
// for query purposes
const queryClient = postgres("postgres://postgres:test@35.91.69.250:5432/backend");
export const db: PostgresJsDatabase = drizzle(queryClient);
