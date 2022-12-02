import React from 'react'
import OurTeam from './components/ourteam/OurTeam'
import PodLover from './components/podlover/PodLover'

const App = () => {
  return (
    <>
      <OurTeam />
      <OurTeam isAdvisor={true} />
      <PodLover />
    </>
  )
}

export default App