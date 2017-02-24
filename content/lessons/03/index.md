+++
title = "Data analysis with SQL queries"
script = "myscript.js"
+++

# Data analysis with SQL queries

[!](highlight)


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

<style>
div.sql {
    font-size: 15pt;
    font-style: italic;
    padding: 10px;
    margin-bottom: 10px;
    border: thin dashed #aaa;
}
</style>

<div class="sql" 
    contenteditable="true" 
    style="height:200px">
select count(*) from stores;<br>
select count(*) from countries;<br>
</div>

<button class="btn btn-primary"
  sql-run
  sql-source=".sql"
  sql-output=".output">Run</button>

<div class="output" 
style="height: 300px; overflow:scroll; font-size:15pt">
</div>
