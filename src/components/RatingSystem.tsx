import React, { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
  dislikes: number;
  replies: Reply[];
}

interface Reply {
  id: string;
  user: string;
  comment: string;
  date: string;
}

interface RatingSystemProps {
  supplierId: string;
  onRatingSubmit: (rating: number, comment: string) => void;
}

const RatingSystem: React.FC<RatingSystemProps> = ({ supplierId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Datos de ejemplo
  const reviews: Review[] = [
    {
      id: "1",
      user: "Juan Pérez",
      rating: 5,
      comment: "Excelente servicio y materiales de calidad. La entrega fue puntual y el personal muy amable.",
      date: "2024-03-15",
      likes: 12,
      dislikes: 0,
      replies: [
        {
          id: "1",
          user: "Constructora del Norte",
          comment: "¡Gracias por tu comentario! Nos alegra que hayas tenido una buena experiencia.",
          date: "2024-03-16"
        }
      ]
    },
    {
      id: "2",
      user: "María López",
      rating: 4,
      comment: "Buen servicio en general, aunque la entrega se retrasó un poco. Los materiales son de buena calidad.",
      date: "2024-03-10",
      likes: 8,
      dislikes: 2,
      replies: []
    }
  ];

  const handleRatingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);
    try {
      // Aquí iría la lógica para enviar la calificación
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de envío
      onRatingSubmit(rating, comment);
      setRating(0);
      setComment('');
      setShowForm(false);
    } catch (error) {
      console.error('Error al enviar la calificación:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Calificaciones y Reseñas</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            {showForm ? 'Cancelar' : 'Escribir reseña'}
          </button>
        </div>

        {/* Formulario de calificación */}
        {showForm && (
          <form onSubmit={handleRatingSubmit} className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Calificación
              </label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoverRating || rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                Comentario
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Cuéntanos tu experiencia..."
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || rating === 0}
                className={`px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors ${
                  (isSubmitting || rating === 0) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar calificación'}
              </button>
            </div>
          </form>
        )}

        {/* Lista de reseñas */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold">{review.user}</h3>
                  <div className="flex items-center space-x-1">
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
                </div>
                <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
              </div>

              <p className="text-gray-600 mb-4">{review.comment}</p>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <button className="flex items-center space-x-1 hover:text-orange-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-orange-500">
                  <ThumbsDown className="w-4 h-4" />
                  <span>{review.dislikes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-orange-500">
                  <MessageSquare className="w-4 h-4" />
                  <span>Responder</span>
                </button>
              </div>

              {/* Respuestas */}
              {review.replies.length > 0 && (
                <div className="mt-4 ml-8 space-y-4">
                  {review.replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{reply.user}</span>
                        <span className="text-sm text-gray-500">{formatDate(reply.date)}</span>
                      </div>
                      <p className="text-gray-600">{reply.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingSystem; 