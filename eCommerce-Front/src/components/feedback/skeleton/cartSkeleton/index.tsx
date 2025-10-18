import ContentLoader from "react-content-loader"

const cartSkeleton = () => (
    <div className="md:flex justify-center items-center">
        <div className='grid grid-rows-1 md:grid-rows-2 lg:grid-rows-4 gap-4 place-items-center sm:mt-10 xlg:mt-0'>{Array(4).fill(0).map((_, indx) => (
            <ContentLoader
                key={indx}
                speed={2}
                width={250}
                height={108}
                viewBox="0 0 1080 291"
                backgroundColor="#f3f3f3"
                foregroundColor="#d4d4d4"
            >
                <rect x="121" y="10" rx="3" ry="3" width="275" height="4" />
                <rect x="125" y="24" rx="3" ry="3" width="78" height="4" />
                <rect x="1" y="6" rx="0" ry="0" width="109" height="217" />
                <rect x="471" y="5" rx="0" ry="0" width="92" height="16" />
                <circle cx="311" cy="297" r="8" />
                <rect x="488" y="50" rx="0" ry="0" width="66" height="6" />
                <circle cx="569" cy="54" r="8" />
            </ContentLoader>
        ))}</div>
        <ContentLoader
            speed={2}
            width={250}
            height={253}
            viewBox="0 0 720 253"
            backgroundColor="#f3f3f3"
            foregroundColor="#d4d4d4"
        >
            <rect x="10" y="8" rx="0" ry="0" width="580" height="162" />
            <circle cx="311" cy="297" r="8" />
        </ContentLoader>
    </div>
)

export default cartSkeleton;

