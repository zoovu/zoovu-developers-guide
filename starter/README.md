# ZOOVU - Theme Starter Pack

## Initial setup

Zoovu theme use [yarn](https://yarnpkg.com/en/) to manage all packages (themes) of the project at once: install dependencies of each package, build themes etc. To bootstrap customized theme execute command:

```commandline
yarn run bootstrap
```

## Development setup

For easier development in the design is attached [BrowserSync](https://www.browsersync.io/) runner script witch one is executed with main script.

To enable static advisor code after each run and enable session add `.dotenv` file in root directory, and add bellowed config to it:

```
PORT=9092
ADVISOR_CODE="r29NN83G"
API_CONTEXT_PATH="http://api-tiger.zoovu.com"
SESSION_PERSISTENCE=true
SESSION_PERSISTENCE_ENDPOINT="https://staging-runner.zoovu.com/api"
```

To run project in development mode type in console:

```commandline
yarn run start
```

## Deploy package

Configure `.env` file in root directory and add your AWS access key ID and secret access key: 

```
AWS_ACCESS_KEY_ID="XXXXXXXXXXXXXXXXXXXX"
AWS_SECRET_ACCESS_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

Then you can run deploy command:

```commandline
yarn run deploy
```

Theme after deploy will be available on URL:

```
https://themes-tiger.zoovu.com/custom-dev/nisbets/catering-equipment/<project version>
```

## Update project dependencies

If you want to update ZOOVU dependecies of design, then run:

```commandline
yarn run clean
yarn upgrade --scope @zoovu
yarn run bootstrap
```
