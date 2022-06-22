$("#personal-statement").html(
  personalStatement
    .map((line) => "<div class='personal-statement-item'>" + line + "</div>")
    .join("")
);

$("#js-recent-work-experience").html(
  workExperience
    .reverse()
    .map(
      (job) =>
        `<div class="work-item"><h4>${job[1]}</h4><h5 class="mb-0">${job[0]}<span class="gray pl-2">${job[2]}</span></h5><div>${job[3]}</div></div>`
    )
    .join("")
);

$("#js-education").html(
  `<div>${education
    .map(
      (program) =>
        `<div class="education-item"><h4>${program[2]}</h4><h5>${program[0]}<span class="gray pl-2">${program[1]}</span></h5>`
    )
    .join("")}</div>`
);

$(document).ready(function () {
  $(".dropdown").on("show.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $(".dropdown").on("hide.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
  });
});

$(function () {
  $(document).on("scroll", function () {
    if ($(this).scrollTop() == 0) {
      $("#nav-logo, #nav-logo-wide").removeClass("shrunk-logo");
      $("#nav-logo, #nav-logo-wide").addClass("enlarged-logo");
      $("nav.navbar").addClass("no-transition");
      $("nav").removeClass("opaque-nav");
      $("nav").addClass("solid-nav");
      $("nav.navbar").removeClass("no-transition");
    } else {
      $("#nav-logo, #nav-logo-wide").removeClass("enlarged-logo");
      $("#nav-logo, #nav-logo-wide").addClass("shrunk-logo");
      $("nav").removeClass("solid-nav");
      $("nav").addClass("opaque-nav");
    }
  });
});
