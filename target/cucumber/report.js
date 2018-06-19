$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TSTINSC-6"
    }
  ]
});
formatter.before({
  "duration": 5026323461,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Google Search 2",
  "description": "",
  "id": ";google-search-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TSTINSC-8"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the search tesxt field",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_open_a_browser()"
});
formatter.result({
  "duration": 112340264,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_navigate_to_google_page()"
});
formatter.result({
  "duration": 1081557191,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_validate_the_search_tesxt_field()"
});
formatter.result({
  "duration": 98935371,
  "status": "passed"
});
formatter.after({
  "duration": 655886719,
  "status": "passed"
});
});