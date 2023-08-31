import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';
export const user = pgTable('user',{
    id : serial('id').primaryKey(),
    name :varchar('name',{length:256}),
    email : varchar('email',{length:256}),
    password : varchar('password',{length:256}),
    phoneNumber : integer('phoneNumber')
})