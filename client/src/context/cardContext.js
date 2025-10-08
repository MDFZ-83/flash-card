import { Children, createContext } from "react"
import { CreatCards } from "../hook/creatCards"


export const CardContext = createContext({
    changes : () =>{},
    creat : () =>{} ,
    change1 : () =>{},
    card : () =>{} ,
    item : null ,
    save : () =>{} ,
    sets : null ,
    mapp : () =>{}
})

export const CradsProvider = ({children}) =>{
    return(
        <CardContext.Provider value={CreatCards() }>
            {children}
        </CardContext.Provider>
    )
}