import React, { Fragment } from 'react'

function TailwindPage() {
  return (
    <Fragment>
    <div className='first'>
      hiiiiiiiiii
    </div>  
    <div  >
      hiiiiiiiiii
    </div>

    grid
    <div className="grid grid-flow-col grid-rows-4 gap-4 border-1">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
 
  <div>05</div>
  <div className="row-span-3 grid grid-rows-subgrid gap-4 ">
    <div className="row-start-2">06</div>
  </div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  
  <div>10</div>
</div>
{/* <div className="bg-[url(https://thumbs.dreamstime.com/b/pictue-sunflower-field-morning-evening-male-s-hand-holding-one-blossom-sun-shines-sky-sunset-sunrise-amazing-view-226794691.jpg)] ..."></div> */}

{/* <div className="flex items-center gap-4">
  <img className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZuaW9DiKuawg4mfnaRTUe58E2_ZepJCpDA&s" />
  <div className="font-medium">
    <p className="font-mono text-xs text-blue-500 uppercase dark:text-blue-400">Speed</p>
    <p className="mt-2 text-base text-gray-700 dark:text-gray-300">Built for power users</p>
    <p className="mt-1 text-sm leading-relaxed text-balance text-gray-500">
      Work faster than ever with customizable keyboard shortcuts
    </p>
  </div>
</div> */}

{/* <div className="bg-[url(/img/mountains.jpg)] ..."></div> */}

</Fragment>
  )
}

export default TailwindPage
