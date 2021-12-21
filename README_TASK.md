# Angular Calculator

## Introduction

The UX specialist in your company has handed over some mockups of the calculator. However, no logic has been implemented - it's your task to make the calculator work.

## Task details

There is one component in `src/app/app.component.*`, which includes the HTML structure. Implement event handlers, logic, state management, etc. You are free to choose the way you want to design the solution, as long as you don't install additional dependencies.

The users will press buttons, the same way they would use a traditional electronic calculator. The `<input>` is used only to display the current expression, but users _can't_ type characters directly from the keyboard - all expressions are created by pressing buttons.

The details on how the calculator works are as follows:
- pressing digits (0-9) adds a single digit to the display
  - e.g. pressing `1`, `2` and `3` will simply display `123`
- pressing `C` clears the _entire_ display
  - if `123` was displayed and `C` was pressed, `` will be shown (empty string)
- any evaluation takes place only when `=` is pressed
- pressing operators (`+`, `-`, `*`, `/`) doesn't evaluate anything yet
  - e.g. pressing `1`, `2`, `+` and `3` will simply display `12+3`; the user needs to press `=` for the calculator to display `15`
- the display can include multiple operators, e.g. `123+45*12`
- if the last character on the display is an operator and `=` is pressed, the trailing operator is ignored
  e.g. if `12+23-` is displayed and `=` is pressed, then `35` will be displayed (trailing `-` is ignored)
- if the last character on the display is an operator, then pressing further operators will replace the trailing operator
  - e.g. if `12+23-` is displayed and `*` is pressed, then `*` will replace `-`, and `12+23*` will be displayed

For the sake of simplicity, it's acceptable to use native `eval` function. Your task is to focus on the interface and handling the logic behind pressing buttons.

## Setup

This angular application was generated using [Angular CLI](https://angular.io/cli). It has all the standard setups.

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm start` – run the project locally

## Good Luck!
