import React, { createContext, useState } from 'react'


export const ThemeContext  = createContext();

export const ThemeProvider = ({children})=> {
    const [theme, settheme]= useState('light')

    
}
