// async way

// this examples show that is quite easy to call async function as part of promise chain
// every async function return a promise so we can simpy call .then .catch of of the return value

async function showGitHubUserAsync(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await window.fetch(url);
    return await response.json();
}

showGitHubUserAsync("dumaaas")
    .then(user => {
        console.log(user.name);
    });