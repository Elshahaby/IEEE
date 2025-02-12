
// BinaryDigit is a union type that can only be 0 or 1 ensures that each element is either 0 or 1.

// [BinaryDigit, ...BinaryDigit[]] ensures:
//     - The array has at least one element ([BinaryDigit]).
//     - The rest of the elements (...BinaryDigit[]) can be any number of 0s or 1s, including none ensuring the Variable Length.


type BinaryDigit = 0 | 1;
type NonEmptyBinaryArray = [BinaryDigit, ...BinaryDigit[]];


function BinaryToDecimal (binaryArray: NonEmptyBinaryArray): number{
  const sz = binaryArray.length;
  try{
    const decimal = binaryArray.reduce((pre: number, curr, idx)=>{
      return pre + curr*Math.pow(2,sz-idx-1);
    },0);

    return decimal;

  }catch(error){
    console.error(error);
    return -1;
  }
}

console.log(BinaryToDecimal([1,1,0,1]));




// Run code with
//   - "dev": "ts-node test.ts"            To indicate error at runtime too and show it at console(terminal), not just indicatae it at compile time like tsx
// Not
//   - "dev": "tsx watch test.ts"            indicate error at compile time and even that you could run the code and get the wrong answer of your code not the error

