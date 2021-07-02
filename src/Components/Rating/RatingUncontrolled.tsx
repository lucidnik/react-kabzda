import React, {useState} from "react";

type RatingUncontrolledPropsType = {
    starON: () => void

}

type StarPropsType = {
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5

}


export function RatingUncontrolled() {


    let [value, setValue] = useState(0);


    return (
        <div>
            <Star setValue={setValue} selected={value > 0} value={1}/>
            <Star setValue={setValue} selected={value > 1} value={2}/>
            <Star setValue={setValue} selected={value > 2} value={3}/>
            <Star setValue={setValue} selected={value > 3} value={4}/>
            <Star setValue={setValue} selected={value > 4} value={5}/>
        </div>
    );
}

function Star(props: StarPropsType) {


    return <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>star </b> : "star "}</span>;
}