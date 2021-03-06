import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../css/sub-components/education_timeline.css";

const contentStyleCSS = {
  background: "#5883b4",
  color: "#111111",
};
const contentArrowStyleCSS = {
  borderRight: "7px solid  #5883b4",
};

const circleTimelineCSS = {
  background: "#8fa1b6",
  color: "#111111",
};

export default function Timeline() {
  return (
    <React.Fragment>
      <VerticalTimeline
        className="vertical-timeline-custom-line"
        animate={false}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyleCSS}
          contentArrowStyle={contentArrowStyleCSS}
          date="2019 - 2023"
          iconStyle={circleTimelineCSS}
        >
          <h3 className="vertical-timeline-element-header vertical-timeline-element-text">
            Undergraduate
          </h3>
          <h4 className="vertical-timeline-element-title vertical-timeline-element-text">
            University of Texas at Arlington (UTA)
          </h4>
          <h5 className="vertical-timeline-element-subtitle vertical-timeline-element-text">
            Arlington, TX
          </h5>
          <p className="vertical-timeline-element-text">
            <strong>Major: </strong>Computer Science
            <br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyleCSS}
          contentArrowStyle={contentArrowStyleCSS}
          date="2016 - 2018"
          iconStyle={circleTimelineCSS}
        >
          <h3 className="vertical-timeline-element-header vertical-timeline-element-text">
            High School
          </h3>
          <h4 className="vertical-timeline-element-title vertical-timeline-element-text">
            Trinity International Secondary School
          </h4>
          <h5 className="vertical-timeline-element-subtitle vertical-timeline-element-text">
            Kathmandu, Nepal
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyleCSS}
          contentArrowStyle={contentArrowStyleCSS}
          date="2012 - 2016"
          iconStyle={circleTimelineCSS}
        >
          <h3 className="vertical-timeline-element-header vertical-timeline-element-text">
            Primary and Secondary School
          </h3>
          <h4 className="vertical-timeline-element-title vertical-timeline-element-text">
            Arunima Higher Secondary School
          </h4>
          <h5 className="vertical-timeline-element-subtitle vertical-timeline-element-text">
            Kathmandu, Nepal
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
}
