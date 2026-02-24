1. What is the difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll?
   Ans:
   getElementById() getElementsByClassName() querySelector() querySelectorAll()
   It is selected only by id name of html It is selected only by class name of html It can select id or class both by css selector type only one It can select id or class both by css selector type multiple matching
   Returns a single element Returns multiple elements It Returns the first matching element Returns all matching elements
   It givs Element It givs HTMLCollection It givs Element It gives NodeList
   When selecting a unique element like id. When selecting multiple elements with same class name When needing flexible single-element selection When selecting multiple elements using complex selectors

2. How do you create and insert a new element into the DOM?
   Ans: to create and insert a new element into the DOM,
3. First create the element by document.createElement (“element name”)
4. Add content, attribute or element
5. Use .appendChild(newDiv) insert new element
   Example:
   const newDiv = document.createElement("div");
   newDiv.innerText = "Hello World";
   document.body.appendChild(newDiv);

6. What is Event Bubbling? And how does it work?
   Ans: Event bubbling in Javascript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.
7. It starts when the event triggers on a element or child or parent.
8. The event moves up to the parent element to find triggered event
9. Then to the grandparent element.
10. It continues upward until it reaches the document object
11. What is Event Delegation in JavaScript? Why is it useful?
    Ans: Event delegation is a technique in JavaScript where a parent element handles events for its child elements, even if the children are added dynamically after the page loads. This works because events in JavaScript bubble up from the target element to its ancestors.
    Why is it useful:
12. It saves memory usage
13. It reduced number of event listeners to inprove performance
14. It keeps code clean
15. It works dynamically of added elements

16. What is the difference between preventDefault() and stopPropagation() methods?
    Ans:
    preventDefault() stopPropagation()
    Stops the browser’s default behaviour Stops the event from bubbling or capturing
    It Does not stop event propagation It Stops the event from moving to parent elements
    Prevent browser form submission or reloading while clicking buttons or links. Prevent event handlers from running child to parent or grandparent
    It prevents default browser behaviour It stops Event flow (bubbling/capturing phase)
