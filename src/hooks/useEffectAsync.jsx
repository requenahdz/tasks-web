import { useEffect } from "react";

export default function useEffectAsync(effect, deps) {
  let ref = null;
  useEffect(() => {
    effect().then((res) => (ref = res));
    return () => {
      const result = ref;
      if (result && typeof result === "function") result();
    };
  }, deps);
}
