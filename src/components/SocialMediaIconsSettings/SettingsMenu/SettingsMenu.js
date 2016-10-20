import React from 'react';
import SettingsMenuItem from 'SettingsComponents/SettingsMenuItem';
import {settingsValueChange} from 'actions'
import style from './style.scss'
import CSSModules from 'react-css-modules';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

var iconOptions = [
  "select",
  "custom",
  "aboutme",
  "academia",
  "angellist",
  "bandcamp",
  "behance",
  "bloglovin",
  "blogger",
  "crunchbase",
  "delicious",
  "deviantart",
  "dribbble",
  "envelope",
  "etsy",
  "facebook",
  "flickr",
  "flipboard",
  "foursquare",
  "github",
  "goodreads",
  "google-plus",
  "houzz",
  "instagram",
  "itunes",
  "linemessanger",
  "linkedin",
  "lookbook",
  "medium",
  "meetup",
  "mosaichub",
  "myspace",
  "pinterest",
  "reddit",
  "renren",
  "rss",
  "reverbnation",
  "sketchfab",
  "slideshare",
  "soundcloud",
  "spotify",
  "stumbleupon",
  "teacherspayteachers",
  "tumblr",
  "twitter",
  "vimeo",
  "vine",
  "vk",
  "weibo",
  "wechat",
  "youtube",
  "yelp",
  "xing"
]

const SettingsMenu = ({ styleStates, activeId, onChange,Icons }) => {
    return (
        <div styleName='side-bar-styles' id='side-bar-container'>
            <List styleName='settings-menu-styles' className='sidebar-nav'>
                {
                    Icons.map ((conf,key) => (
                        <SettingsMenuItem
                            primaryText='Choose Your Favorite Font'
                            secondaryText='Font are the best thing ever!'
                            key={key}
                            optionList={iconOptions}
                            onChangeComplete={onChange}
                            {...conf.attrs}
                        />
                    ))
                }
            </List>
        </div>
    )
}


// export default SettingsMenu;
export default CSSModules(SettingsMenu, style);
