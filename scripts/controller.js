var general_profs = TAFFY(proficiencies);

general_profs.sort("level");
var i = 12;
general_profs().each(function (r) {
    general_profs(r).update({id:i});
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
        titles[i].innerHTML = general_profs({id:profCounter}).first().title;
    }
    var progressBarShapes = document.getElementsByClassName(level);
    var j = general_profs({id:profCounter}).first().level;
    for (i = 0; i < j; i++) {
        progressBarShapes[i].style.backgroundColor = "#76b900";
    }
    for(i = 10; i < j + 10; i++) {
        progressBarShapes[i].style.backgroundColor = "#76b900";
    }
    document.getElementById(desc).innerHTML = general_profs({id:profCounter}).first().description;
}