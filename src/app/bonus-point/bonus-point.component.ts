import { Component, OnInit } from '@angular/core';
import { BsJs1Service } from './bs-js1.service';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-bonus-point',
  templateUrl: './bonus-point.component.html',
  styleUrls: ['./bonus-point.component.css']
})
export class BonusPointComponent implements OnInit {

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
    //ToDo..
  }

  answerRxjs1() {
    const first$ = of('first' ,  2000).pipe(tap(() => console.log('first')));
    const second$ = of('second', 1500).pipe(tap(() => console.log('second')));;
    const third$ = of('thrid', 800).pipe(tap(() => console.log('thrid')));;

    // 考題限制 : 執行順序需為 : first$ => second$ => third$
    // 預期的Console結果 :
    //  first
    //  second
    //  third

    // ToDo...
  }


  answerJs1() {
    let result: string;
    this.bsJs1Service.getSample()
      .forEachChilds((child) => {
        // ToDo : 實作你的解決方案...
        result = 'ToDo...';
      });

    // 預期alert的結果 => js 1 answer : 1,2,3,4,5,6,7,8
    alert(`js 1 answer : ${result}`)
  }

}
