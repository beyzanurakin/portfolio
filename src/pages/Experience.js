import React from "react";
import { FaSchool, FaGraduationCap, FaCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div style={{ height: "35vh" }}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2021"
          iconStyle={{ background: "#7897AB", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Mugla Sıtkı Kocman University, Faculty of Engineering , Computer
            Engineering
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021/8-2021/12"
          iconStyle={{ background: "#7897AB", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            InternShip at PranaGeo
          </h3>
          <p>Junior Full-Stack Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021/8-2022"
          iconStyle={{ background: "#7897AB", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">Freeleancing</h3>
          <p>Front-End Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
