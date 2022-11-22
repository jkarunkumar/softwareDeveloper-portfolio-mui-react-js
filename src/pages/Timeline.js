import { ReactComponent as WorkIcon } from "./work.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Box,useMediaQuery } from "@mui/material";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from '@mui/material/styles';
function Timeline() {
  const theme = useTheme();
  const isLgMatch = useMediaQuery(theme.breakpoints.down("lg"));
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  let timelineElements = [
    {
      id: 1,
      title: "Senior Programmer",
      location: "Software Tenchnologies",
      description:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Ut enim ad minim veniam.",
      date: "April 2021 ",
      icon: "school",
    },
    {
      id: 2,
      title: "Front End Developer",
      location: "Software Tenchnologies",
      description:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam ",
      // buttonText: "College Projects",
      date: "November 2019 - March 2021",
      icon: "school",
    },
    {
      id: 3,
      title: "Front End Developer",
      location: "Software Tenchnologies",
      description:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam ",
      // buttonText: "College Projects",
      date: "November 2017 - March 2018",
      icon: "school",
    },
  ];
  
  
  return (
    <div className="timePort"    id="timline"
    // style={{ backgroundImage: `url(${headerjpg})`}}
     >
               <Box sx={{ typography: isLgMatch ? 'h5' : 'h3', color: '#fff', textAlign: 'center', paddingBottom: 3,paddingTop:isLgMatch?'15%':'7%' }} 
          className="headerLine">Experience</Box>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
