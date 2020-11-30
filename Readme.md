# Muzeul Comunismului – "then and now" pictures on a map

Mini-site for the [Communism Museum](https://muzeulcomunismului.ro/), showing a map with locations for historic photographs, overlaid with their modern-day counterparts.

## Content
The locations are loaded from Google My Maps. [Here's a
guide](./docs/locations.md) for editing locations.

## Build
Build the front-end assets:
```shell
npm install
./build.sh
```

Run an HTTP server to test the site locally:
```shell
python3 -m http.server
open http://localhost:8000/
```

## Deploy
Copy files to the server:
```shell
./deploy.sh
```
