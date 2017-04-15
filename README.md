# react-routes
Examples on how to use react-router-dom

## - hello-route
Very basic route example, that requires minimum configuration for react-router-dom

To execute navigate to 'react-routes' directory and from command line enter

```
npm run hello-route
```

## - decoupling-route-declarations
When project becomes bigger and bigger instead of keeping route declarations in one place, they can be stored closer to each module. This code provides example on how to have Routes on each module and then combine them in one place (e.g. home page). This example uses new Router API 'react-router-dom' and BrowserRouter. BrowserRouter navigation only works with web server, because it sends requests to the web server. So navigation from the URL will not work. You will get 404 - Page is not found error. Changing Router to HashRouter will work, but it will add '#' to the URL requests.

To run this example use

```
npm run decoupling-route-declarations
```