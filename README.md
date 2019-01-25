## Deploying to Heroku with docker

1. Log into heroku with `heroku login`
2. Create an app with `heroku create`
3. Push it to heroku with `heroku container:push web --app [the FQDN you recieved from heroku when you did heroku create`, it'll usually be https://some-heroku-name.herokuapp.com. So just "some-heroku-name".]  
   EX.`heroku container:push web --app limitless-dawn-38090`  
   NOTE: giving your own tag to the app works but when releasing it there are some errors in the log and the app won't run so just keeping the tag to `web` will make it work (with a different name you'll have add a procfile and scale a web worker and stuff to get the app to run. I haven't tested it but I assume it'll work but to keep things simple just keep the tag name to web.)
4. After it is done building it'll tell you that it's ready to release. To release it do `heroku container:release web --app your-app-name`
5. Navigate to your app and you should see something on the page

## Some more notes

1. Heroku handles assigning the port for your so in your index.js just do `process.env.PORT` and inside the dockerfile do `EXPOSE $PORT`
