import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { PRODUCTS, filterProducts } from "@/lib/products";
import { ProductCategory } from "@/lib/types";

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | undefined
  >();
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const maxPrice = Math.max(...PRODUCTS.map((p) => p.price));

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get("categoria") as ProductCategory;
    const search = searchParams.get("search");
    const ofertas = searchParams.get("ofertas");

    if (category) {
      setSelectedCategory(category);
    }

    if (ofertas === "true") {
      // Filter for products with discounts
      const discountedProducts = PRODUCTS.filter(
        (p) => p.originalPrice && p.originalPrice > p.price,
      );
      if (discountedProducts.length > 0) {
        // Could set additional filters for offers
      }
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const search = searchParams.get("search");
    const ofertas = searchParams.get("ofertas");

    let filtered = filterProducts({
      category: selectedCategory,
      priceRange,
      brand: selectedBrands.length > 0 ? selectedBrands[0] : undefined, // Simplified for now
      inStock: inStockOnly,
      search: search || undefined,
    });

    // Apply offers filter
    if (ofertas === "true") {
      filtered = filtered.filter(
        (p) => p.originalPrice && p.originalPrice > p.price,
      );
    }

    // Apply additional brand filtering
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [
    selectedCategory,
    selectedBrands,
    priceRange,
    inStockOnly,
    sortBy,
    searchParams,
  ]);

  const handleCategoryChange = (category?: ProductCategory) => {
    setSelectedCategory(category);
    if (category) {
      setSearchParams({ categoria: category });
    } else {
      setSearchParams({});
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory(undefined);
    setSelectedBrands([]);
    setPriceRange([0, maxPrice]);
    setInStockOnly(false);
    setSearchParams({});
  };

  const search = searchParams.get("search");
  const ofertas = searchParams.get("ofertas") === "true";

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {search && `Resultados para "${search}"`}
          {ofertas && "Ofertas Especiales"}
          {selectedCategory && !search && !ofertas && "Productos"}
          {!search && !ofertas && !selectedCategory && "Todos los Productos"}
        </h1>
        <p className="text-gray-600">
          {filteredProducts.length} producto
          {filteredProducts.length !== 1 ? "s" : ""} encontrado
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Filters */}
        <div className="hidden lg:block">
          <ProductFilters
            selectedCategory={selectedCategory}
            selectedBrands={selectedBrands}
            priceRange={priceRange}
            maxPrice={maxPrice}
            inStockOnly={inStockOnly}
            onCategoryChange={handleCategoryChange}
            onBrandChange={setSelectedBrands}
            onPriceRangeChange={setPriceRange}
            onInStockChange={setInStockOnly}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              {/* Mobile Filters */}
              <Sheet
                open={mobileFiltersOpen}
                onOpenChange={setMobileFiltersOpen}
              >
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="mt-6">
                    <ProductFilters
                      selectedCategory={selectedCategory}
                      selectedBrands={selectedBrands}
                      priceRange={priceRange}
                      maxPrice={maxPrice}
                      inStockOnly={inStockOnly}
                      onCategoryChange={handleCategoryChange}
                      onBrandChange={setSelectedBrands}
                      onPriceRangeChange={setPriceRange}
                      onInStockChange={setInStockOnly}
                      onClearFilters={handleClearFilters}
                    />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nombre A-Z</SelectItem>
                  <SelectItem value="price-low">
                    Precio: Menor a Mayor
                  </SelectItem>
                  <SelectItem value="price-high">
                    Precio: Mayor a Menor
                  </SelectItem>
                  <SelectItem value="rating">Mejor Valorados</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-600 mb-4">
                Intenta ajustar los filtros o realiza una búsqueda diferente
              </p>
              <Button onClick={handleClearFilters} variant="outline">
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={viewMode === "list" ? "flex flex-row" : ""}
                />
              ))}
            </div>
          )}

          {/* Load More Button (if needed for pagination) */}
          {filteredProducts.length > 0 &&
            filteredProducts.length % 12 === 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Cargar más productos
                </Button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Products;
