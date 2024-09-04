// schema.js
import { pgTable, serial, text, varchar, integer, date } from 'drizzle-orm/pg-core';

export const supplier = pgTable('productRequest', {
    id: serial('id').primaryKey(),
    supplierName: varchar('supplierName').notNull(),
    productInformation: text('productInformation').notNull(),
    category: varchar('category').notNull(),
    quantity: integer('quantity').notNull(),
    timeline: date('timeline').notNull(),
    location: varchar('location').notNull(),
    requiredFor: varchar('requiredFor').notNull()
});
