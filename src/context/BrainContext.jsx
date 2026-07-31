import { createContext, useState, useEffect } from "react";

import {
    getBrainItems,
    saveBrainItems,
} from "../services/brainStorage";

export const BrainContext = createContext();

function BrainProvider({ children }) {

    const [items, setItems] = useState([]);

    useEffect(() => {

        setItems(getBrainItems());

    }, []);

    useEffect(() => {

        saveBrainItems(items);

    }, [items]);

    function addItem(item) {

        setItems(prev => [item, ...prev]);

    }

    function removeItem(id) {

        setItems(prev => prev.filter(item => item.id !== id));

    }

    return (

        <BrainContext.Provider
            value={{
                items,
                addItem,
                removeItem,
            }}
        >

            {children}

        </BrainContext.Provider>

    );

}

export default BrainProvider;