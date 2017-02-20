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

> - Modify data
>
> - Query data




# SQL 1

[!](columns 6:)

<script type="sql" execute quiet>
CREATE TABLE T1 (a int);
INSERT INTO T1 values (1),(2),(3);
</script>

<script type="sql" execute class="q">
SELECT * FROM T1
</script>

[!](split)

<script type="sql" dump class="b"></script>

# SQL 2

<script type="sql" editor class="c">
SELECT * FROM T1
</script>

<style>
.c {
 display: flex;
}
.c .editor {
  flex: 1;
  margin-right: 20px;
}
.c .result {
  flex: 1;
  display: flex;
}
</style>
