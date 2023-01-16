import { createContext } from 'react';
import { IsItem, IsProduct } from 'types';

export const DataContext = createContext<{products: IsProduct[], items: IsItem[]}>({products: [], items: []});
