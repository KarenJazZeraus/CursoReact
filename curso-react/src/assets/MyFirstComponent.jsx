import { useState } from "react";
const MyFirstComponent = () => {
    const [value,setValue] = useState(0);
    const [newValue, setnewValue] = useState(3);
    const hi="hi";
    setTimeout(()=>{
        setValue(value + 1);
        setnewValue(newValue+2);

    }, 3000);
return (
    
    <div>
        {hi}Hello world, this is my first component {value} {newValue}
    </div>
);

};
export {MyFirstComponent}