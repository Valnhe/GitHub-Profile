export default async function getGithubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}