import express from "express";
import cors from "cors";

const app = express();

//key is id, so make sure no duplicates
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
    amountStarsNumber: 0,
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
    amountStarsNumber: 0,
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
    amountStarsNumber: 0,
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
    amountStarsNumber: 0,
  },

  //////

  {
    id: 8,
    name: "5",
    imageUrl: "/assets/10.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art2",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 9,
    name: "6",
    imageUrl: "/assets/11.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art2",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 10,
    name: "7",
    imageUrl: "/assets/12.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 11,
    name: "8",
    imageUrl: "/assets/13.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 12,
    name: "9",
    imageUrl: "/assets/14.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 13,
    name: "10",
    imageUrl: "/assets/15.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 14,
    name: "11",
    imageUrl: "/assets/16.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 15,
    name: "12",
    imageUrl: "/assets/17.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art3",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 16,
    name: "13",
    imageUrl: "/assets/18.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art4",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 17,
    name: "14",
    imageUrl: "/assets/19.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art4",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 18,
    name: "15",
    imageUrl: "/assets/20.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art4",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 19,
    name: "16",
    imageUrl: "/assets/21.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art5",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 20,
    name: "17",
    imageUrl: "/assets/22.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art5",
    amtstars: "none",
    amountStarsNumber: 0,
  },
  {
    id: 21,
    name: "18",
    imageUrl: "/assets/23.png",
    price: 10,
    options: [
      { option: "option1", checked: false },
      { option: "option2", checked: false },
      { option: "option3", checked: false },
      { option: "option4", checked: false },
    ],
    category: "art5",
    amtstars: "none",
    amountStarsNumber: 0,
  },
];

console.log("data2: ", data);

app.use(cors());
app.use(express.json());
app.get("/api", (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
