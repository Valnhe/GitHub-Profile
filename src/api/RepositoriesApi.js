export default async function getRepositories(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repositories = await response.json();
        return repositories;
    }
    catch (error) {
        console.error(error);
    }
}