const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(name){
    return (name());
 }


    function returnsANamedFunction(){
          return function person(){
              return 'hello world';
          }
    };

    function returnsAnAnonymousFunction(){
        return function(){
            return 'hi';
        }
    };






