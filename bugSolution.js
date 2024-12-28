```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Added count to dependency array
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```