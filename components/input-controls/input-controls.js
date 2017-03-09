import { Component } from '@angular/core';
var InputControls = (function () {
    function InputControls() {
        this.javascript = false;
        this.angular = false;
        this.csharp = false;
        this.name = 'Two way bound';
    }
    return InputControls;
}());
export { InputControls };
InputControls.decorators = [
    { type: Component, args: [{
                selector: 'input-controls',
                template: "\n            <h1>Input Controls</h1>\n            <div class=\"input-controls\">\n                <h4>\"Two way bindings\"</h4>\n\n                <input id=\"name\" [(ngModel)]=\"name\" />\n\n                <div>Current Value: {{name}}</div>\n            </div>\n\n            <div class=\"input-controls\">\n                <h4>Select a gender</h4>\n                <div>\n                    <label>\n                        <input #male name=\"gender\" type=\"radio\" value=\"Male\" (click)=\"gender = male.value\" />\n                        Male\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input #female name=\"gender\" type=\"radio\"  value=\"Female\" (click)=\"gender = female.value\" />\n                        Female\n                    </label>\n                </div>\n                <div>\n                    Selected gender is <strong>{{gender}}</strong>\n                </div>\n            </div>\n\n            <div class=\"input-controls\">\n                <h4>Select your programming skills</h4>\n                <div>\n                    <label>\n                        <input #angularcb type=\"checkbox\" (change)=\"angular = angularcb.checked\" />\n                        Angular\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input #javascriptcb type=\"checkbox\" (change)=\"javascript = javascriptcb.checked\" />\n                        JavaScript\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input #csharpcb type=\"checkbox\" (change)=\"csharp = csharpcb.checked\" />\n                        C#\n                    </label>\n                </div>\n            </div>\n\n            <div>\n                Selected Skills:\n                <ul>\n                    <li *ngIf=\"angular\">Angular</li>\n                    <li *ngIf=\"javascript\">JavaScript</li>\n                    <li *ngIf=\"csharp\">C#</li>\n                </ul>\n            </div>\n\n            <h4><a href=\"http://www.syntaxsuccess.com/viewarticle/input-controls-in-angular-2.0\">Read more here</a></h4>"
            },] },
];
InputControls.ctorParameters = function () { return []; };
