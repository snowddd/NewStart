import { Injectable } from '@angular/core';

@Injectable()
export class BsJs1Service {

  constructor() { }
  private extend(arg: {
    arraySource: {
      value: number;
    }[],
    index: number,
    fn: (_source: {
      parent?: {
        value: number;
      },
      child?: {
        value: number;
      }[],
      value: number;
    }) => void
  }) {
    arg.fn(arg.arraySource[arg.index]);

    return arg.arraySource;
  }

  getSample() {
    const arraySource = Array.from(Array(9), (_, index) => { return { value: index + 1 } });

    this.extend({
      arraySource,
      index: 0,
      fn: (_source) => {
        _source.parent = arraySource[2];
      }
    });
    this.extend({
      arraySource,
      index: 1,
      fn: (_source) => {
        _source.parent = arraySource[2];
      }
    });
    this.extend({
      arraySource,
      index: 2,
      fn: (_source) => {
        _source.child = [
          arraySource[0],
          arraySource[1],
        ]
      }
    });
    this.extend({
      arraySource,
      index: 3,
      fn: (_source) => {
        _source.parent = arraySource[4];
      }
    });
    this.extend({
      arraySource,
      index: 4,
      fn: (_source) => {
        _source.child = [
          arraySource[3]
        ];
      }
    });
    this.extend({
      arraySource,
      index: 5,
      fn: (_source) => {
        _source.parent = arraySource[8];
      }
    });
    this.extend({
      arraySource,
      index: 6,
      fn: (_source) => {
        _source.parent = arraySource[8];
      }
    });
    this.extend({
      arraySource,
      index: 7,
      fn: (_source) => {
        _source.parent = arraySource[8];
      }
    });
    this.extend({
      arraySource,
      index: 8,
      fn: (_source) => {
        _source.child = [
          arraySource[5],
          arraySource[6],
          arraySource[7]
        ]
      }
    });

    const source = [
      arraySource[0],
      arraySource[1],
      arraySource[3],
      arraySource[5],
      arraySource[6],
      arraySource[7],
    ];
    const sample = {
      forEachChilds: (fn: (item: {
        value: number;
        parent?: {
          value: number;
        };
      }) => void) => {
        source.forEach((item) => {
          fn(item);
        });
      },
      source
    };

    return sample;
  }
}
