import React from "react";
import s from './OnOff.module.css';

type PropsType = {
    on: boolean
}

export function OnOff(props: PropsType) {

    const onStyle = {

    }
    const oFfStyle = {

    }
    const indicatorStyle = {}

    return <div>
        {props.on && <div>
            <span className={s.on}>ON </span>
            <span>OFF</span>
            <span className={s.circleGreen}> </span>

        </div>}
        {!props.on && <div>
            <span>ON</span>
            <span className={s.off} >OFF</span>
            <span className={s.circleRed}> </span>
        </div> }
    </div>;
}