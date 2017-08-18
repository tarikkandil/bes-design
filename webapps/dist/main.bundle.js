webpackJsonp([7,10],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.firstname = "";
        this.lastname = "";
        this.civility = "";
        this.hidDiv = false;
        this.disabled = false;
        this.status = { isopen: false };
        this.date = new Date();
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var customer = currentUser != null ? (currentUser.hasOwnProperty('customer') ? currentUser.customer : null) : null;
        console.log(customer);
        if (customer !== null) {
            this.firstname = customer.firstName;
            this.lastname = customer.lastName;
            this.civility = customer.civility;
        }
    }
    FullLayoutComponent.prototype.toggled = function (open) {
    };
    FullLayoutComponent.prototype.showSettings = function () {
        this.hidDiv = !this.hidDiv;
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    FullLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__(402)
        }),
        __metadata("design:paramtypes", [])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());
exports.FullLayoutComponent = FullLayoutComponent;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/full-layout.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(105);
var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent(router) {
        this.router = router;
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () {
    };
    SimpleLayoutComponent.prototype.index = function () {
        this.router.navigate(['/index/login']);
    };
    SimpleLayoutComponent.prototype.activate = function () {
        this.router.navigate(['/activate/account']);
    };
    SimpleLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__(403),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
    ], SimpleLayoutComponent);
    return SimpleLayoutComponent;
    var _a;
}());
exports.SimpleLayoutComponent = SimpleLayoutComponent;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/simple-layout.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./activate_account/activate-account.module": [
		430,
		1
	],
	"./dashboard/dashboard.module": [
		431,
		0
	],
	"./home/home.module": [
		432,
		2
	],
	"./international/international.module": [
		433,
		4
	],
	"./reset/reset.module": [
		434,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 175;


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var platform_browser_dynamic_1 = __webpack_require__(220);
var app_module_1 = __webpack_require__(222);
var environment_1 = __webpack_require__(231);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'body',
            providers: [],
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/app.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(53);
var common_1 = __webpack_require__(40);
var shared_module_1 = __webpack_require__(229);
var tabs_1 = __webpack_require__(196);
var app_component_1 = __webpack_require__(221);
var dropdown_1 = __webpack_require__(195);
var nav_dropdown_directive_1 = __webpack_require__(227);
var sidebar_directive_1 = __webpack_require__(230);
var aside_directive_1 = __webpack_require__(225);
var i18n_component_1 = __webpack_require__(226);
// Routing Module
var app_routing_1 = __webpack_require__(223);
var http_1 = __webpack_require__(103);
//Layouts
var full_layout_component_1 = __webpack_require__(115);
var simple_layout_component_1 = __webpack_require__(116);
var pub_component_1 = __webpack_require__(228);
var menunv_component_1 = __webpack_require__(224);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                tabs_1.TabsModule.forRoot(),
                app_routing_1.AppRoutingModule,
                dropdown_1.BsDropdownModule.forRoot(),
                shared_module_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent,
                full_layout_component_1.FullLayoutComponent,
                simple_layout_component_1.SimpleLayoutComponent,
                pub_component_1.PubComponent,
                i18n_component_1.I18NComponent,
                nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
                sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
                aside_directive_1.AsideToggleDirective,
                menunv_component_1.MenunvComponent
            ],
            providers: [{
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy,
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/app.module.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(105);
// Layouts
var full_layout_component_1 = __webpack_require__(115);
var simple_layout_component_1 = __webpack_require__(116);
exports.routes = [
    {
        path: '',
        redirectTo: 'international',
        pathMatch: 'full',
    },
    {
        path: '',
        data: {},
        children: [
            {
                path: '',
                component: simple_layout_component_1.SimpleLayoutComponent,
                loadChildren: './reset/reset.module#ResetModule',
            }
        ]
    },
    {
        path: '',
        component: simple_layout_component_1.SimpleLayoutComponent,
        data: {},
        children: [
            {
                path: 'index',
                loadChildren: './home/home.module#HomeModule',
            }
        ]
    },
    {
        path: '',
        component: simple_layout_component_1.SimpleLayoutComponent,
        data: {
            meta: {
                title: 'activate account',
                description: 'activate account'
            }
        },
        children: [
            {
                path: 'activate',
                loadChildren: './activate_account/activate-account.module#ActivateAccountModule',
            }
        ]
    },
    {
        path: '',
        component: full_layout_component_1.FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
        ]
    },
    {
        path: '',
        data: {
            title: 'International Landing Page'
        },
        children: [
            {
                path: '',
                loadChildren: './international/international.module#InternationalModule'
            },
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(exports.routes, { useHash: false })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/app.routing.js.map

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var MenunvComponent = (function () {
    function MenunvComponent() {
    }
    MenunvComponent.prototype.ngOnInit = function () {
    };
    MenunvComponent = __decorate([
        core_1.Component({
            selector: 'app-menunv',
            template: __webpack_require__(404),
            styles: [__webpack_require__(389)]
        }),
        __metadata("design:paramtypes", [])
    ], MenunvComponent);
    return MenunvComponent;
}());
exports.MenunvComponent = MenunvComponent;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/menunv.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        core_1.Directive({
            selector: '.aside-menu-toggler',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());
exports.AsideToggleDirective = AsideToggleDirective;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/aside.directive.js.map

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var core_2 = __webpack_require__(107);
// 
var I18NComponent = (function () {
    function I18NComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.status = { isopen: false };
        this.browserLang = translate.getBrowserLang();
        this.languages = [
            {
                key: "fr",
                value: "Francais"
            },
            {
                key: "be",
                value: "Flamand"
            },
            {
                key: "de",
                value: "Allemand"
            },
            {
                key: "nl",
                value: "Néerlandais"
            },
            {
                key: "it",
                value: "Italien"
            },
            {
                key: "es",
                value: "Espagne"
            }
        ];
        this.translate.onLangChange.subscribe(function (event) {
            _this.setCurrentLanguage(event.lang);
        });
    }
    I18NComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    I18NComponent.prototype.ngOnInit = function () {
        this.setCurrentLanguage(this.translate.currentLang);
    };
    I18NComponent.prototype.setCurrentLanguage = function (language) {
        var _this = this;
        this.languages.forEach(function (element) {
            if (element.key === language) {
                _this.language = {
                    key: element.key,
                    value: element.value
                };
            }
        });
    };
    I18NComponent = __decorate([
        core_1.Component({
            selector: 'i18n-translate',
            template: "\n    <li class=\"nav-item dropdown\" dropdown>\n      <a href class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\">\n        <span class=\" lang\"><span class=\"flag-icon flag-icon-{{language.key}}\"></span><span class=\"languages d-md-down-none\">{{language.value}}</span></span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n       <a *ngFor=\"let lang of languages\"  (click)=\"translate.use(lang.key); $event.preventDefault();\" class=\"dropdown-item\" href=\"#\"><span class=\"flag-icon flag-icon-{{ lang.key }}\"></span><span  class=\"languages\">{{ lang.value }}</span></a>\n      </div>\n    </li>\n    "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_2.TranslateService !== "undefined" && core_2.TranslateService) === "function" && _a || Object])
    ], I18NComponent);
    return I18NComponent;
    var _a;
}());
exports.I18NComponent = I18NComponent;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/i18n.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var NavDropdownDirective = (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        core_1.Directive({
            selector: '.nav-dropdown'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
    ], NavDropdownDirective);
    return NavDropdownDirective;
    var _a;
}());
exports.NavDropdownDirective = NavDropdownDirective;
/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        core_1.Directive({
            selector: '.nav-dropdown-toggle',
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());
exports.NavDropdownToggleDirective = NavDropdownToggleDirective;
exports.NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/nav-dropdown.directive.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var PubComponent = (function () {
    function PubComponent() {
    }
    PubComponent.prototype.ngOnInit = function () {
        this.visibility = 'visible';
        $('.slick-container').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            adaptiveHeight: true
        });
    };
    PubComponent = __decorate([
        core_1.Component({
            selector: 'pub-banner',
            template: __webpack_require__(405)
        }),
        __metadata("design:paramtypes", [])
    ], PubComponent);
    return PubComponent;
}());
exports.PubComponent = PubComponent;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/pub.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var core_2 = __webpack_require__(107);
var http_loader_1 = __webpack_require__(232);
var http_1 = __webpack_require__(103);
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var SharedModule = (function () {
    function SharedModule(translate) {
        this.translate = translate;
        translate.addLangs(["fr", "be", "de", "es", "nl", "it"]);
        translate.setDefaultLang('fr');
        translate.setDefaultLang('be');
        translate.setDefaultLang('de');
        translate.setDefaultLang('es');
        translate.setDefaultLang('nl');
        translate.setDefaultLang('it');
        var browserLang = translate.getBrowserLang();
        var user = JSON.parse(localStorage.getItem('currentUser'));
        var country = user != null ? user.country : null;
        var lang = country != null ? country.key : null;
        browserLang = browserLang.match(/en|es|it|nl|de|be|fr/) ? browserLang : 'fr';
        translate.use(lang ? lang : browserLang);
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.Http],
                    },
                    isolate: false
                })
            ],
            declarations: [],
            providers: [],
            exports: [
                core_2.TranslateModule,
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_2.TranslateService !== "undefined" && core_2.TranslateService) === "function" && _a || Object])
    ], SharedModule);
    return SharedModule;
    var _a;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/shared.module.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        core_1.Directive({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());
exports.SidebarToggleDirective = SidebarToggleDirective;
var SidebarMinimizeDirective = (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        core_1.Directive({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());
exports.SidebarMinimizeDirective = SidebarMinimizeDirective;
var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        core_1.Directive({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());
exports.MobileSidebarToggleDirective = MobileSidebarToggleDirective;
/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        core_1.Directive({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());
exports.SidebarOffCanvasCloseDirective = SidebarOffCanvasCloseDirective;
exports.SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/sidebar.directive.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=D:/Mobile/angular/bes/sources/src/environment.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "#inline {\n  float: left; }\n\n#nav span {\n  display: none; }\n\n#nav, #nav ul {\n  list-style: none outside none; }\n\n#nav {\n  -ms-flex-line-pack: center !important;\n      align-content: center !important;\n  background-color: white;\n  border-bottom: 0px solid #2D2C76;\n  float: left;\n  position: relative;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto; }\n\n#nav ul.subs {\n  background-color: #FFFFFF;\n  box-shadow: 1px 1px 5px #2D2C76;\n  color: #2D2C76;\n  display: none;\n  left: 0;\n  padding: 2%;\n  position: absolute;\n  width: 100%; }\n\n#nav > li {\n  padding-bottom: 2px !important;\n  border-bottom: 5px solid transparent;\n  float: left;\n  text-align: left;\n  transition: all 300ms ease-in-out 0s; }\n\n#nav li a {\n  display: block;\n  text-decoration: none;\n  transition: color 450ms ease-in-out 0s, background-color 450ms ease-in-out 0s;\n  white-space: normal; }\n\n#nav > li > a {\n  text-align: center;\n  color: #2D2C76;\n  display: block;\n  font-size: 0.875rem;\n  font-family: 'Calibri';\n  line-height: 49px;\n  padding: 0 15px;\n  font-weight: bold; }\n\n#nav > li:hover > a, #nav > a:hover {\n  border-bottom: 2px solid #2D2C76; }\n\n#nav li.active > a {\n  color: #2D2C76; }\n\n/* submenu */\n#nav li:hover ul.subs {\n  display: block; }\n\n#nav ul.subs > li {\n  display: inline-block;\n  float: none;\n  padding: 10px 1%;\n  vertical-align: top;\n  width: 32%; }\n\n#new {\n  border-right: 1px solid gray; }\n\n#li-special {\n  display: inline-block;\n  float: none;\n  padding: 10px 1%;\n  vertical-align: top;\n  width: 32%; }\n\n#nav ul.subs > li:hover {\n  font-size: 1rem; }\n\n#nav ul.subs > li a {\n  color: #777777;\n  line-height: 20px; }\n\n#nav ul li:hover a {\n  color: #2D2C76; }\n\n#nav ul li:hover #icons {\n  color: #2D2C76; }\n\n#nav ul.subs > li > a {\n  font-size: 1.3em; }\n\n#nav ul.subs > li li {\n  float: none;\n  transition: padding 150ms ease-out 0s;\n  text-align: center; }\n\n#icons {\n  font-size: 80px !important;\n  color: #C8C8C8; }\n\n#icons:hover {\n  color: #2D2C76; }\n  #icons:hover a {\n    text-color: #2D2C76; }\n\n#lienbasright {\n  padding-left: 18%;\n  padding-bottom: 2px;\n  margin-top: 13px; }\n\n#lienbas {\n  padding-bottom: 2px;\n  margin-top: 13px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <ul class=\"nav navbar-nav d-md-down-none\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link navbar-toggler\" href=\"#\" appSidebarToggler>&#9776;</a>\n    </li>\n  </ul>\n  <h4 class=\"text-center ml-auto d-md-down-none header-international header-center\">Avec BMCE EuroServices, le transfert d’argent<br>n’a jamais été aussi simple !</h4>\n\n  <ul class=\"nav navbar-nav ml-auto\">\n    <i18n-translate></i18n-translate>\n    <span class=\"pull-right ml-3 mr-3 d-md-down-none\">\n        Contactez-nous<br>0825 067 373<small><small> (0,15 €/min)</small></small>\n    </span>\n  </ul>\n</header>\n\n\n<div class=\"app-body\">\n  <div class=\"sidebar  sidebar-ab\">\n    <div class=\"bg-primary-dark-op\">\n      <nav class=\"sidebar-nav\">\n        <!-- <div class=\"logo pl-3 pr-3 pt-2 mobile-sidebar-toggler\">\n          <div class=\"logo-normal\">\n                </div>\n          <div class=\"logo-img\">\n            <img src=\"assets/img/logo-white.png\">\n          </div>\n        </div> -->\n\n        <div class=\"user ml-2 mr-2\">\n          <!-- <div class=\"photo\">\n            <img src=\"assets/img/avatars/avatar-badr.jpg\">\n          </div> -->\n          <div class=\"info\">\n            <a (click)=\"showSettings()\">\n              <span>{{civility}} {{firstname}} {{lastname}}<b class=\"caret\"></b></span>\n            </a>\n\n\n            <div class=\"collapse in\" id=\"collapseExample\" aria-labelledby=\"simple-dropdown\" [hidden]=\"!hidDiv\">\n              <ul class=\"nav\">\n                <li>\n                  <a [routerLink]=\"['/index/login']\" (click)=\"logout()\">\n                    <!--<span class=\"sidebar-mini\">MP</span>-->\n                    <span class=\"sidebar-normal\">{{'BUTTON.LOGOUT' | translate}}</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"card card-trans\">\n          <div class=\"card-block\" style=\"padding: 1rem;\">\n            <form action=\"\" class=\"form-horizontal \" method=\"post\">\n              <div class=\"form-group row\">\n                <div class=\"col-md-12\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-btn\">\n                                        <button class=\"btn btn-search btn-primary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                                    </span>\n                    <input class=\"form-control form-bes\" id=\"input1-group2\" name=\"input1-group2\" placeholder=\"Search\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n\n            </form>\n          </div>\n        </div>\n        <ul class=\"nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard/transfer']\"><i class=\"fa fa-send  m-t-2\"></i>{{ 'TRANSFER.TITLE' | translate }}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard/transferHistory']\"><i class=\"fa fa-history  m-t-2\"></i>{{'TRANSFERHISTORY.TITLE' | translate}}</a>\n          </li>\n        </ul>\n\n      </nav>\n      <!-- <ul class=\"nav\">\n          <li class=\"nav-item text-center\">\n            <a class=\"nav-link nav-link-service-client\"  [routerLink]=\"['/dashboard/transfer']\">Service Clients<br>BMCE EuroServices</a>\n          </li>\n        </ul> -->\n    </div>\n  </div>\n\n  <!-- Main content -->\n  <main class=\"main\">\n\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- /.conainer-fluid -->\n  </main>\n\n  <!-- <aside class=\"aside-menu mt-1\">\n\n  </aside> -->\n</div>\n\n<footer class=\"bes-footer\">\n  <!-- <a href=\"http://www.soprabanking.com\">Sopra banking software</a> <span>&copy; 2017 .</span> -->\n  <pub-banner></pub-banner>\n</footer>"

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar without-sidebar p-0\">\r\n  <div class=\"top-bar\">\r\n    <div class=\"container\">\r\n      <div class=\"container-fluid\">\r\n        <ul class=\"nav navbar-nav con-links mc-auto d-md-down-none\">\r\n          <li class=\"nav-item-custom  p-x-1\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i><span class=\"nav-span\"> 0825 067 373 <small><small> (0,15 €/min)</small></small></span></li>\r\n          <li class=\"nav-item-custom p-x-1\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> <span class=\"nav-span\"> contact@bmce.com</span></li>\r\n        </ul>\r\n        <div class=\"language-links\">\r\n          <ul class=\"nav navbar-nav  pr-1 pull-right\">\r\n            <i18n-translate></i18n-translate>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bottom-header\">\r\n    <div class=\"hd \">\r\n\r\n <app-menunv></app-menunv>\r\n      <!--logo end-->\r\n      <!-- <div class=\"menu-search\">\r\n          <ul class=\"nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" routerlinkactive=\"active\" ng-reflect-router-link=\"/dashboard/transfer\" ng-reflect-router-link-active=\"active\"\r\n                href=\"#/dashboard/transfer\"><i class=\"fa fa-send  m-t-2\"></i>Money transfer</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerlinkactive=\"active\" ng-reflect-router-link=\"/dashboard/transferHistory\" ng-reflect-router-link-active=\"active\"\r\n                href=\"#/dashboard/transferHistory\"><i class=\"fa fa-history  m-t-2\"></i>Historique des transferts</a>\r\n            </li>\r\n          </ul>\r\n  \r\n          <div class=\"search\">\r\n            <i class=\"fa fa-search\"></i>\r\n            <form>\r\n              <input type=\"text\" name=\"\" placeholder=\"Search Here\">\r\n            </form>\r\n          </div>\r\n        \r\n        </div>\r\n       \r\n        <div class=\"menu-icon\">\r\n          <span class=\"first-bar\"></span>\r\n          <span class=\"second-bar\"></span>\r\n          <span class=\"third-bar\"></span>\r\n        </div> -->\r\n    </div>\r\n    \r\n  </div>\r\n</header>\r\n<div class=\"app-body\">\r\n  <!-- Main content -->\r\n  \r\n  <main class=\"main pt-0 without-bar\">\r\n   \r\n    <router-outlet></router-outlet>\r\n    <!-- /.conainer-fluid -->\r\n   \r\n  </main>\r\n</div>\r\n<footer id=\"main-footer\">\r\n  <!-- <a href=\"http://www.soprabanking.com\">Sopra banking software</a> <span>&copy; 2017 .</span> -->\r\n  <!-- <pub-banner></pub-banner> -->\r\n  <div class=\"container\">\r\n    <div class=\"row row-wrap\">\r\n      <div class=\"col-md-3 text-left\">\r\n        <a class=\"logo\" href=\"#\">\r\n                            <img src=\"assets/img/logo-white.png\" alt=\"BMCE EURO SERVICES\" title=\"BMCE EURO SERVICES\">\r\n                        </a>\r\n        <p class=\"mb20\">Booking, reviews and advices on hotels, resorts, flights, vacation rentals, travel packages, and lots more!</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-3 text-left\">\r\n        <h4>Newsletter</h4>\r\n        <form>\r\n          <label>Enter your E-mail Address</label>\r\n          <input type=\"text\" class=\"form-control\">\r\n          <p class=\"mt5\"><small>*We Never Send Spam</small>\r\n          </p>\r\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Subscribe\">\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-2 text-left\">\r\n        <ul class=\"list list-footer\">\r\n          <li><a href=\"#\">About US</a>\r\n          </li>\r\n          <li><a href=\"#\">Press Centre</a>\r\n          </li>\r\n          <li><a href=\"#\">Best Price Guarantee</a>\r\n          </li>\r\n          <li><a href=\"#\">Travel News</a>\r\n          </li>\r\n          <li><a href=\"#\">Jobs</a>\r\n          </li>\r\n          <li><a href=\"#\">Privacy Policy</a>\r\n          </li>\r\n          <li><a href=\"#\">Terms of Use</a>\r\n          </li>\r\n          <li><a href=\"#\">Feedback</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-4 text-left\">\r\n        <h4>Have Questions?</h4>\r\n        <h4 class=\"text-color\">+1-202-555-0173</h4>\r\n        <h4><a href=\"#\" class=\"text-color\">support@traveler.com</a></h4>\r\n        <p>24/7 Dedicated Customer Support</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<ul id=\"nav\">\n  <li>\n    <div class=\"logo\">\n      <a class=\"navbar-brand\" href=\"#\"></a>\n\n    </div>\n  </li>\n\n  <li id=\"lienbasright\" >\n\n    <a>Notre banque</a>\n\n    <ul class=\"subs\">\n      <li>\n\n\n        <ul>\n          <li id=\"new\">\n            <div class=\"row\">\n              <div class=\"col-5\">\n                <i class=\"pe-7s-plus pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-5\" style=\"text-align: center;margin-top:auto;margin-bottom:auto;\"> <a href=\"#\">Nous connaître</a>\n              </div>\n            </div>\n          </li>\n          <!--<li><a href=\"#\"><i class= \"pe-7s-gleam pe-3x\" id=\"icons\"></i> Actualités</a></li>\n<li><a href=\"#\"><i class= \"pe-7s-users pe-3x \" id=\"icons\"></i>Nos partenaires</a></li>-->\n        </ul>\n      </li>\n\n\n      <li>\n\n\n        <ul>\n          <!--<li><a href=\"#\">Nos offres</a></li>\n<li><a href=\"#\">Notre expertise</a></li>-->\n\n          <li id=\"new\">\n            <div class=\"row\">\n              <div class=\"col-5\">\n                <i class=\"pe-7s-users pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-5\" style=\"text-align: center;margin-top:auto;margin-bottom:auto;\">\n                <a href=\"#\">Nos partenaires</a>\n              </div>\n            </div>\n          </li>\n        </ul>\n\n      </li>\n      <li>\n\n\n        <ul>\n          <!--<li><a href=\"#\">Nous rejoindre</a></li>-->\n          <li>\n            <div class=\"row\">\n              <div class=\"col-5\">\n                <i class=\"pe-7s-map-2 pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-5\" style=\"text-align: center;margin-top:auto;margin-bottom:auto;\">\n                <a href=\"#\">Nos agences</a>\n              </div>\n            </div>\n          </li>\n\n          <!--<li><a href=\"#\">Nous contacter</a></li>-->\n        </ul>\n\n      </li>\n    </ul>\n\n  </li>\n\n  <li id=\"lienbas\">\n\n    <a>Nos offres</a>\n\n    <ul class=\"subs\">\n      <li>\n\n\n        <ul>\n          <li id=\"new\">\n            <div class=\"row\">\n              <div class=\"col-5\">\n                <i class=\"pe-7s-medal pe-5x \" id=\"icons\" style=\"transform: rotate(180deg);\"></i></div>\n              <div class=\"col-5\" style=\"text-align: center;margin-top:auto;margin-bottom:auto;\"> <a href=\"#\">Nos expertises</a>\n              </div>\n            </div>\n          </li>\n\n        </ul>\n      </li>\n\n\n      <li>\n\n\n        <ul>\n\n\n          <li id=\"new\">\n            <div class=\"row\">\n              <div class=\"col-5\">\n                <i class=\"pe-7s-light pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-5\" style=\"text-align: center;margin-top:auto;margin-bottom:auto;\">\n                <a href=\"#\">Nos produits</a>\n              </div>\n            </div>\n          </li>\n        </ul>\n\n      </li>\n      <li>\n\n\n        <ul>\n          <!--<li><a href=\"#\">Nous rejoindre</a></li>-->\n          <li>\n            <div class=\"row\">\n              <div class=\"col-5\">\n                <i class=\"pe-7s-world pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-7\" style=\"text-align: center;margin-top:auto;margin-bottom:auto;\">\n                <a href=\"#\">Nos clients</a>\n              </div>\n            </div>\n          </li>\n\n          <!--<li><a href=\"#\">Nous contacter</a></li>-->\n        </ul>\n\n      </li>\n    </ul>\n\n  </li>\n  <li id=\"lienbas\">\n\n    <a>Transferts d'argent</a>\n\n    <ul class=\"subs\">\n      <li>\n\n\n        <ul>\n          <li id=\"new\">\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <i class=\"pe-7s-repeat pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-7\" style=\"margin-left:auto;margin-right:auto;text-align: center;margin-top:auto;margin-bottom:auto;\"> <a href=\"#\">Transferts vers le Maroc</a>\n              </div>\n            </div>\n          </li>\n          <!--<li><a href=\"#\"><i class= \"pe-7s-gleam pe-3x\" id=\"icons\"></i> Actualités</a></li>\n<li><a href=\"#\"><i class= \"pe-7s-users pe-3x \" id=\"icons\"></i>Nos partenaires</a></li>-->\n        </ul>\n      </li>\n\n\n      <li>\n\n\n        <ul>\n          <!--<li><a href=\"#\">Nos offres</a></li>\n<li><a href=\"#\">Notre expertise</a></li>-->\n\n          <li id=\"new\">\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <i class=\"pe-7s-config pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-7\" style=\"margin-left:auto;margin-right:auto;text-align: center;margin-top:auto;margin-bottom:auto;\">\n                <a href=\"#\">Gestion des transferts</a>\n              </div>\n            </div>\n          </li>\n        </ul>\n\n      </li>\n      <li>\n\n\n        <ul>\n          <!--<li><a href=\"#\">Nous rejoindre</a></li>-->\n          <li>\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <i class=\"pe-7s-lock pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-7\" style=\"margin-left:auto;margin-right:auto;text-align: center;margin-top:auto;margin-bottom:auto;\">\n                <a href=\"#\">Sécurité des transferts</a>\n              </div>\n            </div>\n          </li>\n\n          <!--<li><a href=\"#\">Nous contacter</a></li>-->\n        </ul>\n\n      </li>\n    </ul>\n\n  </li>\n  <li id=\"lienbas\">\n\n    <a>Services en ligne</a>\n\n    <ul class=\"subs\">\n      <li>\n\n\n        <ul>\n          <li id=\"new\">\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <i class=\"pe-7s-smile pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-7\" style=\"text-align: center;margin-top:auto;margin-bottom:auto;\"> <a href=\"#\">Nos Services clientèles</a>\n              </div>\n            </div>\n          </li>\n          <!--<li><a href=\"#\"><i class= \"pe-7s-gleam pe-3x\" id=\"icons\"></i> Actualités</a></li>\n<li><a href=\"#\"><i class= \"pe-7s-users pe-3x \" id=\"icons\"></i>Nos partenaires</a></li>-->\n        </ul>\n      </li>\n\n\n      <li>\n\n\n        <ul>\n          <!--<li><a href=\"#\">Nos offres</a></li>\n<li><a href=\"#\">Notre expertise</a></li>-->\n\n          <li id=\"new\">\n            <div class=\"row\">\n              <div class=\"col-5\">\n                <i class=\"pe-7s-notebook pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-5\" style=\"text-align: center;margin-top:auto;margin-bottom:auto;\">\n                <a href=\"#\">Vos droits</a>\n              </div>\n            </div>\n          </li>\n        </ul>\n\n      </li>\n      <li>\n\n\n        <ul>\n          <!--<li><a href=\"#\">Nous rejoindre</a></li>-->\n          <li>\n            <div class=\"row\">\n              <div class=\"col-5\">\n                <i class=\"pe-7s-graph1 pe-5x \" id=\"icons\"></i></div>\n              <div class=\"col-5\" style=\"text-align: center;margin-top:auto;margin-bottom:auto;\">\n                <a href=\"#\">Nos projets</a>\n              </div>\n            </div>\n          </li>\n\n          <!--<li><a href=\"#\">Nous contacter</a></li>-->\n        </ul>\n\n      </li>\n    </ul>\n\n  </li>\n\n  <!--<li><a> Notre banque</a>\n    <span></span>\n    <ul class=\"subs\">\n      <li>\n\n\n        <ul>\n          <li>\n\n            <a href=\"#\"> <i class=\"pe-7s-home\"></i>Nous connaître</a>\n          </li>\n          <li><a href=\"#\"><i class= \"pe-7s-gleam pe-3x\"></i> Actualités</a></li>\n          <li><a href=\"#\"><i class= \"pe-7s-users pe-3x \"></i>Nos partenaires</a></li>\n        </ul>\n      </li>\n\n\n      <li style=\"text-align:center\">\n        <ul>\n          <li>\n\n            <a href=\"#\">Nos offres</a></li>\n          <li><a href=\"#\">Nos expertises</a></li>\n          <li><a href=\"#\">Nous rejoindre</a></li>\n        </ul>\n\n      </li>\n      <li>\n\n\n        <ul>\n          <li><a href=\"#\">Nous rejoindre</a></li>\n          <li><a href=\"#\">Nos agences</a></li>\n          <li><a href=\"#\">Nous contacter</a></li>\n        </ul>\n\n      </li>\n    </ul>\n\n  </li>-->\n\n</ul>"

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row p-1  align-items-center\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-9 p-0\">\r\n            <div class=\"card card-banner\">\r\n                <div class=\"card-block p-1 pb-4\">\r\n                    <div class=\"slick-container\">\r\n                        <div><img src=\"assets/img/banner-test1.jpg\"> <span> hello </span></div>\r\n                        \r\n                        <img src=\"assets/img/banner-test2.jpg\">\r\n                        <img src=\"assets/img/banner-test3.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3 col-md-3 pt-3\">\r\n            <div class=\"card card-transp\">\r\n                <div class=\"card-block p-4\">\r\n                    <a href=\"#\" class=\"link link-pub\">Abonnez-vous à notre Newsletter</a>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"card card-transp\">\r\n                <div class=\"card-block\">\r\n                    <a href=\"#\" class=\"link link-pub\">Rejoignez-nous!</a>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(176);


/***/ })

},[426]);
//# sourceMappingURL=main.bundle.js.map