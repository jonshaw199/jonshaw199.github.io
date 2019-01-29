var profs_db = TAFFY(proficiencies);
var temp_db = TAFFY();

populateTempDb('general');
updateProfs();

function populateTempDb(c1, c2, c3, c4, c5) {
    temp_db().remove();
    profs_db({tags:{has: [c1,c2, c3, c4, c5]}}).each(function (r) {
        temp_db.insert(r);
    });
    temp_db.sort("level");
}

function updateProfs() {
    var i = 12;
    temp_db().each(function (r) {
        temp_db(r).update({id:i});
        i--;
    });

    var profCounter;
    for(profCounter = 1; profCounter < 13; profCounter++) {
        var title = "prof-" + profCounter + "-title";
        var level = "prof-" + profCounter + "-shape";
        var desc = "prof-" + profCounter + "-description";
        var titles = document.getElementsByClassName(title);

        var i;
        for (i = 0; i < titles.length; i++) {
            titles[i].innerHTML = temp_db({id:profCounter}).first().title;
        }
        var progressBarShapes = document.getElementsByClassName(level);
        var j = temp_db({id:profCounter}).first().level;
        for (i = 0; i < j; i++) {
            progressBarShapes[i].style.backgroundColor = "#8b0000";
        }
        for(i = 10; i < j + 10; i++) {
            progressBarShapes[i].style.backgroundColor = "#8b0000";
        }
        document.getElementById(desc).innerHTML = temp_db({id:profCounter}).first().description;
    }
}

function toggle() {
    if ($("#skills-more-less").attr('aria-expanded') === "true") {
        $("#skills-more-less").text('Show More');
    } else {
        $("#skills-more-less").text('Show Less');
    }
}
