/**
 * Build a URL with the origin of the current page and the path provided
 * @param path path portion of the URL
 * @returns A URL with the origin of the current page and the path provided
 */
export function buildOriginURL(path: string) {
  return window.location.origin + path
}
