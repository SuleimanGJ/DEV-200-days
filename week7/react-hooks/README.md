# What is React.memo or memo ?

- is Higher-Order Component (HOC) that prevents unnecessary re-renders of a component when its props have not changed
  

### Syntax 
- const Child = React.memo(ChildComponent)


# Why use React.memo ? 
- Normally, when a parent component re-renders, all of its child components also re-render, even if their props are the same



# How does it work ?
- React.memo performs a shallow comparison of the previous props and new props, and only for primitives data types not for non-primitives like object/function


# Fixing Object/Function props

- Use useMemo for objects, array, computed value or expensive calculations:
` const user = useMemo(() => ({name: "Abdi"}), []);
  <Child user={user} />`

- Use useCallback for functions
`const handleClick = useCallback(() => {
    console.log("Child comp clicked");
  }, [])

  <Child onClick={handleClick}/> `


# When to use React.memo 
- Components that render frequently
- Components with expensive rendering
- Components receiving the same props most of the time
- Large lists and tables

### Note
- Avoid using it everywhare. React.memo itself has a small comparison cost, so it's most beneficial when skipping a render saves more work than conparing props.




# useMemo
- is a React Hook that caches (memoizes) the result of an espensive calculation so React doesnot recompute it on every render.
- React.memo -> memoizes a component 
- useMemo -> memoizes a value 

- Every render creates a new object, so {} !== {} // true, although nothing changed inside objects
- {} !== {} // true

## Syntax
` const memoizedValue = useMemo(() => {
    // expensive calculations
}, [dependencies]) `

# When to use useMemo
- Expensive calculations (sorting, filtering, searching, large computations)
- Keeping object/array references stable for cached (memoized)
- ### Don't use it for every variable. Simple calculation like const total = price * quantity


# Real World Examples - y'll commoly use useMemo for things like:
- Filtering a large list of products
- Sorting thousands of records
- Computing dashboard statistics
- Creating stable options or config objects passed to memoized child components




# useCallback
- is a React Hook that caches (memoizes) a function so React can reuse the same function instance between renders.
- React.memo -> memoizes a component 
- useMemo -> memoizes a value 
- useCallback -> memoizes a function 

- Every render creates a new funtion, so oldFunction === newFunction // false, although nothing changed inside functions
- oldFunction === newFunction // false

## Syntax
`const memoizedFunction = useCallback(() => {
    // function body
}, [dependencies])`




# When to use useCallback
- Passing callback functions to React.memo components
- Functions used in dependency arrays of useEffect
- Performance optimization in large or frequently rendered components

- ### Avoid using it for every function. If the function is simple and isnot passed to memoized children or used as a dependency, useCallback usually adds unnecessary complexity.


# Mental model

- ## React.memo -> Don't re-render this component if its props are the same
- ## useMemo -> Don't recompute this value if its dependencies are the same
- ## useCallback -> Don't recreate this function if its dependencies are the same




# Difference between useState and useRef

## useState
const [count, setCount] = useState(0)

setCount(count + 1)

- Causes a re-render
- Updates the UI

## useRef
const countRef = useRef(null)

countRef.current++

- Not re-render
- UI doesnot update automatically


## Example

`function App(){
    const [count, setCount] = useState(0)
    const renders = useRef(0)

    renders.current++;
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Renders: {renders.current}</h1>

            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )}
`

- Every time the component renders, render.current increases.


## Example - Store previous value

`function App(){
    const [count, setCount] = useState(0)
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Renders: {prevCount.current}</h1>

            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )}
`



# When to use useRef

- ## Access DOM elements
- Focus an input
- Scroll to an element
- Play/Pause a vedio

- ## Store mutable values
- Timer IDs
- Previous state
- WebSocket connections
- Values that should not triger UI updates

# When not to use it 
- for values that shoud apear in the UI. for those use useState