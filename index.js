const { default: axios } = require("axios");

const config = {
  headers: {
    Authorization: `Bearer 10|dfOuLUD379jZErHJBVdAMrDDdvDjTez06qoi67ws`,
    "content-type": "application/json",
  },
};

axios
  .post(
    "http://127.0.0.1:8000/api/create-product-order",
    JSON.stringify({
      products: [
        { product_id: 1, quantity: 2 },
        { product_id: 2, quantity: 4 },
      ],
      gift_code: "232423",
    }),
    config
  )
  .then((res) => console.log(res.data))
  .catch((e) => console.log(e));
