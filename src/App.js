import { useState } from "react";
import Tree from "./tree/Tree";

function App() {
  
  const newInp=[
    { id: "n1", name: "name1", gender: "male", parentId: null, spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n3", name: "name3", gender: "male", parentId: "n1", spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n4", name: "name4", gender: "male", parentId: "n1", spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n5", name: "name5", gender: "female", parentId: "n3", spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n6", name: "name6", gender: "male", parentId: "n4", spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n7", name: "name7", gender: "female", parentId: "n5", spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
  ]
  const oldinput = [
    { id: "n1", name: "name1", gender: "male", parentId: null, spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n2", name: "name2", gender: "female", parentId: null, spouse: "n1",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n3", name: "name3", gender: "male", parentId: "n1", spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n4", name: "name4", gender: "male", parentId: "n1", spouse: "",spouseForChild:'', secondLine:newInp ,otherSpouse:null,otherSpouseNum:null},
    { id: "n5", name: "name5", gender: "female", parentId: "n3", spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n6", name: "name6", gender: "male", parentId: "n4", spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n7", name: "name7", gender: "female", parentId: "n5", spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n8", name: "Father", gender: "male", parentId: "n6", spouse: "n16",spouseForChild:'', secondLine:null,otherSpouse:null ,otherSpouseNum:null},
    { id: "n9", name: "me", gender: "male", parentId: "n8", spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n10", name: "name10", gender: "female", parentId: "n8", spouse: "n14",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n11", name: "name11", gender: "male", parentId: null, spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n12", name: "name12", gender: "male", parentId: "n2", spouse: "n17",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n13", name: "name13", gender: "male", parentId: "n2", spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n14", name: "name14", gender: "female", parentId: null, spouse: "",spouseForChild:'n10', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n15", name: "name15", gender: "female", parentId: 'n11', spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n16", name: "mother", gender: "female", parentId: null, spouse: "",spouseForChild:'n8', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n17", name: "name17", gender: "female", parentId: null, spouse: "",spouseForChild:'n12', secondLine:null ,otherSpouse:null,otherSpouseNum:null},
    { id: "n18", name: "name18", gender: "male", parentId: null, spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:"n10",otherSpouseNum:1},
    { id: "n19", name: "other", gender: "female", parentId: null, spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:"n8",otherSpouseNum:1},
    { id: "n20", name: "name20", gender: "female", parentId: null, spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:"n10",otherSpouseNum:2},
    { id: "n21", name: "name21", gender: "female", parentId: null, spouse: "",spouseForChild:'', secondLine:null ,otherSpouse:"n10",otherSpouseNum:3},
  ];
  const input=[
    { id: "n1", name: "name1", gender: "male", parentId: null,secondParent:null, spouse: "",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n2", name: "name2", gender: "female", parentId: null,secondParent:null, spouse: "n1",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
    { id: "n3", name: "name3", gender: "female", parentId: "n1",secondParent:'n2', spouse: "n4",spouseForChild:'', secondLine:null,otherSpouse:null,otherSpouseNum:null },
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
