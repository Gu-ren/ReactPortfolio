import "./Eye.css";

const Eye = () => {
  const eyeball = document.querySelector(`.ball`);

  document.onmousemove = (event, err) => {
    const x = (event.clientX * 100) / window.innerWidth + "%";
    const y = (event.clientY * 100) / window.innerHeight + "%";

    eyeball.style.left = x;
    eyeball.style.top = y;

    eyeball.transform = "translate(-" + x + ", -" + y + ")";
  };

  return (
    <div className="wrapper1">
      <div className="eye">
        <div className="shut">
          <span></span>
        </div>
        <div className="ball"></div>
      </div>
    </div>
  );
};

export default Eye;
