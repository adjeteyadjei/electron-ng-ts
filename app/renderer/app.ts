/// <reference path="../../typings/tsd.d.ts" />

import {Config} from "./app_config";
import {RouterConfig} from "./app_routes";
import {MainCtrl} from "./main/main_ctrl"
import {LoginCtrl} from "./auth/login"
import {AuthService, IAuthService} from "./auth/auth_services"

let app = angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
	.service('AuthService', AuthService)
	.controller('LoginCtrl', LoginCtrl)
	.controller('MainCtrl', MainCtrl)
	.config(Config)
    .config(RouterConfig)
	.value("BASEAPI", "http://schmantem.apphb.com/api")
	.run((AuthService: IAuthService) => { AuthService.checkLogin() });

export {app}