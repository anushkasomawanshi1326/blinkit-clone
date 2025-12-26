// /**
//  * Converts raw extraction into LLM-ready schema
//  */
// function buildSchema(extractedData) {
//   const {
//     file,
//     componentName,
//     imports,
//     hooks,
//     jsxSignals,
//     relatedFiles
//   } = extractedData;

//   return {
//     meta: {
//       componentName,
//       entryFile: file,
//       type: "react-functional-component"
//     },

//     dependencies: {
//       customHooks: imports.customHooks || [],
//       utils: imports.utils || [],
//       components: imports.components || [],
//       relatedFiles
//     },

//     behavior: {
//       usesState: hooks.usesState,
//       usesEffect: hooks.usesEffect,
//       usesContext: hooks.usesContext,
//       hooksUsed: hooks.hooksUsed
//     },

//     uiPatterns: {
//       conditionalRendering: jsxSignals.conditionalRendering,
//       listRendering: jsxSignals.listRendering,
//       hasLoader: jsxSignals.hasLoader,
//       hasErrorState: jsxSignals.hasErrorState,
//       eventHandlerCount: jsxSignals.eventHandlers
//     },

//     riskAreas: deriveRiskAreas(hooks, jsxSignals)
//   };
// }

// /**
//  * Identify boundary / risk areas for testing
//  */
// function deriveRiskAreas(hooks, jsxSignals) {
//   const risks = [];

//   if (hooks.usesEffect) risks.push("side-effect-on-mount");
//   if (jsxSignals.hasLoader) risks.push("loading-state");
//   if (jsxSignals.hasErrorState) risks.push("error-state");
//   if (jsxSignals.listRendering) risks.push("empty-list");
//   if (jsxSignals.eventHandlers > 0) risks.push("user-interaction");

//   return risks;
// }

// module.exports = { buildSchema };


/**
 * Converts raw extraction into LLM-ready schema
 */
export function buildSchema(extractedData) {
  const {
    file,
    componentName,
    imports,
    hooks,
    jsxSignals,
    relatedFiles
  } = extractedData;

  return {
    meta: {
      componentName,
      entryFile: file,
      type: "react-functional-component"
    },

    dependencies: {
      customHooks: imports.customHooks || [],
      utils: imports.utils || [],
      components: imports.components || [],
      relatedFiles
    },

    behavior: {
      usesState: hooks.usesState,
      usesEffect: hooks.usesEffect,
      usesContext: hooks.usesContext,
      hooksUsed: hooks.hooksUsed
    },

    uiPatterns: {
      conditionalRendering: jsxSignals.conditionalRendering,
      listRendering: jsxSignals.listRendering,
      hasLoader: jsxSignals.hasLoader,
      hasErrorState: jsxSignals.hasErrorState,
      eventHandlerCount: jsxSignals.eventHandlers
    },

    riskAreas: deriveRiskAreas(hooks, jsxSignals)
  };
}

/**
 * Identify boundary / risk areas for testing
 */
function deriveRiskAreas(hooks, jsxSignals) {
  const risks = [];

  if (hooks.usesEffect) risks.push("side-effect-on-mount");
  if (jsxSignals.hasLoader) risks.push("loading-state");
  if (jsxSignals.hasErrorState) risks.push("error-state");
  if (jsxSignals.listRendering) risks.push("empty-list");
  if (jsxSignals.eventHandlers > 0) risks.push("user-interaction");

  return risks;
}
