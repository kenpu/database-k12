+++
title = "Data analysis with SQL queries"
script = "myscript.js"
+++


# Data analysis with SQL queries

[!](highlight)

<div id="loading">Loading Starbucks database...</div>

# Tables in the database

[!](columns 6:)

<button class="btn btn-primary"
        sql-run
        sql-source=".sql-stores"
        sql-output=".stores">Show stores</button>

<div class="stores" 
  style="height: 500px; 
  font-size: 12pt;
  overflow: scroll"></div>

<div class="sql-stores" style="display:none">
select * from stores
</div>

[!](split)

<button class="btn btn-primary"
        sql-run
        sql-source=".sql-countries"
        sql-output=".countries">Show countries</button>

<div class="countries" 
  style="height: 500px; 
  font-size: 12pt;
  overflow: scroll"></div>

<div class="sql-countries" style="display:none">
select * from countries
</div>


# ______________________

<div class="sql" 
    contenteditable="true" 
    style="height:200px">
select count(*) from stores;<br>
select count(*) from countries;<br>
</div>

[!](note) Let's check now many tuples there are in each of the tables.

<button class="btn btn-primary"
  sql-run
  sql-source=".sql"
  sql-output=".output">Run</button>

<div class="output" 
style="height: 300px; overflow:scroll; font-size:15pt">
</div>


# Selecting tuples by conditions from a single table

```sql
SELECT <attribute-list>
FROM <table>
WHERE <condition>
```

[!](note) The `<condition>` is any logical condition on the tuples of the single
table.

# _______________

[!](columns 6:)

<div class="sql" contenteditable="true" style="height:200px">
select Street_Address, City, State_Province, Country
from stores
where State_Province = 'ON';
</div>

<button class="btn btn-default"
    sql-run
    sql-source=".sql"
    sql-output=".output">Run</button>

_Challenge_: list the Starbucks in Toronto.

[!](split)

<div class="output" 
style="height: 300px; overflow:scroll; font-size:15pt">
</div>




# Joining multiple tables 

There is a second table in the database:

```text
countries(Common_Name, Type, Capital, Letter_Code, ...)
```

Can you list the country names, and their types?

[!](columns 6:)

<textarea class="sql" style="height:200px"></textarea>

<button class="btn btn-default"
    sql-run
    sql-source=".sql"
    sql-output=".output">Run</button>

[!](split)

<div class="output" style="height: 300px; overflow:scroll; font-size:15pt"></div>





# _______________________

We can join the two tables:

```sql
SELECT <attributes from both tables>
FROM stores JOIN countries ON <join-condition>
WHERE <condition>
```

_Example:_

```{sql clipboard}
SELECT Street_Addres, Common_Name
FROM stores JOIN countries ON stores.Country = countries.Letter_Code;
```

# ___________________________

Let's try it out:


<textarea class="sql" style="height:200px"></textarea>


<button class="btn btn-default"
    sql-run
    sql-source=".sql"
    sql-output=".output">Run</button>


<div class="output" style="height: 300px; overflow:scroll; font-size:15pt"></div>



# Aggregation

We can group tuples by their commonality over some specified attributes, and
compute the _aggregate_ values based on the groups.

```sql
SELECT <group-by attributes> <aggregation ...>
FROM ...
WHERE ...
GROUP BY <group-by attributes>
```





# _____________________

Here is a query that sorts countries by the number of Starbucks they have.

[!](columns 6:)

```{sql sm clipboard}
SELECT Country, count(*) AS stores
FROM stores
GROUP BY Country
ORDER BY stores DESC
```

<button class="btn btn-default"
    sql-run
    sql-source="pre code"
    sql-output=".output">Run</button>

Can you use `JOIN` to convert the country code to common names?

<textarea style="height: 130px; font-size: 12pt"></textarea>

<button class="btn btn-default"
    sql-run
    sql-source="textarea"
    sql-output=".output">Run</button>



[!](split)

<div class="output"></div>


# _______________________


_Challenge_

Write a query to list the top cities ranked by the number of starbucks.


<textarea style="font-size: 12pt"></textarea>

[!](note)
<button class="btn btn-default"
    sql-run
    sql-source="textarea"
    sql-output=".output">Run</button>


<div class="output" style="overflow: scroll; height: 350px; font-size: 85%"></div>


# Summary

[!](highlight)

- Simple SELECT queries

- SELECT queries with table joins

- SELECT queries with aggregation


<style>
textarea, div.sql {
    font-family: monospace;
    font-size: 15pt;
    padding: 10px;
    margin-bottom: 10px;
    border: thin dashed #aaa;
}
</style>


