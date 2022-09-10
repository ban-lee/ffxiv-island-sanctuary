import { v4 as uuidv4 } from 'uuid';

export function getId(prefix?: string): string {
  return `${prefix || 'id'}-${uuidv4()}`;
}
