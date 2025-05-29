import React, { useState } from "react";

const orders = [
  {
    id: "#RB5625",
    date: "29 April 2024",
    product: "Laptop",
    customer: "Anna M. Hines",
    email: "anna.hines@mail.com",
    phone: "(+1)-555-1564-261",
    address: "Burr Ridge/Illinois",
    payment: "Credit Card",
    status: "Complete",
  },
  {
    id: "#RB9652",
    date: "25 April 2024",
    product: "Laptop",
    customer: "Judith H. Fritsche",
    email: "judith.fritsche.com@mail.com",
    phone: "(+57)-305-5579-759",
    address: "SULLIVAN/Kentucky",
    payment: "Credit Card",
    status: "Complete",
  },
  {
    id: "#RB5984",
    date: "25 April 2024",
    product: "Laptop",
    customer: "Peter T. Smith",
    email: "peter.smith@mail.com",
    phone: "(+33)-655-5187-93",
    address: "Yreka/California",
    payment: "Pay Pal",
    status: "Complete",
  },
  {
    id: "#RB3625",
    date: "21 April 2024",
    product: "Smartphone",
    customer: "Emmanuel J. Delcid",
    email: "emmanuel.delcid@mail.com",
    phone: "(+30)-693-5553-637",
    address: "Atlanta/Georgia",
    payment: "Pay Pal",
    status: "Processing",
  },
  {
    id: "#RB652",
    date: "18 April 2024",
    product: "Tablet",
    customer: "William J. Cook",
    email: "william.cook@mail.com",
    phone: "(+91)-855-5446-150",
    address: "Rosenberg/Texas",
    payment: "Credit Card",
    status: "Processing",
  },
];

const products = [
  {
    id: 1,
    name: "Cemento Sol",
    date: "29/04/2024",
    customer: "Juan Pérez",
    quantity: 50,
    phone: "+51 987 654 321",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZo-wpa4aIR9RiwTERi6-roNFpkMiNPL92rjDOIpHGlkO39QJ3ODkfg8&usqp=CAE&s",
    whatsapp: "https://wa.me/51987654321",
    status: "Atendido",
  },
  {
    id: 2,
    name: "Ladrillo King Kong",
    date: "28/04/2024",
    customer: "María López",
    quantity: 1000,
    phone: "+51 912 345 678",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRW4YTBc92EeMsjag-3NfR2kwvMjFKT2RJQhKUNJbgmdEpr0-Gofwh1y8&usqp=CAE&s",
    whatsapp: "https://wa.me/51912345678",
    status: "Espera",
  },
  {
    id: 3,
    name: "Fierro Corrugado",
    date: "27/04/2024",
    customer: "Carlos Ruiz",
    quantity: 30,
    phone: "+51 934 567 890",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSQGmdDGd37LmAX9SbQXbcH0Y8Z9ZOI6gpEQyRd5yM-yKVXXwgTm49BQ&usqp=CAE&s",
    whatsapp: "https://wa.me/51934567890",
    status: "Rechazado",
  },
  {
    id: 4,
    name: "Arena Fina",
    date: "26/04/2024",
    customer: "Ana Torres",
    quantity: 5,
    phone: "+51 956 789 012",
    image: "https://insumosfirstpro.com/wp-content/uploads/2024/03/arenagruesa6702.png",
    whatsapp: "https://wa.me/51956789012",
    status: "Atendido",
  },
  {
    id: 5,
    name: "Pintura Látex",
    date: "25/04/2024",
    customer: "Luis Mendoza",
    quantity: 20,
    phone: "+51 978 123 456",
    image: "https://terinsa.com/wp-content/uploads/2020/06/VINIL_LATEX.png",
    whatsapp: "https://wa.me/51978123456",
    status: "Suspendido",
  },
];

const ofertas = [
  {
    nombre: "Cemento Ultra Resistente",
    precio: "S/ 28.90",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQli2Cq79wA9U1wnovzcDdbMwHLqok4gdeN5PnalWb58ioNTmn7A0auiqc&usqp=CAE&s",
    color: "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600",
    desc: "¡Ideal para grandes obras!",
  },
  {
    nombre: "Ladrillo Ecológico",
    precio: "S/ 1.20",
    img: "https://i0.wp.com/justcrea.com/wp-content/uploads/2020/12/lteco_ladrillo_8.jpg?ssl=1",
    color: "bg-gradient-to-r from-green-200 via-green-400 to-green-600",
    desc: "Ahorra energía y cuida el planeta.",
  },
  {
    nombre: "Pintura Antihumedad",
    precio: "S/ 85.00",
    img: "https://pinturas-andalucia.com/modules/ph_simpleblog/covers/44.jpg",
    color: "bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600",
    desc: "Protege tus paredes todo el año.",
  },
  {
    nombre: "Teja Plástica Ligera",
    precio: "S/ 12.50",
    img: "https://es.habcdn.com/photos/business/medium/teja-plastica-ligera_349356.jpg",
    color: "bg-gradient-to-r from-pink-200 via-pink-400 to-pink-600",
    desc: "Fácil de instalar y resistente.",
  }/*,
  {
    nombre: "Paneles Solares Compactos",
    precio: "S/ 399.00",
    img: "https://www.solarshop.pe/wp-content/uploads/2020/07/panel-solar-compacto.png",
    color: "bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600",
    desc: "Energía limpia para tu obra.",
  },
  {
    nombre: "Fierro Anticorrosivo",
    precio: "S/ 32.00",
    img: "https://www.siderperu.com.pe/sites/default/files/2021-03/fierro-corrugado.png",
    color: "bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600",
    desc: "Durabilidad garantizada.",
  },*/
];

const PanelProveedor = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-12 gap-4">
        {/* Sección de tabla de productos (ancho 8) */}
        <div className="col-span-12 lg:col-span-9">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Panel del Cliente</h1>
            <div className="flex items-center gap-4">
              <button className="bg-orange-100 text-orange-600 px-4 py-2 rounded font-semibold hover:bg-orange-200 transition">+ Crear Orden</button>
              <input type="text" placeholder="Buscar..." className="border rounded px-3 py-2" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Pedidos Registrados</h2>
              <button className="bg-orange-100 text-orange-600 px-4 py-2 rounded font-semibold hover:bg-orange-200 transition">+ Registrar Pedido</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="py-2 px-2"></th>
                    <th className="py-2 px-2">Estado</th>
                    <th className="py-2 px-2"></th>
                    <th className="py-2 px-4">Producto</th>
                    <th className="py-2 px-4">Fecha</th>
                    <th className="py-2 px-4">Colaborador</th>
                    <th className="py-2 px-4">Cantidad</th>
                    <th className="py-2 px-4">Teléfono</th>
                    <th className="py-2 px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((prod) => (
                    <tr key={prod.id} className="border-t">
                      <td className="py-2 px-2">
                        <button className="text-blue-600 hover:text-blue-800" onClick={() => handleEdit(prod)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 00-4-4l-8 8v3zm-2 6h12" /></svg>
                        </button>
                      </td>
                      <td className="py-2 px-2">
                        {prod.status === "Atendido" && (
                          <span className="bg-green-500 text-white font-bold px-3 py-1 rounded">Atendido</span>
                        )}
                        {prod.status === "Espera" && (
                          <span className="bg-blue-400 text-white font-bold px-3 py-1 rounded">Espera</span>
                        )}
                        {prod.status === "Rechazado" && (
                          <span className="bg-gray-800 text-white font-bold px-3 py-1 rounded">Rechazado</span>
                        )}
                        {prod.status === "Suspendido" && (
                          <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded">Suspendido</span>
                        )}
                      </td>
                      <td className="py-2 px-2">
                        <img src={prod.image} alt={prod.name} className="w-12 h-12 object-contain rounded" />
                      </td>
                      <td className="py-2 px-4 font-semibold">{prod.name}</td>
                      <td className="py-2 px-4">{prod.date}</td>
                      <td className="py-2 px-4">{prod.customer}</td>
                      <td className="py-2 px-4">{prod.quantity}</td>
                      <td className="py-2 px-4">{prod.phone}</td>
                      <td className="py-2 px-2">
                        <a href={prod.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"><path fill="currentColor" d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.205A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.484-.463-4.98-1.34l-.355-.21-4.646 1.31 1.32-4.522-.23-.36C6.463 18.484 6 16.77 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.145-1.71-.844-1.974-.94-.264-.096-.456-.145-.648.146-.192.29-.744.94-.912 1.134-.168.193-.336.217-.626.072-.29-.145-1.224-.451-2.33-1.438-.861-.767-1.443-1.71-1.613-2-.168-.29-.018-.446.127-.59.13-.13.29-.336.435-.504.145-.168.193-.29.29-.483.096-.193.048-.362-.024-.507-.072-.145-.648-1.566-.888-2.146-.234-.563-.474-.486-.648-.495l-.553-.01c-.192 0-.505.072-.77.362-.264.29-1.01.984-1.01 2.4 0 1.416 1.034 2.782 1.178 2.974.145.193 2.037 3.11 4.938 4.24.69.297 1.228.474 1.648.606.692.22 1.323.19 1.82.115.555-.082 1.71-.698 1.953-1.372.24-.674.24-1.252.168-1.372-.072-.12-.264-.193-.553-.338z"/></svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500 text-sm">Mostrando {products.length} productos</span>
              <div className="flex gap-1">
                <button className="w-8 h-8 rounded bg-orange-500 text-white">1</button>
                <button className="w-8 h-8 rounded bg-gray-200 text-gray-700">2</button>
                <button className="w-8 h-8 rounded bg-gray-200 text-gray-700">3</button>
                <button className="w-8 h-8 rounded bg-gray-200 text-gray-700">&gt;</button>
              </div>
            </div>
          </div>
        </div>
        {/* Sección de productos en oferta (ancho 3) */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
          <h2 className="text-lg font-bold mb-2 text-center text-orange-600">¡Ofertas y Novedades!</h2>
          <div className="grid grid-cols-1 gap-4">
            {ofertas.map((oferta, idx) => (
              <div key={idx} className={`rounded-lg shadow-lg p-4 flex items-center gap-4 ${oferta.color} text-white`}>
                <img src={oferta.img} alt={oferta.nombre} className="w-16 h-16 object-contain rounded bg-white p-1" />
                <div>
                  <div className="font-bold text-base">{oferta.nombre}</div>
                  <div className="text-xl font-extrabold">{oferta.precio}</div>
                  <div className="text-xs italic">{oferta.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sección de métricas y gráficas */}
        <div className="col-span-12 flex flex-row gap-4">
          <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-[200px]">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-orange-50 p-2 rounded"><span role="img" aria-label="orders">👍</span></span>
              <span className="text-gray-400 text-xs">Total Orders</span>
            </div>
            <div className="text-2xl font-bold">13,647</div>
            <div className="flex items-center text-green-500 text-sm mt-2">
              ▲ 2.3% <span className="ml-1 text-gray-400">Semana pasada</span>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 text-xs">Ver más</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-[200px]">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-orange-50 p-2 rounded"><span role="img" aria-label="leads">🔔</span></span>
              <span className="text-gray-400 text-xs">Nuevos Leads</span>
            </div>
            <div className="text-2xl font-bold">9,526</div>
            <div className="flex items-center text-green-500 text-sm mt-2">
              ▲ 8.1% <span className="ml-1 text-gray-400">Mes pasado</span>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 text-xs">Ver más</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-[200px]">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-orange-50 p-2 rounded"><span role="img" aria-label="deals">🔒</span></span>
              <span className="text-gray-400 text-xs">Negocios</span>
            </div>
            <div className="text-2xl font-bold">976</div>
            <div className="flex items-center text-red-500 text-sm mt-2">
              ▼ 0.3% <span className="ml-1 text-gray-400">Mes pasado</span>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 text-xs">Ver más</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-[200px]">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-orange-50 p-2 rounded"><span role="img" aria-label="revenue">💰</span></span>
              <span className="text-gray-400 text-xs">Ingresos Reservados</span>
            </div>
            <div className="text-2xl font-bold">S/ 123.6k</div>
            <div className="flex items-center text-red-500 text-sm mt-2">
              ▼ 10.6% <span className="ml-1 text-gray-400">Mes pasado</span>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 text-xs">Ver más</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-[200px] flex flex-col items-center justify-center">
            <svg width="120" height="80" viewBox="0 0 120 80">
              <circle cx="60" cy="60" r="40" fill="#f3f4f6" />
              <path d="M60 20 A40 40 0 1 1 59.9 20" stroke="#ff7849" strokeWidth="8" fill="none" />
            </svg>
            <div className="text-2xl font-bold mt-2">65.2%</div>
            <div className="text-gray-400">Cliente Recurrente</div>
            <div className="flex justify-between w-full mt-2">
              <div>
                <div className="text-sm text-gray-400">Esta semana</div>
                <div className="font-bold">23.5k</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Semana pasada</div>
                <div className="font-bold">41.05k</div>
              </div>
            </div>
            <button className="mt-4 w-full bg-gray-100 text-blue-600 py-2 rounded hover:bg-gray-200 transition">Ver Detalles</button>
          </div>
        </div>
      </div>
      {/* Modal de edición */}
      {openModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
            <button onClick={handleClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
            <h2 className="text-xl font-bold mb-4">Editar Pedido</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Detalle del producto */}
              <div>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-24 h-24 object-contain mb-2 mx-auto" />
                <div className="font-semibold text-lg text-center mb-2">{selectedProduct.name}</div>
                <div className="text-sm text-gray-500 text-center mb-2">Estado: <span className="font-bold">{selectedProduct.status}</span></div>
                <label className="block text-sm font-medium">Cantidad</label>
                <input type="number" defaultValue={selectedProduct.quantity} className="border rounded px-2 py-1 w-full mb-2" />
              </div>
              {/* Detalle del cliente/proveedor */}
              <div>
                <label className="block text-sm font-medium">Cliente</label>
                <input type="text" defaultValue={selectedProduct.customer} className="border rounded px-2 py-1 w-full mb-2" />
                <label className="block text-sm font-medium">Teléfono</label>
                <input type="text" defaultValue={selectedProduct.phone} className="border rounded px-2 py-1 w-full mb-2" />
                <label className="block text-sm font-medium">Fecha</label>
                <input type="text" defaultValue={selectedProduct.date} className="border rounded px-2 py-1 w-full mb-2" />
              </div>
            </div>
            {/* Facturación */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Precio Unitario (S/)</label>
              <input type="number" defaultValue={selectedProduct.price || ""} placeholder="Ej: 25.00" className="border rounded px-2 py-1 w-full mb-2" />
              <label className="block text-sm font-medium">Método de Pago</label>
              <select className="border rounded px-2 py-1 w-full mb-2" defaultValue="Efectivo">
                <option>Efectivo</option>
                <option>Transferencia</option>
                <option>Tarjeta</option>
              </select>
              <div className="text-right font-bold mt-2">Total: S/ {(selectedProduct.price ? selectedProduct.price * selectedProduct.quantity : "-")}</div>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={handleClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 font-semibold">Cancelar</button>
              <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 font-semibold">Guardar Cambios</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelProveedor; 