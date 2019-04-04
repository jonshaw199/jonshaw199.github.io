var profs_db = TAFFY(proficiencies);
var temp_db = TAFFY();

var num_of_profs = 10;

/************************************************************************************************/
fillInPersonalStatement();
fillInSkills();
fillInEducation();
fillInWorkHistory();
/************************************************************************************************/

function fillInPersonalStatement() {
	$('.old-personal-statement-2').text(oldPersonalStatement2);
	$('.areas-of-focus-intro').text(areasOfFocusIntro);
	//$('.personal-statement').text(personalStatement);
	//$('.pitch-for-video').text(pitchForVideo);
	$('.areas-of-focus-1-title').text(areasOfFocus[0].title);
	$('.areas-of-focus-2-title').text(areasOfFocus[1].title);
	$('.areas-of-focus-3-title').text(areasOfFocus[2].title);
	$('.areas-of-focus-1-description').append(boldKeywords(areasOfFocus[0].description, areasOfFocus[0].keywords));
	$('.areas-of-focus-2-description').append(boldKeywords(areasOfFocus[1].description, areasOfFocus[1].keywords));
	$('.areas-of-focus-3-description').append(boldKeywords(areasOfFocus[2].description, areasOfFocus[2].keywords));
	$('.areas-of-focus-outro').text(areasOfFocusOutro);
}

function boldKeywords(rawText, listOfKeywords) {
	/*
	var regExpStr = "\\";
	listOfKeywords.map((kw, index, array) => {
		if(index < array.length - 1) regExpStr = regExpStr.concat(kw + "\\|\\");
		else regExpStr = regExpStr.concat(kw + "\\");
	});
	//regExpStr = regExpStr.concat(")");
	var regExp = new RegExp("(" + regExpStr + ")", 'g');
	return ("<p>" + rawText.replace(regExp, '<b>$1</b>') + "</p>");
	//return preg_replace('/\b('.implode('|', listOfKeywords).')\b/i', '<b>$1</b>', rawText);
	*/
	var regExp = new RegExp("(" + listOfKeywords.join("|") + ")", 'g');
	return "<p class=\"text-center\">" + rawText.replace(regExp, "<b>$1</b>") + "</p>";
}

function fillInEducation() {
	$('.sac-state-title').text(sacState.title);
	$('.sac-state-date-range').text(sacState.dateRange);
	$('.sac-state-degree').text(sacState.degree);
	$('.sac-state-summary').text(sacState.summary);
	$('.sierra-title').text(sierra.title);
	$('.sierra-date-range').text(sierra.dateRange);
	$('.sierra-degree').text(sierra.degree);
	$('.sierra-summary').text(sierra.summary);
}

function fillInWorkHistory() {
	$('.fpc-title').text(fpc.title);
	$('.fpc-date-range').text(fpc.dateRange);
	$('.fpc-company').text(fpc.company);
	$('.fpc-summary').text(fpc.summary);
	$('.irt-title').text(irt.title);
	$('.irt-date-range').text(irt.dateRange);
	$('.irt-company').text(irt.company);
	$('.irt-summary').text(irt.summary);
}

function fillInSkills() {
	populateTempDb('general');
	updateProfs();
}

function populateTempDb(c1, c2, c3, c4, c5) {
    temp_db().remove();
    profs_db({tags:{has: [c1,c2, c3, c4, c5]}}).each(function (r) {
        temp_db.insert(r);
    });
    temp_db.sort("level");
}

function updateProfs() {
    var i = num_of_profs;
    temp_db().each(function (r) {
        temp_db(r).update({id:i});
        i--;
    });

    var profCounter;
    for(profCounter = 1; profCounter < num_of_profs + 1; profCounter++) {
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
            progressBarShapes[i].style.backgroundColor = "#ffffff";
        }
        for(i = 10; i < j + 10; i++) {
            progressBarShapes[i].style.backgroundColor = "#ffffff";
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
