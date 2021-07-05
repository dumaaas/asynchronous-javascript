// loading user that doesn't exist

async function fetchGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await window.fetch(url);
    const body = await response.json();
    
    if(body.name === null) 
        throw Error(body.message);

    return body;
}

async function showGitHubUser(handle) {
    try {
        const user = await fetchGitHubUser(handle);
        console.log(user.name);
    } catch (err) {
        console.error(err);
        console.error(`Error: ${err.message}`);
    }
}

showGitHubUser('asdsads');