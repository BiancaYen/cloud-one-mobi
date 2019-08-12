# Cloud One Mobi

## Available Scripts

In the project directory, you can run:

### `yarn run dev`

Runs the Node server in development mode.<br>
Open [http://localhost:4000](http://localhost:3000) to view it in the browser.
Unfortunately no hot-reloading has been implemented on the client side.

## Architecture

- I have opted to use CSS in JS (Emotion built off Styled Components) to style my components.
- I have used the Apollo React Client to integrate GraphQL queries directly using local state.
I haven't implemented redux since the Apollo Client works quite well without.
- Database layer implemented using MongoDB
 