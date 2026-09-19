/**
 * Reduces a URL to the bare domain, which is what the work index shows in
 * place of a written-out call to action: "dealzako.com" tells a reader more,
 * in less space, than "Visit the DealZako website".
 */
export function domainOf(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}
