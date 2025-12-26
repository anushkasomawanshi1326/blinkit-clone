// // // const { detectChangedFiles } = require("./detectChangedFiles");
// // // const { parseComponent } = require("./parseComponent");
// // // const { buildSchema } = require("./schemaBuilder");
// // // const { logExtraction } = require("./logger");
// // // const { logSchema } = require("./schemaLogger");

// // // /**
// // //  * MASTER ORCHESTRATOR
// // //  * Step-1: Detect changed components
// // //  * Step-2: Extract component + dependencies
// // //  * Step-3: Build LLM-ready schema
// // //  */
// // // function run() {
// // //   console.log("🚀 Starting React Context Extraction Pipeline\n");

// // //   // 1️⃣ Detect changed React component files
// // //   const changedFiles = detectChangedFiles();

// // //   if (!changedFiles || changedFiles.length === 0) {
// // //     console.log("⚠️ No React component changes detected");
// // //     return;
// // //   }

// // //   // 2️⃣ Process each changed component
// // //   changedFiles.forEach((filePath) => {
// // //     console.log("====================================");
// // //     console.log(`🔍 Processing Component: ${filePath}`);
// // //     console.log("====================================");

// // //     // STEP-1 + STEP-2
// // //     const extractedData = parseComponent(filePath);

// // //     // (Optional but recommended) Log raw extraction
// // //     console.log("\n📄 RAW EXTRACTION OUTPUT");
// // //     logExtraction(extractedData);

// // //     // STEP-3
// // //     const schema = buildSchema(extractedData);

// // //     // Log final compressed schema
// // //     console.log("\n📦 FINAL LLM-READY SCHEMA");
// // //     logSchema(schema);
// // //   });

// // //   console.log("\n✅ Context extraction pipeline completed");
// // // }

// // // run();



// // // ================= ES MODULE IMPORTS =================
// // import { detectChangedFiles } from "./detectChangedFiles.js";
// // import { parseComponent } from "./parseComponent.js";
// // import { buildSchema } from "./schemaBuilder.js";
// // import { logExtraction } from "./logger.js";
// // import { logSchema } from "./schemaLogger.js";

// // /**
// //  * MASTER ORCHESTRATOR
// //  * Step-1: Detect changed components
// //  * Step-2: Extract component + dependencies
// //  * Step-3: Build LLM-ready schema
// //  */
// // function run() {
// //   console.log("🚀 Starting React Context Extraction Pipeline\n");

// //   // 1️⃣ Detect changed React component files
// //   const changedFiles = detectChangedFiles();

// //   if (!changedFiles || changedFiles.length === 0) {
// //     console.log("⚠️ No React component changes detected");
// //     return;
// //   }

// //   // 2️⃣ Process each changed component
// //   changedFiles.forEach((filePath) => {
// //     console.log("====================================");
// //     console.log(`🔍 Processing Component: ${filePath}`);
// //     console.log("====================================");

// //     // STEP-1 + STEP-2
// //     const extractedData = parseComponent(filePath);

// //     // (Optional but recommended) Log raw extraction
// //     console.log("\n📄 RAW EXTRACTION OUTPUT");
// //     logExtraction(extractedData);

// //     // STEP-3
// //     const schema = buildSchema(extractedData);

// //     // Log final compressed schema
// //     console.log("\n📦 FINAL LLM-READY SCHEMA");
// //     logSchema(schema);
// //   });

// //   console.log("\n✅ Context extraction pipeline completed");
// // }

// // // Run the orchestrator
// // run();


// // ================= ES MODULE IMPORT =================
// import { execSync } from "child_process";

// /**
//  * Detect changed React component files in the repository
//  * Only returns files under /components/ with .jsx or .js extension
//  */
// export function detectChangedFiles() {
//   const diff = execSync(
//     "git diff --name-only origin/main",
//     { encoding: "utf-8" }
//   );

//   return diff
//     .split("\n")
//     .filter((file) =>
//       file.endsWith(".jsx") || file.endsWith(".js")
//     )
//     .filter((file) =>
//       file.includes("/components/")
//     );
// }

// ================= ES MODULE IMPORTS =================
import { detectChangedFiles } from "./detectChangedFiles.js";
import { parseComponent } from "./parseComponent.js";
import { buildSchema } from "./schemaBuilder.js";
import { logExtraction } from "./logger.js";
import { logSchema } from "./schemaLogger.js";
import fs from "fs";
import path from "path";

/**
 * MASTER ORCHESTRATOR
 * Step-1: Detect changed components
 * Step-2: Extract component + dependencies
 * Step-3: Build LLM-ready schema and save it
 */
function run() {
  console.log("🚀 Starting React Context Extraction Pipeline\n");

  // 1️⃣ Detect changed React component files
  const changedFiles = detectChangedFiles();

  if (!changedFiles || changedFiles.length === 0) {
    console.log("⚠️ No React component changes detected");
    return;
  }

  // Ensure output directory exists
  const contextDir = path.resolve("context");
  fs.mkdirSync(contextDir, { recursive: true });

  // 2️⃣ Process each changed component
  changedFiles.forEach((filePath) => {
    console.log("====================================");
    console.log(`🔍 Processing Component: ${filePath}`);
    console.log("====================================");

    // STEP-1 + STEP-2: Parse component
    const extractedData = parseComponent(filePath);

    // Log raw extraction
    console.log("\n📄 RAW EXTRACTION OUTPUT");
    logExtraction(extractedData);

    // STEP-3: Build schema
    const schema = buildSchema(extractedData);

    // Log final compressed schema
    console.log("\n📦 FINAL LLM-READY SCHEMA");
    logSchema(schema);

    // ================= WRITE SCHEMA TO FILE =================
    const schemaPath = path.resolve(contextDir, "react-component-schema.json");
    fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2), "utf-8");
    console.log(`✅ Schema saved to ${schemaPath}\n`);
  });

  console.log("\n✅ Context extraction pipeline completed");
}

// Run the orchestrator
run();
