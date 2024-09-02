import React, { useEffect } from 'react'
import GLOBE from 'vanta/src/vanta.globe'

function Globe() {
    useEffect(()=>{
        GLOBE({
            el: '#globe',
        })
    })
  return (
    <div>
      
    </div>
  )
}

export default Globe
