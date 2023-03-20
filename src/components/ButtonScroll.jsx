import React from "react";
import { Icon } from "@iconify/react";

const ButtonScroll = (props) => {
  function xScroll(event) {
    const elScrolled = event.target
      .closest(".container-scroll")
      .querySelector(".scrolling-wrapper");
    const scrollDistance = elScrolled.clientWidth;
    switch (props.direction) {
      case "right":
        return (elScrolled.scrollLeft += scrollDistance);
      case "left":
        return (elScrolled.scrollLeft -= scrollDistance);
      default:
        return;
    }
  }
  return (
    <button className={`ButtonScroll scroll-${props.direction}`}>
      <Icon icon={`bx:${props.direction}-arrow`} onClick={xScroll} />
    </button>
  );
};

export default ButtonScroll;
