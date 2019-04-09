// http://2ality.com/2012/01/object-plus-object.html
// https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839
// https://hackernoon.com/understanding-js-coercion-ff5684475bfc

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coercion',
  templateUrl: './coercion.component.html',
  styleUrls: ['./coercion.component.css']
})
export class CoercionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.convertValues();
    this.voidOpearator();
    this.changeCoercionLogic();
  }

  convertValues() {
    // The primitive values are: undefined, null, booleans, numbers, and strings. 
    // The plus operator performs three kinds of conversion: It converts values to primitives, numbers and strings.
    let object: any = {
      aNumber: 0,
      [Symbol.toPrimitive]() {
        return this.aNumber;
      }
    };

    object.aNumber = 5;
    console.log('object:  ', object) // {aNumber: 5, Symbol(Symbol.toPrimitive): ƒ}
    console.log('+ object:  ', + object) // 5
    console.log('Number(object):  ', Number(object)) // 5
    console.log('parseInt(object):  ', parseInt(object)) // 5
    console.log('object + 2:  ', object + 2) // 7
  }

  voidOpearator() {
    // The void operator evaluates an expression without taking in consideration its return value, insdead, the void operator will return undefined.
    // One can use parentheses on the expression as it's good for style. Note that 'void' is an operator, not a function, so the () aren't mandatory.
    console.log('void operator ----------------------------------');

    function returnsUndefined() { return void 0 } 
    console.log(returnsUndefined());
  }

  changeCoercionLogic() {
    console.log('changing coerion logic ----------------------------------');

    class Disk {
      capacity: any;
      constructor(capacity){
        this.capacity = capacity;
      }
    
      [Symbol.toPrimitive](hint){
        console.log('hint: ', hint)
        switch (hint) {
          case 'string':
            return 'Capacity: ' + this.capacity + ' bytes';
    
          case 'number':
            // convert to KiB
            return this.capacity / 1024;
    
          default:
            // assume numeric conversion as a default
            return this.capacity
        }
      }
    }
    let disk = new Disk(1024 * 1024);

    console.log(disk)
    console.log(String(disk))  // Capacity: 1048576 bytes
    console.log(disk + ' b')     // '1048576'
    console.log('+disk: ', +disk);        // 1024
    console.log(disk > 1000);  // true
  }

}
