import React, {useState} from "react";

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

type AccordionUncontrolledPropsType =  {
    title: string
}

export function AccordionUncontrolled(props: AccordionUncontrolledPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    const onClick = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true)
    }

    return <div>
        <AccordionTitle title={props.title} onClick={onClick} />
        {!collapsed && <AccordionBody/>}
    </div>;
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick} >{props.title}</h3>;

}