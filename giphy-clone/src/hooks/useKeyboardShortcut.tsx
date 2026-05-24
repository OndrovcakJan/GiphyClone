import { useEffect } from "react";

interface UseKeyboardShortcutArgs {
  key: string;
  onKeyPressed: () => void;
}

export function useKeyboardShortcut({
  key,
  onKeyPressed,
}: UseKeyboardShortcutArgs) {
  useEffect(() => {
    function handleKeyDown(e: globalThis.KeyboardEvent) {
      if (e.key === key) {
        e.preventDefault();
        onKeyPressed();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, onKeyPressed]);
}

export default useKeyboardShortcut;
