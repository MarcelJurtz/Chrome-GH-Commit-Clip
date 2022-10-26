function copyToClipboard(text) {
    // TODO Verify migration to clipboard api usage

    // navigator.clipboard.writeText(commit).then(
    //     function(){
    //         console.log("Copied to clipboard.");
    //     })
    // .catch(
    //     function() {
    //         alert("Failed to copy to clipboard!");
    // });


    // Deprecated
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    document.body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.blur();
    document.body.removeChild(copyFrom);
}


let container = document.getElementsByClassName("full-commit")[0];

if(container) {
    // Get commit message
    let msg = container.getElementsByClassName("commit-title")[0].textContent.replace(/\s+/g, ' ').trim();
    //let timestamp = container.querySelector("relative-time")["date"].toISOString().split('T')[0];
    let timestamp = container.querySelector("relative-time").getAttribute("datetime").split("T")[0];
    let sha = container.querySelector("span.sha").textContent.substr(0,9);

    let commit = `${sha} ("${msg}", ${timestamp})`;

    console.log("Found commit:")
    console.log(commit);

    copyToClipboard(commit);
    
} else {
    alert("Not a valid GitHub-Page / Container not found");
}
