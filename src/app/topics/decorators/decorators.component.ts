// https://www.sitepoint.com/javascript-decorators-what-they-are/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ng init');
    this.trainDecoratorsOne();
    this.trainDecoratorsTwo();
    this.trainDecoratorsThree();
  }

  trainDecoratorsOne() {
    const messagePrint = (target) => {
      Object.defineProperty(target.prototype, 'server', {value: () => 'Node is running'})
    }

    @messagePrint
    class Message {
      name;
      constructor(name) {
        this.name = name;
      }
    }
    const newMesage: any = new Message('sth');
    console.log('newMesage', newMesage);
    console.log('newMesage.server', newMesage.server());
  }

  trainDecoratorsTwo() {
    console.log('init trainDecoratorsTwo');

//     function log(name, k) {
//      console.log('name', name)
//      console.log('k', k)
//       return function decorator3(t, n, descriptor) {
//         console.log('t', t)
//         console.log('n', n)
//         console.log('descriptor', descriptor)
//         const original = descriptor.value;
//         console.log('descriptor.value', descriptor.value)
//         if (typeof original === 'function') {
//           descriptor.value = function(...args) {
//             console.log(`Arguments for ${name}: ${args}`);
//             try {
//               const result = original.apply(this, args);
//               console.log(`Result from ${name}: ${result}`);
//               return result;
//             } catch (e) {
//               console.log(`Error from ${name}: ${e}`);
//               throw e;
//             }
//           }
//         }
//         return descriptor;
//       };
//     }
    function log(target, name, descriptor) {
      console.log('target', target)
      console.log('name', name)
      console.log('descriptor', descriptor)
      const original = descriptor.value;
      if (typeof original === 'function') {
        console.log('descriptor.value', descriptor.value)
        descriptor.value = (...args) => {
          console.log(`Arguments: ${args}`);
          try {
            const result = original.apply(this, args);
            console.log(`Result: ${result}`);
            return result;
          } catch (e) {
            console.log(`Error: ${e}`);
            throw e;
          }
        }
      }
      return descriptor;
    }

    class Example {
      @log
      sum(a, b) {
        return a + b;
      }
    }

    const newExample = new Example();
    newExample.sum(1, 2);
  }

  trainDecoratorsThree() {

    const check = (target, name, descriptor) => {
      console.log('check')
      console.log('t', target)
      console.log('n', name)
      console.log('descriptor', descriptor)
    }

    class SomeClass {


      @check
      add(a, b) {
        console.log('adding')
        return a + b;
      }
    }

    const someClass = new SomeClass();
    someClass.add(1, 2);
  }

}
