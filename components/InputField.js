import { SearchIcon } from '@heroicons/react/outline';
import { useRef } from 'react';

function InputField(props) {
  const enteredQuery = useRef();

  function onSearch() {
    const query = enteredQuery.current.value;

    if (!query) {
      return;
    }

    props.trigger(query);
    enteredQuery.current.value = '';
  }

  return (
    <div className="flex items-center sm:w-3/4 md:w-7/12 justify-around text-pink-50 bg-pink-300 rounded-xl p-1 md:p-3">
      <SearchIcon className="h-5 sm:h-6 mr-2" />

      <input
        ref={enteredQuery}
        placeholder="Search Dev"
        className="outline-none text-sm md:text-base flex-grow placeholder-pink-900 bg-transparent"
      />
      <button
        onClick={onSearch}
        className="px-2 md:px-4 text-sm md:text-base ml-2 py-1 md:py-3 sm:hover:scale-105 transition duration-100 ease-linear rounded-xl bg-gradient-to-bl from-pink-800 to-pink-500"
      >
        Search
      </button>
    </div>
  );
}

export default InputField;
