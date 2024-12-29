import { useCounter } from "./Counter";
export default function CounterBox() {
const context = useCounter();
  return (
      <div>
        <p className="text-5xl text-black">{context?.value}</p>
        <button onClick={()=>context?.setValue(context?.value + 1)}>Increment</button>
      </div>
  );
}
