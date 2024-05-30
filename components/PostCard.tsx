import { Post } from '@/types/post'
import cx from "classnames"

interface Props {
    post: Post
    skeleton?: boolean
}

const PostCard: React.FC<Props> = ({
    post,
    skeleton = false
}) => {

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <div className="flex items-center px-6 py-3 bg-gray-900">
                <h2 className={cx("text-xl font-semibold text-white max-md:text-lg", skeleton ? "!text-transparent skeleton" : "")}>
                    {post.title}
                </h2>
            </div>
            <div className="py-4 px-6">
                <p className={cx("py-2 text-lg text-gray-700", skeleton ? "!text-transparent skeleton" : "")}>
                    {post.body}
                </p>
            </div>
        </div>
    )
  }

  export default PostCard;