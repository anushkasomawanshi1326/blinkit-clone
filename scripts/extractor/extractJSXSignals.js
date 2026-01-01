// function extractJSXSignals(source) {
//   return {
//     conditionalRendering: source.includes("?") || source.includes("&&"),
//     listRendering: source.includes(".map("),
//     hasLoader: source.toLowerCase().includes("loading"),
//     hasErrorState: source.toLowerCase().includes("error"),
//     eventHandlers: (source.match(/onClick|onChange|onSubmit/g) || []).length
//   };
// }

// module.exports = { extractJSXSignals };


// ================= ES MODULE =================
/**
 * Extracts JSX UI signals from a React component source
 */
export function extractJSXSignals(source) {
  return {
    conditionalRendering: source.includes("?") || source.includes("&&"),
    listRendering: source.includes(".map("),
    hasLoader: source.toLowerCase().includes("loading"),
    hasErrorState: source.toLowerCase().includes("error"),
    eventHandlers: (source.match(/onClick|onChange|onSubmit/g) || []).length
  };
}
