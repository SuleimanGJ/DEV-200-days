import { Client } from "pg";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js";



// postgresql://[user]:[password]@[host]:[port]/[database]
export const getClient = async() => {
    const client = new Client(`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`);
    await client.connect();
    return client;
}