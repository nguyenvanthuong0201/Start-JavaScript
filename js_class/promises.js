let certificasePromises = new Promise((resolve, reject) => {
  certifi = true;
  if (certifi) {
    setTimeout(() => {
      resolve("certificate yes");
    }, 3000);
  } else {
    reject("certificate no");
  }
});
certificasePromises
  .then((yes) => {
    console.log(yes);
  })
  .catch((no) => {
    console.log(no);
  });

  console.log("good morning")