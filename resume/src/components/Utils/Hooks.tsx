import { useState, useCallback, useEffect } from "react";

export function useDebouncedAction() {
  const [lastAction, setLastAction] = useState<{
    timeOutId: number;
  } | null>(null);

  const delayAction = useCallback(
    (performAction: () => void, timeDelay: number) => {
      if (lastAction !== null) {
        clearTimeout(lastAction.timeOutId);
      }
      setLastAction({
        timeOutId: setTimeout(() => {
          setLastAction(null);
          performAction();
        }, timeDelay),
      });
    },
    [lastAction]
  );

  return delayAction;
}

/**
 * Uses `title` as the new document title
 *
 * ---
 * @param title New page title
 * @param dependencies If present, effect will only activate if the values in the list change
 */
export function useDocumentTitle(title: string, dependencies: Array<any> = []) {
  useEffect(() => {
    document.title = title;
  }, [title, ...dependencies]);
}
