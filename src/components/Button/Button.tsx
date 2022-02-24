import React from 'react'

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: string;
    backgroundColor?: string;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, color, backgroundColor, style } = props;

    let _style: React.CSSProperties = style || {};

    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button {...props} style={_style}>{children}</button>
    )
}

export default Button
