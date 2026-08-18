import HappyMomentDisplayer from "./Redux_components/happyMomentDisplayer"
import SadMomentDisplayer from "./Redux_components/sadMomentDisplayer"
import HappyIncrementer from "./Redux_components/happyincrementer"
import SadIncrementer from "./Redux_components/sadincrementer"


function App() {
  return (<div>
    <div>
      <HappyMomentDisplayer/>
      <SadMomentDisplayer/>
    </div>
    
    <div>
      <HappyIncrementer/>
      <SadIncrementer/>
    </div>
  </div>)
}

export default App
