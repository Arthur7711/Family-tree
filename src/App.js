import Tree from "./tree/Tree";

function App() {
  const input = [
    { id: "n1", name: "name1", parentId: null },
    { id: "n2", name: "name2", parentId: null },
    { id: "n3", name: "name3", parentId: "n1" },
    { id: "n4", name: "name4", parentId: "n1" },
    { id: "n5", name: "name5", parentId: "n3" },
    { id: "n6", name: "name6", parentId: "n4" },
    { id: "n7", name: "name7", parentId: "n5" },
    { id: "n8", name: "name8", parentId: "n6" },
    { id: "n9", name: "name9", parentId: "n8" },
    { id: "n10", name: "name10", parentId: "n8" },
    { id: "n11", name: "name11", parentId: null },
    { id: "n12", name: "name12", parentId: "n2" },
    { id: "n13", name: "name13", parentId: "n2" },
    { id: "n14", name: "name14", parentId: null },
  ];
  return (
    <div>
      <Tree input={input} />
    </div>
  );
}

export default App;
