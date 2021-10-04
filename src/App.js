import Tree from "./tree/Tree";

function App() {
  const input = [
    { id: "n1", name: "name1", gender: "male", parentId: null, spouse: [] },
    { id: "n2", name: "name2", gender: "female", parentId: null, spouse: [] },
    { id: "n3", name: "name3", gender: "male", parentId: "n1", spouse: [] },
    { id: "n4", name: "name4", gender: "male", parentId: "n1", spouse: [] },
    { id: "n5", name: "name5", gender: "female", parentId: "n3", spouse: [] },
    { id: "n6", name: "name6", gender: "male", parentId: "n4", spouse: [] },
    { id: "n7", name: "name7", gender: "female", parentId: "n5", spouse: [] },
    { id: "n8", name: "name8", gender: "male", parentId: "n6", spouse: [] },
    { id: "n9", name: "name9", gender: "male", parentId: "n8", spouse: [] },
    { id: "n10", name: "name10", gender: "female", parentId: "n8", spouse: [] },
    { id: "n11", name: "name11", gender: "male", parentId: null, spouse: [] },
    { id: "n12", name: "name12", gender: "male", parentId: "n2", spouse: [] },
    { id: "n13", name: "name13", gender: "male", parentId: "n2", spouse: [] },
    { id: "n14", name: "name14", gender: "female", parentId: null, spouse: [] },
  ];
  return (
    <div>
      <Tree inputData={input} />
    </div>
  );
}

export default App;
