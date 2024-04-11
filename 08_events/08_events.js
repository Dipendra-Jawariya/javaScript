// //  Events from chai aur code
// 1. What are events in JavaScript?
// Answer: Events are actions or occurrences that happen in the browser that the JavaScript can listen for and respond to. Examples include clicks, key presses, mouse movements, etc.
// 2. How do you handle events in JavaScript?
// Answer: Events can be handled in JavaScript by attaching event listeners to DOM elements using methods like addEventListener() or by assigning event handler attributes directly in HTML.
// 3. What is event propagation and how does it work in the DOM?
// Answer: Event propagation refers to the order in which events are handled and propagated through the DOM tree. It includes two phases: capturing phase (events are captured from the root to the target) and bubbling phase (events bubble up from the target to the root). Event propagation can be controlled using the event.stopPropagation() method.
// 4. What is event delegation and how does it work?
// Answer: Event delegation is a technique where you attach a single event listener to a parent element instead of multiple event listeners to individual child elements. Events are then handled based on the target element using event bubbling. It is useful for handling events on dynamically created elements and improves performance.
// 5. What are the different ways to attach event handlers in JavaScript?
// Answer: Events can be attached using:
// addEventListener() method
// Assigning event handler attributes in HTML
// on event handler properties (e.g., onclick, onmouseover, etc.)
// Event listeners in jQuery (e.g., $(element).on('click', handler))
// 6. How do you prevent the default behavior of an event?
// Answer: The default behavior of an event can be prevented using the event.preventDefault() method. This prevents the browser's default action associated with the event from occurring.
// 7. What is event bubbling and how does it differ from event capturing?
// Answer: Event bubbling is the process where an event starts from the target element and bubbles up through its ancestors in the DOM tree. Event capturing is the opposite, where the event starts from the root of the DOM tree and propagates down to the target element.
// 8. What is the difference between event.target and event.currentTarget?
// Answer: event.target refers to the element that triggered the event, while event.currentTarget refers to the element that the event listener is attached to.
// 9. How do you remove an event listener in JavaScript?
// Answer: Event listeners can be removed using the removeEventListener() method, passing in the same event type and callback function used to add the listener.
// 10. What are some commonly used events in JavaScript?
// Answer: Commonly used events include:
// Click (click)
// Key press (keydown, keypress, keyup)
// Mouse movement (mousemove, mouseover, mouseout)
// Form submission (submit)
// Page load (load)
// Window resize (resize)
// 11. How do you create custom events in JavaScript?
// Answer: Custom events can be created using the CustomEvent constructor, specifying the event name and optional data. Custom events can then be dispatched on DOM elements using the dispatchEvent() method.