import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";

type PageTitlePropsType = {
    title: string
}

function App() {
    return (
        <div>
            <PageTitle title={'This is app title'}/>
            <PageTitle title={'LOOOL'}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={'Test'} collapsed={true} />
            <Accordion title={'lel'} collapsed={false} />
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <div>
                <OnOff on={true} />
                <OnOff on={false} />
            </div>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
