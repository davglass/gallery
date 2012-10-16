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
_yuitest_coverage["build/gallery-yql/gallery-yql.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-yql/gallery-yql.js",
    code: []
};
_yuitest_coverage["build/gallery-yql/gallery-yql.js"].code=["YUI.add('gallery-yql', function (Y, NAME) {","","    //Global storage for the callbacks","    if (!YUI.yql) {","        YUI.yql = {};","    }","    /**","     * This class adds a sugar class to allow access to YQL (http://developer.yahoo.com/yql/).","     * @module yql","     */","    /**","     * This class adds a sugar class to allow access to YQL (http://developer.yahoo.com/yql/).","     * @class yql","     * @extends Event.Target","     * @constructor","     * @param {String} sql The SQL statement to execute","     * @param {Function} callback The callback to execute after the query (optional).","     * @param {Object} params An object literal of extra parameters to pass along (optional).","     * @param {Object} opts An object literal of extra options to pass along to the Get Utility (optional).","     */","    var BASE_URL = ':/'+'/query.yahooapis.com/v1/public/yql?',","    yql = function (sql, callback, params, opts) {","        yql.superclass.constructor.apply(this);","        this._query(sql, callback, params, opts);","    };","","    Y.extend(yql, Y.EventTarget, {","        /**","        * @private","        * @property _cb","        * @description The callback method","        */","        _cb: null,","        /**","        * @private","        * @property _stamp","        * @description The method name on the Global YUI object we use as the callback.","        */","        _stamp: null,","        /**","        * @private","        * @method _receiver","        * @description The global callback that get's called from Get.","        * @param {Object} q The JSON object from YQL.","        */","        _receiver: function(q) {","            if (q.query) {","                this.fire('query', q.query);","            }","            if (q.error) {","                this.fire('error', q.error);","            }","            if (this._cb) {","                this._cb(q);","            }","            delete YUI.yql[this._stamp];","        },","        /**","        * @private","        * @method _query","        * @description Builds the query and fire the Get call.","        * @param {String} sql The SQL statement to execute","        * @param {Function} callback The callback to execute after the query (optional).","        * @param {Object} params An object literal of extra parameters to pass along (optional).","        * @param {Object} opts An object literal of extra options to pass along to the Get Utility (optional).","        * @return Self","        */","        _query: function(sql, callback, params, opts) {","            var st = Y.stamp({}), qs = '', url = 'http';","            //Must replace the dashes with underscrores","            st = st.replace(/-/g, '_');","","            this._stamp = st;","","            this._cb = callback;","","            YUI.yql[st] = Y.bind(this._receiver, this);","","            if (!params) {","                params = {};","            }","            params.q = sql;","            params.format = 'json';","            params.callback = \"YUI.yql.\" + st;","            if (!params.env) {","                params.env = 'http:/'+'/datatables.org/alltables.env';","            }","","            Y.each(params, function(v, k) {","                qs += k + '=' + encodeURIComponent(v) + '&';","            });","","            if (!opts) {","                opts = {};","            }","","            if (opts.secure) {","                url = 'https';","            }","","            opts.autopurge = true;","            opts.context = this;","            opts.onTimeout = function(o){","                this.fire('timeout', o);","                if (this._cb) {","                    this._cb(o);","                    this._cb = null;","                }","            };","","            url += BASE_URL + qs;","            Y.Get.script(url, opts);","            return this;","        }","    });","    /**","    * @event query","    * @description Fires when the Query returns.","    * @type {Event.Custom}","    */","","    /**","    * @event error","    * @description Fires when an error occurs.","    * @type {Event.Custom}","    */","","    /**","     * @event timeout","     * @description Fires when the request has timed-out.","     * @type {Event.Custom}","     */","","    Y.yql = yql;","","","","}, '@VERSION@', {\"requires\": [\"get\", \"event-custom\"], \"supersedes\": [], \"optional\": [], \"skinnable\": false});"];
_yuitest_coverage["build/gallery-yql/gallery-yql.js"].lines = {"1":0,"4":0,"5":0,"21":0,"23":0,"24":0,"27":0,"47":0,"48":0,"50":0,"51":0,"53":0,"54":0,"56":0,"69":0,"71":0,"73":0,"75":0,"77":0,"79":0,"80":0,"82":0,"83":0,"84":0,"85":0,"86":0,"89":0,"90":0,"93":0,"94":0,"97":0,"98":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"111":0,"112":0,"113":0,"134":0};
_yuitest_coverage["build/gallery-yql/gallery-yql.js"].functions = {"yql:22":0,"_receiver:46":0,"(anonymous 2):89":0,"onTimeout:103":0,"_query:68":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-yql/gallery-yql.js"].coveredLines = 43;
_yuitest_coverage["build/gallery-yql/gallery-yql.js"].coveredFunctions = 6;
_yuitest_coverline("build/gallery-yql/gallery-yql.js", 1);
YUI.add('gallery-yql', function (Y, NAME) {

    //Global storage for the callbacks
    _yuitest_coverfunc("build/gallery-yql/gallery-yql.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-yql/gallery-yql.js", 4);
if (!YUI.yql) {
        _yuitest_coverline("build/gallery-yql/gallery-yql.js", 5);
YUI.yql = {};
    }
    /**
     * This class adds a sugar class to allow access to YQL (http://developer.yahoo.com/yql/).
     * @module yql
     */
    /**
     * This class adds a sugar class to allow access to YQL (http://developer.yahoo.com/yql/).
     * @class yql
     * @extends Event.Target
     * @constructor
     * @param {String} sql The SQL statement to execute
     * @param {Function} callback The callback to execute after the query (optional).
     * @param {Object} params An object literal of extra parameters to pass along (optional).
     * @param {Object} opts An object literal of extra options to pass along to the Get Utility (optional).
     */
    _yuitest_coverline("build/gallery-yql/gallery-yql.js", 21);
var BASE_URL = ':/'+'/query.yahooapis.com/v1/public/yql?',
    yql = function (sql, callback, params, opts) {
        _yuitest_coverfunc("build/gallery-yql/gallery-yql.js", "yql", 22);
_yuitest_coverline("build/gallery-yql/gallery-yql.js", 23);
yql.superclass.constructor.apply(this);
        _yuitest_coverline("build/gallery-yql/gallery-yql.js", 24);
this._query(sql, callback, params, opts);
    };

    _yuitest_coverline("build/gallery-yql/gallery-yql.js", 27);
Y.extend(yql, Y.EventTarget, {
        /**
        * @private
        * @property _cb
        * @description The callback method
        */
        _cb: null,
        /**
        * @private
        * @property _stamp
        * @description The method name on the Global YUI object we use as the callback.
        */
        _stamp: null,
        /**
        * @private
        * @method _receiver
        * @description The global callback that get's called from Get.
        * @param {Object} q The JSON object from YQL.
        */
        _receiver: function(q) {
            _yuitest_coverfunc("build/gallery-yql/gallery-yql.js", "_receiver", 46);
_yuitest_coverline("build/gallery-yql/gallery-yql.js", 47);
if (q.query) {
                _yuitest_coverline("build/gallery-yql/gallery-yql.js", 48);
this.fire('query', q.query);
            }
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 50);
if (q.error) {
                _yuitest_coverline("build/gallery-yql/gallery-yql.js", 51);
this.fire('error', q.error);
            }
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 53);
if (this._cb) {
                _yuitest_coverline("build/gallery-yql/gallery-yql.js", 54);
this._cb(q);
            }
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 56);
delete YUI.yql[this._stamp];
        },
        /**
        * @private
        * @method _query
        * @description Builds the query and fire the Get call.
        * @param {String} sql The SQL statement to execute
        * @param {Function} callback The callback to execute after the query (optional).
        * @param {Object} params An object literal of extra parameters to pass along (optional).
        * @param {Object} opts An object literal of extra options to pass along to the Get Utility (optional).
        * @return Self
        */
        _query: function(sql, callback, params, opts) {
            _yuitest_coverfunc("build/gallery-yql/gallery-yql.js", "_query", 68);
_yuitest_coverline("build/gallery-yql/gallery-yql.js", 69);
var st = Y.stamp({}), qs = '', url = 'http';
            //Must replace the dashes with underscrores
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 71);
st = st.replace(/-/g, '_');

            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 73);
this._stamp = st;

            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 75);
this._cb = callback;

            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 77);
YUI.yql[st] = Y.bind(this._receiver, this);

            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 79);
if (!params) {
                _yuitest_coverline("build/gallery-yql/gallery-yql.js", 80);
params = {};
            }
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 82);
params.q = sql;
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 83);
params.format = 'json';
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 84);
params.callback = "YUI.yql." + st;
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 85);
if (!params.env) {
                _yuitest_coverline("build/gallery-yql/gallery-yql.js", 86);
params.env = 'http:/'+'/datatables.org/alltables.env';
            }

            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 89);
Y.each(params, function(v, k) {
                _yuitest_coverfunc("build/gallery-yql/gallery-yql.js", "(anonymous 2)", 89);
_yuitest_coverline("build/gallery-yql/gallery-yql.js", 90);
qs += k + '=' + encodeURIComponent(v) + '&';
            });

            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 93);
if (!opts) {
                _yuitest_coverline("build/gallery-yql/gallery-yql.js", 94);
opts = {};
            }

            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 97);
if (opts.secure) {
                _yuitest_coverline("build/gallery-yql/gallery-yql.js", 98);
url = 'https';
            }

            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 101);
opts.autopurge = true;
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 102);
opts.context = this;
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 103);
opts.onTimeout = function(o){
                _yuitest_coverfunc("build/gallery-yql/gallery-yql.js", "onTimeout", 103);
_yuitest_coverline("build/gallery-yql/gallery-yql.js", 104);
this.fire('timeout', o);
                _yuitest_coverline("build/gallery-yql/gallery-yql.js", 105);
if (this._cb) {
                    _yuitest_coverline("build/gallery-yql/gallery-yql.js", 106);
this._cb(o);
                    _yuitest_coverline("build/gallery-yql/gallery-yql.js", 107);
this._cb = null;
                }
            };

            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 111);
url += BASE_URL + qs;
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 112);
Y.Get.script(url, opts);
            _yuitest_coverline("build/gallery-yql/gallery-yql.js", 113);
return this;
        }
    });
    /**
    * @event query
    * @description Fires when the Query returns.
    * @type {Event.Custom}
    */

    /**
    * @event error
    * @description Fires when an error occurs.
    * @type {Event.Custom}
    */

    /**
     * @event timeout
     * @description Fires when the request has timed-out.
     * @type {Event.Custom}
     */

    _yuitest_coverline("build/gallery-yql/gallery-yql.js", 134);
Y.yql = yql;



}, '@VERSION@', {"requires": ["get", "event-custom"], "supersedes": [], "optional": [], "skinnable": false});
