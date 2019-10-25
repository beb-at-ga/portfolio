import React from "react";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
  typography: {
    fontFamily: 'Playfair Display', 
    fontStyle:  'serif',
    },
    body: {
      background: '#171616',
      color: 'black',
    },
  preLoader: {
    background: "0 0"
  },
}));



// *, *::after, *::before {
//   box-sizing: border-box;
// }

// .page-content {
//   max-width: 768px;
//   margin: 0 auto;
// }


const Spinner = () => {
  const classes = useStyles();


  const preloader = document.querySelector(".preloader");

  const fadeEffect = setInterval(() => {
    // if we don't set opacity 1 in CSS, then it will be equaled to "", that's why we check it
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);

//   window.addEventListener("load", fadeEffect);


  return (
    <div className="preloader">
      <svg
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-ripple"
        style={classes.background}
      >
        <circle
          cx="50"
          cy="50"
          r="4.719"
          fill="none"
          stroke="#1d3f72"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="3"
            keySplines="0 0.2 0.8 1"
            begin="-1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="3"
            keySplines="0.2 0 0.8 1"
            begin="-1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="27.591"
          fill="none"
          stroke="#5699d2"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="3"
            keySplines="0 0.2 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="3"
            keySplines="0.2 0 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Spinner;
