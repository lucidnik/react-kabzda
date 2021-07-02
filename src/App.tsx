import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOffUncontrolled} from "./Components/OnOff/OnOffUncontrolled";
import {AccordionUncontrolled} from "./Components/Accordion/AccordionUncontrolled";
import {RatingUncontrolled} from "./Components/Rating/RatingUncontrolled";
import {OnOff} from "./Components/OnOff/OnOff";

type PageTitlePropsType = {
    title: string
}


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState(true);
    let [on, setOn] = useState(true);


    const accordionToggle = () => {
        accordionCollapsed ? setAccordionCollapsed(false) : setAccordionCollapsed(true);
    };

    const onToggle = () => {
        on ? setOn(false) : setOn(true);
    };

    return (
        <div className={"App"}>

            <Accordion title={'Test'} collapsed={accordionCollapsed}
                       setAccordionCollapsed={accordionToggle}/>

            <OnOff on={on} onToggle={onToggle}/>

            {/*<OnOffUncontrolled/>
            <OnOffUncontrolled/>
            <OnOffUncontrolled/>

            <AccordionUncontrolled title={'SOP'}/>
            <AccordionUncontrolled title={'WUZ GUD'}/>

            <RatingUncontrolled/>

            <Rating value={ratingValue} onClick={setRatingValue}/>*/}


            {/* <PageTitle title={'This is app title'}/>
            <PageTitle title={'LOOOL'}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={'Test'} collapsed={true} />
            <Accordion title={'lel'} collapsed={false} />
            Article 2
            <div>
            </div>*/}
        </div>
    );
}


function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
