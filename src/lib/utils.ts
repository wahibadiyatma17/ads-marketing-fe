import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEmail = (value: string) => {
  if (!value) {
    return 'Email can not be empty';
  }
  if (!/\S+@\S+\.\S+/.test(value)) {
    return 'Incorrect email format';
  }
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
    return 'Incorrect email format';
  return true;
};
