function copyToClipboard(text) {
    // TODO Verify migration to clipboard api usage

    // Actual way
    // navigator.clipboard.writeText(commit).then(
    //     function(){
    //         console.log("Copied to clipboard.");
    //     })
    // .catch(
    //     function() {
    //         alert("Failed to copy to clipboard!");
    // });

    // Deprecated
    var temp = document.createElement("textarea");
    temp.textContent = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.blur();
    document.body.removeChild(temp);
}

function success(id, msg) {
    const notificationId = id;

    const options = {
        type: 'basic',
        title: 'Copied!',
        message: 'msg',
    }

    const callback = notificationId => console.log('notificationId: ', notificationId)

    chrome.notifications.create(notificationId, options, callback)
}

function generateCommitMessage() {

    // Check if page is valid
    let regex = new RegExp('https:\/\/github\.com(?:\/[^\/]+)*\/commit\/[0-9a-f]{40}');
    
    if(regex.test(window.location.toString())) {
        let container = document.getElementsByClassName("full-commit")[0];

        if(container) {
            let msg = container.getElementsByClassName("commit-title")[0].textContent.replace(/\s+/g, ' ').trim();
            //let timestamp = container.querySelector("relative-time")["date"].toISOString().split('T')[0];
            let timestamp = container.querySelector("relative-time").getAttribute("datetime").split("T")[0];
            let sha = container.querySelector("span.sha").textContent.substr(0,9);
        
            let commit = `${sha} ("${msg}", ${timestamp})`;
        
            console.log("Found commit:")
            console.log(commit);
        
            copyToClipboard(commit);

            success(sha, commit);
            
        } else {
            alert("Container not found");
        }
    } else {
        alert("Not a valid GitHub-Page");
    }
}

generateCommitMessage();