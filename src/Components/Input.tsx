import React from "react";

type InputProps = {
    prompt: string;
}

const Input = (props: InputProps) => {

    return(
       <div className="text-white font-mono ml-12">
           <span>{props.prompt}</span>
           <input 
            className="bg-transparent ml-2 outline-none"
            name="input"
            type="text"
            id="inputLine"
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoFocus={true}
           />
       </div>
    )
};

export default Input;