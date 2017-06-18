export function calculateTotal(itemManager, discountManager) {
  return itemManager.getItems().reduce((total, item) => {
    return itemHasDiscount(item, itemManager, discountManager) 
      ? total += calculateDiscountPrice(item, itemManager, discountManager) 
      : total += calculateRegularPrice(item, itemManager);
  }, 0);
}

function itemHasDiscount(item, itemManager, discountManager) {
  const quantity = itemManager.getQuantity(item);
  const discount = discountManager.getDiscount(item);

  return discount && quantity >= discount.quantity;
}

function calculateRegularPrice(item, itemManager) {
  return item.price * itemManager.getQuantity(item); 
}

function calculateDiscountPrice(item, itemManager, discountManager) {
  const quantity = itemManager.getQuantity(item);
  const discount = discountManager.getDiscount(item);

  const discountMultiplier = Math.floor(quantity / discount.quantity);
  const remainingRegularItems = quantity - (discountMultiplier * discount.quantity);

  return (discount.price * discountMultiplier) + (item.price * remainingRegularItems);
}

