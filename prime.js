function prime(num){
   let count=0;
   for(let i=0;i<num;i++){
     if(num%i==0){
        count++;
     }
   
  }
  if(counter===2){
      return true;
  }
   return false;
}

let answer = prime(13);

if(answer == true){
   console.log("prime");
}
else{
    console.log("Note prime");
}