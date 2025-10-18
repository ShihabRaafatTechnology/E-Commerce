import ContentLoader from "react-content-loader"

const productSkeleton = () => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center sm:mt-10 xlg:mt-0'>{Array(4).fill(0).map((_, indx) => (
    <ContentLoader
      key={indx}
      speed={2}
      width={320}
      height={450}
      viewBox="0 0 320 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#d4d4d4"
    >
      <rect x="3" y="241" rx="3" ry="3" width="275" height="4" />
      <rect x="2" y="254" rx="3" ry="3" width="114" height="5" />
      <rect x="1" y="268" rx="3" ry="3" width="78" height="4" />
      <rect x="1" y="6" rx="0" ry="0" width="320" height="217" />
      <rect x="1" y="286" rx="0" ry="0" width="92" height="27" />
      <circle cx="311" cy="297" r="8" />
    </ContentLoader>
  ))}</div>
)

export default productSkeleton;

