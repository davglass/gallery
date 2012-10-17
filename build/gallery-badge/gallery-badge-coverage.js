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
_yuitest_coverage["build/gallery-badge/gallery-badge.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-badge/gallery-badge.js",
    code: []
};
_yuitest_coverage["build/gallery-badge/gallery-badge.js"].code=["YUI.add('gallery-badge', function (Y, NAME) {","","","        var B = function(config) {","            this._lazyAddAttrs = false;","            config.node = config.host;","            B.superclass.constructor.call(this, config);","        };","        ","        B.NAME = \"gallery-badge\";","","        B.NS = \"badge\";","","        B.ATTRS = {","            node: {","                setter: function(node) {","                    return Y.one(node);","                }","            },","            type: {","                value: 'popular',","                setter: function(v) {","                    if (v !== 'user') {","                        this.set('username', '');","                    }","                    return v;","                }","            },","            header: {","                value: '',","                getter: function() {","                    var h = 'Popular Gallery Items';","                    switch (this.get('type')) {","                        case 'oncdn':","                            h = 'Gallery Items on the CDN';","                            break;","                        case 'featured':","                            h = 'Featured Gallery Items';","                            break;","                        case 'random':","                            h = 'Random Gallery Item';","                            break;","                        case 'user':","                            h = 'My Gallery Items';","                            break;","                    }","                    return h;","                }","            },","            username: {","                value: '',","                setter: function(v) {","                    if (v) {","                        this.set('header', 'My Gallery Items');","                        this._setStateVal('type', 'user');","                    }","                    return v;","                }","            },","            render: {","                value: true","            },","            data: {","                value: {}","            }","        };","","        Y.extend(B, Y.Base, {","            buildUI: function(e) {","                this.set('data', e.data);","                if (e.data.error) {","                    return;","                }","                var data = e.data,","                    type = this.get('type'),","                    header = Y.Node.create('<h2>' + this.get('header') + '</h2>'),","                    node = Y.Node.create('<ul></ul>'),","                    n = this.get('node');","","                if (type != 'random') {","                    if (type == 'user') {","                        header = Y.Node.create('<h2><a href=\"http:/'+'/yuilibrary.com/gallery/user/' + data.userinfo.username + '\">' + data.userinfo.fullname + '\\'s Gallery Items</a></h2>');","                    }","                    Y.each(data.modules, function(v) {","                        node.append('<li><a href=\"' + v.url + '\">' + v.title + '</a></li>');","                    });","                } else {","                    node.append('<li><a href=\"' + data.modules.url + '\">' + data.modules.title + '</a></li>');","                }","","                n.set('innerHTML', '');","                n.append(header);","                n.append(node);","            },","            getSQL: function() {","                var type = this.get('type'), sql;","                if (type == 'user') {","                    sql = \"select * from yui.gallery.user where (username = '\" + this.get('username') + \"')\";","                } else {","                    sql = \"select * from yui.gallery.\" + type;","                }","                return sql;","            },","            updateUserUI: function(e) {","                if (e.newVal !== '') {","                    this.updateUI();","                }","            },","            updateUI: function(e) {","                var sql = this.getSQL(), q;","                ","                q = new Y.yql(sql, Y.bind(function(r) {","                    if (r.query && r.query.results && r.query.results.json) {","                        this.fire('dataReturned', { data: r.query.results.json });","                    }","                }, this), { env: 'http:/'+'/yuilibrary.com/yql/yui.env' });","","            },","            initializer: function() {","                this.after('typeChange', Y.bind(this.updateUI, this));","                this.after('usernameChange', Y.bind(this.updateUserUI, this));","                this.publish('dataReturned', {","                    type: 'datareturned',","                    defaultFn: this.buildUI","                });","                if (this.get('render')) {","                    this.render();","                }","            },","            render: function() {","                this.updateUI();","            },","            refresh: function() {","                this.updateUI();","            },","            destructor: function() {","                this.get('node').set('innerHTML', '');","            }","        });","        Y.namespace('Plugin');","        Y.Plugin.Badge = B;","","","","}, '@VERSION@', {\"requires\": [\"node\", \"event\", \"gallery-yql\", \"base\"], \"supersedes\": [], \"optional\": [], \"skinnable\": false});"];
_yuitest_coverage["build/gallery-badge/gallery-badge.js"].lines = {"1":0,"4":0,"5":0,"6":0,"7":0,"10":0,"12":0,"14":0,"17":0,"23":0,"24":0,"26":0,"32":0,"33":0,"35":0,"36":0,"38":0,"39":0,"41":0,"42":0,"44":0,"45":0,"47":0,"53":0,"54":0,"55":0,"57":0,"68":0,"70":0,"71":0,"72":0,"74":0,"80":0,"81":0,"82":0,"84":0,"85":0,"88":0,"91":0,"92":0,"93":0,"96":0,"97":0,"98":0,"100":0,"102":0,"105":0,"106":0,"110":0,"112":0,"113":0,"114":0,"120":0,"121":0,"122":0,"126":0,"127":0,"131":0,"134":0,"137":0,"140":0,"141":0};
_yuitest_coverage["build/gallery-badge/gallery-badge.js"].functions = {"B:4":0,"setter:16":0,"setter:22":0,"getter:31":0,"setter:52":0,"(anonymous 2):84":0,"buildUI:69":0,"getSQL:95":0,"updateUserUI:104":0,"(anonymous 3):112":0,"updateUI:109":0,"initializer:119":0,"render:130":0,"refresh:133":0,"destructor:136":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-badge/gallery-badge.js"].coveredLines = 62;
_yuitest_coverage["build/gallery-badge/gallery-badge.js"].coveredFunctions = 16;
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 1);
YUI.add('gallery-badge', function (Y, NAME) {


        _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 4);
var B = function(config) {
            _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "B", 4);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 5);
this._lazyAddAttrs = false;
            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 6);
config.node = config.host;
            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 7);
B.superclass.constructor.call(this, config);
        };
        
        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 10);
B.NAME = "gallery-badge";

        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 12);
B.NS = "badge";

        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 14);
B.ATTRS = {
            node: {
                setter: function(node) {
                    _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "setter", 16);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 17);
return Y.one(node);
                }
            },
            type: {
                value: 'popular',
                setter: function(v) {
                    _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "setter", 22);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 23);
if (v !== 'user') {
                        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 24);
this.set('username', '');
                    }
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 26);
return v;
                }
            },
            header: {
                value: '',
                getter: function() {
                    _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "getter", 31);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 32);
var h = 'Popular Gallery Items';
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 33);
switch (this.get('type')) {
                        case 'oncdn':
                            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 35);
h = 'Gallery Items on the CDN';
                            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 36);
break;
                        case 'featured':
                            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 38);
h = 'Featured Gallery Items';
                            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 39);
break;
                        case 'random':
                            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 41);
h = 'Random Gallery Item';
                            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 42);
break;
                        case 'user':
                            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 44);
h = 'My Gallery Items';
                            _yuitest_coverline("build/gallery-badge/gallery-badge.js", 45);
break;
                    }
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 47);
return h;
                }
            },
            username: {
                value: '',
                setter: function(v) {
                    _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "setter", 52);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 53);
if (v) {
                        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 54);
this.set('header', 'My Gallery Items');
                        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 55);
this._setStateVal('type', 'user');
                    }
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 57);
return v;
                }
            },
            render: {
                value: true
            },
            data: {
                value: {}
            }
        };

        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 68);
Y.extend(B, Y.Base, {
            buildUI: function(e) {
                _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "buildUI", 69);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 70);
this.set('data', e.data);
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 71);
if (e.data.error) {
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 72);
return;
                }
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 74);
var data = e.data,
                    type = this.get('type'),
                    header = Y.Node.create('<h2>' + this.get('header') + '</h2>'),
                    node = Y.Node.create('<ul></ul>'),
                    n = this.get('node');

                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 80);
if (type != 'random') {
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 81);
if (type == 'user') {
                        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 82);
header = Y.Node.create('<h2><a href="http:/'+'/yuilibrary.com/gallery/user/' + data.userinfo.username + '">' + data.userinfo.fullname + '\'s Gallery Items</a></h2>');
                    }
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 84);
Y.each(data.modules, function(v) {
                        _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "(anonymous 2)", 84);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 85);
node.append('<li><a href="' + v.url + '">' + v.title + '</a></li>');
                    });
                } else {
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 88);
node.append('<li><a href="' + data.modules.url + '">' + data.modules.title + '</a></li>');
                }

                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 91);
n.set('innerHTML', '');
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 92);
n.append(header);
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 93);
n.append(node);
            },
            getSQL: function() {
                _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "getSQL", 95);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 96);
var type = this.get('type'), sql;
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 97);
if (type == 'user') {
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 98);
sql = "select * from yui.gallery.user where (username = '" + this.get('username') + "')";
                } else {
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 100);
sql = "select * from yui.gallery." + type;
                }
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 102);
return sql;
            },
            updateUserUI: function(e) {
                _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "updateUserUI", 104);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 105);
if (e.newVal !== '') {
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 106);
this.updateUI();
                }
            },
            updateUI: function(e) {
                _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "updateUI", 109);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 110);
var sql = this.getSQL(), q;
                
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 112);
q = new Y.yql(sql, Y.bind(function(r) {
                    _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "(anonymous 3)", 112);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 113);
if (r.query && r.query.results && r.query.results.json) {
                        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 114);
this.fire('dataReturned', { data: r.query.results.json });
                    }
                }, this), { env: 'http:/'+'/yuilibrary.com/yql/yui.env' });

            },
            initializer: function() {
                _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "initializer", 119);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 120);
this.after('typeChange', Y.bind(this.updateUI, this));
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 121);
this.after('usernameChange', Y.bind(this.updateUserUI, this));
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 122);
this.publish('dataReturned', {
                    type: 'datareturned',
                    defaultFn: this.buildUI
                });
                _yuitest_coverline("build/gallery-badge/gallery-badge.js", 126);
if (this.get('render')) {
                    _yuitest_coverline("build/gallery-badge/gallery-badge.js", 127);
this.render();
                }
            },
            render: function() {
                _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "render", 130);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 131);
this.updateUI();
            },
            refresh: function() {
                _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "refresh", 133);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 134);
this.updateUI();
            },
            destructor: function() {
                _yuitest_coverfunc("build/gallery-badge/gallery-badge.js", "destructor", 136);
_yuitest_coverline("build/gallery-badge/gallery-badge.js", 137);
this.get('node').set('innerHTML', '');
            }
        });
        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 140);
Y.namespace('Plugin');
        _yuitest_coverline("build/gallery-badge/gallery-badge.js", 141);
Y.Plugin.Badge = B;



}, '@VERSION@', {"requires": ["node", "event", "gallery-yql", "base"], "supersedes": [], "optional": [], "skinnable": false});
