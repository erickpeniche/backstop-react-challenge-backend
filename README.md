# [BACK END] Backstop React Engineer Code Challenge

This repo contains the code for the backend written in Node.js. It consists of an Express server with 3 API endpoints which will be described below.


## Available Scripts
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Make some requests to [http://localhost:3000](http://localhost:3000) to get data

### API Endpoints ###
Endpoint | Method | Parameters | Description
------------- | ------------- | ------------- | -------------
`/api/v1/digimon` | GET | - | On success, it returns a `200` status code along with an `Array` of Digimons. On failure, it returns a `500` status code along with an error message and error object
`/api/v1/digimon/:id` | GET | `:id` (int) representing Digimon ID | On success, it returns a `200` status code along with an `Object` with the requested Digimon data. When no Digimon is found, it returns a `404` status code with a not found message. On failure, it returns a `500` status code along with an error message and error object
`/api/v1/digimon/random` | GET | - | On success, it returns a `200` status code along with an `Object` representing a random Digimon. When no Digimon is found, it returns a `404` status code with a not found message. On failure, it returns a `500` status code along with an error message and error object
