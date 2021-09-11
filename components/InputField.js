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
    <div className="flex items-center w-3/4 justify-around text-pink-50 bg-pink-300 rounded-xl p-3">
      <SearchIcon className="h-6 mr-2" />

      <input
        ref={enteredQuery}
        placeholder="Search Dev"
        className="outline-none flex-grow placeholder-pink-900 bg-transparent"
      />
      <button
        onClick={onSearch}
        className="px-4 ml-2 py-3 hover:scale-105 transition duration-100 ease-linear rounded-xl bg-gradient-to-bl from-pink-800 to-pink-500"
      >
        Search
      </button>
    </div>
  );
}

export default InputField;
