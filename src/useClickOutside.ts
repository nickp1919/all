import React, { useEffect } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLElement>, fnCallback: () => void) => {
  function handleClickOutside(event: MouseEvent) {
    if (ref.current && event.target && !ref.current.contains(event.target as Node)) {
      fnCallback();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
};

export default useClickOutside;
