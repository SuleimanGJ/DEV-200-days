import { getClient } from "../utils.js";

async function addIndex(){
    const client = await getClient();

    const createIndexQuery = `CREATE INDEX idx_todos_user_id ON todos(user_id)`;
    await client.query(createIndexQuery);

    console.log(`Index added successfully on user_id column of todos table!`);
}

addIndex();



// PostgreSQL indexes 
// - are separate data structures that point to table rows to speed up data retrieval at the cost of extra storage and slower writes.


// advantages
// - make query on a certain column faster



// Common Index 

// TypesB-Tree (Default): Best for equality and range queries (<, <=, =, >=, >) and sorting (ORDER BY).Hash: Optimized strictly for simple equality matches (=).

// GIN (Generalized Inverted Index): Designed for composite or multi-value data types like arrays, JSONB documents, and full-text search.

// GiST (Generalized Search Tree): Flexible structure ideal for geometric/spatial data types and complex operations.

// BRIN (Block Range Index): Extremely lightweight storage for very large tables where data is naturally sorted by physical disk order, such as timestamps or sequential logs.





// Basic Syntax
// You can build an index using the PostgreSQL CREATE INDEX documentation reference:
// sql
// CREATE INDEX idx_column_name ON table_name (column_name);



// Special Index Variations

// Unique Index: Ensures all values in a column are distinct (CREATE UNIQUE INDEX).Partial Index: Indexes only a specific subset of rows using a WHERE clause to save space.

// Expression Index: Indexes the result of a function or expression, such as LOWER(column_name).

// Concurrent Build: Uses CREATE INDEX CONCURRENTLY to build an index on a large live table without blocking writes or updates.


//  Problems ?
// 1. You have to write raw sql queries
// 2. Migrations are hard
// 3. You don't get the best types

// Solution -> ORMS = like Prisma, Drizzle, TypeORM, Sequelize

// ORMS ?
// An Object-Relational Mapper (ORM) is a programming library that allows developers to interact with a relational database using object-oriented code instead of writing raw SQL queries.

// Essentially, an ORM acts as an automated translator. It maps database tables to classes, columns to properties, and rows to objects in your application code.

// - The ORM automatically handles the query construction, executes it, and returns a usable native object


// Core Features of an ORM
// CRUD Automation: Simplifies Creating, Reading, Updating, and Deleting records using native language methods (e.g., user.save() or user.delete()).

// Relationship Management: Handles complex table joins seamlessly. Fetching a user's blog posts becomes as simple as accessing user.posts.

// Database Migrations: Tracks and versions changes made to your database schema using code files instead of manual ALTER TABLE SQL scripts.

// Built-in Security: Mitigates risk by automatically using parameterized queries, preventing SQL injection vulnerabilities.

// Type Safety: Modern ORMs provide fully typed database query results, granting code autocompletion and compile-time error checks.




// The Trade-Offs
// Advantages
// Faster Development: Speeds up initial coding by eliminating repetitive boilerplate queries.

// Maintainability: Keeps database interactions consistent and easily readable for developers.

// Database Agnostic: Allows switching the underlying database engine (e.g., from PostgreSQL to MySQL) with minimal changes to application code.


// Disadvantages
// Performance Overhead: Automatically generated SQL can be complex, inefficient, or slower than finely-tuned raw queries.

// The "Impedance Mismatch": Object-oriented logic and relational tables naturally manage data differently; complex domain logic can become hard to map cleanly.

// Learning Curve: Complex queries require understanding the specific ORM's advanced syntax, which can take considerable time to master.

//  Popular ORMs by Language
//  If you are choosing an ORM for your tech stack, these are the industry 
//  standards:
//  JavaScript / TypeScript: Prisma, Sequelize, TypeORM
//  Python: SQLAlchemy, Django ORM
//  Java: HibernateC# (.NET): Entity Framework Core (EF Core)
//  Ruby: Active Record (Ruby on Rails)
//  Go: GORM