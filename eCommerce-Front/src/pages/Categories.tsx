import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const { records, loading, error } = useCategories();
  return (
    <>
      <Heading title={<>home / <span className="active">categories</span></>} />
      <Loading status={loading} error={error}>
        <GridList 
        records={records} 
        renderItems={(record) => <Category {...record} key={record.id} />}
        lottieType="empty"
        messageEmpty="No Categories Available"/>
      </Loading>
    </>
  );
};

export default Categories;
