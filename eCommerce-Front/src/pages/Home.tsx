import { GridList } from "@components/common";
import { Category, FrameCategories, Hero } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import useCategories from "@hooks/useCategories";

const Home = () => {
  const { records, loading, error } = useCategories();

  return (
    <div>
      <Hero />
      <FrameCategories />
      <Loading status={loading} error={error} type="category">
        <GridList
          records={records}
          renderItems={(record) => <Category {...record} key={record.id} />}
          lottieType="empty"
          messageEmpty="No Categories Available" />
      </Loading>
    </div>
  );
};

export default Home;
