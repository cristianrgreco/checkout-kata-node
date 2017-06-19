import { preconditions } from './preconditions';

export function calculateTotal(itemManager, discountManager) {
  preconditions
    .shouldBeDefined(itemManager)
    .shouldBeDefined(discountManager);

  const itemHasDiscount = item => {
    const quantity = itemManager.getQuantity(item);
    const discount = discountManager.getDiscount(item);

    return discount && quantity >= discount.quantity;
  };

  const calculateRegularPrice = item => {
    return item.price * itemManager.getQuantity(item);
  };

  const calculateDiscountPrice = item => {
    const quantity = itemManager.getQuantity(item);
    const discount = discountManager.getDiscount(item);

    const discountMultiplier = Math.floor(quantity / discount.quantity);
    const remainingRegularItems = quantity - (discountMultiplier * discount.quantity);

    return (discount.price * discountMultiplier) + (item.price * remainingRegularItems);
  };

  return itemManager.getItems().reduce((total, item) => {
    if (itemHasDiscount(item)) {
      return total + calculateDiscountPrice(item);
    } else {
      return total + calculateRegularPrice(item);
    }
  }, 0);
}
