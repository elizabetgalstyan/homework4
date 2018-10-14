//Exercise 2 
const triangleStars = function(height) {
    const sky = function(star, num) {
          let stars = '';
          while(num>0) {
            stars = stars + star;
            num=num-1;
          }
          return stars;
        }
      let a = height;
      while (a > 0) { 
        const row = a * 2 - 1;
        const starA = sky('*', row);
        const space= sky(' ', height - a);

          console.log(space+ starA);
        a =  a - 1;
    
      };
      
    };
 triangleStars(4);

//Exetrcise 3
const array = function (a1,a2) {
    let multiToSingle = a1;
    let c = 0;
    while (c < a2.length) {
      multiToSingle[multiToSingle.length] = a2[c];
      c = c + 1;
    }
    return multiToSingle;

  
  };
  
  const array1 = [1,2,3,4];
  const array2 = [5,6,7,8];
  
  console.log(array(array1,array2));


//Exercise 4  

const findMinMax = function (array1,number) {
  let a = 1;
  if (number) {
    
    let maximum = array1[0];
    while (a < array1.length) {
      if (maximum < array1[a]) {
        maximum = array1[a];
        
      }
      a = a + 1;
    }  
    console.log(maximum);

  }
  else { 
    
   let  minimum =  array1[0];
   while ( a < array1.length) {
     if(minimum > array1[a]) {
       minimum = array1[a];
     }
     a = a + 1
   }
   console.log(minimum);
    }
};
findMinMax ([25,40,8,60],false);

//Exersice 5
const forEach = function (ar1,val) {

    let b = 0 ;
  while (b<ar1.length) {
      val(ar1[b]);
      b = b + 1;
  
    };
  };
  const ar2 = [1,2,3,4];
  const val1 = function (c) {
    console.log(c);
    };
  forEach(ar2, val1);

//Exercise 6
const funkSum = function (array1){
  let a = 0;
  let total = 0;
  while(a<array1.length) {
    total= array1[a] + total;
    a = a +
  } 
  return total;
};


console.log(funkSum([8,3,24]));

//Exercise 7
const reverse= function (string) {
  let a = string.length-1;
  let stringFun = "";
  while (a >= 0) {
    stringFun = stringFun + string[a];
    a = a - 1;
  }
  return stringFun;
};
console.log(reverse("Elizabet"));

//Exercise 8
const checkerboard = function (n) {
  let k = 0;
  while(k < n)  {
    if (k%2===1) {
      let b = " ";
      let c = n 
      while (c > 0) {
        b =b + "*";
        c = c - 1;
      }
      k = k + 1;
      console.log(b);      
    } 
    else {
     let b = "";
    let c = n 
    while (c > 0) {
      b = b + "*";
      c = c - 1;
    }
      k = k + 1;
      console.log(b);      
  }
  }
};
checkerboard (5);
  






  