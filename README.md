# GitHub-JS Shortcut

Script to generate nv commit-message from any commit.

Pattern: `b77a75380 ("Formatting", 2022-10-24)`


```js

let container = document.getElementsByClassName("full-commit")[0];

if(!container)
{
    // TODO
}

// Get commit message
let msg = container.getElementsByClassName("commit-title")[0].textContent.replace(/\s+/g, ' ').trim();
let timestamp = container.querySelector("relative-time")["date"].toISOString().split('T')[0];
let sha = container.querySelector("span.sha").textContent.substr(0,9);

let commit = `${sha} ("${msg}", ${timestamp})`

```