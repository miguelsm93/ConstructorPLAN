import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Phone, Mail } from 'lucide-react';

interface Supplier {
  id: string;
  name: string;
  category: string;
  rating: number;
  location: string;
  phone: string;
  email: string;
  image: string;
  materials: string[];
  isVerified: boolean;
}

const suppliers: Supplier[] = [
  {
    id: "1",
    name: "Constructora del Norte",
    category: "Materiales de Construcción",
    rating: 4.5,
    location: "Lima Norte, Los Olivos",
    phone: "+51 987 654 321",
    email: "contacto@constructoranorte.com",
    image: "https://via.placeholder.com/150",
    materials: ["Cemento", "Ladrillos", "Arena", "Fierro"],
    isVerified: true
  },
  {
    id: "2",
    name: "Materiales Express",
    category: "Distribuidor Mayorista",
    rating: 4.2,
    location: "Lima Sur, Villa El Salvador",
    phone: "+51 912 345 678",
    email: "ventas@materialesexpress.com",
    image: "https://via.placeholder.com/150",
    materials: ["Pinturas", "Herramientas", "Electricidad"],
    isVerified: true
  },
  // Más proveedores...
];

const SupplierList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(suppliers.map(s => s.category)));

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.materials.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || supplier.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      {/* Header con búsqueda y filtros */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Proveedores</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar proveedores o materiales..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de proveedores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSuppliers.map(supplier => (
          <div key={supplier.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <img src={supplier.image} alt={supplier.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-lg">{supplier.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{supplier.rating}</span>
                      {supplier.isVerified && (
                        <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Verificado</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{supplier.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">{supplier.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{supplier.email}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Materiales disponibles:</h4>
                <div className="flex flex-wrap gap-2">
                  {supplier.materials.map(material => (
                    <span key={material} className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Ver perfil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierList; 