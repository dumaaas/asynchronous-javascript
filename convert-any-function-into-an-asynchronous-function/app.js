// convert function declaration into function expression

const showGitHubUserAsync = async (handle) => {
    
}

class GitHubApiClient {
    async fetchUser(handle) {
        const url = `https://api.github.com/users/${handle}`;
        const response = await window.fetch(url);
        return await response.json();
    }
}

// Immediately going to invoke this function with classic javascript IFFE (Immediately Invoked Function Expression) pattern 
(async () => {
    const client = new GitHubApiClient();
    const user = await client.fetchUser("dumaaas");
    console.log(user.name);
})();
