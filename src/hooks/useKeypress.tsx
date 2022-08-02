import { useEffect } from 'react';

export default function useKeypress(key: string, action: Function, dependencyArray: any[]) {
  useEffect(() => {
    // TODO get proper event type in here
    function onKeyup(e: any) {
      if (e.key === key) action()
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, dependencyArray);
}