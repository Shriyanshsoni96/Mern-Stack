//  document is used to access the DOM (Document Object Model) and manipulate it
// DOM is a programming interface for HTML and XML documents.
//  It represents the page so that programs can change the document structure, style, and content.
//  The DOM represents the document as a tree of nodes, where each node represents an element, attribute, or piece of text in the document.


// Accessing DOM elements
// 1. getElementById() method is used to access the element by its id attribute value and it returns the element object.
// let element = document.getElementById("myElement");
// console.log(element);

// 2. getElementsByClassName() method is used to access the elements by their class attribute value and it returns a collection of elements.
// let elements = document.getElementsByClassName("myClass");
// console.log(elements);

// 3. getElementsByTagName() method is used to access the elements by their tag name and it returns a collection of elements.
// let elements = document.getElementsByTagName("p");
// console.log(elements);

// 4. querySelector() method is used to access the first element that matches a specified CSS selector and it returns the element object.
// let element = document.querySelector(".myClass");
// console.log(element);

// 5. querySelectorAll() method is used to access all the elements that match a specified CSS selector and it returns a collection of elements.
// let elements = document.querySelectorAll("p.myClass");
// console.log(elements);


// Updating DOM elements
// 1. innerHTML property is used to get or set the HTML content of an element.
// let element = document.getElementById("myElement");
// element.innerHTML = "<p>New content</p>";

//2. outerHTML property is used to get or set the HTML content of an element, including the element itself.
// When you set outerHTML, the element is replaced by the new HTML content.
// it can set the whole element in to the new content, it can also be used to remove the element from the DOM by setting it to an empty string.
// let element = document.getElementById("myElement");
// element.outerHTML = "<div id='myElement'>New content</div>";

// 3. textContent property is used to get or set the text content of an element.
// let element = document.getElementById("myElement");
// element.textContent = "New text content";

// let element = document.getElementById("container");
// element.textContent;

// 4. innerText property is used to get or set the text content of an element, but it also takes into account the CSS styles and hidden elements.
// let element = document.getElementById("myElement");
// element.innerText = "New text content";

// 5. setAttribute() method is used to set the value of an attribute on an element.
// let element = document.getElementById("myElement");
// element.setAttribute("class", "newClass");

// 6. removeAttribute() method is used to remove an attribute from an element.
// let element = document.getElementById("myElement");
// element.removeAttribute("class");

// Creating and inserting DOM elements
// 1. createElement() method is used to create a new element.
// let newElement = document.createElement("p");
// newElement.textContent = "This is a new paragraph.";

