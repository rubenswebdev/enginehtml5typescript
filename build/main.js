System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Main;
    return {
        setters:[],
        execute: function() {
            Main = (function () {
                function Main() {
                    this.canvas = document.getElementById('canvas');
                    this.context = this.canvas.getContext('2d');
                    console.log("main started");
                }
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main.js.map