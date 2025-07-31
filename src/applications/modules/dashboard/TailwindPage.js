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
    <div class="grid grid-flow-col grid-rows-4 gap-4 border-1">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
 
  <div>05</div>
  <div class="row-span-3 grid grid-rows-subgrid gap-4 ">
    <div class="row-start-2">06</div>
  </div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  
  <div>10</div>
</div>
{/* <div class="bg-[url(https://thumbs.dreamstime.com/b/pictue-sunflower-field-morning-evening-male-s-hand-holding-one-blossom-sun-shines-sky-sunset-sunrise-amazing-view-226794691.jpg)] ..."></div> */}

{/* <div class="flex items-center gap-4">
  <img class="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZuaW9DiKuawg4mfnaRTUe58E2_ZepJCpDA&s" />
  <div class="font-medium">
    <p class="font-mono text-xs text-blue-500 uppercase dark:text-blue-400">Speed</p>
    <p class="mt-2 text-base text-gray-700 dark:text-gray-300">Built for power users</p>
    <p class="mt-1 text-sm leading-relaxed text-balance text-gray-500">
      Work faster than ever with customizable keyboard shortcuts
    </p>
  </div>
</div> */}

{/* <div class="bg-[url(/img/mountains.jpg)] ..."></div> */}

</Fragment>
  )
}

export default TailwindPage
