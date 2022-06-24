# BookFinder

## Overview

BookFinder is a small website that consumes the Google Books API. 

[You can see it running here.](https://bookfinder-ia.herokuapp.com/)

## Features

- Browser dependent autocomplete/history

- Returns 10 books based on query

- Query is matched to any term related to a book, not just title.

## Tech Used/Dependencies

- This is a Typescript React app boostrapped with CRA

- Icons from [Font Awesome](https://fontawesome.com)

- Loading spinner from [Loading io](https://loading.io/css/)

## Available Scripts

Before executing any scripts, you must obtain an API key from [Google](https://console.cloud.google.com/apis/dashboard).\
Then you must create an .env file and place your key in there assigned to `REACT_APP_GOOGLEBOOKS_API_KEY`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will not reload if you make edits.\
Any changes made will be reflected after `npm run build` is executed

### `npm run build`

Builds the app for production to the `build` folder.\

