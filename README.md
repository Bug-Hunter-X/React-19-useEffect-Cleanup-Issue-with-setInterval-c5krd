# React 19 useEffect Cleanup Issue with setInterval

This repository demonstrates a common issue with the `useEffect` hook in React 19 when using `setInterval` without proper cleanup.  The problem arises when the component unmounts before the `setInterval` is cleared, causing memory leaks and potentially unexpected behavior.

The `bug.js` file showcases the flawed implementation. The `bugSolution.js` file provides a corrected version.

## Problem

The incorrect usage of `useEffect` with `setInterval` without proper cleanup can lead to memory leaks.  Even after the component unmounts, the `setInterval` continues to run, creating unnecessary and potentially problematic state updates or function calls.