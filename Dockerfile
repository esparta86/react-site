#gcloud builds submit -t gcr.io/ti-is-devenv-01/is-glogger-site:v1 --gcs-log-dir=gs://ti-is-devenv-01_cloudbuild_custom_logs_cicd/logs/ .

FROM node:10-alpine as build-step

RUN mkdir /app
WORKDIR /app
COPY app-code/package.json /app
RUN npm install

COPY app-code/ /app

RUN npm run build

# Stage 2

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html