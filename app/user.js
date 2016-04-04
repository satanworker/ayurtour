System.register(["angular2/core", "./forms/login.service"], function(exports_1, context_1) {
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
    var core_1, login_service_1;
    var userComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            userComponent = (function () {
                function userComponent(_loginService) {
                    this._loginService = _loginService;
                    this.loggedin = this._loginService.loggedin;
                    this.info = 'test';
                }
                userComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        template: "<p *ngIf=\"loggedin\">Logged In</p>",
                        providers: [login_service_1.LoginService]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], userComponent);
                return userComponent;
            }());
            exports_1("userComponent", userComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFFSSx1QkFBb0IsYUFBMkI7b0JBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUR2QyxhQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7b0JBRy9DLFNBQUksR0FBVSxNQUFNLENBQUM7Z0JBRHJCLENBQUM7Z0JBVEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsUUFBUSxFQUFFLHFDQUFtQzt3QkFDN0MsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztxQkFFNUIsQ0FBQzs7aUNBQUE7Z0JBTUYsb0JBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHlDQUtDLENBQUEiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkbWl0cnkgb24gMDQuMDQuMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL2Zvcm1zL2xvZ2luLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1c2VyJyxcbiAgICB0ZW1wbGF0ZTogYDxwICpuZ0lmPVwibG9nZ2VkaW5cIj5Mb2dnZWQgSW48L3A+YCxcbiAgICBwcm92aWRlcnM6IFtMb2dpblNlcnZpY2VdXG5cbn0pXG5leHBvcnQgY2xhc3MgdXNlckNvbXBvbmVudCAge1xuICAgIHByaXZhdGUgbG9nZ2VkaW4gPSB0aGlzLl9sb2dpblNlcnZpY2UubG9nZ2VkaW47XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2Upe1xuICAgIH1cbiAgICBpbmZvOnN0cmluZyA9ICd0ZXN0Jztcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
