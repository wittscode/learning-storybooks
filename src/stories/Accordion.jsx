import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "./accordion.css";
import { useRef } from "react";

export default function Accordion({ data }) {
  return (
    <div className="accordion-section">
      {Array.isArray(data) &&
        data.map((d) => <AccordionItem title={d.title} content={d.content} />)}
    </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

const AccordionItem = ({ title, content }) => {
  const [isActive, setActive] = useState(false);
  const contentElm = useRef(null);

  return (
    <div className="accordion-item">
      <div
        className={classNames("accordion-title", { active: isActive })}
        role="button"
        onClick={(e) => setActive(!isActive)}
      >
        <div className="title">{title}</div>
        <div className="icon">
          {isActive ? <BsChevronDown /> : <BsChevronUp />}
        </div>
      </div>
      <div
        ref={contentElm}
        style={{ height: isActive ? contentElm.current.scrollHeight : "0px" }}
        className={classNames("accordion-content", { active: isActive })}
      >
        {content}
      </div>
    </div>
  );
};
