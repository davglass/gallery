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
_yuitest_coverage["build/gallery-bitly/gallery-bitly.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-bitly/gallery-bitly.js",
    code: []
};
_yuitest_coverage["build/gallery-bitly/gallery-bitly.js"].code=["YUI.add('gallery-bitly', function (Y, NAME) {","","/*jshint maxlen: 200 */","","    var B = function(config) {","        B.superclass.constructor.call(this, config);","    };","","    B.NAME = 'bitly';","","    B.ATTRS = {","        username: {","            value: ''","        },","        key: {","            value: ''","        }","    };","","    Y.extend(B, Y.Base, {","        api: 'http:/'+'/api.bit.ly/',","        initializer: function() {","            if (!this.get('key') || !this.get('username')) {","                Y.error('You must give a username and an API key. If you do not have an apiKey, sign up for a bitly account and go to your Account page to get your apiKey. (http:/'+'/bit.ly/)');","            }","        },","        destructor: function() {","        },","        _buildURL: function(path, param) {","            return this.api + path + '?version=2.0.1&login=' + this.get('username') + '&apiKey=' + this.get('key') + '&' + param;","        },","        _handleAPI: function(name, url, cb) {","","            var stamp = Y.guid().replace(/-/g,'_');","","            YUI[stamp] = Y.bind(function(e) {","                if (e.results) {","                    if (name === 'stats') {","                        this.fire(name, e.results);","                        if (cb) {","                            cb = Y.bind(cb, this);","                            cb(e.results);","                        }","                    } else {","                        Y.each(e.results, function(v) {","                            this.fire(name, v);","                            if (cb) {","                                cb = Y.bind(cb, this);","                                cb(v);","                            }","                        }, this);","                    }","                }","                delete YUI[stamp];","            }, this);","","            Y.Get.script(url + '&callback=YUI.' + stamp);","        },","        shorten: function(url, cb) {","            var api = this._buildURL('shorten', 'longUrl=' + encodeURIComponent(url));","            this._handleAPI('shorten', api, cb);","        },","        expand: function(p, cb) {","            var path = ((p.url) ? 'shortUrl=' + encodeURIComponent(p.url) : 'hash=' + p.hash),","                api = this._buildURL('expand', path);","","            this._handleAPI('expand', api, cb);","","        },","        expandByURL: function(v, cb) {","            return this.expand({ url: v }, cb);","        },","        expandByHash: function(v, cb) {","            return this.expand({ hash: v }, cb);","        },","        info: function(p, cb) {","            var path = ((p.url) ? 'shortUrl=' + encodeURIComponent(p.url) : 'hash=' + p.hash),","                api = this._buildURL('info', path);","","            this._handleAPI('info', api, cb);","","        },","        infoByURL: function(v, cb) {","            return this.info({ url: v }, cb);","        },","        infoByHash: function(v, cb) {","            return this.info({ hash: v }, cb);","        },","        stats: function(p, cb) {","            var path = ((p.url) ? 'shortUrl=' + encodeURIComponent(p.url) : 'hash=' + p.hash),","                api = this._buildURL('stats', path);","","            this._handleAPI('stats', api, cb);","","        },","        statsByURL: function(v, cb) {","            return this.stats({ url: v }, cb);","        },","        statsByHash: function(v, cb) {","            return this.stats({ hash: v }, cb);","        }","    });","","    Y.bitly = B;","","","}, '@VERSION@', {\"requires\": [\"base\", \"get\"], \"supersedes\": [], \"optional\": [], \"skinnable\": false});"];
_yuitest_coverage["build/gallery-bitly/gallery-bitly.js"].lines = {"1":0,"5":0,"6":0,"9":0,"11":0,"20":0,"23":0,"24":0,"30":0,"34":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"45":0,"46":0,"47":0,"48":0,"49":0,"54":0,"57":0,"60":0,"61":0,"64":0,"67":0,"71":0,"74":0,"77":0,"80":0,"84":0,"87":0,"90":0,"93":0,"97":0,"100":0,"104":0};
_yuitest_coverage["build/gallery-bitly/gallery-bitly.js"].functions = {"B:5":0,"initializer:22":0,"_buildURL:29":0,"(anonymous 3):45":0,"(anonymous 2):36":0,"_handleAPI:32":0,"shorten:59":0,"expand:63":0,"expandByURL:70":0,"expandByHash:73":0,"info:76":0,"infoByURL:83":0,"infoByHash:86":0,"stats:89":0,"statsByURL:96":0,"statsByHash:99":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-bitly/gallery-bitly.js"].coveredLines = 39;
_yuitest_coverage["build/gallery-bitly/gallery-bitly.js"].coveredFunctions = 17;
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 1);
YUI.add('gallery-bitly', function (Y, NAME) {

/*jshint maxlen: 200 */

    _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 5);
var B = function(config) {
        _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "B", 5);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 6);
B.superclass.constructor.call(this, config);
    };

    _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 9);
B.NAME = 'bitly';

    _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 11);
B.ATTRS = {
        username: {
            value: ''
        },
        key: {
            value: ''
        }
    };

    _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 20);
Y.extend(B, Y.Base, {
        api: 'http:/'+'/api.bit.ly/',
        initializer: function() {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "initializer", 22);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 23);
if (!this.get('key') || !this.get('username')) {
                _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 24);
Y.error('You must give a username and an API key. If you do not have an apiKey, sign up for a bitly account and go to your Account page to get your apiKey. (http:/'+'/bit.ly/)');
            }
        },
        destructor: function() {
        },
        _buildURL: function(path, param) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "_buildURL", 29);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 30);
return this.api + path + '?version=2.0.1&login=' + this.get('username') + '&apiKey=' + this.get('key') + '&' + param;
        },
        _handleAPI: function(name, url, cb) {

            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "_handleAPI", 32);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 34);
var stamp = Y.guid().replace(/-/g,'_');

            _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 36);
YUI[stamp] = Y.bind(function(e) {
                _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "(anonymous 2)", 36);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 37);
if (e.results) {
                    _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 38);
if (name === 'stats') {
                        _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 39);
this.fire(name, e.results);
                        _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 40);
if (cb) {
                            _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 41);
cb = Y.bind(cb, this);
                            _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 42);
cb(e.results);
                        }
                    } else {
                        _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 45);
Y.each(e.results, function(v) {
                            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "(anonymous 3)", 45);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 46);
this.fire(name, v);
                            _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 47);
if (cb) {
                                _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 48);
cb = Y.bind(cb, this);
                                _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 49);
cb(v);
                            }
                        }, this);
                    }
                }
                _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 54);
delete YUI[stamp];
            }, this);

            _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 57);
Y.Get.script(url + '&callback=YUI.' + stamp);
        },
        shorten: function(url, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "shorten", 59);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 60);
var api = this._buildURL('shorten', 'longUrl=' + encodeURIComponent(url));
            _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 61);
this._handleAPI('shorten', api, cb);
        },
        expand: function(p, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "expand", 63);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 64);
var path = ((p.url) ? 'shortUrl=' + encodeURIComponent(p.url) : 'hash=' + p.hash),
                api = this._buildURL('expand', path);

            _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 67);
this._handleAPI('expand', api, cb);

        },
        expandByURL: function(v, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "expandByURL", 70);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 71);
return this.expand({ url: v }, cb);
        },
        expandByHash: function(v, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "expandByHash", 73);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 74);
return this.expand({ hash: v }, cb);
        },
        info: function(p, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "info", 76);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 77);
var path = ((p.url) ? 'shortUrl=' + encodeURIComponent(p.url) : 'hash=' + p.hash),
                api = this._buildURL('info', path);

            _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 80);
this._handleAPI('info', api, cb);

        },
        infoByURL: function(v, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "infoByURL", 83);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 84);
return this.info({ url: v }, cb);
        },
        infoByHash: function(v, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "infoByHash", 86);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 87);
return this.info({ hash: v }, cb);
        },
        stats: function(p, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "stats", 89);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 90);
var path = ((p.url) ? 'shortUrl=' + encodeURIComponent(p.url) : 'hash=' + p.hash),
                api = this._buildURL('stats', path);

            _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 93);
this._handleAPI('stats', api, cb);

        },
        statsByURL: function(v, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "statsByURL", 96);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 97);
return this.stats({ url: v }, cb);
        },
        statsByHash: function(v, cb) {
            _yuitest_coverfunc("build/gallery-bitly/gallery-bitly.js", "statsByHash", 99);
_yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 100);
return this.stats({ hash: v }, cb);
        }
    });

    _yuitest_coverline("build/gallery-bitly/gallery-bitly.js", 104);
Y.bitly = B;


}, '@VERSION@', {"requires": ["base", "get"], "supersedes": [], "optional": [], "skinnable": false});
