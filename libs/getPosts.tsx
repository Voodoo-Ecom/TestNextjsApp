export default async function getPosts(userID: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)

    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }
     
    return res.json()
}