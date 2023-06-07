import BlogCard from './BlogCard'
import { BlogGrid, Empty } from './style'

export default function Blogs({ data }) {
  if (!data.length) {
    return <Empty>No Blogs yet. Stay tuned.</Empty>
  }

  return (
    <BlogGrid>
      {data.map((item) => (
        <BlogCard key={item._id} item={item} />
      ))}
    </BlogGrid>
  )
}
