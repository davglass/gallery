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
_yuitest_coverage["build/gallery-node-reset/gallery-node-reset.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-node-reset/gallery-node-reset.js",
    code: []
};
_yuitest_coverage["build/gallery-node-reset/gallery-node-reset.js"].code=["YUI.add('gallery-node-reset', function (Y, NAME) {","","","        var NR = function(config) {","            config.node = (","                (Y.Widget && config.host instanceof Y.Widget) ? config.host.get('boundingBox') : ","                    ((config.host) ? config.host : config.node)","            );","","            NR.superclass.constructor.call(this, config);","        },","        resetCSS = 'ID div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td { margin: 0; padding: 0; }';","        resetCSS += 'ID table { border-collapse: collapse; border-spacing: 0; }';","        resetCSS += 'ID fieldset, img { border: 0; }';","        resetCSS += 'ID address, caption, cite, code, dfn, em, strong, th, var, optgroup { font-style: inherit; font-weight: inherit; }';","        resetCSS += 'ID del, ins { text-decoration: none; }';","        resetCSS += 'ID li { list-style: none; }';","        resetCSS += 'ID caption, th { text-align: left; }';","        resetCSS += 'ID h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal; }';","        resetCSS += 'ID abbr, acronym { border: 0; font-variant: normal; }';","        resetCSS += 'ID sup { vertical-align: baseline; }';","        resetCSS += 'ID sub { vertical-align: baseline; }';","        ","        NR.NAME = \"gallery-node-reset\";","","        NR.NS = \"reset\";","","        NR.ATTRS = {","            node: {","                setter: function(n) {","                    return Y.one(n);","                }","            },","            sheet: {","                value: null","            }","        };","","        Y.extend(NR, Y.Base, {","            initializer: function() {","                var id = this.get('node').get('id'), sheet;","","                resetCSS = resetCSS.replace(/, /g, ', #' + id + ' ');","                resetCSS = resetCSS.replace(/ID/g, '#' + id);","","                sheet = Y.StyleSheet(resetCSS, 'node-reset-' + id);","                sheet.enable();","","                this.set('sheet', sheet);","            },","            destructor: function() {","                this.get('sheet').disable();","            }","        });","        Y.namespace('Plugin');","        Y.Plugin.NodeReset = NR;","","    ","","","}, '@VERSION@');"];
_yuitest_coverage["build/gallery-node-reset/gallery-node-reset.js"].lines = {"1":0,"4":0,"5":0,"10":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"24":0,"26":0,"28":0,"31":0,"39":0,"41":0,"43":0,"44":0,"46":0,"47":0,"49":0,"52":0,"55":0,"56":0};
_yuitest_coverage["build/gallery-node-reset/gallery-node-reset.js"].functions = {"NR:4":0,"setter:30":0,"initializer:40":0,"destructor:51":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-node-reset/gallery-node-reset.js"].coveredLines = 28;
_yuitest_coverage["build/gallery-node-reset/gallery-node-reset.js"].coveredFunctions = 5;
_yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 1);
YUI.add('gallery-node-reset', function (Y, NAME) {


        _yuitest_coverfunc("build/gallery-node-reset/gallery-node-reset.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 4);
var NR = function(config) {
            _yuitest_coverfunc("build/gallery-node-reset/gallery-node-reset.js", "NR", 4);
_yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 5);
config.node = (
                (Y.Widget && config.host instanceof Y.Widget) ? config.host.get('boundingBox') : 
                    ((config.host) ? config.host : config.node)
            );

            _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 10);
NR.superclass.constructor.call(this, config);
        },
        resetCSS = 'ID div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td { margin: 0; padding: 0; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 13);
resetCSS += 'ID table { border-collapse: collapse; border-spacing: 0; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 14);
resetCSS += 'ID fieldset, img { border: 0; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 15);
resetCSS += 'ID address, caption, cite, code, dfn, em, strong, th, var, optgroup { font-style: inherit; font-weight: inherit; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 16);
resetCSS += 'ID del, ins { text-decoration: none; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 17);
resetCSS += 'ID li { list-style: none; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 18);
resetCSS += 'ID caption, th { text-align: left; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 19);
resetCSS += 'ID h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 20);
resetCSS += 'ID abbr, acronym { border: 0; font-variant: normal; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 21);
resetCSS += 'ID sup { vertical-align: baseline; }';
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 22);
resetCSS += 'ID sub { vertical-align: baseline; }';
        
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 24);
NR.NAME = "gallery-node-reset";

        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 26);
NR.NS = "reset";

        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 28);
NR.ATTRS = {
            node: {
                setter: function(n) {
                    _yuitest_coverfunc("build/gallery-node-reset/gallery-node-reset.js", "setter", 30);
_yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 31);
return Y.one(n);
                }
            },
            sheet: {
                value: null
            }
        };

        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 39);
Y.extend(NR, Y.Base, {
            initializer: function() {
                _yuitest_coverfunc("build/gallery-node-reset/gallery-node-reset.js", "initializer", 40);
_yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 41);
var id = this.get('node').get('id'), sheet;

                _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 43);
resetCSS = resetCSS.replace(/, /g, ', #' + id + ' ');
                _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 44);
resetCSS = resetCSS.replace(/ID/g, '#' + id);

                _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 46);
sheet = Y.StyleSheet(resetCSS, 'node-reset-' + id);
                _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 47);
sheet.enable();

                _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 49);
this.set('sheet', sheet);
            },
            destructor: function() {
                _yuitest_coverfunc("build/gallery-node-reset/gallery-node-reset.js", "destructor", 51);
_yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 52);
this.get('sheet').disable();
            }
        });
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 55);
Y.namespace('Plugin');
        _yuitest_coverline("build/gallery-node-reset/gallery-node-reset.js", 56);
Y.Plugin.NodeReset = NR;

    


}, '@VERSION@');
