export const toPrismaSelect = (select: string[] = []) =>
  select.length
    ? select.reduce(
        (result, selection) => ({ ...result, [selection]: true }),
        {},
      )
    : { id: true };
