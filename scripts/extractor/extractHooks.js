// function extractHooks(source) {
//   const hooksUsed = source.match(/use[A-Z]\w+/g) || [];

//   return {
//     hooksUsed: [...new Set(hooksUsed)],
//     usesState: hooksUsed.includes("useState"),
//     usesEffect: hooksUsed.includes("useEffect"),
//     usesContext: hooksUsed.includes("useContext")
//   };
// }

// module.exports = { extractHooks };


// ================= ES MODULE =================
/**
 * Extract React hooks used in a component source code
 * Returns hooksUsed array and flags for useState, useEffect, useContext
 */
export function extractHooks(source) {
  const hooksUsed = source.match(/use[A-Z]\w+/g) || [];

  return {
    hooksUsed: [...new Set(hooksUsed)],
    usesState: hooksUsed.includes("useState"),
    usesEffect: hooksUsed.includes("useEffect"),
    usesContext: hooksUsed.includes("useContext")
  };
}
