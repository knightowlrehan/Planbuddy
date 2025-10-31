import React from 'react';
import Button from '../common/Button';
import appScreenShot1 from '../../../public/images/app-screenshots/mockup_1.png';
import appScreenShot2 from '../../../public/images/app-screenshots/mockup_2.png';
import avatar1 from '../../../public/images/avatar/avatar_1.png'

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <svg 
            className="relative"
            style={{
            top: '-100px',
            left: '650px',
            width: '1350.81px',
            height: '1341.97px',
            transform: 'rotate(-5deg)',
            transformOrigin: 'center'
            }}
            width="1550.81" 
            height="1341.97" 
            viewBox="0 0 1650 1542" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M665.678 859.811C395.719 861.316 103.415 780.254 19.6776 547.701C-62.7769 318.71 127.175 103.997 342.514 -37.6682C549.35 -173.739 816.165 -243.129 1029.97 -116.94C1271.34 25.5166 1414.4 292.736 1322.02 540.439C1234.1 776.165 939.979 858.282 665.678 859.811Z" 
            fill="#C880FF"
            />
        </svg>
        </div>

      <div className="relative z-10 w-full mt-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 container-fixed">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center hero-section py-20">
          
          
          <div className="mx-15 mt-20 lg:pr-8">
          
            <h1 className="text-4xl sm:text-5xl lg:text-6xl  leading-tight hero-title">
              <span className="text-gray-900">TURN BIG</span>
              <br />
              <span className="text-gray-900">DREAMS INTO</span>
              <br />
              <span className="text-gray-900">DAILY WINS</span>
              <br />
              <span className="text-gray-900">WITH</span>
              <br />
              <span className="text-gray-900">PLANBUDDY</span>
            </h1>
            
            
            <div className="flex flex-col items-start mt-10">
              <img 
                src={avatar1}
                alt="User avatar" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover ml-4"
              />
              <Button 
                variant="download" 
                text="Download App"
              />
            </div>
          </div>

          
          <div className="relative h-[800px] w-[800px] flex items-center justify-center">
           
            <div className="relative w-full h-full flex items-center justify-center">
              
             
              <div 
                className="absolute z-10"
                style={{
                  right: '50%',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(-5deg)'
                }}
              >
                <div className="relative w-[220px] sm:w-[320px] lg:w-[420px]">
                  <img 
                    src={appScreenShot2}
                    alt="PlanBuddy app dark theme screenshot" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              
              <div 
                className="absolute z-20"
                style={{
                  right: '30%',
                  top: '50%',
                  transform: 'translateY(-50%) '
                }}
              >
                <div className="relative w-[200px] sm:w-[140px] lg:w-[280px]">
                  <img 
                    src={appScreenShot1}
                    alt="PlanBuddy app light theme screenshot" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}