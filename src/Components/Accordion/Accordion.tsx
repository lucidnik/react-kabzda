import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    setAccordionCollapsed: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void

}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void

}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.title} setAccordionCollapsed={props.setAccordionCollapsed}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>;

}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((item, index) => <li onClick={ () => props.onClick(item.value)} key={index} >{item.title}</li>)}
            </ul>
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.setAccordionCollapsed}>{props.title}</h3>;

}