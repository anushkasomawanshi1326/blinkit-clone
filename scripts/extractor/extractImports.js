// function extractImports(source) {
//   const importLines = source.match(/import\s.+from\s.+;/g) || [];

//   const categorized = {
//     reactHooks: [],
//     customHooks: [],
//     components: [],
//     utils: [],
//     apis: []
//   };

//   importLines.forEach((line) => {
//     if (line.includes("react")) {
//       if (line.includes("use")) categorized.reactHooks.push(line);
//     } else if (line.includes("use")) {
//       categorized.customHooks.push(line);
//     } else if (line.includes("/components/")) {
//       categorized.components.push(line);
//     } else if (line.includes("/utils/")) {
//       categorized.utils.push(line);
//     } else if (line.includes("api")) {
//       categorized.apis.push(line);
//     }
//   });

//   return categorized;
// }

// module.exports = { extractImports };


// ================= ES MODULE =================
/**
 * Extract and categorize import statements from a React component source
 */
export function extractImports(source) {
  // Match all import lines
  const importLines = source.match(/import\s.+from\s.+;/g) || [];

  // Categorized object
  const categorized = {
    reactHooks: [],
    customHooks: [],
    components: [],
    utils: [],
    apis: []
  };

  // Categorize each import line
  importLines.forEach((line) => {
    if (line.includes("react")) {
      if (line.includes("use")) categorized.reactHooks.push(line);
    } else if (line.includes("use")) {
      categorized.customHooks.push(line);
    } else if (line.includes("/components/")) {
      categorized.components.push(line);
    } else if (line.includes("/utils/")) {
      categorized.utils.push(line);
    } else if (line.includes("api")) {
      categorized.apis.push(line);
    }
  });

  return categorized;
}
