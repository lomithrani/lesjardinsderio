import type { Locale } from '../config';

// Libellés du widget de réservation NoBeds (page Chambres).
// Gardés à part du gros ui.ts pour rester ciblés sur la fonctionnalité.
export interface BookingStrings {
  chooseSuite: string;
  loadingCalendar: string;
  openNewTab: string;
}

export const booking: Record<Locale, BookingStrings> = {
  pt: { chooseSuite: 'Escolha uma suíte', loadingCalendar: 'Carregando o calendário…', openNewTab: 'Abrir em nova aba' },
  en: { chooseSuite: 'Choose a suite', loadingCalendar: 'Loading the calendar…', openNewTab: 'Open in a new tab' },
  fr: { chooseSuite: 'Choisir une suite', loadingCalendar: 'Chargement du calendrier…', openNewTab: 'Ouvrir dans un nouvel onglet' },
};
