if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-oauth/gallery-oauth.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-oauth/gallery-oauth.js",
    code: []
};
_yuitest_coverage["build/gallery-oauth/gallery-oauth.js"].code=["YUI.add('gallery-oauth', function (Y, NAME) {","","    /**","    * This module pulls in the oAuth code from googlecode and adds a couple of helper methods","    * to sign a url for standard 2-Legged oAuth","    */","    var BASE = 'http://oauth.googlecode.com/svn/code/javascript/',","        FILES = [ 'oauth', 'sha1' ], LOADED = 0;","","    if (!YUI.Env.oauthLoaded) {","        Y.each(FILES, function(v) {","            var url = BASE + v + '.js';","            Y.Get.script(url, {","                onSuccess: function() {","                    LOADED++;","                    if (LOADED === FILES.length) {","                        YUI.Env.oauthLoaded = true;","                        Y.oAuth.fire();","                    }","                }","            });","        });","    }","","    Y.namespace('oAuth');","","    Y.oAuth = {","        fire: function() {","            Y.each(Y.oAuth._items, function(fn, k) {","                fn();","                delete Y.oAuth._items[k];","            });","        },","        ready: function(fn) {","            if (YUI.Env.oauthLoaded) {","                fn();","            } else {","                Y.oAuth._items.push(fn);","            }","        },","        _items: [],","        signURL: function(key, secret, url) {","            var accessor = {","                consumerSecret: secret,","                tokenSecret: \"\"","            },","            finalStr = '',","            baseStr = \"\",","            parameterMap = \"\",","            theSig = \"\",","            locString = \"\",","            item, subitem, paramList,","            message = {","                action: url,","                method: \"GET\",","                parameters: [","                    [ 'oauth_version', '1.0' ],","                    [ 'oauth_consumer_key', key ]","                ]","            };","         ","            OAuth.setTimestampAndNonce(message);","            OAuth.SignatureMethod.sign(message, accessor);","         ","            parameterMap = OAuth.getParameterMap(message);","            baseStr = OAuth.decodeForm(OAuth.SignatureMethod.getBaseString(message));           ","            ","            if (parameterMap.parameters) {","                Y.each(parameterMap.parameters, function(item) {","                    Y.each(item, function(subitem) {","                        if (subitem == \"oauth_signature\") {","                            theSig = item[1];                    ","                        }","                    });","                });","            }","         ","            paramList = baseStr[2][0].split(\"&\");","            paramList.push(\"oauth_signature=\" + encodeURIComponent(theSig));","            paramList.sort(function(a,b) {","                if (a[0] < b[0]) { return -1; }","                if (a[0] > b[0]) { return 1; }","                if (a[1] < b[1]) { return  -1; }","                if (a[1] > b[1]) { return 1; }","                return 0;","            });","            ","            Y.each(paramList, function(v, k) {","                locString += paramList[k] + '&';                ","            });","         ","            finalStr = baseStr[1][0] + '?' + locString.slice(0,locString.length - 1);","         ","            return finalStr;","        ","        }","    };","    ","    if (Y.YQLRequest) {","        Y.YQLRequest.prototype._send = Y.YQLRequest.prototype.send;","        Y.YQLRequest.prototype.send = function() {","            if (this._params.key && this._params.secret) {","                if (!this._opts) {","                    this._opts = {};","                }","                this._opts.key = this._params.key;","                this._opts.secret = this._params.secret;","                delete this._params.key;","                delete this._params.secret;","                if (this._params.base) {","                    this._opts.base = this._params.base;","                    delete this._params.base;","                }","                if (Y.Lang.isFunction(this._callback)) {","                    this._callback = {","                        on: {","                            success: this._callback","                        }","                    };","                }","                this._callback.format = Y.bind(function(url, proxy) {","                    var url = Y.oAuth.signURL(this._opts.key, this._opts.secret, (url + '&callback=' + proxy));","                    return url;","                }, this);","            }","            this._send();","        };","    }","","","}, '@VERSION@');"];
_yuitest_coverage["build/gallery-oauth/gallery-oauth.js"].lines = {"1":0,"7":0,"10":0,"11":0,"12":0,"13":0,"15":0,"16":0,"17":0,"18":0,"25":0,"27":0,"29":0,"30":0,"31":0,"35":0,"36":0,"38":0,"43":0,"62":0,"63":0,"65":0,"66":0,"68":0,"69":0,"70":0,"71":0,"72":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"88":0,"89":0,"92":0,"94":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"106":0,"107":0,"108":0,"109":0,"110":0,"111":0,"112":0,"114":0,"115":0,"121":0,"122":0,"123":0,"126":0};
_yuitest_coverage["build/gallery-oauth/gallery-oauth.js"].functions = {"onSuccess:14":0,"(anonymous 2):11":0,"(anonymous 3):29":0,"fire:28":0,"ready:34":0,"(anonymous 5):70":0,"(anonymous 4):69":0,"(anonymous 6):80":0,"(anonymous 7):88":0,"signURL:42":0,"(anonymous 8):121":0,"send:101":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-oauth/gallery-oauth.js"].coveredLines = 59;
_yuitest_coverage["build/gallery-oauth/gallery-oauth.js"].coveredFunctions = 13;
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 1);
YUI.add('gallery-oauth', function (Y, NAME) {

    /**
    * This module pulls in the oAuth code from googlecode and adds a couple of helper methods
    * to sign a url for standard 2-Legged oAuth
    */
    _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 7);
var BASE = 'http://oauth.googlecode.com/svn/code/javascript/',
        FILES = [ 'oauth', 'sha1' ], LOADED = 0;

    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 10);
if (!YUI.Env.oauthLoaded) {
        _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 11);
Y.each(FILES, function(v) {
            _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "(anonymous 2)", 11);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 12);
var url = BASE + v + '.js';
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 13);
Y.Get.script(url, {
                onSuccess: function() {
                    _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "onSuccess", 14);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 15);
LOADED++;
                    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 16);
if (LOADED === FILES.length) {
                        _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 17);
YUI.Env.oauthLoaded = true;
                        _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 18);
Y.oAuth.fire();
                    }
                }
            });
        });
    }

    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 25);
Y.namespace('oAuth');

    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 27);
Y.oAuth = {
        fire: function() {
            _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "fire", 28);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 29);
Y.each(Y.oAuth._items, function(fn, k) {
                _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "(anonymous 3)", 29);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 30);
fn();
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 31);
delete Y.oAuth._items[k];
            });
        },
        ready: function(fn) {
            _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "ready", 34);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 35);
if (YUI.Env.oauthLoaded) {
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 36);
fn();
            } else {
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 38);
Y.oAuth._items.push(fn);
            }
        },
        _items: [],
        signURL: function(key, secret, url) {
            _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "signURL", 42);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 43);
var accessor = {
                consumerSecret: secret,
                tokenSecret: ""
            },
            finalStr = '',
            baseStr = "",
            parameterMap = "",
            theSig = "",
            locString = "",
            item, subitem, paramList,
            message = {
                action: url,
                method: "GET",
                parameters: [
                    [ 'oauth_version', '1.0' ],
                    [ 'oauth_consumer_key', key ]
                ]
            };
         
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 62);
OAuth.setTimestampAndNonce(message);
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 63);
OAuth.SignatureMethod.sign(message, accessor);
         
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 65);
parameterMap = OAuth.getParameterMap(message);
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 66);
baseStr = OAuth.decodeForm(OAuth.SignatureMethod.getBaseString(message));           
            
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 68);
if (parameterMap.parameters) {
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 69);
Y.each(parameterMap.parameters, function(item) {
                    _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "(anonymous 4)", 69);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 70);
Y.each(item, function(subitem) {
                        _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "(anonymous 5)", 70);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 71);
if (subitem == "oauth_signature") {
                            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 72);
theSig = item[1];                    
                        }
                    });
                });
            }
         
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 78);
paramList = baseStr[2][0].split("&");
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 79);
paramList.push("oauth_signature=" + encodeURIComponent(theSig));
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 80);
paramList.sort(function(a,b) {
                _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "(anonymous 6)", 80);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 81);
if (a[0] < b[0]) { return -1; }
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 82);
if (a[0] > b[0]) { return 1; }
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 83);
if (a[1] < b[1]) { return  -1; }
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 84);
if (a[1] > b[1]) { return 1; }
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 85);
return 0;
            });
            
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 88);
Y.each(paramList, function(v, k) {
                _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "(anonymous 7)", 88);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 89);
locString += paramList[k] + '&';                
            });
         
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 92);
finalStr = baseStr[1][0] + '?' + locString.slice(0,locString.length - 1);
         
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 94);
return finalStr;
        
        }
    };
    
    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 99);
if (Y.YQLRequest) {
        _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 100);
Y.YQLRequest.prototype._send = Y.YQLRequest.prototype.send;
        _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 101);
Y.YQLRequest.prototype.send = function() {
            _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "send", 101);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 102);
if (this._params.key && this._params.secret) {
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 103);
if (!this._opts) {
                    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 104);
this._opts = {};
                }
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 106);
this._opts.key = this._params.key;
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 107);
this._opts.secret = this._params.secret;
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 108);
delete this._params.key;
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 109);
delete this._params.secret;
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 110);
if (this._params.base) {
                    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 111);
this._opts.base = this._params.base;
                    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 112);
delete this._params.base;
                }
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 114);
if (Y.Lang.isFunction(this._callback)) {
                    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 115);
this._callback = {
                        on: {
                            success: this._callback
                        }
                    };
                }
                _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 121);
this._callback.format = Y.bind(function(url, proxy) {
                    _yuitest_coverfunc("build/gallery-oauth/gallery-oauth.js", "(anonymous 8)", 121);
_yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 122);
var url = Y.oAuth.signURL(this._opts.key, this._opts.secret, (url + '&callback=' + proxy));
                    _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 123);
return url;
                }, this);
            }
            _yuitest_coverline("build/gallery-oauth/gallery-oauth.js", 126);
this._send();
        };
    }


}, '@VERSION@');
