// import Trydrag from "./tree/components/tryDrag/TryDrag";
import Tree from "./tree/Tree";

function App() {
  const input = [
    { id: "n1", name: "name1", gender: "male", parentId: null, spouse: "",spouseForChild:'' },
    { id: "n2", name: "name2", gender: "female", parentId: null, spouse: "n1",spouseForChild:'' },
    { id: "n3", name: "name3", gender: "male", parentId: "n1", spouse: "",spouseForChild:'' },
    { id: "n4", name: "name4", gender: "male", parentId: "n1", spouse: "",spouseForChild:'' },
    { id: "n5", name: "name5", gender: "female", parentId: "n3", spouse: "",spouseForChild:'' },
    { id: "n6", name: "name6", gender: "male", parentId: "n4", spouse: "",spouseForChild:'' },
    { id: "n7", name: "name7", gender: "female", parentId: "n5", spouse: "",spouseForChild:'' },
    { id: "n8", name: "name8", gender: "male", parentId: "n6", spouse: "",spouseForChild:'' },
    { id: "n9", name: "name9", gender: "male", parentId: "n8", spouse: "",spouseForChild:'' },
    { id: "n10", name: "name10", gender: "female", parentId: "n8", spouse: "",spouseForChild:'' },
    { id: "n11", name: "name11", gender: "male", parentId: null, spouse: "",spouseForChild:'' },
    { id: "n12", name: "name12", gender: "male", parentId: "n2", spouse: "",spouseForChild:'' },
    { id: "n13", name: "name13", gender: "male", parentId: "n2", spouse: "",spouseForChild:'' },
    { id: "n14", name: "name14", gender: "female", parentId: null, spouse: "n14",spouseForChild:'n10' },
    { id: "n15", name: "name15", gender: "female", parentId: 'n11', spouse: "",spouseForChild:'' },
    { id: "n16", name: "name16", gender: "female", parentId: null, spouse: "n6",spouseForChild:'n6' },
    { id: "n17", name: "name17", gender: "female", parentId: null, spouse: "n12",spouseForChild:'n12' },
  ];
  return (
    <div>
      <Tree distanceByX={75} distanceByY={50} textFontSize='12px' childLineColor="#ccc" spouseLineColor='green ' arrowHeadSize={1} WIDTH='40px' HEIGHT="50px" inputData={input} />
      {/* <Trydrag /> */}
    </div>
  );
}

export default App;
