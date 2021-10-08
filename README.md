# **simple library for building and showing family tree**

## for installing --> npm i Name_of_lib

### for giving distance bettwin elements by X --> _distanceByX={Number}_

### for giving distance bettwin elements by Y --> _distanceByY={Number}_

### for giving font-size --> _textFontSize={string/'12px','2em','2rem'}_

### for giving color childs lines --> _childsLineColor={string/'red','#ccc'}_

### for giving color spouse lines --> _spouseLineColor={string/'red','#ccc'}_

### for giving size toarrow --> _arrowHeadSize={Number}_

### for giving width to each person element--> WIDTH={string/'12px','2em','2rem'}\_

### for giving height to each person element--> HEIGHT={string/'12px','2em','2rem'}\_

### data should be like --> inputData={[

    { id: "n1", name: "name1", gender: "male", parentId: null, spouse: "n2",childs:['n3','n4'] },
    { id: "n2", name: "name2", gender: "female", parentId: null, spouse: "n1",childs:["n12","n13"] },
    { id: "n3", name: "name3", gender: "male", parentId: "n1", spouse: "",childs:['n5'] },
    { id: "n4", name: "name4", gender: "male", parentId: "n1", spouse: "",childs:['n6'] }]}
