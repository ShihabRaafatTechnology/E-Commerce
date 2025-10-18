import ContentLoader from 'react-content-loader'

const CategorySkeleton = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center sm:mt-10 xlg:mt-0'>{Array(4).fill(0).map((_, indx) => (
            <ContentLoader
                key={indx}
                speed={2}
                width={350}
                height={406}
                viewBox="0 0 350 406"
                backgroundColor="#f3f3f3"
                foregroundColor="#d4d4d4"
            >
                <rect x="3" y="241" rx="3" ry="3" width="410" height="6" />
                <rect x="7" y="263" rx="3" ry="3" width="380" height="6" />
                <rect x="94" y="293" rx="3" ry="3" width="178" height="6" />
                <rect x="7" y="84" rx="0" ry="0" width="370" height="142" />
            </ContentLoader>
        ))}</div>
    )
}

export default CategorySkeleton;