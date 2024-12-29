import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState<string | undefined>();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h2 className="text-4xl mt-6">{value}</h2>

      <input
        onChange={handleNameChange}
        name="name"
        type="text"
        style={{borderWidth:"2px", borderRadius:"20px", borderColor:"black", marginTop:"14px", padding:"5px", paddingLeft:"10px"}}
        placeholder="Enter name"
      />
    </div>
  );
}
