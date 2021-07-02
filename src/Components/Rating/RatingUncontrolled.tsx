import React, {useState} from "react";

type StarPropsType = {}

export function RatingUncontrolled() {


    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star(props: StarPropsType) {

    let [star, setStar] = useState(false);

    const starOnClick = () => {
        star ? setStar(false) : setStar(true);
    };

    return <span onClick={starOnClick}>{star ? <b>star </b> : "star "}</span>;
}