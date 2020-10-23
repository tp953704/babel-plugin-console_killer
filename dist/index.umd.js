(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.E$ = factory());
}(this, (function () { 'use strict';

  function index ({ types: t }) {  
    const env = process.env.NODE_ENV;
    const delComment = (fileNode)=>{
      if (t.isFile(fileNode)) {
        fileNode.comments.forEach((item)=>{
          item.start=0;
          item.end=0;
        });
      }
    };
    const delConsole = (IdentifierPath)=>{
      if(t.isIdentifier(IdentifierPath.node, { name: "console" })){
        const p= IdentifierPath.find((IdentifierPath) => IdentifierPath.isExpressionStatement());
        p.remove();
      }
    };
    return {
      visitor: {
        Class(path, state){
          const fileNode = path.parentPath.parent;
          delComment(fileNode);
        },
        Identifier(path, state) {
          delConsole(path);
        },
      }
    };
  }

  return index;

})));
