import React from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CATEGORIES, BRANDS } from "@/lib/products";
import { ProductCategory } from "@/lib/types";

interface ProductFiltersProps {
  selectedCategory?: ProductCategory;
  selectedBrands: string[];
  priceRange: [number, number];
  maxPrice: number;
  inStockOnly: boolean;
  onCategoryChange: (category?: ProductCategory) => void;
  onBrandChange: (brands: string[]) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onInStockChange: (inStock: boolean) => void;
  onClearFilters: () => void;
  className?: string;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  selectedBrands,
  priceRange,
  maxPrice,
  inStockOnly,
  onCategoryChange,
  onBrandChange,
  onPriceRangeChange,
  onInStockChange,
  onClearFilters,
  className,
}) => {
  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onBrandChange(selectedBrands.filter((b) => b !== brand));
    } else {
      onBrandChange([...selectedBrands, brand]);
    }
  };

  const hasActiveFilters =
    selectedCategory ||
    selectedBrands.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < maxPrice ||
    inStockOnly;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros
          </CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-orange-600 hover:text-orange-700"
            >
              <X className="h-4 w-4 mr-1" />
              Limpiar
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Active filters */}
        {hasActiveFilters && (
          <div>
            <h4 className="text-sm font-medium mb-2">Filtros activos:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedCategory && (
                <Badge
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => onCategoryChange(undefined)}
                >
                  {CATEGORIES.find((c) => c.value === selectedCategory)?.label}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              )}
              {selectedBrands.map((brand) => (
                <Badge
                  key={brand}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => handleBrandToggle(brand)}
                >
                  {brand}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
              {inStockOnly && (
                <Badge
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => onInStockChange(false)}
                >
                  Solo disponibles
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              )}
            </div>
            <Separator className="mt-4" />
          </div>
        )}

        {/* Categories */}
        <div>
          <h4 className="text-sm font-medium mb-3">Categorías</h4>
          <div className="space-y-2">
            <Button
              variant={!selectedCategory ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => onCategoryChange(undefined)}
            >
              Todas las categorías
            </Button>
            {CATEGORIES.map((category) => (
              <Button
                key={category.value}
                variant={
                  selectedCategory === category.value ? "default" : "ghost"
                }
                size="sm"
                className="w-full justify-start"
                onClick={() => onCategoryChange(category.value)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price range */}
        <div>
          <h4 className="text-sm font-medium mb-3">Rango de Precio</h4>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={(value) =>
                onPriceRangeChange(value as [number, number])
              }
              max={maxPrice}
              step={5}
              className="mb-4"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Brands */}
        <div>
          <h4 className="text-sm font-medium mb-3">Marcas</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {BRANDS.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => handleBrandToggle(brand)}
                />
                <label
                  htmlFor={`brand-${brand}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Availability */}
        <div>
          <h4 className="text-sm font-medium mb-3">Disponibilidad</h4>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={inStockOnly}
              onCheckedChange={onInStockChange}
            />
            <label
              htmlFor="in-stock"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Solo productos disponibles
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
