var databaseAsString;
$.getJSON("https://jonshaw199.github.io/json/proficiencies.json", function (data) {
    databaseAsString = JSON.stringify(data);
});

/*var general_profs = TAFFY('[{"id":1,"title":"UI/UX Design","level":8,"description":"3 years experience with requirements engineering,creating wireframes and UML diagrams,and designing intuitive and aesthetically pleasing interfaces."},{"id":2,"title":"HTML/CSS/Bootstrap","level":8,"description":"3 years experience with developing modern websites using HTML5 and CSS,often in combination with the Bootstrap framework."},{"id":5,"title":"Graphic Design w/ Photoshop","level":7,"description":"3 years experience with graphic design using Adobe Photoshop for software development and digital marketing purposes."},{"id":6,"title":"Communication & Teamwork","level":10,"description":"8 years experience with working efficiently and communicating effectively with team members."},{"id":7,"title":"Agile Development","level":8,"description":"2 years experience with working in a group using Agile methodologies,specifically Extreme Programming and Scrum."},{"id":12,"title":"JavaScript","level":6,"description":"1 year experience with Javascript for developing dynamic and interactive webpages."},{"id":3,"title":"Java","level":8,"description":"4 years experience with object-oriented programming using Java for client-server applications,2D/3D video games,and more."},{"id":4,"title":"C/C++","level":8,"description":"4 years experience with both C and C++ programming for a variety of applications including parallel computing using a GPU."},{"id":8,"title":"Game Design & Development","level":6,"description":"1 year experience with designing/developing 2D and 3D Java-based video games from the ground up."},{"id":9,"title":"Unix","level":7,"description":"3 years experience with working in a Unix environment and 6 months experience with Bash scripting."},{"id":10,"title":"SQL/MySQL","level":6,"description":"6 months experience with relational database design,MySQL,and SQL."},{"id":11,"title":"Python","level":7,"description":"6 months experience with Python programming for a variety of applications."}]');*/

var general_profs = TAFFY(databaseAsString);

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