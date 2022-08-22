import React from 'react'
import Button from 'react-bootstrap/Button';

export const ButtonComponent = ({ variant, text, onClick }) => {
    return (
        <Button onClick={onClick} variant={variant ? variant : "primary"}>{text}</Button>

    )
}
