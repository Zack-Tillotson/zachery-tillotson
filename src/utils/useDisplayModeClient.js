// This hook is used to handle the browser display-mode while conforming to client vs server render situations.

import {useState, useEffect} from 'react';

function useDisplayModeClient(mode) {

  const [isDisplayModeMatch, saveIsDisplayModeMatch] = useState(false);

  useEffect(() => {
    const isOverride = localStorage.getItem('display-mode') === mode;
    if(isOverride) return saveIsDisplayModeMatch(true);

    const isMediaMatch = window.matchMedia('(display-mode: standalone)').matches;
    saveIsDisplayModeMatch(isMediaMatch);
  }, [mode]);

  return [isDisplayModeMatch];
}

export default useDisplayModeClient;