describe("Basic tests", function(){
    it("Testing for dad's age: 36 and son's age: 7", function(){
      Test.assertEquals(twiceAsOld(36,7) , 22);
    });  
    it("Testing for dad's age: 55 and son's age: 30", function(){
      Test.assertEquals(twiceAsOld(55,30) , 5);
    });
    it("Testing for dad's age: 42 and son's age: 21", function(){
      Test.assertEquals(twiceAsOld(42,21) , 0);
    });
    it("Testing for dad's age: 22 and son's age: 1", function(){
      Test.assertEquals(twiceAsOld(22,1) , 20);
    });
    it("Testing for dad's age: 29 and son's age: 0", function(){
      Test.assertEquals(twiceAsOld(29,0) , 29);
    });
  });
  
  describe("Random tests", function(){
    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function twiceAsOldSolution(dadYearsOld, sonYearsOld) {
      return Math.abs(dadYearsOld - 2 * sonYearsOld);
    }  
    let dad, son;
    for (let i = 0;  i < 50; i++) {
      dad = randInt(18, 100);
      son = Math.max(0, dad - randInt(18, 40));
      it("Testing for dad's age: " + dad + " and son's age: " + son, function(){
        Test.assertEquals(twiceAsOld(dad, son), twiceAsOldSolution(dad, son), "It should work for random inputs too");
      });  
    }
  });