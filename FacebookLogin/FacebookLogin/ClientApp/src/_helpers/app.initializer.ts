import { FormBuilder } from "@angular/forms";
import { environment } from "src/environments/environment";

export function appInitializer() {
    return() => new Promise(resolve => {
        window['fbAsyncInit'] = function() {

            // wait for facebook sdk to initialize before starting the angular app
            FB.init({
                appId: environment.appId,
                cookie: true,
                xfbml: true,
                version: 'v8.0'
            });

            // auto authenticate with the api if already logged in with facebook
            FB.getLoginStatus(({authResponse}) => {
                if (authResponse) {
                    // login in authservice
                } else {
                    resolve();
                }
            });
        };

        // load facebook sdk script
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));    
    });
}
