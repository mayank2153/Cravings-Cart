import { Sum } from "../components/Sum"
test("sum function check",()=>{
    const result = Sum(3,4)
    expect(result).toBe(7);
})