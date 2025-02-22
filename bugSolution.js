```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    //This is the correct useEffect hook that solves the issue
    const startInterval = () => {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    };

    const stopInterval = () => clearInterval(intervalId);

    startInterval();
    return stopInterval;
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```