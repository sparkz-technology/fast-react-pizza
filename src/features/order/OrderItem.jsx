/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';

// eslint-disable-next-line no-unused-vars
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="textsm capitalize italic text-stone-500">
        {isLoadingIngredients
          ? 'Loading ingredients...'
          : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
