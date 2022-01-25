let arr = [
  {
    genter: "male",
    name: "q",
  },
  {
    genter: "female",
    name: "a",
  },
  ,
  {
    genter: "male",
    name: "b",
  },
  {
    genter: "female",
    name: "c",
  },
  {
    genter: "female",
    name: "e",
  },
  {
    genter: "female",
    name: "r",
  },
];

console.log(arr.filter((item) => item.genter == "male"));
