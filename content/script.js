(function() {
    // ==================================
    // Render results
    // ==================================
    function renderResult(out, result) {
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
        result.values.forEach(function(tuple, i) {
            var row = $("<tr>");
            tuple.forEach(function(val, j) {
                row.append($("<td>").text(val));
            });
            tbody.append(row);
        });
        table.append(tbody);
        out.append(table);
    }

    function renderResults(out, results, name) {
        if(name) {
            out.append($("<h5>").text(name));
        }
        if($.isArray(results)) {
            results.forEach(function(result, i) {
                renderResult(out, result);
            });
        } else {
            renderResult(out, results);
        }
    }

    function copyStyle($from, $to) {
        $to.attr('style', $from.attr('style')).addClass($from.attr('class'));
    }

    // ==================================
    // Render a database
    // ==================================
    function renderDatabase(out, db) {
        var meta = db.exec("select name from sqlite_master");
        var tables = meta[0].values.map(function(tuple) {return tuple[0]});
        tables.forEach(function(t) {
            var results = db.exec("SELECT * FROM " + t);
            renderResults(out, results, t);
        });
    }

    // ==================================
    // Prepares <script type="q/a">
    // ==================================
    function prepare($slide) {
        $("script[type='sql']", $slide).each(function() {
            prepareSQL($(this));
        });
    }
    function prepareSQL($q) {
        var $div = $("<div>");
        copyStyle($q, $div);
        if($q.attr('execute') !== undefined) {
            prepareExecute($q, $div);
        } else if($q.attr('dump') !== undefined) {
            prepareDump($q, $div);
        } else if($q.attr('editor') !== undefined) {
            prepareEditor($q, $div);
        }
        if($q.attr('quiet') == undefined) {
            $q.after($div);
        }
    }

    function prepareExecute($q, $div) {
        var $result = $("<div>").addClass("result").appendTo($div);
        sql = $q.text();
        try {
            var results = db.exec(sql);
            renderResults($result, results);
        } catch(e) {
            $result.text(e.message);
        }
    }

    function prepareDump($q, $container) {
        var $div = $("<div>").addClass("result");
        var $btn = $("<button><i class='fa fa-refresh'></i></button>").addClass("btn btn-default");
        $container.append($div, $btn);

        $btn.click(function() {
            $div.empty();
            renderDatabase($div, db);
        });
        renderDatabase($div, db);
    }

    function prepareEditor($q, $container) {
        var $text = $("<textarea>").text($q.text().trim());
        var $div = $("<div>").addClass("result");
        var $btn = $("<button><i class='fa fa-refresh'></i></button>").addClass("btn btn-default");
        var $editor = $("<div>").addClass("editor").append($text, $btn);

        $container.append($editor, $div);

        $btn.click(function() {
            $div.empty();
            try {
                var results = db.exec($text.val());
                renderResults($div, results);
            } catch(e) {
                $div.text(e.message);
            }
        });
        $btn.click();
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
};

})();
