var db = null;
sqlHelper.load("starbucks.sqlite3").then(function(database) {
    db = database;
    console.info("Database is loaded.");
});

function checkLoading($loading) {
    if(window.db == null) {
        $loading.append(".");
        setTimeout(function() {
            checkLoading($loading);
        }, 500);
    } else {
        $loading.text("Okay, Starbucks database loaded.");
    }
}

var myEvents = {
    "h1": { 
        init: sqlHelper.prepare
    },
    "#loading": {
        init: function($slide) {
            var $loading = $("#loading");
            checkLoading($loading);
        }
    }
};
