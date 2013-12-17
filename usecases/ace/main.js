/// <reference path="ace.1.d.ts" />
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

// ------------ ERROR MESSAGE in ace.d.ts
// AceAjax: expected module:AceAjax but found nothing
// ------------ TEST CODE
// var undo = new AceAjax.UndoManager(); // No static type error, but runtime error: "Uncaught ReferenceError: AceAjax is not defined"
// var undo = new ace.UndoManager(); // Static type error, but no runtime error
// ------------ FIXED in ace.1.d.ts (renamed module to "ace", inlined "Ace" interface in module body)
// ------------ ERROR MESSAGE in ace.1.d.ts
// ace.KeyBinding: expected {new(editor:ace.Editor) => ace.KeyBinding} but found nothing
// ace.Anchor: expected {new(doc:ace.Document, row:number, column:number) => ace.Anchor} but found nothing
// ace.BackgroundTokenizer: expected {new(tokenizer:ace.Tokenizer, editor:ace.Editor) => ace.BackgroundTokenizer} but found nothing
// ace.Document: expected {new(text?:string) => ace.Document, new(text?:Array<string>) => ace.Document} but found nothing
// ace.Editor: expected {new(renderer:ace.VirtualRenderer, session?:ace.IEditSession) => ace.Editor} but found nothing
// ace.PlaceHolder: expected {new(session:ace.Document, length:number, pos:number, others:string, mainClass:string, othersClass:string) => ace.PlaceHolder, new(session:ace.IEditSession, length:number, pos:ace.Position, positions:Array<ace.Position>) => ace.PlaceHolder} but found nothing
// ace.RangeList: expected {new() => ace.IRangeList} but found nothing
// ace.Range: expected {fromPoints: {(pos1:ace.Position, pos2:ace.Position) => ace.Range}, new(startRow:number, startColumn:number, endRow:number, endColumn:number) => ace.Range} but found nothing
// ace.RenderLoop: expected {new() => ace.RenderLoop} but found nothing
// ace.ScrollBar: expected {new(parent:HTMLElement) => ace.ScrollBar} but found nothing
// ace.Search: expected {new() => ace.Search} but found nothing
// ace.Selection: expected {new(session:ace.IEditSession) => ace.Selection} but found nothing
// ace.Split: expected {new() => ace.Split} but found nothing
// ace.TokenIterator: expected {new(session:ace.IEditSession, initialRow:number, initialColumn:number) => ace.TokenIterator} but found nothing
// ace.Tokenizer: expected {new(rules:any, flag:string) => ace.Tokenizer} but found nothing
// ace.VirtualRenderer: expected {new(container:HTMLElement, theme?:string) => ace.VirtualRenderer} but found nothing
// ------------ TEST CODE
document.addEventListener("DOMContentLoaded", function () {
    var rl = new ace.Range(1, 1, 2, 2);
});
