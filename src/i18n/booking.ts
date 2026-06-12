import type { Locale } from '../config';

// Libellés liés à la réservation (page Chambres) : bouton Réserver, overlay, carousel.
// Gardés à part du gros ui.ts pour rester ciblés sur la fonctionnalité.
export interface BookingStrings {
  book: string; // bouton « Réserver »
  bookAria: string; // préfixe aria du bouton, suivi du nom de la chambre
  close: string; // fermer l'overlay
  loading: string; // chargement du moteur de réservation
  prevPhoto: string; // carousel : photo précédente
  nextPhoto: string; // carousel : photo suivante
  viewLarge: string; // ouvrir la vue grand format d'une carte
}

export const booking: Record<Locale, BookingStrings> = {
  pt: {
    book: 'Reservar',
    bookAria: 'Reservar a suíte',
    close: 'Fechar',
    loading: 'Carregando a reserva…',
    prevPhoto: 'Foto anterior',
    nextPhoto: 'Próxima foto',
    viewLarge: 'Ver em tela grande',
  },
  en: {
    book: 'Book',
    bookAria: 'Book the suite',
    close: 'Close',
    loading: 'Loading the booking engine…',
    prevPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    viewLarge: 'View larger',
  },
  fr: {
    book: 'Réserver',
    bookAria: 'Réserver la suite',
    close: 'Fermer',
    loading: 'Chargement de la réservation…',
    prevPhoto: 'Photo précédente',
    nextPhoto: 'Photo suivante',
    viewLarge: 'Voir en grand',
  },
};
