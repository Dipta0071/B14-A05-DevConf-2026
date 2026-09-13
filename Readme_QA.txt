1. What is JSX, and why is it used in React?
-JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript/TypeScript.
React uses JSX because it makes it easier to describe what the UI should look like while keeping the component's logic and UI together.
2. What is the difference between props and state?

Props are used to pass data between components, while state stores data that can change inside a component.
3. What does useState do, and where did you use it?
-I used useState in the Technology section to keep track of the selected technology. When the user selects a technology, I update the state and React updates the UI.
4. What does useEffect do, and why did you need it to load JSON data?
-I used useEffect to load the JSON data when the component loads. It is useful for side effects such as fetching external data.
5. Why does every item in .map() need a unique key?
-The key gives each list item a unique identity so React can efficiently track changes and update only the necessary elements.
6. What is conditional rendering?
-Conditional rendering means displaying different content based on a condition. I used it to show an empty-stack message when there were no selected technologies.
7. How do you pass data from parent to child, and how does a child send something back?
-Data is passed from parent to child through props. To send information back, the parent passes a callback function as a prop, and the child calls that function with the required data.