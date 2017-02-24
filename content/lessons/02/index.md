+++
title = "Relational Databases"
categories = "database"
script = "mysql.js"
+++

# Relational Databases

[!](highlight)




Background
===========================================

[!](scale 0.8)

History

Invented in response to the increasing needs for data storage and data
management from the growing financial banking industry.  [!](box)

- 1974: Invented by Edgar Frank Codd at IBM San Jose research lab.

- 1977: Oracle Database

- 1982: IngreSQL, UC Berkeley

- 1983: IBM DB2

- 1989: Microsoft SQL Server

- 1995: MySQL

- 1996: PostgreSQL

- 2000: SQLite

- 2009: Amazon Relational Data Service (RDS)

- 2015: Google Big Table Service


# Relational Database Management Systems (RDBMS)

[!](middle)

From 1974 - now (over 40 years):

[!](box) The relational data model remains the most popular and time proven (1974 - now =
over 40 years) data modeling framework.

[!](&&&)

[!](box) *Structured Query Language* (**SQL**) was and still is the industry standard in
communicating with relational databases.




# Who are using RDBMS?

- Stock exchanges

- Federal governments

- Walmart and every other Fortune 500 companies

- Schools

- Every mobile phones running Android or iOS systems

- Every Chrome or Firefox browsers

[!](box) If you are reading this, most likely you are running a RDBMS right now.


# Let's get started

[!](highlight)


# Interacting with RDBMS

We will interact with a RDBMS system, known as SQLite, through your browser.

Issue commands to RDBMS

> - Create data
>
> - Modify data
>
> - Query data


# Elements of RDBMS

- A database

    > - name of the database
    > - a collection of tables

    [!](box)
    We will use a database that is already created
    as part of this Web page.

- A table

    > - name of the table
    > - a list of attributes
    > - a collection of tuples


# Creating tables

```sql
CREATE TABLE <name> (
    <attribute> <type>, ...
);
```

> 1. Specifies the attribute names and their types.
> 
> 2. Run multiple `CREATE TABLE` commands to create more than one table.
> [!](note) 

_Example:_

```sql
CREATE TABLE cities (
    name text,
    population integer
);
```

# _________________________

## Try it out

[!](columns 6:)

<textarea style="height:300px; padding: 10px;">
CREATE TABLE knows (
    name text,
    friend text
)
</textarea>

<button 
    class="btn btn-default"
    sql-run
    sql-source="textarea"
    sql-dump="#output">Run</button>

[!](split)

### Database

<div id="output"></div>



# Delete a table

```sql
DROP TABLE <table>;
```

# __________________

<textarea style="height:100px; padding: 10px;">
</textarea>

[!](note) Can you delete the table created in previous slide?

<button
  class="btn btn-default"
  sql-run
  sql-source="textarea"
  sql-dump="#output">Run</button>


<div id="output"></div>

# Creating tuples

```sql
INSERT INTO TABLE <table>
VALUES (<tuple>), ... ;
```

_Example_:

```{sql clipboard}
CREATE TABLE IF NOT EXISTS cities (name TEXT, population INTEGER);

INSERT INTO cities VALUES ('Toronto', 2600000), ('Oshawa', 140000);
```

[!](note fragment) Note the `if not exists` clause with create table.

# Try it out

[!](columns 8:)

<textarea style="height:200px; padding: 10px"></textarea>

<button class="btn btn-default"
        sql-run
        sql-source="textarea"
        sql-dump="#output">Run</button>

[!](split)

<div id="output"></div>


# SELECTING Tuples

What if we are only interested in some attributes of some tuples?

Use the _select_ statement:

```sql
SELECT <attribute> ...
FROM <table>
WHERE <condition>
```

_Example:_

```{sql clipboard}
SELECT population FROM cities WHERE name = 'Toronto'
```

# Try it out:

[!](columns 4:)

<button class="btn btn-info"
        sql-run
        sql-dump=".all">Show database</button>

<div class="all"></div>

[!](split)

<textarea style="height:200px;padding: 10px;"></textarea>

<button class="btn btn-default"
        sql-run
        sql-source="textarea"
        sql-output="#output">Run</button>

<div id="output"></div>




# DELETING tuples

- Tuples can be removed from a table using the `DELETE`
  command.

    ```sql
    DELETE FROM <table>
    WHERE <condition>
    ```

- Example

    ```sql
    DELETE FROM cities
    WHERE name = 'Oshawa'
    ```

# Try it out:

[!](columns 6:)

<textarea style="height: 200px; padding: 10px"></textarea>

<button class="btn btn-default"
       sql-run
       sql-source="textarea"
       sql-dump=".output">Run</button>

[!](split)

<div class="output"></div>

<button class="btn btn-info" sql-run sql-dump=".output">Show database</button>



# Summary

[!](highlight)

- `CREATE TABLE <table> ( <attribute> <type>, ... )`
- `DROP TABLE <table>`
- `INSERT INTO <table> VALUES (...), ...`
- `SELECT <attribute>, ... FROM <table> WHERE <condition>`
- `DELETE FROM <table> WHERE <condition>`
