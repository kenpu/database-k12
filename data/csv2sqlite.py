import sqlite3
import re
import sys

db = sqlite3.connect("starbucks.sqlite3")
c = db.cursor()
c.execute('DROP TABLE IF EXISTS stores')
c.execute('DROP TABLE IF EXISTS countries')
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

c.execute("""
    CREATE TABLE countries (
        ID text,
        Common_Name text,
        Formal_Name text,
        Type text,
        Subtype text,
        Sovereignty text,
        Capital text,
        Currency_Code text,
        Currentcy_Name text,
        Tel_Code text,
        Letter_Code text,
        Letter_Code3 text,
        Number text,
        Internet_Code text
    )""")


quoted = re.compile(r'"[^"]*"')
def clean(line):
    m = quoted.search(line)
    if m:
        match = m.group(0).replace(",", ";").replace('"', '')
        line = line[0:m.start(0)] + match + line[m.end(0):]
        line = clean(line)
    return line

def readrows(f):
    for (i, line) in enumerate(f.readlines()):
        line = clean(line)
        row = line.split(",")
        row[5] = row[5].capitalize()
        row[6] = row[6].upper()
        row[7] = row[7].upper()
        yield row

def import_data(file_name, table_name):
    with open(file_name, "r") as f:
        rows = list(readrows(f))
        n = len(rows[0])
        param = ",".join("?" for x in range(n))
        sql = "INSERT INTO %s VALUES(%s)" % (table_name, param)
        for row in rows[1:]:
            data = [unicode(x, errors='ignore') for x in row]
            c.execute(sql, data)
        db.commit()

import_data("directory.csv", "stores")
import_data("iso_3166_2_countries.csv", "countries")

db.close()

print "Done"
