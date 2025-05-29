import React from 'react';
import SupplierList from '../components/SupplierList';
import SupplierProfile from '../components/SupplierProfile';
import ContactForm from '../components/ContactForm';
import RatingSystem from '../components/RatingSystem';

const SupplierPage: React.FC = () => {
  const handleRatingSubmit = (rating: number, comment: string) => {
    console.log('Nueva calificación:', { rating, comment });
    // Aquí iría la lógica para guardar la calificación
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Proveedores de Materiales de Construcción</h1>
        
        {/* Sección de búsqueda y filtros */}
        <div className="mb-8">
          <SupplierList />
        </div>

        {/* Sección de perfil de proveedor */}
        <div className="mb-8">
          <SupplierProfile />
        </div>

        {/* Sección de calificaciones */}
        <div className="mb-8">
          <RatingSystem
            supplierId="1"
            onRatingSubmit={handleRatingSubmit}
          />
        </div>

        {/* Sección de contacto */}
        <div className="mb-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default SupplierPage; 