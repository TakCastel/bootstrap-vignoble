import { Wine } from './types';

export const WINES: Wine[] = [
  {
    id: '1',
    name: "La Landonne Impériale",
    appellation: "Côte-Rôtie",
    year: 2018,
    type: 'red',
    price: 185,
    description: "La quintessence de la Syrah sur les pentes abruptes du Rhône Septentrional. Un nez profond de lard fumé, de violette et de tapenade noire. Une garde exceptionnelle.",
    aromas: ["Violette", "Lard Fumé", "Poivre Blanc", "Cassis"],
    alcohol: 13.5,
    bottleColor: '#2a0a10',
    labelColor: '#f5f5f0'
  },
  {
    id: '2',
    name: "Les Chaillées d'Or",
    appellation: "Condrieu",
    year: 2021,
    type: 'white',
    price: 72,
    description: "L'opulence du Viognier cultivé en terrasses. Une onctuosité rare équilibrée par une minéralité de granit. Des notes envoûtantes d'abricot bergeron et de chèvrefeuille.",
    aromas: ["Abricot", "Pêche de Vigne", "Violette", "Miel"],
    alcohol: 14.5,
    bottleColor: '#5c5228', 
    labelColor: '#fffef0'
  },
  {
    id: '3',
    name: "Secret des Papes",
    appellation: "Châteauneuf-du-Pape",
    year: 2016,
    type: 'red',
    price: 95,
    description: "Né des galets roulés chauffés par le soleil de Provence. Un assemblage dominé par le Grenache centenaire. Puissant, solaire, aux arômes de garrigue et de kirsch.",
    aromas: ["Garrigue", "Kirsch", "Thym", "Cuir"],
    alcohol: 15.5,
    bottleColor: '#1a0505',
    labelColor: '#1a1a1a'
  },
  {
    id: '4',
    name: "Dentelles Pourpres",
    appellation: "Gigondas",
    year: 2019,
    type: 'red',
    price: 45,
    description: "L'élégance au pied des Dentelles de Montmirail. Un vin racé qui allie la fraîcheur de l'altitude à la générosité du fruit noir épicé.",
    aromas: ["Mûre Sauvage", "Réglisse", "Menthol", "Truffe"],
    alcohol: 14.5,
    bottleColor: '#2d0a15',
    labelColor: '#f3e5dc'
  },
  {
    id: '5',
    name: "Larme du Ventoux",
    appellation: "Ventoux",
    year: 2022,
    type: 'rose',
    price: 28,
    description: "La fraîcheur du Mont Ventoux dans un verre. Un rosé de saignée, vibrant et cristallin, parfait pour les soirs d'été bercés par le chant des cigales.",
    aromas: ["Groseille", "Agrumes", "Pierre à Fusil", "Rose"],
    alcohol: 13,
    bottleColor: '#ffffff00',
    labelColor: '#fff0f5'
  }
];