function prime(num){

  for(let i=0;i<num;i++){

    if(num%i==0){
      return true;
    }
    return false;
  }
};

prime(23);
