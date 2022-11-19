const dataAneh = {
  statusCode: 200,
  listing: [
    {
      id: 1,
      name: "budi",
      hobbies: [
        {
          day: "monday",
          activity: "running",
          location: "sport hall",
        },
      ],
    },
    {
      id: 2,
      name: "ahmad",
      hobbies: [
        {
          day: "monday",
          activity: "swimming",
          location: "empang",
        },
      ],
    },
  ],
};

// const isiAhmad = dataAneh.listing[1].hobbies;
// console.log(isiAhmad);

// const isiAhmad = dataAneh.listing.filter((item) => {
//   return item.name === "ahmad";
// });

// for (const i in isiAhmad[0].hobbies[0]) {
//   console.log(isiAhmad[0].hobbies[0][i]);
// }

const getAhmad = () => {
  const isiAhmad = dataAneh.listing.filter((item) => {
    return item.name === "ahmad";
  });

  for (const i in isiAhmad[0].hobbies[0]) {
    console.log(isiAhmad[0].hobbies[0][i]);
  }
};

getAhmad();
