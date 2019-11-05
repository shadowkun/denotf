//// [callWithSpread3.ts]
declare function takeTwo(a: string, b: string): void;
declare const t2: [string, string];
declare const t3: [string, string, string];

takeTwo('a', ...t2); // error on ...t2
takeTwo('a', 'b', 'c', ...t2); // error on 'c' and ...t2
takeTwo('a', 'b', ...t2, 'c'); // error on ...t2 and 'c'
takeTwo('a', 'b', 'c', ...t2, 'd'); // error on 'c', ...t2 and 'd'
takeTwo(...t2, 'a'); // error on 'a'
takeTwo(...t3); // error on ...t3

//// [callWithSpread3.js]
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
takeTwo.apply(void 0, __spreadArrays(['a'], t2)); // error on ...t2
takeTwo.apply(void 0, __spreadArrays(['a', 'b', 'c'], t2)); // error on 'c' and ...t2
takeTwo.apply(void 0, __spreadArrays(['a', 'b'], t2, ['c'])); // error on ...t2 and 'c'
takeTwo.apply(void 0, __spreadArrays(['a', 'b', 'c'], t2, ['d'])); // error on 'c', ...t2 and 'd'
takeTwo.apply(void 0, __spreadArrays(t2, ['a'])); // error on 'a'
takeTwo.apply(void 0, t3); // error on ...t3
