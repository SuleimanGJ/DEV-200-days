import { useEffect, useRef } from "react";



function useDebounce(value, delay){
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer)
    }, [value, delay])
    return debouncedValue;
}

// // Usage - search won't fire API on every keystroke
// const debouncedQuery = useDebounce(query, 500);