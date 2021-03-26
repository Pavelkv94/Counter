import React from 'react';

type ButtonType = {
    title: string
    disabled: boolean
    onClick: () => void
    class: string

}

export function Button(props: ButtonType) {

    return (
        <button
            className={props.class}
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.title}
        </button>
    )
}