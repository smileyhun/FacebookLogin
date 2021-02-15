# FacebookLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## To generate SSL use OPENSSL https://slproweb.com/products/Win32OpenSSL.html
## For generating the cerificate here is the command: openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout localhost.key -days 3560 -out localhost.crt -config certificate.cnf
## certificate.cnd content below

<!-- [req]
default_bits = 2048
promp = no
default_md = sha256
distinguished_name = dn
[dn]
C = IN
ST = Hungary
L = Hungary
O = Localhost Org
OU = Localhost Org Unit
emailAddress = sasvaridaniel18@gmail.com
CN = localhost
[v3_req]
subjectAltName = @alt_names
[alt_names]
DNS.1 = localhost -->

## After you successfully generated the cert don't forget to add it to the trusted certificates