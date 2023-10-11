
export function max ( a: number, b: number, c: number){
  
    if ( a > b ){
      return ( a > c ) ? a : c;
    }

    if ( b > c) {
      return b;
    }
     
    return (a > c ) ? a : c;

}


let maxValue = max( 15, 22, 38); 
console.log( maxValue ); // 6