import { createStore } from "redux"
import reducer from "../reducers"

const initialState = {
      username: "Janny",
      totalAmount: 50701
}

export const store = createStore(reducer, initialState)