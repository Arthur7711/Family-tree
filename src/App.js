import { useState } from "react";
import Tree from "./tree/Tree";

function App() {
  

  const inp2=[
    { id: "n1", name: "father", gender: "male", parentId: null,secondParent:null, spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n2", name: "mother", gender: "female", parentId: null,secondParent:null, spouse: "n1",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n3", name: "me", gender: "male", parentId: "n1",secondParent:'n2', spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
  ]
  const input=[
    { id: "n1", name: "name1", gender: "male", parentId: null,secondParent:null, spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n2", name: "name2", gender: "female", parentId: null,secondParent:null, spouse: "n1",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n3", name: "name3", gender: "female", parentId: "n1",secondParent:'n2', spouse: "n4",spouseForChild:'', secondLine:inp2,otherSpouse:null,otherSpouseNum:null },
    { id: "n4", name: "name4", gender: "male", parentId: null,secondParent:null, spouse: "",spouseForChild:'n3', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n5", name: "name5", gender: "female", parentId: "n3",secondParent:'n3', spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n6", name: "name6", gender: "male", parentId: "n3",secondParent:'n3', spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n7", name: "name7", gender: "female", parentId: "n5",secondParent:"n5", spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n8", name: "name8", gender: "male", parentId: "n6",secondParent:"n6", spouse: "n9",spouseForChild:'', secondLine:null,otherSpouse:null ,otherSpouseNum:null},
    { id: "n9", name: "name9", gender: "female", parentId: "",secondParent:"", spouse: "",spouseForChild:'n8', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n10", name: "name9", gender: "female", parentId: "",secondParent:"", spouse: "",spouseForChild:null, secondLine:null,otherSpouse:'n8',otherSpouseNum:1 },
    { id: "n11", name: "name9", gender: "female", parentId: "",secondParent:"", spouse: "",spouseForChild:null, secondLine:null,otherSpouse:'n8',otherSpouseNum:2 },
  ]
  const [state,setState]=useState(input)
  
  
  return (
    // lineType can be smooth, grid , straight
    <div>
      <Tree input={input} changingState={setState} lineType='grid' distanceByX={75} distanceByY={50} textFontSize='12px' childLineColor="#ccc" spouseLineColor='#ccc ' arrowHeadSize={1} WIDTH='40px' HEIGHT="50px" inputData={state} />
    </div>
  );
}

export default App;
