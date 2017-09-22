# Zunder
https://github.com/AaronBDC/zunder

### Getting Started
From Section 4 - Managing App State with Redux

### Issues
- Selecting a book not working as expected.
- An error occurs when selecting a book.
-Error Stack:
````
Uncaught Error: Given action "BOOK_SELECTED", reducer "activeBook" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.
    at combination (bundle.js:21113)
    at dispatch (bundle.js:20515)
    at Object.selectBook (bundle.js:21163)
    at onClick (bundle.js:21823)
    at Object.ReactErrorUtils.invokeGuardedCallback (bundle.js:4528)
    at executeDispatch (bundle.js:4328)
    at Object.executeDispatchesInOrder (bundle.js:4351)
    at executeDispatchesAndRelease (bundle.js:3781)
    at executeDispatchesAndReleaseTopLevel (bundle.js:3792)
    at Array.forEach (<anonymous>)
````
### Acknowledgements
- Thank you to my wonderfully awesome fiancé Schana Carter and my React sifu's: Brad Traversy, David Katz, Stephen Grider, and "Jenny".
