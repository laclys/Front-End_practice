import { useEffect } from "react";
import { useBlocker } from "react-router-dom";

export const usePrompt = ({
  when = false,
  message = {},
  customFn = () => {},
}) => {
  let blocker = useBlocker(when);

  useEffect(() => {
    if (!when || blocker.state === "blocked") {
      blocker.reset?.();
    }
  }, []);

  useEffect(() => {
    async function shouldBlock() {
      if (blocker.state === "blocked") {
        let proceed = false;
        if (message) {
          proceed = window.confirm(message);
          if (proceed) {
            setTimeout(blocker.proceed, 0);
          } else {
            blocker.reset();
          }
        } else {
          new Promise((resolve, reject) => {
            customFn(resolve, reject);
          })
            .then(() => blocker.proceed())
            .catch(() => blocker.reset());
        }
      }
    }
    shouldBlock();
  }, [blocker, message]);
};

function useBeforeUnload(doBlock) {
  useEffect(() => {
    const blockCallback = (e) => {
      if (doBlock) {
        e.preventDefault();
        return (e.returnValue = "test");
      }
    };

    if (doBlock) {
      window.addEventListener("beforeunload", blockCallback);
      return () => window.removeEventListener("beforeunload", blockCallback);
    }
  }, [doBlock]);
}

export default function useCustomPrompt({
  when = false,
  message = null,
  customFn = () => {},
}) {
  useBeforeUnload(when);
  usePrompt({ when, message, customFn });
}
