import React from "react";
import { Icon } from "@iconify/react";

export default function DescriptionIcons() {
  const iconsMap = [
    {
      icon: "fa-solid:temperature-high",
      descr: "Temp max",
    },
    {
      icon: "fa-solid:temperature-low",
      descr: "Temp min",
    },
    {
      icon: "iconoir:t-shirt",
      descr: "Feels like",
    },
    {
      icon: "ic:outline-cloud-queue",
      descr: "Cloudiness",
    },
    {
      icon: "mdi:barometer",
      descr: "Pressure",
    },
    {
      icon: "material-symbols:water-drop-outline",
      descr: "Humidity",
    },
    {
      icon: "bx:wind",
      descr: "Wind",
    },
    {
      icon: "carbon:wind-gusts",
      descr: "Wind gusts",
    },
    {
      icon: "ic:round-visibility",
      descr: "Visibility",
    },
    {
      icon: "bi:sunrise",
      descr: "Sunrise",
    },
    {
      icon: "bi:sunset",
      descr: "Sunset",
    },
    {
      icon: "carbon:uv-index-alt",
      descr: "UV Index",
    },
  ];
  return (
    <div className="visuals-explanation icon-visuals">
      {iconsMap.map(function (item, index) {
        return (
          <div key={index}>
            <div className="visual-el">
              <Icon icon={item.icon} />
            </div>
            <div className="visual-descr">{item.descr}</div>
          </div>
        );
      })}
    </div>
  );
}
