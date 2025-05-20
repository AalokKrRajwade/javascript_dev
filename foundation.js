// Code Execution , call stack

// JS Execution Context: (Global EC, Functional EC, Eval EC)

// 1. JS creates Global excution context/phase and allocated in 'this' keyword
// 2. Next it creates memory phase
//    In this phase,the variables are set to undefined until the execution phase(next phase) and the 
//    functions are set to their definitions.
// 3. Next it creates the execution phase:
//    In this phase,the variables are initialsed to given values and when the function's are called
//    (and for every function it creates new variable environment and execution thread), further for every 
//    thread it creates a memory phase and execution phase for the function just like the main one.

// after the complete execution of the global EC of function it gets deleted

// For live demo:
// browser > inspect > Sources > snippet > new snippet
// create a snippet with few functions and visually experience the call stack.