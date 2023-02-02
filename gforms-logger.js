/// Replace these values with your own form ID and field ID

const formID = "A-BUNCH-OF-BASE64-NONSENSE"; // from URL bar
const fieldID = "entry.2005322265"; // from JS console

/// Actual logging machinery

const formURLTemplate = "https://docs.google.com/forms/d/e/FORMID/formResponse";

function encodeParams(params) {
  return Object.entries(params).map(([k, v]) => k + "=" + encodeURIComponent(v)).join("&");
}

function logToGforms(str, cb) {
  // Set up the XMLHttpRequest
  const formURL = formURLTemplate.replace("FORMID", formID);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", formURL, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  if (cb) xhr.onreadystatechange = cb;
  // Submit the form with the appropriate values substituted in
  const params = {};
  params[fieldID] = str;
  paramsPart = encodeParams(params);
  xhr.send(paramsPart);
}
