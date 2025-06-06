import { pgTable, serial, varchar, index, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull().unique(),
  password: varchar('password', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updateAt: timestamp('updated_at').defaultNow().notNull()
}, (users) => ({
  emailIdx: index('email_idx').on(users.email),
  usernameIdx: index('username_idx').on(users.username)
}))
