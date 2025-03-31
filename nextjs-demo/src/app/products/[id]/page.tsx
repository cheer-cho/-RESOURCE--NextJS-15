const Products = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <div>Products - {id}</div>;
};

export default Products;
