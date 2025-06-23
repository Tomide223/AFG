import { useState } from 'react'
import TextBox from './component/TextBox'


function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-white mx-60   ">

        <TextBox  />
      
        <div className="flex flex-row  justify-left gap-6">
           <TextBox children={<>
          <p className=" text-sm text-gray-500 font-bold">Benefits</p>
          <p className=" text-base text-gray-500 font-bold">Amplify Insights</p>
          <p className=" text-xs text-gray-400 ">Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</p>
          
          </>
        }gap = "gap-4" />
            <TextBox children={<>
          <p className=" text-sm text-gray-500 font-bold">Benefits</p>
          <p className=" text-base text-gray-500 font-bold">Control Your Global Presence</p>
          <p className=" text-xs text-gray-400 ">Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.</p>
           </>
        } gap = "gap-4" />
            <TextBox children={<>
          <p className=" text-sm text-gray-500 font-bold">Benefits</p>
          <p className=" text-base text-gray-500 font-bold">Remove Language Barriers</p>
          <p className=" text-xs text-gray-400 ">Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</p>
           </>
        } gap = "gap-4" />
            <TextBox children={<>
          <p className=" text-sm text-gray-500 font-bold">Benefits</p>
          <p className=" text-base text-gray-500 font-bold">Visualize Growth</p>
          <p className=" text-xs text-gray-400 ">Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.</p>
           </>
        } gap = "gap-4" />
        </div>
      </div>
    </>
  )
}

export default App
