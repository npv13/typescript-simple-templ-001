import { delay, of, switchMap, take } from "rxjs";

console.log("-------------main");

const months: string[] = [
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
  return of(x);
};

const showMonthLog$ = (mo: number, m: string) => {
  return of(console.log(`${mo}.${m}`));
};

months.forEach((m) => {
  monthOrder$()
    .pipe(
      take(1),
      delay(100),
      switchMap((x) => showMonthLog$(x, m).pipe(delay(1000)))
    )
    .subscribe();
});

console.log("-------------end2");
