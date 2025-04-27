//const express = require("express");
//const cors = require("cors");
import express from 'express';
import cors from 'cors';

const app = express();

// export const data = [
//   { name: "John Doe", id: 1 },
//   { name: "John Doe2", id: 2 },
// ];

export const data = [
{
  id: 2,
  name: "1",
  imageUrl: "/assets/6.png",
  price: 10,
  options: [
    { option: "option1", checked: false },
    { option: "option2", checked: false },
    { option: "option3", checked: false },
    { option: "option4", checked: false },
  ],
  category: "art1",
  amtstars: "none",
  amountStarsNumber: 0 
},

{
  id: 4,
  name: "2",
  imageUrl: "/assets/6.png",
  price: 10,
  options: [
    { option: "option1", checked: false },
    { option: "option2", checked: false },
    { option: "option3", checked: false },
    { option: "option4", checked: false },
  ],
  category: "art1",
  amtstars: "none",
  amountStarsNumber: 0 
},


{
  id: 5,
  name: "3",
  imageUrl: "/assets/6.png",
  price: 10,
  options: [
    { option: "option1", checked: false },
    { option: "option2", checked: false },
    { option: "option3", checked: false },
    { option: "option4", checked: false },
  ],
  category: "art1",
  amtstars: "none",
  amountStarsNumber: 0 
},

{
      id: 7,
      name: "4",
      imageUrl: "/assets/9.png",
      price: 10,
      options: [
        { option: "option1", checked: false },
        { option: "option2", checked: false },
        { option: "option3", checked: false },
        { option: "option4", checked: false },
      ],
      category: "art2",
      amtstars: "none",
      amountStarsNumber: 0 
    },


]

console.log("data2: ", data)

app.use(cors());
app.use(express.json());
app.get("/api", (req, res) => {
  res.json(data)
});

// app.get('/api', (req, res) => {
//   res.json({data1 : "hello, there from server" });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});