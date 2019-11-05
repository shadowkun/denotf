//// [tests/cases/compiler/declarationEmitPathMappingMonorepo.ts] ////

//// [index.d.ts]
declare module "@ts-bug/a" {
    export type AText = {
      value: string;
    };
    export function a(text: string): AText;
  }
  
//// [index.ts]
import { a } from "@ts-bug/a";

export function b(text: string) {
  return a(text);
}

//// [index.js]
"use strict";
exports.__esModule = true;
var a_1 = require("@ts-bug/a");
function b(text) {
    return a_1.a(text);
}
exports.b = b;


//// [index.d.ts]
/// <reference types="@ts-bug/a" />
export declare function b(text: string): import("@ts-bug/a").AText;