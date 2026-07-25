import { useRef, useEffect, useState } from "react";


export default function useToggle(initialValue = false){
    const [value, setValue] = useState(initialValue);
    const toggle = () => setValue(v => !v);
    // return {value, toggle}
    return [value, toggle]
}

// // usage
// // const {isOpen, toggleOpen} = useToggle(false);
// const [isOpen, toggleOpen] = useToggle(false);