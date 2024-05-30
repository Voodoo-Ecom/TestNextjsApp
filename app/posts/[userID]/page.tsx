import PostCard from "@/components/PostCard"
import getPosts from "@/libs/getPosts"
import { Post } from "@/types/post"

interface Props {
  params: {userID: string}
}

export default async function Posts({
    params:{ userID }
  }:Props) {
    
  const posts: Post[] = await getPosts(userID)

  return (
    <div className="flex flex-col items-center justify-between">
      {posts.map((post) => (
        <div key={post.id} className="w-full">
            <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}
