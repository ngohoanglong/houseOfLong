import React from "react"
export const BreakpointContext = React.createContext("xs")
export const Card = ({ children }) => (
  <div className="shadow-2xl border w-24 h-24 p-2 border-gray-500 rounded-sm flex flex-col justify-center items-center">
    {children}
  </div>
)
export const Square = () => (
  <div className="w-full h-full bg-gray-500 rounded-sm"></div>
)
