const world = "world";

export function hello(who: string = world): string {
  return `Helllo ${who}`;
}