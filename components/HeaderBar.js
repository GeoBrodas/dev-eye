import { SunIcon, MoonIcon } from '@heroicons/react/outline';

function HeaderBar() {
  return (
    <div className="flex m-4 w-3/4 justify-between">
      <p className="text-2xl font-medium">devEye</p>
      <div className="flex space-x-2">
        <p className="text-xl">Dark</p>
        <SunIcon className="h-8" />
      </div>
    </div>
  );
}

export default HeaderBar;
