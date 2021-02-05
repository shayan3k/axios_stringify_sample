const { default: axios } = require("axios");

axios({
  url: "http://127.0.0.1:8000/api/create-offer-order",
  data: JSON.stringify({
    offers: [
      { offer_id: 1, quantity: 2 },
      { offer_id: 2, quantity: 4 },
    ],
  }),
  method: "post",
  headers: {
    "content-type": "application/json",
  },
})
  .then((res) => console.log(res.data))
  .catch((e) => console.log(e));
