import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';

function HeaderBar() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function themeChanger() {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="h-6 sm:h-8"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className="h-6 sm:h-8"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  }

  return (
    <div className="flex m-4 w-3/4 md:w-7/12 justify-between">
      <p className="text-xl sm:text-2xl font-medium">devEye</p>
      <div className="flex space-x-2">
        <p className="text-base sm:text-xl select-none">
          {theme === 'dark' ? 'Dark' : 'Light'}
        </p>
        {themeChanger()}
      </div>
    </div>
  );
}

export default HeaderBar;
