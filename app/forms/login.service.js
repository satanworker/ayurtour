/**
 * Created by mini on 30.03.16.
 */
System.register(['angular2/core', "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(_http) {
                    this._http = _http;
                    this.loggedin = false;
                }
                LoginService.prototype.login = function (login, pass) {
                    var _this = this;
                    this.body = "?login=" + login + "&password=" + pass;
                    return this._http.get('http://localhost:3000/users' + this.body).subscribe(function (res) {
                        if (res.json().length) {
                            _this.loggedin = true;
                        }
                        else {
                            _this.loggedin = false;
                        }
                    });
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNIO2dCQUNJLHNCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRXhCLGFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBRlUsQ0FBQztnQkFHbkMsNEJBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxJQUFJO29CQUFqQixpQkFZQztvQkFYRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxLQUFLLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ3RFLFVBQUMsR0FBWTt3QkFDTCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDbkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQ3pCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7d0JBQ3pCLENBQUM7b0JBQ1QsQ0FBQyxDQUNKLENBQUM7Z0JBQ04sQ0FBQztnQkFsQkw7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBbUJiLG1CQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCx1Q0FpQkMsQ0FBQSIsImZpbGUiOiJmb3Jtcy9sb2dpbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1pbmkgb24gMzAuMDMuMTYuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7SGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cbiAgICBwcml2YXRlIGJvZHk6c3RyaW5nO1xuICAgIHB1YmxpYyBsb2dnZWRpbiA9IGZhbHNlO1xuICAgIGxvZ2luKGxvZ2luLCBwYXNzKSB7XG4gICAgICAgIHRoaXMuYm9keSA9IFwiP2xvZ2luPVwiICsgbG9naW4gKyBcIiZwYXNzd29yZD1cIiArIHBhc3M7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzJyArIHRoaXMuYm9keSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczpSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXMuanNvbigpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZGluID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
