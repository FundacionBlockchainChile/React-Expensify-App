import moment from 'moment'


export default [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 200,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Arriendo",
    note: "",
    amount: 750000,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 2500,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
