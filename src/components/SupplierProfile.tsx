import React, { useState } from 'react';
import { Star, MapPin, Phone, Mail, Clock, Truck, Shield, Award } from 'lucide-react';

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface SupplierProfile {
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
  description: string;
  workingHours: string;
  deliveryArea: string;
  reviews: Review[];
  certifications: string[];
}

const supplierProfile: SupplierProfile = {
  id: "1",
  name: "Constructora del Norte",
  category: "Materiales de Construcción",
  rating: 4.5,
  location: "Lima Norte, Los Olivos",
  phone: "+51 987 654 321",
  email: "contacto@constructoranorte.com",
  image: "https://via.placeholder.com/150",
  materials: ["Cemento", "Ladrillos", "Arena", "Fierro"],
  isVerified: true,
  description: "Somos una empresa líder en la distribución de materiales de construcción, comprometidos con la calidad y el servicio al cliente.",
  workingHours: "Lunes a Sábado: 8:00 AM - 6:00 PM",
  deliveryArea: "Lima Norte y Lima Este",
  reviews: [
    {
      id: "1",
      user: "Juan Pérez",
      rating: 5,
      comment: "Excelente servicio y materiales de calidad.",
      date: "2024-03-15"
    },
    {
      id: "2",
      user: "María López",
      rating: 4,
      comment: "Buen servicio, precios competitivos.",
      date: "2024-03-10"
    }
  ],
  certifications: [
    "ISO 9001:2015",
    "Certificación de Calidad en Construcción",
    "Distribuidor Autorizado"
  ]
};

const SupplierProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header del perfil */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <img src={supplierProfile.image} alt={supplierProfile.name} className="w-32 h-32 rounded-full object-cover" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{supplierProfile.name}</h1>
              {supplierProfile.isVerified && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Verificado
                </span>
              )}
            </div>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(supplierProfile.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({supplierProfile.rating})</span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{supplierProfile.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>{supplierProfile.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span>{supplierProfile.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs de navegación */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === 'info'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 hover:text-orange-500'
            }`}
            onClick={() => setActiveTab('info')}
          >
            Información
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === 'materials'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 hover:text-orange-500'
            }`}
            onClick={() => setActiveTab('materials')}
          >
            Materiales
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === 'reviews'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 hover:text-orange-500'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reseñas
          </button>
        </div>

        {/* Contenido de las tabs */}
        <div className="p-6">
          {activeTab === 'info' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                <p className="text-gray-600">{supplierProfile.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Horario de Atención</h3>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{supplierProfile.workingHours}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Área de Entrega</h3>
                <div className="flex items-center text-gray-600">
                  <Truck className="w-4 h-4 mr-2" />
                  <span>{supplierProfile.deliveryArea}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Certificaciones</h3>
                <div className="flex flex-wrap gap-2">
                  {supplierProfile.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm flex items-center"
                    >
                      <Award className="w-4 h-4 mr-1" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'materials' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Materiales Disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {supplierProfile.materials.map((material, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg flex items-center justify-between"
                  >
                    <span className="font-medium">{material}</span>
                    <button className="text-orange-500 hover:text-orange-600">
                      Ver detalles
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Reseñas de Clientes</h3>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Escribir reseña
                </button>
              </div>
              <div className="space-y-4">
                {supplierProfile.reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{review.user}</span>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Botón de contacto */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          Contactar Proveedor
        </button>
      </div>
    </div>
  );
};

export default SupplierProfile; 