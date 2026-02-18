const COOKIE_NAME = 'ginkins_age_verified';

export function isAgeVerified(): boolean {
  if (typeof document === 'undefined') return false;

  return document.cookie
    .split('; ')
    .some((c) => c.startsWith(`${COOKIE_NAME}=true`));
}

export function setAgeVerified(): void {
  document.cookie = `${COOKIE_NAME}=true; path=/; max-age=1; SameSite=Lax`;
}
