'use client'
import React, { ReactNode } from "react";
interface buttonProps {
    type: string,
    label?: string,
    classes?: string,
    children?: ReactNode,
    onClick?: () => void;
}
const Button = (props: buttonProps) => {
    const { type, label, classes, children, onClick } = props || {};
    return (
        <button onClick={onClick} className={`button button-${type} ${classes}`}>
            {
                React.isValidElement(children)
                    ? children :
                    label
            }
        </button>
    )
}

export default Button;