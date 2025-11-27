// - named export
export function range(start, end, step = 1) {
  const output = [];

  // CASE 1: only one argument - treat it as "end", start=0
  if (end === undefined) {
    end = start
    start = 0;
  }

  // Build the array
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
}

/*
Examples:
range(10) //[0,1,2,3,4,5,6,7,8,9]
range(2, 10) //[2,3,4,5,6,7,8,9]
range(0,10,2) //[0,2,4,6,8]
range(5) //[0,1,2,3,4]
*/