import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartProvider";
import { toast } from "@/hooks/use-toast";

const Cart: React.FC = () => {
  const {
    items,
    updateQuantity,
    removeItem,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return `S/ ${price.toFixed(2)}`;
  };

  const totalItems = getTotalItems();
  const subtotal = getTotalPrice();
  const shipping = subtotal > 200 ? 0 : 15; // Free shipping over $200
  const total = subtotal + shipping;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      toast({
        title: "Producto eliminado",
        description: "El producto se eliminó del carrito",
      });
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeItem(productId);
    toast({
      title: "Producto eliminado",
      description: `${productName} se eliminó del carrito`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Carrito vaciado",
      description: "Se eliminaron todos los productos del carrito",
    });
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">
            ¿No sabes qué comprar? Tenemos miles de productos esperándote
          </p>
          <Link to="/productos">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Continuar Comprando
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/productos">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continuar Comprando
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">
            Carrito de Compras ({totalItems} producto
            {totalItems !== 1 ? "s" : ""})
          </h1>
        </div>
        {items.length > 0 && (
          <Button
            variant="outline"
            onClick={handleClearCart}
            className="text-red-600 border-red-600 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Vaciar Carrito
          </Button>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <Card key={product.id}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <Link
                    to={`/producto/${product.id}`}
                    className="flex-shrink-0"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link
                          to={`/producto/${product.id}`}
                          className="font-semibold hover:text-orange-600 transition-colors"
                        >
                          {product.name}
                        </Link>
                        <p className="text-sm text-gray-500">{product.brand}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          handleRemoveItem(product.id, product.name)
                        }
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Stock status */}
                    <div className="mb-3">
                      <Badge
                        variant={product.inStock ? "default" : "destructive"}
                      >
                        {product.inStock ? "En Stock" : "Sin Stock"}
                      </Badge>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Cantidad:</span>
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleQuantityChange(product.id, quantity - 1)
                            }
                            disabled={quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-3 py-1 font-medium">
                            {quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleQuantityChange(product.id, quantity + 1)
                            }
                            disabled={quantity >= product.stockQuantity}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-bold text-lg">
                          {formatPrice(product.price * quantity)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {formatPrice(product.price)} c/u
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Summary details */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} productos):</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío:</span>
                  <span
                    className={
                      shipping === 0 ? "text-green-600 font-medium" : ""
                    }
                  >
                    {shipping === 0 ? "GRATIS" : formatPrice(shipping)}
                  </span>
                </div>
                {shipping > 0 && subtotal < 200 && (
                  <div className="text-sm text-gray-600 bg-orange-50 p-2 rounded">
                    💡 Agrega {formatPrice(200 - subtotal)} más para envío
                    gratis
                  </div>
                )}
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>

              {/* Checkout Button */}
              <Button
                size="lg"
                className="w-full bg-orange-600 hover:bg-orange-700 mt-6"
                disabled={items.some((item) => !item.product.inStock)}
                onClick={() => navigate("/checkout")}
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Proceder al Pago
              </Button>

              {/* Security badges */}
              <div className="pt-4 border-t">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Compra 100% segura
                  </p>
                  <div className="flex justify-center gap-2">
                    <Badge variant="outline">🔒 SSL</Badge>
                    <Badge variant="outline">💳 Visa</Badge>
                    <Badge variant="outline">💳 Mastercard</Badge>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Garantía de satisfacción</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Devolución fácil en 30 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Soporte técnico especializado</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continue Shopping */}
          <Card className="mt-4">
            <CardContent className="p-4 text-center">
              <h3 className="font-medium mb-2">¿Necesitas algo más?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Explora nuestro catálogo completo de productos
              </p>
              <Link to="/productos">
                <Button variant="outline" size="sm" className="w-full">
                  Ver Más Productos
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
