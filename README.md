# history

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

the below link was followed to configure proxy in gruntfile.js to avoid cross domain cors problems when contacting backend hosted on different port than front end.
http://instantresponse.blogspot.com.au/2015/02/define-proxies-in-grunt-to-get-rid-of.html


Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

##Design considerations
view states are managed in a service 'appStateService'. Controllers / views use this service to share and read their current state