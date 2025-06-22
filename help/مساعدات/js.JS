//1
var light = "green"

 if (light == "green") {
    console.log("Drive")
  } else if (light == "orange") {
    console.log("Get ready")
  } else if (light == "red") {
    console.log("Dont' drive")
  } else {
    console.log("The light is not green, orange, or red");
  }
  //2
  for (var i = 1; i <= 2; i++) {

    for (var j = 1; j <= 5; j++) {

      console.log(" WEEK " + i + " DAY " + j )
    }
   }

   //3
   function addTwoNums(a,b) {
    var c = a + b ;
    console.log(c);
   }
   addTwoNums(2,2);
   addTwoNums(4,4);

   //4
   var train1 = [ "wheat", "barley", "potato", "salt", "rocks"]

   console.log(train1[3])

   //5 
   var assistantManager = {
    movement : 3,
    socialskills : 30,
    streetsmarts : 30,
    health : 40, 
   }

   //6 
   var Name = " hello ";
   var user = " lisa ";

   console.log(Name + user); 

   console.log(Name.concat(user));

   //7
   var shoes = 100;
   var statetax = 1.2;

   function totalprice (shoes,tax){
    return shoes * tax;
   }
   var topay = totalprice (shoes,statetax);

   console.log(topay);

  
   //8 

   var purchase1 = {
    shoes: 100,
    statetax: 1.2,
    totalprice: function(){
      var calcu = purchase1.shoes * purchase1.statetax;
       console.log(purchase1);
    }
   }
 
   //9
