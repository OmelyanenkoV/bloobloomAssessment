export function imgConstructor(imgName: string) {
  return new URL(`../assets/img/${imgName}`, import.meta.url).href
}
