"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
console.log("-------------main");
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
console.log(`months: ${months.length}`);
let monthOrder = 0;
const monthOrder$ = () => {
    const x = ++monthOrder;
    return (0, rxjs_1.of)(x);
};
const showMonthLog$ = (mo, m) => {
    return (0, rxjs_1.of)(console.log(`${mo}.${m}`));
};
months.forEach((m) => {
    monthOrder$()
        .pipe((0, rxjs_1.take)(1), (0, rxjs_1.delay)(100), (0, rxjs_1.switchMap)((x) => showMonthLog$(x, m).pipe((0, rxjs_1.delay)(1000))))
        .subscribe();
});
console.log("-------------end2");
