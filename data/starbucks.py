import sqlite3
import csv

db = sqlite3.connect("starbucks.sqlite3")
c = db.cursor()
c.execute("""
    DROP TABLE IF EXISTS stores;
    """)
c.execute("""
    CREATE TABLE stores (
        Brand text,
        Store_Number text,
        Store_Name text,
        Ownership_Type text,
        Street_Address text,
        City text,
        State_Province text,
        Country text,
        Postcode text,
        Phone_Number text,
        Timezone text,
        Longitude float,
        Latitude float)""")

with open("directory.csv", "r") as f:
    rdr = csv.reader(f)
    rows = list(rdr)
    n = len(rows[0])
    param = ",".join("?" for x in range(n))
    sql = "INSERT INTO stores VALUES(%s)" % param
    for row in rows[1:]:
        data = [unicode(x, errors='ignore') for x in row]
        c.execute(sql, data)
    db.commit()

db.close()
