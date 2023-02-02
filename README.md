# Setup instructions for minimal Google Forms logging

Create a Google form.

Add a single text input field to this form. I used the "Paragraph" field type but this should probably also work for the "Short answer" type as well. Assign this field any human-readable name you want; it doesn't matter programmatically.

Preview the form (eye icon in the top right of the Google Forms editor UI).

Grab the `formID`. This is in the URL bar – it's the part of the URL that comes right after `https://docs.google.com/forms/d/e/` and right before `/viewform`.

Grab the `fieldID`. Specifically, open the browser devtools, go to the Console tab, and paste in the following snippet of JavaScript:

```js
[...document.querySelectorAll("input[name]")].map(e => e.name)
```

This will return a list of strings, one of which looks sorta like the following (with the `entry.` prefix):

```
entry.2005322265
```

The string with the `entry.` prefix is the `fieldID`.

Now edit the `gforms-logger.js` script and paste in the appropriate `formID` and `fieldID` values:

```js
const formID = "A-BUNCH-OF-BASE64-NONSENSE"; // from URL bar
const fieldID = "entry.2005322265"; // from JS console
```

And try it out from your own script:

```js
logToGforms("hewwo :3");
```

Note that there _will_ be a CORS error in the browser console, but the form submit should work anyway. You can check the responses on Google Forms to make sure your data went through.

If you want, you can also pass in an optional second argument to the `logToGforms` function: a callback function that will be called once the form is submitted.
