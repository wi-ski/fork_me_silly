import React from 'react';
import SettingsMenuItem from 'SettingsComponents/SettingsMenuItem';
import {settingsValueChange} from 'actions'
import style from './style.scss'
import CSSModules from 'react-css-modules';

const fonts = [
    {value:'Arial, sans-serif',primaryText:'Arial',primaryText:'Arial'},
    {value:'Helvetica, sans-serif',primaryText:'Helvetica',primaryText:'Helvetica'},
    {value:'Gill Sans, sans-serif',primaryText:'Gill',primaryText:'Gill'},
    {value:'Lucida, sans-serif',primaryText:'Lucida',primaryText:'Lucida'},
    {value:'Helvetica Narrow, sans-serif',primaryText:'Helvetica',primaryText:'Helvetica'},
    {value:'sans-serif',primaryText:'sans',primaryText:'sans'},
    {value:'Times, serif',primaryText:'Times',primaryText:'Times'},
    {value:'Times New Roman, serif',primaryText:'Times',primaryText:'Times'},
    {value:'Palatino, serif',primaryText:'Palatino',primaryText:'Palatino'},
    {value:'Bookman, serif',primaryText:'Bookman',primaryText:'Bookman'},
    {value:'New Century Schoolbook, serif',primaryText:'New',primaryText:'New'},
    {value:'serif',primaryText:'serif',primaryText:'serif'},
    {value:'Andale Mono, monospace',primaryText:'Andale',primaryText:'Andale'},
    {value:'Courier New, monospace',primaryText:'Courier',primaryText:'Courier'},
    {value:'Courier, monospace',primaryText:'Courier',primaryText:'Courier'},
    {value:'Lucidatypewriter, monospace',primaryText:'Lucidatypewriter',primaryText:'Lucidatypewriter'},
    {value:'Fixed, monospace',primaryText:'Fixed',primaryText:'Fixed'},
    {value:'monospace',primaryText:'monospace',primaryText:'monospace'},
    {value:'Comic Sans, Comic Sans MS, cursive',primaryText:'Comic',primaryText:'Comic'},
    {value:'Zapf Chancery, cursive',primaryText:'Zapf',primaryText:'Zapf'},
    {value:'Coronetscript, cursive',primaryText:'Coronetscript',primaryText:'Coronetscript'},
    {value:'Florence, cursive',primaryText:'Florence',primaryText:'Florence'},
    {value:'Parkavenue, cursive',primaryText:'Parkavenue',primaryText:'Parkavenue'},
    {value:'cursive',primaryText:'cursive',primaryText:'cursive'},
    {value:'Impact, fantasy',primaryText:'Impact',primaryText:'Impact'},
    {value:'Arnoldboecklin, fantasy',primaryText:'Arnoldboecklin',primaryText:'Arnoldboecklin'},
    {value:'Oldtown, fantasy',primaryText:'Oldtown',primaryText:'Oldtown'},
    {value:'Blippo, fantasy',primaryText:'Blippo',primaryText:'Blippo'},
    {value:'Brushstroke, fantasy',primaryText:'Brushstroke',primaryText:'Brushstroke'},
    {value:'fantasy',primaryText:'fantasy',primaryText:'fantasy'}
];


const SettingsMenu = ({ styleStates, activeId, onChange }) => {
    return (
        <div styleName='side-bar-styles' id='side-bar-container'>
            <ul styleName='settings-menu-styles' className='sidebar-nav'>
                {
                    [
                        <li
                            type='NumericSlider'
                            primaryText='Font Size'
                            secondaryText='Size Yo Messages'
                            onChangeComplete={onChange}
                            adjustment={(val) => (val + "px")}
                            max={100}
                            min={0}
                            targetAttribute='messages::fontSize'
                        />,
                        <hr />,
                        <li
                            type='ColorPicker'
                            color={styleStates.messagesList['backgroundColor']}
                            primaryText='Messages Box Background Color'
                            secondaryText='Pick all the colors'
                            onChangeComplete={onChange}
                            targetAttribute='messagesList::backgroundColor'
                        />,
                        <hr />,
                        <li
                            type='ColorPicker'
                            color={styleStates.messages['color']}
                            primaryText='Font Color'
                            secondaryText='Pick your awesome font color and be a creative genius!'
                            onChangeComplete={onChange}
                            targetAttribute='messages::color'
                        />,
                        <hr />,
                        <li
                            type='ColorPicker'
                            color={styleStates.messages['backgroundColor']}
                            primaryText='Message Background Color'
                            secondaryText='Pick colors!'
                            onChangeComplete={onChange}
                            targetAttribute='messages::backgroundColor'
                            color='white' //initial color
                        />,
                        <hr />,
                        <li
                            type='NumericSlider'
                            primaryText='Message Spacing'
                            secondaryText='Space Yo Messages'
                            onChangeComplete={onChange}
                            adjustment={(val) => (val + "px")}
                            max={10}
                            min={0}
                            targetAttribute='messages::marginTop'
                        />,
                        <hr />,
                        <li
                            type='SelectOptionMenu'
                            primaryText='Choose Your Favorite Font'
                            secondaryText='Font are the best thing ever!'
                            onChangeComplete={onChange}
                            targetAttribute='messages::fontFamily'
                            optionList={fonts}
                        />,
                        <hr />

                    ].map((el,key) => React.cloneElement(el, {key} ))
                }
            </ul>
        </div>
    )
}


// export default SettingsMenu;
export default CSSModules(SettingsMenu, style);
