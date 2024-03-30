import React from 'react'
import { createContext } from 'react'
const UserContext = createContext("mayank")

export default UserContext
// when we have to have some data in the children, then we  pass the data to them but if there is a case where my  7-8 generation of children needs the data then it would become very hectic to pass that data as an argument to every child, this is known as prop drilling, so from there the concept of context took place here woth the help of context we can save any data which can be accissible by anyone from parent to children without the need of passing the data
// we use a hook known as useContext to read values from the context and if we need to pass the data with some modifications to the children we can wrap the children in the context.provider by passing the modified values to them, for example in the body section UserContext is diplaying its default value and in the header section Rahul is being displayed instead of mmayank because the header componenent is wrapped by its parent index.js with the value=rahul