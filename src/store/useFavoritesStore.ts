import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (carId: string) => void;
  isFavorite: (carId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      toggleFavorite: (carId) => set((state) => ({
        favorites: state.favorites.includes(carId)
          ? state.favorites.filter(id => id !== carId)
          : [...state.favorites, carId],
      })),
      
      isFavorite: (carId) => get().favorites.includes(carId),
    }),
    {
      name: 'favorites-storage',
    }
  )
);