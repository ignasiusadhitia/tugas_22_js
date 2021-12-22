console.log("FOREACH\n=====================================");

const panggilForEach = () => {
  const teks = "Saya ingin belajar bersama";
  const teksSplit = teks.split(" ");
  teksSplit.forEach((element, index) =>
    console.log("Item :", element, "Index ke", index)
  );
};

panggilForEach();

console.log("\natau\n=====================================");
const panggilForEach2 = () => {
  const teks = "Saya ingin belajar bersama";
  teks
    .split(" ")
    .forEach((element, index) =>
      console.log("Item :", element, "Index ke", index)
    );
};

panggilForEach2();
