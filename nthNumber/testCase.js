for (let i=0; i<=200; i+=1){
    let n = Math.ceil(Math.random()*9876543210) + 9876543210;
    
    let usoln = nthEven(n),
        soln = (n-1)*2;
    
    Test.assertEquals(usoln, soln, "Wrong value!");
  }