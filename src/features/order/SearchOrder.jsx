import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4
            py-2 text-sm placeholder-stone-500 transition-all 
            duration-300 focus:outline-none focus:ring
            focus:ring-yellow-500 focus:ring-opacity-50
            sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
