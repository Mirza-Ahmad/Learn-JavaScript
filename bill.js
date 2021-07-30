let call=160;
 let bill;
 /* Minimum bill is 200 Rs for 100 calls suppose 
      increment 0.60 for next per 50 calls
        increment 0.50 for next per 50 calls 
           increment 0.40 if any call greater than 200*/
        
  if(call<100)
   {
     bill=200;
     }
     else if(call>100 && call<=150)
     {
          call=call-100;   
          bill=200+ (0.60 * call);
      }
       else if(call>150 && call<=200)
       {
           call=call-150;
           bill=200 + (0.60 * 50) + (0.50 * call);
       }
       else
       {
           call=call-200;
           bill=200+(0.60 * 50) +(0.50 * 50) + (0.40 * call);
       }
       console.log("Your telephone total bill is = " + bill);