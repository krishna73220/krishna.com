import React from "react";
import CountUp from "react-countup";

function Funfact({ funfact: { title, count, icon = null }, isVisible }) {
  const winWidth = window.innerWidth;
  const countQuery = () => {
    const formatNumber = (value) => {
      const num = Math.floor(value);
      return `${num < 10 ? `0${num}` : num}+`;
    };

    if (winWidth && winWidth > 767) {
      return <CountUp end={isVisible ? count : 0} formattingFn={formatNumber} />;
    }
    return <CountUp end={count} formattingFn={formatNumber} />;
  };

  return (
    <div className="fact-item text-center">
      {icon ? <i className={`${icon} icon-circle`}></i> : null}
      <h2 className="count">{countQuery()}</h2>
      <span>{title}</span>
    </div>
  );
}

export default Funfact;
