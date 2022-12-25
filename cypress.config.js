const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  screenshotsFolder: 'cypress/reports/mochareports/assets',
  videosFolder: 'cypress/videos',
  video: true,
  pageLoadTimeout : 600000,
  screenshotOnRunFailure: true,

  "reporter":"cypress-multi-reporters",
  "reporterOptions":{
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
    "reportDir":"cypress/reports/mocha",
    "quite": true,
    "overwrite":false,
    "html":false,
    "json":true,
    }
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      return require('./cypress/plugins/index.js')(on, config)
    },
    "experimentalSessionAndOrigin":true,
    "chromeWebSecurity" :false,
  },
  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 1
  },
  projectId: "rzhdwu"
})
