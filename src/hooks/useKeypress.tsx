import { useEffect } from "react";

export default function useKeypress(
  key: string,
  action: Function,
  dependencyArray: any[]
) {
  useEffect(() => {
    function onKeyup(e: KeyboardEvent) {
      if (e.key === key) {
        return action();
      }
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, dependencyArray);
}
