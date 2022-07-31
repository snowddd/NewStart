import { Component, OnInit } from '@angular/core';
import { BsJs1Service } from './bs-js1.service';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap, switchMap, tap, skip } from 'rxjs/operators';

@Component({
  selector: 'app-bonus-point',
  templateUrl: './bonus-point.component.html',
  styleUrls: ['./bonus-point.component.css']
})
export class BonusPointComponent implements OnInit {

  q1Data = ['F1', 'F2', 'F3', 'F4', '', 'F6', 'F7', 'F8', 'F9']

  constructor(
    private bsJs1Service: BsJs1Service,
  ) { }




  ngOnInit() {

  }

  redirectToKeiPage() {
    location.href = `${location.protocol}//kei.careline.localhost:${location.port}/bonusPoint`
  }

  redirectToAnnPage() {
    location.href = `${location.protocol}//ann.careline.localhost:${location.port}/bonusPoint`
  }

  answerCookie1() {
    document.cookie = "Key=ck1; path=/";
    //ToDo..
  }

  answerRxjs1() {
    const first$ = of('first', 2000).pipe(tap(() => console.log('first')));
    const second$ = of('second', 1500).pipe(tap(() => console.log('second')));;
    const third$ = of('thrid', 800).pipe(tap(() => console.log('thrid')));;

    let temp = console.log;
    from([first$, second$, third$])
      .pipe(
        concatMap((ob) =>
          ob.pipe(switchMap((v) => {
            if (!!Number(v)) {
              console.log = temp;
              return of(v);
            } else {
              console.log = () => {};
              return of();
            }
          }))
        )
      ).subscribe();


    // 考題限制 : 執行順序需為 : first$ => second$ => third$
    // 預期的Console結果 :
    //  first
    //  second
    //  third

    // ToDo...
  }


  answerJs1() {
    let result: string;
    let newResult = [];
    this.bsJs1Service.getSample()
      .forEachChilds((child) => {
        // ToDo : 實作你的解決方案...
        if (newResult.find((r) => r === child.parent.value)) {
          newResult.pop();
        }
        newResult.push(child.value);
        newResult.push(child.parent.value);
      });
    alert(newResult.join(' ,'));

    // 預期alert的結果 => js 1 answer : child_1_1 , child_1_2 , parent_1 , child_2_1 ,  parent_2 ,child_3_1 , child_3_2 , child_3_3 , parent_3
    // alert(`js 1 answer : ${result}`)
  }

}
