import React, { createContext} from "react";

export const FlipContext = createContext();

export function FlipProvider(props){

    return(

        <FlipContext.Provider value={props.handleFlip}>

            {props.children}
        </FlipContext.Provider>
    )

}