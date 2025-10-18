import { LottieHandler } from "@components/feedback";

type TGridList<T> = {
  records: T[];
  renderItems: (record: T) => React.ReactNode;
  messageEmpty: string;
  lottieType: "loading" | "wishlist" | "cart" | "empty" | "notFound";
}

const GridList = <T,>({ records, renderItems, messageEmpty, lottieType }: TGridList<T>) => {
  const categoriesList =
    records.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center sm:mt-10 xlg:mt-0">
        {records.map((record) => renderItems(record))}
      </div>
    ) : (
      <div className="">
        <LottieHandler type={lottieType} message={messageEmpty} />
      </div>
    );
  return categoriesList
}

export default GridList