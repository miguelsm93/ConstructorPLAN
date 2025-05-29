import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  Truck,
  MapPin,
  User,
  Mail,
  Phone,
  Lock,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartProvider";
import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [activeTab, setActiveTab] = useState("shipping");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);

  const formatPrice = (price: number) => {
    return `S/ ${price.toFixed(2)}`;
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simular procesamiento de pago
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Limpiar carrito y mostrar mensaje de éxito
      clearCart();
      toast({
        title: "¡Compra exitosa!",
        description: "Tu pedido ha sido procesado correctamente.",
      });

      // Redirigir a la página de confirmación
      navigate("/confirmacion");
    } catch (error) {
      toast({
        title: "Error en el pago",
        description: "Hubo un problema al procesar tu pago. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">
            Agrega productos a tu carrito para proceder con el pago
          </p>
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700"
            onClick={() => navigate("/productos")}
          >
            Continuar Comprando
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/carrito")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Carrito
        </Button>
        <h1 className="text-3xl font-bold">Finalizar Compra</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="shipping">
                <MapPin className="h-4 w-4 mr-2" />
                Envío
              </TabsTrigger>
              <TabsTrigger value="payment">
                <CreditCard className="h-4 w-4 mr-2" />
                Pago
              </TabsTrigger>
              <TabsTrigger value="review">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Revisión
              </TabsTrigger>
            </TabsList>

            {/* Shipping Information */}
            <TabsContent value="shipping">
              <Card>
                <CardHeader>
                  <CardTitle>Información de Envío</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Tu apellido" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="+51 999 999 999" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input
                        id="address"
                        placeholder="Dirección de entrega"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" placeholder="Tu ciudad" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Código Postal</Label>
                        <Input id="postalCode" placeholder="Código postal" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="shippingMethod">Método de Envío</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona método de envío" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">
                            Envío Estándar (2-3 días) - S/ 15.00
                          </SelectItem>
                          <SelectItem value="express">
                            Envío Express (24 horas) - S/ 25.00
                          </SelectItem>
                          <SelectItem value="free">
                            Envío Gratis (Compras mayores a S/ 200)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={() => setActiveTab("payment")}
                    >
                      Continuar al Pago
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payment Information */}
            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle>Información de Pago</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label>Método de Pago</Label>
                      <div className="grid grid-cols-3 gap-4">
                        <Button
                          type="button"
                          variant={paymentMethod === "credit" ? "default" : "outline"}
                          className="flex flex-col items-center justify-center h-24"
                          onClick={() => setPaymentMethod("credit")}
                        >
                          <CreditCard className="h-6 w-6 mb-2" />
                          Tarjeta de Crédito
                        </Button>
                        <Button
                          type="button"
                          variant={paymentMethod === "debit" ? "default" : "outline"}
                          className="flex flex-col items-center justify-center h-24"
                          onClick={() => setPaymentMethod("debit")}
                        >
                          <CreditCard className="h-6 w-6 mb-2" />
                          Tarjeta de Débito
                        </Button>
                        <Button
                          type="button"
                          variant={paymentMethod === "transfer" ? "default" : "outline"}
                          className="flex flex-col items-center justify-center h-24"
                          onClick={() => setPaymentMethod("transfer")}
                        >
                          <Truck className="h-6 w-6 mb-2" />
                          Transferencia
                        </Button>
                      </div>
                    </div>

                    {paymentMethod !== "transfer" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Fecha de Expiración</Label>
                            <Input id="expiry" placeholder="MM/AA" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                          <Input
                            id="cardName"
                            placeholder="Como aparece en la tarjeta"
                          />
                        </div>
                      </>
                    )}

                    {paymentMethod === "transfer" && (
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-semibold mb-2">
                            Información de Transferencia
                          </h3>
                          <p className="text-sm text-gray-600">
                            Banco: BCP
                            <br />
                            Cuenta: 123-456-789
                            <br />
                            Titular: ConstructoPlan S.A.C.
                            <br />
                            RUC: 20123456789
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="transferReference">
                            Número de Referencia
                          </Label>
                          <Input
                            id="transferReference"
                            placeholder="Ingresa el número de referencia de tu transferencia"
                          />
                        </div>
                      </div>
                    )}

                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={() => setActiveTab("review")}
                    >
                      Revisar Pedido
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Order Review */}
            <TabsContent value="review">
              <Card>
                <CardHeader>
                  <CardTitle>Revisar Pedido</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Order Items */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Productos</h3>
                      {items.map(({ product, quantity }) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h4 className="font-medium">{product.name}</h4>
                              <p className="text-sm text-gray-600">
                                Cantidad: {quantity}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              {formatPrice(product.price * quantity)}
                            </div>
                            <div className="text-sm text-gray-600">
                              {formatPrice(product.price)} c/u
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Order Summary */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Envío:</span>
                        <span className={shipping === 0 ? "text-green-600" : ""}>
                          {shipping === 0 ? "GRATIS" : formatPrice(shipping)}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Total:</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={handleSubmit}
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Procesando..." : "Confirmar Pedido"}
                    </Button>

                    {/* Security Badges */}
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
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-4">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-600">
                        Cantidad: {quantity}
                      </p>
                      <p className="text-sm font-medium">
                        {formatPrice(product.price * quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Summary Details */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal ({items.length} productos):</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío:</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>
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

              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>

              {/* Additional Info */}
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
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 