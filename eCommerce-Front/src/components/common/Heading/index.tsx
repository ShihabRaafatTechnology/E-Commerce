import { memo } from "react";

const Heading = memo(({title}: {title: React.ReactNode}) => {
  return (
    <h2 className="px-10 py-2 bg-frame text-white capitalize w-full font-semibold">{title}</h2>
  )
});

export default Heading