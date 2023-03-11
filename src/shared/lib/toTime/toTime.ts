export const toTime = (milliseconds: number) => {
  const MM = Math.floor(milliseconds / 60000);
  const SS = Math.floor((milliseconds - MM * 60000) / 1000);
  const sss = milliseconds - MM * 60000 - SS * 1000;
  return [`00${MM}`.slice(-2), `00${SS}`.slice(-2), `000${sss}`.slice(-3)].join(
    ":"
  );
};
