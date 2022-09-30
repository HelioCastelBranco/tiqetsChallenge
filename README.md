# tiqetsChallenge
## README 
Automation structure

#### Frameworks: 
- Node.js, Cucumber and Cypress.

#### Frameworks: 
- Node.js

## Environment Configuration ##
### Installation ###
```sh
 npm install
```
- To install Cypress: 
```sh
 npx cypress install
```
#### Project Structure:
- Gherkin features (Cucumber) "cypress/integration"
- Steps definitions and Page Objects "cypress/support" 
- Test Videos will be save on "cypress/videos" 
- cucumber-html-report will be in "report" directory
- The second test screenshot will be in "mochawesome-report/snapshots/healthproject.feature/print"
- .gitignore rule to not upload the videos, screenshots and "node_modules"in repository 
- Logs and methods are configured to appear on console during the execution.

#### Reports:
Mochawesome-report and Cucumber-html-report

**Mochawesome-report**
- Directory "mochawesome-report"
- Failed steps (screenshot evidences) in directory "snapshots"

**Cucumber-html-report**
- Directory "report"
- It is necessary execute "npm run report" to see details.

#### To run the automation tests:
```sh
./node_modules/.bin/cypress run
```
or
```sh
npx cypress run
```
or by script 
```sh
npm run cy:run
```
**To execute all features on Chrome Browser:**
```sh 
./node_modules/.bin/cypress run --browser chrome
```
or
```sh
npx cypress run --browser chrome
```

**To run by TAG follow the example below.**
```sh
npm run tags TAGS='@sprint7'
```

- To run by TAG and generate a report.
```sh
npm run tags TAGS='@handPickedCombinations'; npm run report
```


_____________________________________________
  
**Version:** 1.0 <br>
**Created:** 2022-09-26

E-mail: helio-white@hotmail.com
Hélio Castel-Branco