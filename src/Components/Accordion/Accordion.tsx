import React from "react";

type AccordionPropsType = {
    title: string
    setAccordionCollapsed: () => void
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void

}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.title} setAccordionCollapsed={props.setAccordionCollapsed} />
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

    return <h3 onClick={props.setAccordionCollapsed} >{props.title}</h3>;

}