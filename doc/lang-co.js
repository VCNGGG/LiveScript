(function(){var a,b,c,d,e;a=function(a,b,c){var d,e,f;for(e=0,f=b.length;e<f;++e)d=b[e],d.length<4&&d.splice(2,0,0);return PR.registerLangHandler(PR.createSimpleLexer(b,c),[a])},b="(?:[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*)",c="(?![$\\w\\x7f-\\uffff])",a("co",[["str",/^'(?:''[\S\s]*?''|[^\\']*(?:\\[\S\s][^\\']*)*)'/,"'"],["lang-co-qq",/(^"(?:""[\S\s]*?""|[^\\"]*(?:\\[\S\s][^\\"]*)*)")/,'"'],["lang-co-qr",/(^\/\/[\S\s]*?\/\/[gimy$?]{0,4})/,"/"],["lang-co-at",RegExp("(^@@?"+b+"?)"),"@"],["com",/^#.*/,"#"],["typ",/^(?:0x[\da-f][\da-f_]*|(?:[2-9]|[12]\d|3[0-6])r[\da-z][\da-z_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:e[+-]?\d[\d_]*)?[a-z_]*)/i,"0123456789"],["lang-js",/^`([^\\`]*(?:\\[\S\s][^\\`]*)*)`/,"`"]],[["str",/^\\\S[^\s,;)}\]]*/],["com",/^\/\*[\S\s]*\*\//],["pln",RegExp("^(?:\\.{3}|(?:\\.\\s*(?:(?:[-+*/%&|^:]|>>>?|<<)?=|[~!@])?\\s*|[)}\\]?]|::)(?:"+b+"[?~!@]?)+|"+b+"[^\\n\\S]*:(?![:=]))")],["kwd",RegExp("^(?:t(?:ry|h(?:row|en)|ypeof!?)|f(?:or(?:[^\\n\\S]+(?:own|ever))?|inally|unction)|n(?:ew|ot)|c(?:ontinue|a(?:se|tch)|lass)|i(?:[fs]|n(?:stanceof)?|mport(?:[^\\n\\S]+all)?)|e(?:lse|xtends)|d(?:e(?:fault|lete|bugger)|o)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|switch|and|let)"+c)],["typ",RegExp("^(?:true|false|null|void)"+c)],["ctx",RegExp("^(?:t(?:h(?:is|at)|o|il)|f(?:rom|allthrough)|it|arguments|eval|by|super|prototype)"+c)],["glb",RegExp("^(?:Array|Boolean|Date|Error|Function|JSON|Math|Number|Object|RegExp|S(?:tring|yntaxError)|TypeError|is(?:NaN|Finite)|parse(?:Int|Float)|(?:en|de)codeURI(?:Component)?)"+c)],["var",RegExp("^"+b)],["str",/^<\[[\S\s]*?]>/],["lang-co-r",/^[^\/](\/(?![\s\/])[^[\/\n\\]*(?:(?:\\.|\[[^\]\n\\]*(?:\\.[^\]\n\\]*)*\])[^[\/\n\\]*)*\/[gimy$]{0,4})(?!\d)/]]),d=["lang-co",RegExp("^#({[\\S\\s]*?}|"+b+")"),"#"],e=["lit",/^[\S\s]+?/],a("co-qq",[d],[["str",/^[\S\s]+?/]]),a("co-qr",[d],[["com",/^\s#(?!{).*/],e]),a("co-r",[],[e]),a("co-at",[["ctx",/^@+/,"@"]],[])}).call(this)