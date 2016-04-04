System.register(["angular2/core", "./login.service", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_service_1, http_1;
    var loginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            loginComponent = (function () {
                function loginComponent(_loginService, _http) {
                    this._loginService = _loginService;
                    this._http = _http;
                    this.loggedin = false;
                }
                loginComponent.prototype.submit = function (param) {
                    this._loginService.login(param.login, param.password);
                    this.loggedin = this._loginService.loggedin;
                };
                loginComponent.prototype.Log = function (param) {
                    console.log(param);
                };
                loginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        template: "\n    <form action=\"#\" #f=\"ngForm\" (ngSubmit)=\"submit(f.value)\" *ngIf=\"!loggedin\">\n        <input type=\"text\" placeholder=\"login\" ngControl=\"login\"/>\n        <input type=\"text\" placeholder=\"password\" ngControl=\"password\"/>\n        <button>Login</button>\n    </form>\n    <p *ngIf=\"loggedin\">User logged in </p>\n    ",
                        providers: [login_service_1.LoginService]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, http_1.Http])
                ], loginComponent);
                return loginComponent;
            }());
            exports_1("loginComponent", loginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFHSSx3QkFBcUIsYUFBMkIsRUFBVSxLQUFXO29CQUFoRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUY3RCxhQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUUrQyxDQUFDO2dCQUN6RSwrQkFBTSxHQUFOLFVBQU8sS0FBSztvQkFDUixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCw0QkFBRyxHQUFILFVBQUssS0FBSztvQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsd1ZBT1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztxQkFDNUIsQ0FBQzs7a0NBQUE7Z0JBWUYscUJBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELDJDQVdDLENBQUEiLCJmaWxlIjoiZm9ybXMvbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4tZm9ybScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybSBhY3Rpb249XCIjXCIgI2Y9XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwic3VibWl0KGYudmFsdWUpXCIgKm5nSWY9XCIhbG9nZ2VkaW5cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJsb2dpblwiIG5nQ29udHJvbD1cImxvZ2luXCIvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgbmdDb250cm9sPVwicGFzc3dvcmRcIi8+XG4gICAgICAgIDxidXR0b24+TG9naW48L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPHAgKm5nSWY9XCJsb2dnZWRpblwiPlVzZXIgbG9nZ2VkIGluIDwvcD5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0xvZ2luU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgbG9naW5Db21wb25lbnQgIHtcbiAgICBwcml2YXRlIGxvZ2dlZGluID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBsb2dpbjpzdHJpbmc7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLCBwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuICAgIHN1Ym1pdChwYXJhbSkge1xuICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UubG9naW4ocGFyYW0ubG9naW4sIHBhcmFtLnBhc3N3b3JkKTtcbiAgICAgICAgdGhpcy5sb2dnZWRpbiA9IHRoaXMuX2xvZ2luU2VydmljZS5sb2dnZWRpbjtcbiAgICB9XG4gICAgTG9nIChwYXJhbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
