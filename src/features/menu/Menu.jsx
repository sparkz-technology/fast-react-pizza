import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
