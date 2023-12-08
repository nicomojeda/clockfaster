import { createContext, useState} from "react";

export const GlobalContext = createContext(null);


export const GlobalContextProvider = ({children}) => {



const [cart, setCart] = useState([]);

const handleCart = ( movie ) => {

    setCart(...cart, movie)
}

const objectProvider = {
    cart,
    handleCart,
}

return <GlobalContext.Provider value={objectProvider} > {children}</GlobalContext.Provider>

};
