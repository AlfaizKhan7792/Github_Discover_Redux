export const fetchGithub = async (username) =>{
    try {
        const response = await fetch(`https://api.github.com/search/users?q=${username}`)
        const data = await response.json()
        return data.items
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: "Users not found" };
    }
}   


export const fetchGithubUserData = async (username) =>{
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: "Users not found" };
    }
}


export const fetchGithubUsersRepos = async (username) =>{
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: "Users not found" };
    }
}