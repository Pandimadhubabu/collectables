import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const buttonClassNames =
    'inline-flex items-center justify-center w-10 h-10 text-black dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer ml-6';

  return (
    <button
      aria-label="Change colour theme"
      className={buttonClassNames}
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <RiMoonClearFill className="w-5 h-5" />
      ) : (
        <RiSunFill className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeChanger;
