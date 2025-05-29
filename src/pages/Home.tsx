import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  Shield,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 8);
  const discountedProducts = PRODUCTS.filter(
    (p) => p.originalPrice && p.originalPrice > p.price,
  ).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div
          className="container mx-auto px-4 py-16 md:py-24"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F5a7e90bdaaa34d32876dfc58bca3fe76%2F1784967ecfc04a40a95d0bc4dcf2c78c)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Todo para tu
                <span className="block text-orange-200">
                  <span style={{ color: "#000000" }}>
                    Proyecto de Construcción
                  </span>
                </span>
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                <b>
                  <span
                    style={{
                      color: "#ff161b",
                      textShadow: "rgb(255, 255, 255) 2px 1px 1px",
                      boxShadow: "rgb(255, 255, 255) 1px 1px 3px 0px",
                    }}
                  >
                    Encuentra las mejores herramientas, materiales y equipos
                    para profesionales y entusiastas de la construcción.
                  </span>
                </b>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/productos">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-orange-600 hover:bg-gray-100"
                  >
                    Ver Catálogo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/productos?ofertas=true">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-600"
                  >
                    Ver Ofertas
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-orange-200">Productos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-orange-200">Proveedores</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">24h</div>
                      <div className="text-orange-200">Envío</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">99%</div>
                      <div className="text-orange-200">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold">Envío Rápido</h3>
                <p className="text-gray-600">Entrega en 24-48 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold">Garantía Total</h3>
                <p className="text-gray-600">Productos garantizados</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold">Soporte 24/7</h3>
                <p className="text-gray-600">Asistencia especializada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explora por Categorías</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentra exactamente lo que necesitas para tu proyecto. Tenemos
              todo organizado por categorías para facilitar tu búsqueda.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category.value}
                to={`/productos?categoria=${category.value}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-medium text-sm group-hover:text-orange-600 transition-colors">
                      {category.label}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Productos Destacados</h2>
              <p className="text-gray-600">
                Los productos más populares entre nuestros clientes
              </p>
            </div>
            <Link to="/productos">
              <Button variant="outline">
                Ver Todos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      {discountedProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="destructive" className="mb-4">
                🔥 Ofertas Especiales
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Precios Increíbles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Aprovecha estas ofertas limitadas en productos seleccionados.
                ¡Los mejores precios del mercado!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {discountedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/productos?ofertas=true">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Ver Todas las Ofertas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-gray-600">
              Profesionales confían en nosotros para sus proyectos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendoza",
                role: "Contractor",
                text: "Excelente calidad en todos los productos. El servicio al cliente es excepcional y la entrega siempre puntual.",
                rating: 5,
              },
              {
                name: "María González",
                role: "Arquitecta",
                text: "La variedad de productos es impresionante. Siempre encuentro lo que necesito para mis proyectos.",
                rating: 5,
              },
              {
                name: "Roberto Silva",
                role: "Maestro de Obra",
                text: "Precios competitivos y productos de primera calidad. Muy recomendado para profesionales.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="py-16 bg-orange-600 text-white"
        style={{
          backgroundImage:
            "url(https://cersa.org.pe/capacitaciones/sites/default/files/14_armatupack_estructural2020.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span style={{ color: "#000000" }}>Mantente Informado</span>
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            <span style={{ color: "#000000" }}>
              <b>
                Recibe ofertas exclusivas, nuevos productos y consejos de
                construcción directamente en tu correo electrónico.
              </b>
            </span>
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              Suscribirse
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
