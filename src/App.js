// import Peer from "./tree/components/Peer";
import Tree from "./tree/Tree";

function App() {
  const input = [
    { id: "n1", name: "name1", gender: "male", parentId: null, spouse: "n2",childs:['n3','n4'] },
    { id: "n2", name: "name2", gender: "female", parentId: null, spouse: "n1",childs:["n12","n13"] },
    { id: "n3", name: "name3", gender: "male", parentId: "n1", spouse: "",childs:['n5'] },
    { id: "n4", name: "name4", gender: "male", parentId: "n1", spouse: "",childs:['n6'] },
    { id: "n5", name: "name5", gender: "female", parentId: "n3", spouse: "",childs:['n7'] },
    { id: "n6", name: "name6", gender: "male", parentId: "n4", spouse: "",childs:['n8'] },
    { id: "n7", name: "name7", gender: "female", parentId: "n5", spouse: "",childs:[] },
    { id: "n8", name: "name8", gender: "male", parentId: "n6", spouse: "",childs:["n9","n10"] },
    { id: "n9", name: "name9", gender: "male", parentId: "n8", spouse: "",childs:[] },
    { id: "n10", name: "name10", gender: "female", parentId: "n8", spouse: "",childs:[] },
    { id: "n11", name: "name11", gender: "male", parentId: null, spouse: "",childs:[] },
    { id: "n12", name: "name12", gender: "male", parentId: "n2", spouse: "",childs:[] },
    { id: "n13", name: "name13", gender: "male", parentId: "n2", spouse: "",childs:[] },
    { id: "n14", name: "name14", gender: "female", parentId: null, spouse: "",childs:[] },
  ];
  // const input = [
  //   { id: "n1", name: "name1", gender: "male", parents: [], spouse: "n2" },
  //   { id: "n2", name: "name2", gender: "female", parents: [], spouse: "n1" },
  //   { id: "n3", name: "name3", gender: "male", parents: ["n1"], spouse: "" },
  //   { id: "n4", name: "name4", gender: "male", parents: ["n1"], spouse: "" },
  //   { id: "n5", name: "name5", gender: "female", parents: ["n3"], spouse: "" },
  //   { id: "n6", name: "name6", gender: "male", parents: ["n4"], spouse: "" },
  //   { id: "n7", name: "name7", gender: "female", parents: ["n5"], spouse: "" },
  //   { id: "n8", name: "name8", gender: "male", parents: ["n6"], spouse: "" },
  //   { id: "n9", name: "name9", gender: "male", parents: ["n8"], spouse: "" },
  //   { id: "n10", name: "name10", gender: "female", parents: ["n8"], spouse: ""},
  //   { id: "n11", name: "name11", gender: "male", parents: [], spouse: "" },
  //   { id: "n12", name: "name12", gender: "male", parents: ["n2"], spouse: "" },
  //   { id: "n13", name: "name13", gender: "male", parents: ["n2"], spouse: "" },
  //   { id: "n14", name: "name14", gender: "female", parents: [], spouse: "" },
  // ];
  return (
    <div>
      <Tree inputData={input} />
      {/* <Peer inputData={input} /> */}
    </div>
  );
}

export default App;
