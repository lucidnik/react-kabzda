import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
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
    return <h3>{props.title}</h3>;

}