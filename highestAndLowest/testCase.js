Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
Test.assertEquals(highAndLow("10 2 -2 -10"), "10 -10");
Test.assertEquals(highAndLow("1 -1"), "1 -1");
Test.assertEquals(highAndLow("1 1"), "1 1");
Test.assertEquals(highAndLow("-1 -1"), "-1 -1");
Test.assertEquals(highAndLow("1 -1 0"), "1 -1");
Test.assertEquals(highAndLow("1 1 0"), "1 0");
Test.assertEquals(highAndLow("-1 -1 0"), "0 -1");
Test.assertEquals(highAndLow("42"), "42 42");


describe("Random tests", function(){
  var t = 10, rnd = Math.random;
  while(t--){
    var min = ~~(rnd()*1e4)-5e3, 
        max = min+3e3+~~(rnd()*100), 
        rr = [], exp = max+" "+min;
    for( var i=1; i< 20; i++ ) rr.push(min+~~(rnd()*3e3));
    
    rr = rr.slice(10).concat([min,max]).concat(rr.slice(0,10));
    rr = rr.sort(function(){return rnd()<.5 ? 1:-1 }).join(" ");

    Test.assertEquals(highAndLow(rr),exp)
  }
});