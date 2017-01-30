var myEvents = {
    ".first-slide": {
        init: null,
        once: null,
        enter: function($slide) {
            var $p = $("p", $slide);
            $p.css({
                fontSize: 10,
                opacity: 1,})
                .animate({
                    fontSize: 120,
                    opacity: 0.0,
                }, 1500);
        },
    },
    ".database": {
        init: function($slide) {
            var deferred = asyncLoadDb('sample.sqlite3');
            db = null;
            deferred.then(function(d) {
                console.debug("database loaded.");
                db = d;
                window.db = db;
            });

            var text = $("textarea", $slide);
            var out = $(".output", $slide);
            $("button.run").click(function() {
                var sql = text.val();
                executeSQL(db, sql, out);
            });
        },
    },
    ".queries": {
        init: function($slide) {
                  evalSQLScripts($slide);
              },
    },
};


