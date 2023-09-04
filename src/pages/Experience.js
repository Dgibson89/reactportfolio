import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor=" rgb(57, 57, 146)">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007-2009"
          iconStyle={{ background: "#e68e02", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">A&M University, College Station,Texas</h3>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011-2021"
          iconStyle={{ background: "rgb(57, 57, 146)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">W.B. Carrell Clinic, Dallas,Texas</h3>
          <p>Radiology Technician</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-Current"
          iconStyle={{ background: "rgb(57, 57, 146)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Orthopedic Specialists of Dallas, Wylie,Texas</h3>
          <p>Radiology Technician</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - Current"
          iconStyle={{ background: "rgb(57, 57, 146)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">One2Gration, Frisco,Texas</h3>
          <p>UI/UX Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#e68e02", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">freeCodeCamp, Online Course</h3>
          <p>Responsive Web Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#e68e02", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">freeCodeCamp, Online Course</h3>
          <p>JavaScript Algorithms and Data Structures</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#e68e02", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Scimba, Online Course</h3>
          <p>Front-End Developer Career Path</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
