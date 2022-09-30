var rimraf = require(“rimraf”)
rimraf(“./mochawesome-report”, function () { console.log(“Folder mochawesome-report deleted”); });
rimraf(“./cypress/cucumber-json”, function () { console.log(“Folder cucumber-json deleted”); });