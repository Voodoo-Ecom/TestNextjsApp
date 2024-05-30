import PostCard from "@/components/PostCard"
import { Post } from "@/types/post"


export default function Posts() {
  const emptyPost = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  const posts: Post[] = [...Array(5).fill(emptyPost)]

  return (
    <div className="flex flex-col items-center justify-between">
      {posts.map((post, index) => (
        <div key={`${post.id}-${index}`} className="w-full">
            <PostCard post={post} skeleton={true}/>
        </div>
      ))}
    </div>
  )
}

