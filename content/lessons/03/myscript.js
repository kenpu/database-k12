var db = null;
sqlHelper.load("starbucks.sqlite3").then(function(database) {
    db = database;
    console.info("Database is loaded.");
});

var myEvents = {
    h1: {
            init: sqlHelper.prepare
        }
};
