import Container from "@/components/ui/Container";
import FiltersSidebar from "@/components/shop/FiltersSidebar";
import ProductsGrid from "@/components/shop/ProductsGrid";
import SortBar from "@/components/shop/SortBar";

export default function ShopPage() {
  return (
    <Container>
      <div className="py-10">
        <div className="mb-6">
          <p className="text-sm text-muted">HOME . SHOP</p>
          <h1 className="text-3xl font-bold text-foreground mt-2">
            Shop All Products
          </h1>
        </div>

        <SortBar />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
            <FiltersSidebar />
            <ProductsGrid />
        </div>
      </div>
    </Container>
  );
}
