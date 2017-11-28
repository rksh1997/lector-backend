# Installation

* `git clone https://github.com/FrankenSteinxD/lector-backend.git`
* `cd lector-backend`
* `npm install` or `yarn install`
* create a `.env` file in the main directory and it should have these variables:
  - `DB_URL` the url of the database
  - `PORT` the port that the app should run on.
  - `JWT_SECRET` a secret that is used by jsonwebtoken.
  - `DEFAULT_STORY_COVER` a url of a default story cover.

---------------
# Running the server

`npm start` or `yarn start`

# Testing

`npm run lint` or `yarn lint`

`npm run test` or `yarn test`

# Building Documation

`npm run build:docs` or `yarn build:docs`