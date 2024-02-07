// const setTheme = (types: Pokemon["types"] | undefined) => {
//   if (types) {
//     setThemeColor(typeColor[types[0].type.name]);
//   }
//   setThemeColor("#eee");
// };

//   const appendTypes = (types: PokemonType[] = []) => {
//     const spanArray: JSX.Element[] = [];

//     types.forEach((item) => {
//       spanArray.push(
//         <span
//           style={{
//             background: `${themeColor}`,
//           }}
//         >
//           {item.type.name}
//         </span>
//       );
//     });

//     return spanArray;
//   };

//   const appendTypes1 = (types: PokemonType[]): JSX.Element[] =>
//     types.map((item) => <span>{item.type.name}</span>);

export const getPokeName = (name: string): string => {
  return name[0].toUpperCase() + name.slice(1)
}
