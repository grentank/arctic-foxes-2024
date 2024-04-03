const shop = {
  fruits: {
    apples: {
      goldenDelicious: {
        quantity: 0,
      },
      redDelicious: {
        quantity: 10,
      },
      regular: {
        quantity: 12,
      },
    },
    oranges: {
      sicilian: {
        quantity: 2,
      },
      regular: {
        quantity: 3,
      },
      sour: {
        quantity: 4,
      },
      sweet: {
        quantity: 5,
      },
    },
  },
  vegetables: {
    tomatoes: {
      plumLike: {
        quantity: 0,
      },
    },
  },
  dairy: {
    milk: {
      quantity: 24,
    },
  },
  bags: {
    quantity: 102,
  },
};

function countItems(obj) {
  let count = 0;
  for (const key in obj) {
    const element = obj[key];
    if (key === 'quantity') count += element;
    if (typeof element === 'object') count += countItems(element);
  }
  return count;
}

console.log(countItems(shop));
