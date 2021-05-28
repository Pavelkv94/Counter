import { NavLink } from 'react-router-dom';

type ButtonType = {
    title: string
    disabled: boolean
    onClick: () => void
    class: string
}
//общая компонента кнопки
export function Button(props: ButtonType) {
    //делаем так чтобы при дизейбленной кнопке Навлинк не работал
    return (<>{
        props.disabled === true
            ? <button
                className={props.class}
                onClick={props.onClick}
                disabled={props.disabled}
            > <NavLink to={props.title === "count" ? "/setting" : "/count"}>
                    <div style={{ width: '25 %', height: '50px' }}>{props.title}</div>
                </NavLink>

            </button>
            : <button
                className={props.class}
                onClick={props.onClick}
                disabled={props.disabled}
            > <NavLink to={props.title === "set" ? "/setting" : "/count"}>
                    <div style={{ width: '25 %', height: '50px' }}>{props.title}</div>
                </NavLink>

            </button>

    }</>)
}