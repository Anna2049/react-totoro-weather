import React from "react";

export default function DescriptionImagesOW() {
  const imagePathOW = "https://openweathermap.org/img/wn/";
  const imageMapOW = [
    {
      code: ["01d@2x", "01n@2x"],
      descr: "Clear sky",
    },
    {
      code: ["03d@2x"],
      descr: "Scattered clouds",
    },
    {
      code: ["02d@2x", "02n@2x"],
      descr: "Few clouds",
    },
    {
      code: ["04d@2x"],
      descr: "Broken clouds",
    },
    {
      code: ["10d@2x", "10n@2x"],
      descr: "Rain",
    },
    {
      code: ["09d@2x"],
      descr: "Shower rain",
    },
    {
      code: ["11d@2x"],
      descr: "Thunderstorm",
    },
    {
      code: ["13d@2x"],
      descr: "Snow",
    },
    {
      code: ["50d@2x"],
      descr: "Mist",
    },
  ];
  return (
    <div className="visuals-explanation">
      {imageMapOW.map(function (item, index) {
        return (
          <div key={index}>
            <div className="visual-el">
              {item.code.map(function (code, index) {
                return (
                  <img
                    key={index}
                    src={`${imagePathOW}${code}.png`}
                    alt={`ow-img-${code}`}
                  />
                );
              })}
            </div>
            <div className="visual-descr">{item.descr}</div>
          </div>
        );
      })}
    </div>
  );
}
