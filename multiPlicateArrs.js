function multiplyAll(arr) {
    let product = 1;
    for(i=0; i<arr.length; i++){//Fisrt parenthesis
  
      for(j=0; j<arr[i].length; j++){//second Parenthesis
        
        if(arr[i].length===1||arr[1].length===1){//dependent
          for(i=0;i<arr.length;i++){
            arr[i]=arr[i][0];
          }
          break;
        }
        if (arr[i].length < 3){//dependient
          arr[i]=(arr[i][j]*arr[i][product]);   
        }
        
        else if(arr[i].length >= 3){
          arr[i].push(arr[i][j]*arr[i][product]);
          arr[i].shift(arr[i][j]);
          arr[i].shift(arr[i][j]);
          arr[i]=(arr[i][j]*arr[i][product]);
          
        
        }/* console.log(arr); */
      }
    }
    while(i>=arr.length){//final
      for(i=0;i<arr.length;i++){
        arr.push(arr[i]*arr[product]);
        arr.shift(arr[i],arr[product]);
        arr.shift(arr[product]);
        arr=arr[i]*arr[product];
        
      }
    }console.log(arr);
  }
  
  multiplyAll([[1], [2], [3]]);
  multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]);
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);