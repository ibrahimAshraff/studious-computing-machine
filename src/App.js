import React from "react";
import logo from './assets/Inda-logo.png'

function App() {
  return (
    <>
      <div className="hero-background">
        <div className="header-container">

          <div className="header">
            <div>
              <img src={logo} alt="inda logo" />

            </div>
            <div>
              About Us
            </div>
          </div>
        </div>

        <div className="hero header-container">
          <div className="hero-text">
            <h1>
              Developing at scale,  premium candles for Nigerians.
            </h1>
            <span>
              At Inda we deal in unscented and scented candles, which come in all shapes and sizes. We know that there are 10,000 different candle scents and we are proud to say we hold a significant number of the total scents. We are constantly looking to improve our scent line            </span>
          </div>

          <form className="form">
            <input
              type="email"
              placeholder="your email here"
            />

            <button>
              Join the Waitlist
            </button>
          </form>

        </div>


      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#affcca66" fill-opacity="1" d="M0,224L13.3,202.7C26.7,181,53,139,80,122.7C106.7,107,133,117,160,133.3C186.7,149,213,171,240,170.7C266.7,171,293,149,320,122.7C346.7,96,373,64,400,64C426.7,64,453,96,480,117.3C506.7,139,533,149,560,176C586.7,203,613,245,640,250.7C666.7,256,693,224,720,224C746.7,224,773,256,800,245.3C826.7,235,853,181,880,138.7C906.7,96,933,64,960,64C986.7,64,1013,96,1040,117.3C1066.7,139,1093,149,1120,128C1146.7,107,1173,53,1200,58.7C1226.7,64,1253,128,1280,176C1306.7,224,1333,256,1360,250.7C1386.7,245,1413,203,1427,181.3L1440,160L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z">
        </path>
      </svg>
    </>
  );
}

export default App;
