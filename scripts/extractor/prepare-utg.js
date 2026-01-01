// // // ================= ES MODULE =================
// // import fs from "fs";
// // import path from "path";

// // /**
// //  * STEP-7: PREPARE UNIT TEST GENERATION PROMPT
// //  * Converts React component schema into an LLM-ready prompt
// //  */

// // const SCHEMA_PATH = path.resolve("context", "react-component-schema.json");
// // const OUTPUT_PATH = path.resolve("context", "utg-prompt.txt");

// // function prepareUTGPrompt() {
// //   if (!fs.existsSync(SCHEMA_PATH)) {
// //     throw new Error("❌ Schema file not found. Cannot prepare UTG prompt.");
// //   }

// //   const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf-8"));

// //   const {
// //     meta,
// //     behavior,
// //     uiPatterns,
// //     dependencies,
// //     riskAreas
// //   } = schema;

// //   const prompt = `
// // You are a senior frontend engineer specializing in React testing.

// // ====================================================
// // COMPONENT CONTEXT
// // ====================================================
// // Component Name: ${meta.componentName}
// // Entry File: ${meta.entryFile}
// // Component Type: ${meta.type}

// // ====================================================
// // BEHAVIORAL ANALYSIS
// // ====================================================
// // - Uses State: ${behavior.usesState}
// // - Uses Effect: ${behavior.usesEffect}
// // - Uses Context: ${behavior.usesContext}
// // - Hooks Used: ${behavior.hooksUsed.join(", ") || "None"}

// // ====================================================
// // UI PATTERNS DETECTED
// // ====================================================
// // - Conditional Rendering: ${uiPatterns.conditionalRendering}
// // - List Rendering: ${uiPatterns.listRendering}
// // - Loader State: ${uiPatterns.hasLoader}
// // - Error State: ${uiPatterns.hasErrorState}
// // - Event Handlers Count: ${uiPatterns.eventHandlerCount}

// // ====================================================
// // DEPENDENCIES
// // ====================================================
// // - Custom Hooks: ${dependencies.customHooks.join(", ") || "None"}
// // - Utils: ${dependencies.utils.join(", ") || "None"}
// // - Child Components: ${dependencies.components.join(", ") || "None"}
// // - Related Files:
// // ${dependencies.relatedFiles.map(f => `  - ${f}`).join("\n")}

// // ====================================================
// // IDENTIFIED RISK AREAS
// // ====================================================
// // ${riskAreas.length > 0 ? riskAreas.map(r => `- ${r}`).join("\n") : "- None"}

// // ====================================================
// // TESTING OBJECTIVES (MANDATORY)
// // ====================================================
// // Generate unit tests using:
// // - Jest
// // - React Testing Library

// // Tests MUST include:
// // 1. Component renders without crashing
// // 2. State initialization and updates
// // 3. Side effects triggered by useEffect
// // 4. Conditional rendering paths
// // 5. Loader and error states
// // 6. User interaction handling
// // 7. Boundary conditions (empty, null, undefined)
// // 8. Dependency mocking
// // 9. Edge cases inferred from risk areas

// // ====================================================
// // TESTING RULES (STRICT)
// // ====================================================
// // - Use screen.getByRole / getByText / findBy*
// // - Avoid implementation details
// // - Do NOT snapshot test unless required
// // - Mock external hooks and APIs
// // - Tests must be deterministic
// // - Prefer userEvent over fireEvent

// // ====================================================
// // OUTPUT FORMAT
// // ====================================================
// // - Output ONLY valid JavaScript test code
// // - No explanations
// // - No markdown
// // - No comments outside test code
// // - Single test file
// // `;

// //   fs.writeFileSync(OUTPUT_PATH, prompt.trim(), "utf-8");

// //   console.log("✅ UTG prompt prepared successfully");
// //   console.log(`📄 Prompt saved at: ${OUTPUT_PATH}`);
// // }

// // prepareUTGPrompt();

// // ================= ES MODULE =================
// import fs from "fs";
// import path from "path";

// /**
//  * STEP-7: PREPARE UNIT TEST GENERATION PROMPT
//  *
//  * This file builds a SINGLE, LLM-ready prompt that contains:
//  * 1. Extracted React schema (behavior, risks, UI patterns)
//  * 2. FULL SOURCE CODE of the component
//  * 3. FULL SOURCE CODE of all related dependency files
//  *
//  * Output is consumed by the UTG repo (LLM).
//  */

// const SCHEMA_PATH = path.resolve("context", "react-component-schema.json");
// const OUTPUT_PATH = path.resolve("context", "utg-prompt.txt");

// function prepareUTGPrompt() {
//   if (!fs.existsSync(SCHEMA_PATH)) {
//     throw new Error("❌ Schema file not found. Cannot prepare UTG prompt.");
//   }

//   const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf-8"));

//   const {
//     meta,
//     behavior,
//     uiPatterns,
//     dependencies,
//     riskAreas
//   } = schema;

//   // ============================================================
//   // 1️⃣ COLLECT ALL FILES (COMPONENT + DEPENDENCIES)
//   // ============================================================
//   const allFiles = new Set([
//     schema.file,
//     ...(dependencies.relatedFiles || [])
//   ]);

//   let sourceCodeSection = "";

//   allFiles.forEach((relativePath) => {
//     try {
//       const absolutePath = path.resolve(relativePath);
//       const content = fs.readFileSync(absolutePath, "utf-8");

//       sourceCodeSection += `
// ----------------------------------------------------
// FILE: ${relativePath}
// ----------------------------------------------------
// ${content}
// `;
//     } catch (err) {
//       sourceCodeSection += `
// ----------------------------------------------------
// FILE: ${relativePath}
// ----------------------------------------------------
// ❌ Failed to read file
// `;
//     }
//   });

//   // ============================================================
//   // 2️⃣ BUILD FINAL LLM PROMPT (TEXT, NOT JSON)
//   // ============================================================
//   const prompt = `
// You are a senior frontend engineer specializing in React testing.

// ====================================================
// COMPONENT CONTEXT
// ====================================================
// Component Name: ${meta.componentName}
// Entry File: ${meta.entryFile}
// Component Type: ${meta.type}

// ====================================================
// BEHAVIORAL ANALYSIS
// ====================================================
// - Uses State: ${behavior.usesState}
// - Uses Effect: ${behavior.usesEffect}
// - Uses Context: ${behavior.usesContext}
// - Hooks Used: ${behavior.hooksUsed.join(", ") || "None"}

// ====================================================
// UI PATTERNS DETECTED
// ====================================================
// - Conditional Rendering: ${uiPatterns.conditionalRendering}
// - List Rendering: ${uiPatterns.listRendering}
// - Loader State: ${uiPatterns.hasLoader}
// - Error State: ${uiPatterns.hasErrorState}
// - Event Handlers Count: ${uiPatterns.eventHandlerCount}

// ====================================================
// DEPENDENCIES
// ====================================================
// - Custom Hooks: ${dependencies.customHooks.join(", ") || "None"}
// - Utils: ${dependencies.utils.join(", ") || "None"}
// - Child Components: ${dependencies.components.join(", ") || "None"}

// ====================================================
// IDENTIFIED RISK AREAS
// ====================================================
// ${riskAreas.length > 0 ? riskAreas.map(r => `- ${r}`).join("\n") : "- None"}

// ====================================================
// FULL SOURCE CODE (GROUND TRUTH)
// ====================================================
// ${sourceCodeSection}

// ====================================================
// TESTING OBJECTIVES (MANDATORY)
// ====================================================
// Generate unit tests using:
// - Jest
// - React Testing Library

// Tests MUST include:
// 1. Component renders without crashing
// 2. State initialization and updates
// 3. Side effects triggered by useEffect
// 4. Conditional rendering paths
// 5. Loader and error states
// 6. User interaction handling
// 7. Boundary conditions (empty, null, undefined)
// 8. Dependency mocking
// 9. Edge cases inferred from risk areas

// ====================================================
// TESTING RULES (STRICT)
// ====================================================
// - Use screen.getByRole / getByText / findBy*
// - Avoid implementation details
// - Do NOT snapshot test unless required
// - Mock external hooks and APIs
// - Tests must be deterministic
// - Prefer userEvent over fireEvent

// ====================================================
// OUTPUT FORMAT
// ====================================================
// - Output ONLY valid JavaScript test code
// - No explanations
// - No markdown
// - No comments outside test code
// - Single test file
// `;

//   // ============================================================
//   // 3️⃣ WRITE PROMPT
//   // ============================================================
//   fs.writeFileSync(OUTPUT_PATH, prompt.trim(), "utf-8");

//   console.log("✅ UTG prompt prepared successfully");
//   console.log(`📄 Prompt saved at: ${OUTPUT_PATH}`);
// }

// // Execute when called from extractor pipeline
// prepareUTGPrompt();



// ================= ES MODULE =================
import fs from "fs";
import path from "path";

/**
 * STEP-7: PREPARE UNIT TEST GENERATION PROMPT
 *
 * This file builds a SINGLE, LLM-ready prompt that contains:
 * 1. Extracted React schema
 * 2. FULL SOURCE CODE of the component
 * 3. FULL SOURCE CODE of all related dependency files
 *
 * Output is consumed by the UTG repo (LLM).
 */

const OUTPUT_PATH = path.resolve("context", "utg-prompt.txt");

export function prepareUTGPrompt(schemaPath) {
  if (!fs.existsSync(schemaPath)) {
    throw new Error("❌ Schema file not found. Cannot prepare UTG prompt.");
  }

  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

  const {
    meta,
    behavior,
    uiPatterns,
    dependencies,
    riskAreas
  } = schema;

  // ============================================================
  // 1️⃣ COLLECT ALL FILES (COMPONENT + DEPENDENCIES)
  // ============================================================
  const allFiles = new Set([
    schema.file,
    ...(dependencies.relatedFiles || [])
  ]);

  let sourceCodeSection = "";

  allFiles.forEach((relativePath) => {
    try {
      const absolutePath = path.resolve(relativePath);
      const content = fs.readFileSync(absolutePath, "utf-8");

      sourceCodeSection += `
----------------------------------------------------
FILE: ${relativePath}
----------------------------------------------------
${content}
`;
    } catch {
      sourceCodeSection += `
----------------------------------------------------
FILE: ${relativePath}
----------------------------------------------------
❌ Failed to read file
`;
    }
  });

  // ============================================================
  // 2️⃣ BUILD FINAL LLM PROMPT
  // ============================================================
  const prompt = `
You are a senior frontend engineer specializing in React testing.

====================================================
COMPONENT CONTEXT
====================================================
Component Name: ${meta.componentName}
Entry File: ${meta.entryFile}
Component Type: ${meta.type}

====================================================
BEHAVIORAL ANALYSIS
====================================================
- Uses State: ${behavior.usesState}
- Uses Effect: ${behavior.usesEffect}
- Uses Context: ${behavior.usesContext}
- Hooks Used: ${behavior.hooksUsed.join(", ") || "None"}

====================================================
UI PATTERNS DETECTED
====================================================
- Conditional Rendering: ${uiPatterns.conditionalRendering}
- List Rendering: ${uiPatterns.listRendering}
- Loader State: ${uiPatterns.hasLoader}
- Error State: ${uiPatterns.hasErrorState}
- Event Handlers Count: ${uiPatterns.eventHandlerCount}

====================================================
DEPENDENCIES
====================================================
- Custom Hooks: ${dependencies.customHooks.join(", ") || "None"}
- Utils: ${dependencies.utils.join(", ") || "None"}
- Child Components: ${dependencies.components.join(", ") || "None"}

====================================================
IDENTIFIED RISK AREAS
====================================================
${riskAreas.length > 0 ? riskAreas.map(r => `- ${r}`).join("\n") : "- None"}

====================================================
FULL SOURCE CODE (GROUND TRUTH)
====================================================
${sourceCodeSection}

====================================================
TESTING OBJECTIVES (MANDATORY)
====================================================
Generate unit tests using:
- Jest
- React Testing Library

Tests MUST include:
1. Component renders without crashing
2. State initialization and updates
3. Side effects triggered by useEffect
4. Conditional rendering paths
5. Loader and error states
6. User interaction handling
7. Boundary conditions (empty, null, undefined)
8. Dependency mocking
9. Edge cases inferred from risk areas

====================================================
TESTING RULES (STRICT)
====================================================
- Use screen.getByRole / getByText / findBy*
- Avoid implementation details
- Do NOT snapshot test unless required
- Mock external hooks and APIs
- Tests must be deterministic
- Prefer userEvent over fireEvent

====================================================
OUTPUT FORMAT
====================================================
- Output ONLY valid JavaScript test code
- No explanations
- No markdown
- No comments outside test code
- Single test file
`;

  fs.writeFileSync(OUTPUT_PATH, prompt.trim(), "utf-8");

  console.log("✅ UTG prompt prepared successfully");
  console.log(`📄 Prompt saved at: ${OUTPUT_PATH}`);
}

