```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is the problematic useEffect hook
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```