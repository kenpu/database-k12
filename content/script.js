(function() {
    // ==================================
    // Render results
    // ==================================
    function renderResult(out, result, append) {
        if(! append) out.empty();

        var table = $("<table>").addClass("sql-result");

        // create the table header
        var thead = $("<thead>");
        var row = $("<tr>");
        result.columns.forEach(function(name, i) {
            row.append($("<td>").text(name));
        });
        thead.append(row);
        table.append(thead);

        // create the table body
        var tbody = $("<tbody>");
        for(var i=0; i < result.values.length; i++) {
            var tuple = result.values[i];
            var row = $("<tr>");
            tuple.forEach(function(val, j) {
                row.append($("<td>").text(val));
            });
            tbody.append(row);

            if(i > 1000) break;
        }
        table.append(tbody);
        out.append(table);
    }

    function renderResults(out, results, name, append) {
        if(! append) out.empty();
        if(name) {
            out.append($("<div>").text("Table: " + name));
        }
        if($.isArray(results)) {
            results.forEach(function(result, i) {
                renderResult(out, result, true);
            });
        } else {
            renderResult(out, results, true);
        }
    }

    function listTables(db) {
        var meta = db.exec("select name from sqlite_master");
        var tables = []
        if(meta.length > 0) {
            tables = meta[0].values.map(function(tuple) {return tuple[0]});
        }
        return tables;
    }

    // ==================================
    // Render a database
    // ==================================
    function renderDatabase(out, db) {
        out.empty();
        var tables = listTables(db);
        if(tables.length > 0)
            tables.forEach(function(t) {
                var results = db.exec("SELECT * FROM " + t);
                renderResults(out, results, t, true);
            });
        else
            out.append("Database is empty.");
    }

    // ==================================
    // Prepares <script type="q/a">
    // ==================================
    function prepare($slide) {
        $("script[type='sql']", $slide).each(function() {
            prepareSQL($(this));
        });

        $("button[sql-run]", $slide).each(function() {
            prepareSQLButton($(this), $slide);
        });
    }

    function emptyDiv($div) {
        if($div) {
            $div.empty().append($("<i>").addClass("fa fa-cog fa-spin"));
        }
    }

    function errDiv($div, message) {
        if($div) {
            $div.empty().append($("<i>").addClass("fa fa-exclamation-triangle").css('color', 'crimson'));
            if(message) {
                $div.append($("<div>").text(message).addClass("alert alert-danger").css('padding', 20));
            }
        }
    }

    function prepareSQLButton($btn, $slide) {
        $btn.click(function() {
            var db = window.db;
            var sqlSource = $btn.attr('sql-source');
            var sqlDump = $btn.attr('sql-dump');
            var sqlOutput = $btn.attr('sql-output');
            var sql;
            if($(sqlSource).is("textarea")) {
                sql = $(sqlSource, $slide).val();
            } else {
                sql = $(sqlSource, $slide).text();
            }
            console.debug("SQL:", sql);

            var $sqlOutput, $sqlDump;
            if(sqlOutput) $sqlOutput = $(sqlOutput, $slide);
            if(sqlDump) $sqlDump = $(sqlDump, $slide);

            emptyDiv($sqlOutput);
            emptyDiv($sqlDump);

            setTimeout(function() {
                try {
                    if(sql) {
                        var results = db.exec(sql);
                        if($sqlOutput) {
                            renderResults($sqlOutput, results, false);
                        }
                    }
                    if($sqlDump) {
                        renderDatabase($sqlDump, db, false);
                    }
                } catch(e) {
                    sweetAlert("SQLError:", e.message, "error");
                    errDiv($sqlOutput, e.message);
                    errDiv($sqlDump, e.message);
                }
            }, 100);
        });
    }


// load the database from an existing sqlite3 file

function asyncLoadDb(url) {
    var deferred = $.Deferred();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function(e) {
        var array = new Uint8Array(this.response);
        var db = new SQL.Database(array);
        deferred.resolve(db);
    };
    xhr.send();

    return deferred;
}

window.sqlHelper = {
    prepare: prepare,
    load: asyncLoadDb
};

})();
