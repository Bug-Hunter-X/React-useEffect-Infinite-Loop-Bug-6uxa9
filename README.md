# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying a state variable within the effect without including it in the dependency array. 

The `bug.js` file contains the erroneous code, resulting in an infinite loop.  The `bugSolution.js` file provides the corrected version.  This showcases the importance of correctly managing dependencies within `useEffect` to prevent unexpected behavior and performance issues.