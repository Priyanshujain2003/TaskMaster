import React from 'react'
import { useState, useContext } from 'react';
import Mycontext from '../context';

const Header = () => {
    const context = useContext(Mycontext);
    console.log(context);
    return (
        <div>

            <div>
                <button onClick={() =>
                    context.changeColor(
                        context.backgroundColor === "white" ? "grey" : "white"
                    )
                }
                >
                    Dark Mode
                </button>
            </div>
        </div >
    )
}
export default Header
