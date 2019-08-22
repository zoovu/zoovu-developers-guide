# ZOOVU - Theme Starter Pack

## Installation

Zoovu theme use [yarn](https://yarnpkg.com/en/) as package manager of the project. To bootstrap customized theme execute command:

```commandline
yarn run bootstrap
```

## Development setup

For easier development in the setup is added [BrowserSync](https://www.browsersync.io/) which one is executed with start script.

To add your own assistant to theme preview (instead of default test assistant) configure in `.env` (dotenv) file **ADVISOR_CODE** and **API_CONTEXT_PATH**:

```
ADVISOR_CODE="YOUR_ADVISOR_CODE"
API_CONTEXT_PATH="http://api-tiger.zoovu.com"
```

To run project in development mode type in console:

```commandline
yarn run start
```

NOTICE: To start developing the project, you need first have initialized Git repository with at least one commit!

### Parameters of dotenv file

|Option name|Description|
|-|-|
|PORT|This port will be used to expose current theme in development mode on localhost.|
|ADVISOR_CODE|Code of assistant that will be displayed with current theme in dev mode.|
|API_CONTEXT_PATH|Assistant API endpoint. For assistant belonged to **tiger** use `http://api-tiger.zoovu.com`, and for **barracuda's** use `http://api-barracuda.zoovu.com`.|
|SESSION_PERSISTENCE|Enable persistance of the assistant session in local preview.|
|SESSION_PERSISTENCE_ENDPOINT|API Endpoint of the assistant session storage.|

## Deploy package to AWS S3 Bucket

This setup use deploy to AWS S3 as default deploy method. If your workflow do not use AWS solutions or prefer deploying on FTP server then do it manually. Run `yarn build`, then upload all files and folders from `./build/dist` directory into place that is exposed by public URL.

Uncomment in `.env` file AWS credentials and add your access key ID and secret access key and bucket key and specify public URL that points to your bucket assets: 

```
AWS_ACCESS_KEY_ID="XXXXXXXXXXXXXXXXXXXX"
AWS_SECRET_ACCESS_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
BUCKET_KEY="XXXXXXXXXXXXXXXXXXXX"
BUCKET_PUBLIC_URL="XXXXXXXXXXXXXXXXXXXX"
BUCKET_MAX_AGE=30
```

NOTE: Dotenv file is ignored by git.

Then you can run deploy command:

```commandline
yarn run deploy
```

Theme after deploy will be available on URL:

```
<BUCKET_PUBLIC_URL>/<project name>/<project version>
```

## Update project dependencies

If you want to update **@Zoovu** dependencies of design, then run:

```commandline
yarn run clean
yarn upgrade --scope @zoovu
yarn run bootstrap
```
