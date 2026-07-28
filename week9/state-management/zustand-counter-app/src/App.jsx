import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function App() {
  const count = useCounterStore(state => state.count)
  const increment = useCounterStore(state => state.increment)
  const decrement = useCounterStore(state => state.decrement)
  return (
    <>
      <h1>Zustand</h1>
      <p>Counter: {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
