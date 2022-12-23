export const toPrismaSelect = (select: string[] = []) =>
  select?.reduce((result, selection) => ({ ...result, [selection]: true }), {});
