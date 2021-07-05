// Multiple await promises concurrently with Promise All

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await window.fetch(url);
    return await response.json();
}

async function showUserAndRepos(handle) {
    const [user, repos] = Promise.all([
       fetchFromGitHub(`/users/${handle}`),
       fetchFromGitHub(`users/${handle}/repos`) 
    ]);

    console.log(user.name);
    console.log(`${repos.length} repos`);
}

showUserAndRepos("dumaaas");