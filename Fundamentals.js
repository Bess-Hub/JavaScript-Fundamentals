<!DOCTYPE html>
<html>
<body>
<!-- JavaScript is the most popular programming language of the Web. Usually the JS files will have a .js extension, but this document is written in html because it is the default scripting language in HTML-->

<center><h1>What Can JavaScript Do?</h1></center>
<p id="demo-1">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo-1").innerHTML = "Gotcha! See?"'>Doubt? Click Me!</button>
<br>
<!-- with the getElementById() we can locate an id and change its content -->

<p>JavaScript can change HTML attibute values.</p>
<img id="demo-2" src="data:image/jpeg;base64,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">
<br><button typ="button" onclick="document.getElementById('demo-2').src='https://media.istockphoto.com/id/1287452200/photo/furry-dog-smiling-with-tongue-out.jpg?s=612x612&w=0&k=20&c=-Ouh5J1TBB3dBeoY3uTvxNIcIK09uJCvV0_QbaDRA_U='">Not a cat person?</button>
<br>

<p id="demo-3">JavaScript can change HTML style.</p>
<button typ="button" onclick="document.getElementById('demo-3').style.fontSize='35px'">Can't read?</button>
<br>

<p id="demo-4">JavaScript can hide stuff.</p>
<button typ="button" onclick="document.getElementById('demo-4').style.display ='none'">Want to hide this?</button>
<br>
<button typ="button" onclick="document.getElementById('demo-4').style.display ='block'">Better reinstate it as it was...</button>
<br>

<center><h1>JavaScript and Java are not the same!!</h1></center>
<p>JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.<br>ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.
</p>
<p>Java was created at Sun Microsystems, Inc., where James Gosling led a team of researchers in an effort to create a new language that would allow consumer electronic devices to communicate with each other.
</p>
<p>So, in short, JavaScript makes the Web fun to use by one! Java was created to allow for users to communicate with each other.</p>


<center><h1>Where does JavaScript goes?</h1></center>
<h3>Within the "script" tag</h3>
<p>Since JS is the default scripting language in HTML we no longer need to type the attribute script when writting in an HTML document.</p>
<h3>In the head section</h3>
<p>If we are going to run the same JS function repeatedly it is cleaner to put it in the head section instead than the body.</p>
<h3>Within the body section</h3>
<p>If we are running only once it is ok to put it straight in the body, like in this document. As we can see, no script tag is necessary for it to run.</p>
<h3>External</h3>
<p>When building a website, it is better to make a .js file for the JS code and call it using the script tag to call for it. The advantages of working like this are:</p>
<ul>
    <li>It separates HTML and code</li>
    <li>It makes HTML and JavaScript easier to read and maintain</li>
    <li>Cached JavaScript files can speed up page loads</li>
</ul>

<center><h1>What are the JavaScript outputs?</h1></center>
<p>There are different possible outputs for JavaScript</p>
<ul>
    <li>Writing into an HTML element, using innerHTML.</li>
    <li>Writing into the HTML output using document.write().</li>
    <li>Writing into an alert box, using window.alert().</li>
    <li>Writing into the browser console, using console.log().</li>
    <li>Printing the page, using window.print().</li>
</ul>
<p>So far we have used innerHTML.</p>
<p>Be careful with the document.write(). If putted into a button and clicked on it will delete all existing HTML and load the result.</p>

<center><h1>What are the JavaScript statements?</h1></center>
<p>JS statemtns are composed of the following elements: values, operators, expressions, keywords and comments. They are executed in the order they are written.</p>

</body>
</html>
