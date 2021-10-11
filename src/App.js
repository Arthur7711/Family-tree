import Tree from "./tree/Tree";

function App() {
  const input = [
    { id: "n1", name: "name1", gender: "male", parentId: null, spouse: "",spouceForChild:'' },
    { id: "n2", name: "name2", gender: "female", parentId: null, spouse: "n1",spouceForChild:'' },
    { id: "n3", name: "name3", gender: "male", parentId: "n1", spouse: "",spouceForChild:'' },
    { id: "n4", name: "name4", gender: "male", parentId: "n1", spouse: "",spouceForChild:'' },
    { id: "n5", name: "name5", gender: "female", parentId: "n3", spouse: "",spouceForChild:'' },
    { id: "n6", name: "name6", gender: "male", parentId: "n4", spouse: "",spouceForChild:'' },
    { id: "n7", name: "name7", gender: "female", parentId: "n5", spouse: "",spouceForChild:'' },
    { id: "n8", name: "name8", gender: "male", parentId: "n6", spouse: "",spouceForChild:'' },
    { id: "n9", name: "name9", gender: "male", parentId: "n8", spouse: "",spouceForChild:'' },
    { id: "n10", name: "name10", gender: "female", parentId: "n8", spouse: "n14",spouceForChild:'' },
    { id: "n11", name: "name11", gender: "male", parentId: null, spouse: "",spouceForChild:'' },
    { id: "n12", name: "name12", gender: "male", parentId: "n2", spouse: "",spouceForChild:'' },
    { id: "n13", name: "name13", gender: "male", parentId: "n2", spouse: "",spouceForChild:'' },
    { id: "n14", name: "name14", gender: "female", parentId: null, spouse: "",spouceForChild:'n10' },
    { id: "n15", name: "name15", gender: "female", parentId: 'n11', spouse: "",spouceForChild:'' },
    { id: "n16", name: "name16", gender: "female", parentId: null, spouse: "n6",spouceForChild:'n6' },
    { id: "n17", name: "name17", gender: "female", parentId: null, spouse: "n12",spouceForChild:'n12' },
  ];
  return (
    <div>
      <Tree distanceByX={75} distanceByY={50} textFontSize='12px' childsLineColor="#ccc" spouseLineColor='green ' arrowHeadSize={3} WIDTH='40px' HEIGHT="50px" inputData={input} />
    </div>
  );
}

export default App;
