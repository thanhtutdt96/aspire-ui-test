# Documentation

## Overview

This project was using Vue 3, developed with [Bulma CSS](https://bulma.io/) and [Vue Unicons](https://antonreshetov.github.io/vue-unicons/). 

The hosted version is available at:
* https://aspire-2021-ui.herokuapp.com/ (For UI)
* https://aspire-2021-api.herokuapp.com/ (For API)

In order to run this app on local, please pull the latest API
local server: [Aspire](https://github.com/thanhtutdt96/aspire) and follow the guide to set up local server.

## Setup on Local

1. Rename the `.env.local.example` to `.env.local`, adjust the setting to match the API server on the local.
2. Run these commands to install necessaries project libraries:

```angular2html
yarn install
yarn serve
```

3. Run `yarn serve` and open http://localhost:8080

## Using the app
* Coding challenge
   1. Login the app with the following credential:
      `Email: thanhtutdt96@gmail.com | Pass: YF4pfsHx`
   2. When successfully login, fill in the loan form and click `Add`.
   3. The loan which have been just created but have not approved yet. Click `Approve`, then the repayment list will show.
      After that, click on `Pay` link on repayment which you want to be paid.
      
* CSS challenge: Click on the `Cards` navigation link
   


