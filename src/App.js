import React from 'react';
import './App.scss';
import events from './events';
import dates from './dates';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'


const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

function App() {
  return (
    <div className="App flex-column">
      <div className="logo-header">
        <div className=" logo-text center-text"> Unplugged Gaming Boston </div>
      </div>

      <div className="body-section flex-row">
        <div className="about-us">
          <p> We're a crew of gamers in and around the Boston area! Whether you are from Boston, Somerville, Beverly, Quincy, etc, we have a game for you ! </p>
        
          <p> We plan, coordinate and chat on our Discord Channel. If you have questions why not simply join us? Click below to join the Discord! </p>
          <a href="https://discord.gg/yYUPtQm"> 
            <img src="discord-icon.svg" alt="gaming-icon" />
          </a>
        </div>

        <div className="event-wrapper">
          <div className="towns-and-shops flex-column">
            <h2> Primary Gaming Locations </h2>
            <div className="shop-container flex-column">
              <a target="_blank" rel='noreferrer noopener' href="http://www.pandemoniumbooks.com/"> Pandemonium -- Cambridge </a>
              <a target="_blank" rel='noreferrer noopener' href="http://comicazi.com/site/"> Comicazi -- Somerville </a>
              <a target="_blank" rel='noreferrer noopener' href="https://twitter.com/knightmovescafe"> Knight's Moves Cafe -- Somerville/Brookline</a>
            </div>
          </div>

          <div className="event-connection">
            <span className="center-text"> EVENT CONNECTION </span>
          </div>
        </div>

        <div className="calendar">
          <BigCalendar
            events={events}
            views={allViews}
            step={60}
            showMultiDayTimes
            max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
            defaultDate={new Date(2015, 3, 1)}
            localizer={localizer}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
