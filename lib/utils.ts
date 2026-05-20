type ClassValue = string | false | null | undefined | Record<string, boolean | undefined>;

export function cn(...inputs: ClassValue[]) {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === 'string') return [input];
      return Object.entries(input)
        .filter(([, active]) => active)
        .map(([className]) => className);
    })
    .join(' ');
}

export function absoluteUrl(path = '') {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nationaltruckschool.com';
  return `${base}${path}`;
}

export function formatPhoneForDisplay(phone: string) {
  return phone;
}
