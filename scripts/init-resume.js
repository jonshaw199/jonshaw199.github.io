fillInPersonalStatement();
fillInEducation();
fillInWorkHistory();

function fillInPersonalStatement() {
  $(".personal-statement").text(personalStatement);
}

function fillInEducation() {
  $(".sac-state-title").text(sacState.title);
  $(".sac-state-date-range").text(sacState.dateRange);
  $(".sac-state-degree").text(sacState.degree);
  $(".sac-state-summary").text(sacState.summary);
}

function fillInWorkHistory() {
  $(".rp-title").text(rp.title);
  $(".rp-date-range").text(rp.dateRange);
  $(".rp-company").text(rp.company);
  $(".rp-summary").text(rp.summary);
  $(".fpc-title").text(fpc.title);
  $(".fpc-date-range").text(fpc.dateRange);
  $(".fpc-company").text(fpc.company);
  $(".fpc-summary").text(fpc.summary);
  $(".irt-title").text(irt.title);
  $(".irt-date-range").text(irt.dateRange);
  $(".irt-company").text(irt.company);
  $(".irt-summary").text(irt.summary);
}
