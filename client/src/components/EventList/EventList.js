import React, { Component } from "react";

import "./EventList.css";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "Event Title",
          description: "This is a description for the event",
          start: new Date(),
          end: new Date()
        }
      ]
    };
  }

  componentDidMount() {
    fetch("/events")
      .then(res => res.json())
      .then(eventData => this.setState({ events: eventData }));
  }

  render() {
    return (
      <div class="eventList">
        <h2 class="date">Aug 21</h2>
        <h6 class="description">
          Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah BlahBlah Blah
          Blah BlahBlah Blah Blah Blah
        </h6>
      </div>
    );
  }
}

export default EventList;
