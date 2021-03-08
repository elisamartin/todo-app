import { createContext, useState } from "react"

export const Context = createContext()

const Provider = ({ store, children }) => {
	const [state, setState] = useState(() => {

        return store.getState()
    })
	const value = {
		store,
        state,
        setState
	}

	return <Context.Provider value={value}>{children}</Context.Provider>
}

export default { Provider, Consumer: Context.Consumer }