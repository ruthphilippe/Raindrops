export const convert = (x) => {
  let string = '';
  
  if (x % 3 === 0) string += 'Pling'
  if (x % 5 === 0) string += 'Plang'
  if (x % 7 === 0) string += 'Plong'
    
    return string || x.toString();
  
};
