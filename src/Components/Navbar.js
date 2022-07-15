import React from 'react';
import ReactDOM from 'react-dom/client';
import navbarStyles from '../css/navbarStyles.css'
import {ReactComponent as Car} from '../assets/car.svg';
import {ReactComponent as Track} from '../assets/track.svg';
import {ReactComponent as Cow} from '../assets/cow.svg';
import {ReactComponent as Play} from '../assets/play.svg';

export default function Navbar() {


    return (
        <nav>
            <div>
                <Car />
                <Track />
                <Cow />
                <Play />
            </div>
        </nav>
    )
}