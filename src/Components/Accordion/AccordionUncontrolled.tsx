import React, {useState} from "react";

type AccordionTitlePropsType = {
    title: string
    onCollapsed: () => void
}

type AccordionUncontrolledPropsType =  {
    title: string
}

export function AccordionUncontrolled(props: AccordionUncontrolledPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    const onCollapsed = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true)
    }

    return <div>
        <AccordionTitle title={props.title} onCollapsed={onCollapsed} />
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
    return <h3 onClick={props.onCollapsed} >{props.title}</h3>;

}