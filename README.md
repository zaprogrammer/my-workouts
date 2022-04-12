## Covered points
- [x] A user can authenticate and visualise his/her training plan for the week.
- [x] A user can see details about the workout sessions (past and future): name, duration, type, status - (completed or not).
- [x] A user can Start a workout session.
- [x] A user can see the list of exercises from a workout session and keep track of which ones have been done, which one is the current, and which ones are left to be done. Each exercise item on the list should contain - its name, a picture, the number of repetitions or duration, weight used (if any) and an indicator that shows - if the exercise is done or not.
- [x] A user can mark an exercise as done during the workout session. If the exercise being completed is not the current one, all exercises that are before it have to be also marked as completed.

# Mobile App challenge for VATION GmbH

Welcome to our Mobile App challenge!!!

First of all thanks for taking your time doing this test, you will find detailed instructions and exercises to perform this test but any feedback that you think can help us to improve the test will be more than welcome.

## Overview

In this test we will evaluate your knowledge about Mobile App development. It will be an applicable case of a task that you will perform in a normal day at *VATION*. 

We are providing a basic skeleton of an Expo/React Native application, which you will use to develop the app for the challenge.

## Setup

You will need to have setup these tools:

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
* [Expo](https://docs.expo.io/get-started/installation/)

Optional, but nice to have:
* [Android SDK](https://developer.android.com/studio/#downloads)
* [XCode](https://apps.apple.com/app/xcode/id497799835?mt=12)

## Project structure

vation-mobile-challenge
├── app.json # Application configuration
├── assets # Assets directory
├── babel.config.js
├── index.js
├── package.json
├── README.md
├── src # Source code
│   └── App.tsx # Main file
├── tsconfig.json
└── yarn.lock

## Initialization

If you installed yarn and node you just need to follow two steps:

Install dependencies:

```
yarn
```

Start the Expo application

```
yarn start
```

Launch the default browser with the Expo application:

```
yarn web
```

## The Challenge

You have to implement an Expo/React Native app that fulfills the following requirements:

1. A user can authenticate and visualise his/her training plan for the week.
2. A user can see details about the workout sessions (past and future): name, duration, type, status (completed or not).
3. A user can Start a workout session.
4. A user can see the list of exercises from a workout session and keep track of which ones have been done, which one is the current, and which ones are left to be done. Each exercise item on the list should contain its name, a picture, the number of repetitions or duration, weight used (if any) and an indicator that shows if the exercise is done or not.
5. A user can mark an exercise as done during the workout session. If the exercise being completed is not the current one, all exercises that are before it have to be also marked as completed.
6. A user can insert data specific to an exercise (i.e. how many push ups they were able to do in the given time of the exercise).
7. A user can see a summary view with the results of the training and write a comment to the trainer when the training is completed.
8. A user can see the stored workout summary when tapping on a previously completed workout on the main screen.
9. The developer should create a private project to github with the solution and invite the indicated user in the email.


## What we expect from you

* Create a mobile app in React Native or Expo that complies to the required specifications. It should be able to run on an Android or iOS simulator.
* APIs consumed by the app should be mocked and data models defined.
* You can use any external libraries as you need for the implementation.
* You are free to make assumptions on the existing system, as long as you state them clearly.
* Solution should take into consideration the peculiarities of mobile devices in terms of UX.
* Tests are a plus.
