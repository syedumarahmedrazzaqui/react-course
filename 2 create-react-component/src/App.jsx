import KgButton from "./KgButton"
import Hello from "./Hello";
// if we want to import component we have to use this method and the comp file we have to export it
import Random from "./Random";

// we can create a components on other file and can use it many time like Random comp 
//and what we change on that file it will change in all Random tags which we create
//we have to name a component first letter should be capital
function App(){
  return (
    <div>
      <h1>hello arold how</h1>
      <KgButton></KgButton>
      <p>hi</p>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}

export default App
