import {z, ZodError} from "zod";


const arraySchema = z.array(
    z.number().int()
    .gte(0,"numbers must be 0 or 1 only")
    .lte(1,"number must be 0 or 1 only")
).nonempty();

type BinaryArray = z.infer<typeof arraySchema>;

function BinaryToDecimal(input: unknown[]) :number {
    const size: number = input.length;
    try{
        const validation: BinaryArray = arraySchema.parse(input);
        
        const decimal = validation.reduce((acc, curr, idx) => {
            return acc + Math.pow(2,size-idx-1)*curr;
        },0)

        return decimal;

    }catch(error){
        if(error instanceof ZodError){
            console.error("Error Are \n",error.errors);
        }else{
            console.error(error);
        }
        return -1; // Just indecate an error with a special value (-1)
    }
}

console.log(BinaryToDecimal([1,0,,0])); // 10