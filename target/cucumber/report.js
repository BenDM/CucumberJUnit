$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5481379954,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to google page",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearch.i_open_a_browser()"
});
formatter.result({
  "duration": 3232338633,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_navigate_to_google_page()"
});
formatter.result({
  "duration": 2694187060,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate google search text field",
  "description": "",
  "id": "google-search;validate-google-search-text-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I validate the search tesxt field",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_validate_the_search_tesxt_field()"
});
formatter.result({
  "duration": 1309214193,
  "status": "passed"
});
formatter.after({
  "duration": 841802860,
  "status": "passed"
});
});