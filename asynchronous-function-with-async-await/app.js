// convert this function into async function

function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;

    window.fetch(url)
        .then(response => response.json()) 
        .then(user => {
            console.log(user.name);
            console.log(user);
        });
}

showGitHubUser("dumaaas");

// async way

// we can read one statemant at the time from top to bottom
// we dont have any more then methods
// this makes a lot easier to understand control flow

async function showGitHubUserAsync(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await window.fetch(url);
    const user = await response.json();
    console.log(user.name);
}

showGitHubUserAsync("dumaaas");