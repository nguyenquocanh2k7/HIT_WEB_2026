const products = [
  { id: 1, name: "Laptop", price: 2000, category: "electronics", amount: 20 },
  { id: 2, name: "Phone", price: 1000, category: "electronics", amount: 2 },
  { id: 3, name: "Book", price: 20, category: "book", amount: 10 },
  { id: 4, name: "Keyboard", price: 100, category: "electronics", amount: 0 },
  { id: 5, name: "Mouse", price: 50, category: "accessory", amount: 15 },
];

console.log("===== DANH SÁCH SẢN PHẨM =====\n");
for (const p of products) {
  console.log(
    `ID: ${p.id} | ${p.name} | $${p.price} | ${p.category} | Số lượng: ${p.amount}`,
  );
}

console.log("\n===== SẢN PHẨM CÒN HÀNG =====\n");
for (const p of products) {
  if (p.amount > 0) {
    console.log(p.name);
  }
}

console.log("\n===== SẢN PHẨM HẾT HÀNG =====\n");
for (const p of products) {
  if (p.amount === 0) {
    console.log(p.name);
  }
}

let totalAmount = 0;
let totalValue = 0;
for (const p of products) {
  totalAmount += p.amount;
  totalValue += p.price * p.amount;
}
let avgPrice = (1.0 * totalValue) / totalAmount;

console.log("\n===== THỐNG KÊ =====\n");
console.log(`Tổng số lượng: ${totalAmount}`);
console.log(`Tổng giá trị kho: ${totalValue}`);
console.log(`Giá trung bình: ${avgPrice}`);

let maxPriceProduct = products[0];
for (const p of products) {
  if (p.price > maxPriceProduct.price) {
    maxPriceProduct = p;
  }
}
console.log("\n===== SẢN PHẨM ĐẮT NHẤT =====\n");
console.log(`${maxPriceProduct.name} voi so tien $${maxPriceProduct.price}`);

let maxAmountProduct = products[0];
for (const p of products) {
  if (p.amount > maxAmountProduct.amount) {
    maxAmountProduct = p;
  }
}
console.log("\n===== SẢN PHẨM CÓ SỐ LƯỢNG LỚN NHẤT =====\n");
console.log(
  `${maxAmountProduct.name} voi so luong ${maxAmountProduct.amount} sản phẩm`,
);

console.log("\n===== TÌM THEO ID =====\n");
for (const p of products) {
  if (p.id === 3) {
    console.log(`${p.name} - $${p.price} - ${p.category} - ${p.amount}`);
  }
}

console.log("\n===== ELECTRONICS =====\n");
for (const p of products) {
  if (p.category === "electronics") {
    console.log(p.name);
  }
}

let categoryCount = {};
for (const p of products) {
  if (!categoryCount[p.category]) {
    categoryCount[p.category] = 0;
  }
  categoryCount[p.category]++;
}
console.log("\n===== THỐNG KÊ CATEGORY =====\n");
for (const c in categoryCount) {
  console.log(`${c} : ${categoryCount[c]}`);
}

console.log("\n===== PHÂN LOẠI =====\n");
for (const p of products) {
  let type;
  if (p.price >= 1000) {
    type = "Cao cấp";
  } else if (p.price >= 100) {
    type = "Trung bình";
  } else {
    type = "Giá rẻ";
  }
  console.log(`${p.name} → ${type}`);
}
