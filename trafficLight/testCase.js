describe("Random tests", function(){
    let colors = ["green", "yellow", "red"],
        color, expected;
    for (let i = 0; i < 10; i++) {
      color = colors[Math.floor(Math.random() * 3)];
      expected = {"green": "yellow", "yellow": "red", "red": "green"}[color]
      it("Testing: '" + color + "', expecting: '" + expected + "'", function() {
        Test.assertEquals(updateLight(color), expected);
      });  
    }
  });
  