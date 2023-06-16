const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(callback){
    return (callback());
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






