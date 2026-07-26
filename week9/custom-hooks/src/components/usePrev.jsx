import { useRef, useEffect } from "react";

export default function usePrev(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// usage
// const prevCount = usePrevious(count);

// // alternative usePrev
// function useAlternativePrevious(value, initial) {
//   const ref = useRef({ target: value, previous: initial });
//   if (ref.current.target !== value) {
//     ref.current.previous = ref.current.target;
//     ref.current.target = value;
//   }
//   return ref.current.previous;
// }