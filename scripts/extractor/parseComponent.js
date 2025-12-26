// const fs = require("fs");
// const path = require("path");

// const { extractImports } = require("./extractImports");
// const { extractHooks } = require("./extractHooks");
// const { extractJSXSignals } = require("./extractJSXSignals");
// const { resolveDependencies } = require("./dependencyResolver");

// /**
//  * STEP-1 + STEP-2 COMBINED
//  * - STEP-1: Analyze component internals
//  * - STEP-2: Discover related files (dependency graph)
//  */
// function parseComponent(filePath) {
//   // 1️⃣ Resolve absolute path
//   const absolutePath = path.resolve(filePath);

//   // 2️⃣ Read source code
//   const sourceCode = fs.readFileSync(absolutePath, "utf-8");

//   // 3️⃣ STEP-1: Extract imports first (needed for dependency graph)
//   const imports = extractImports(sourceCode);

//   // 4️⃣ STEP-2: Resolve related local files recursively
//   const relatedFiles = resolveDependencies(absolutePath);

//   // 5️⃣ Return COMPLETE context object
//   return {
//     file: filePath,
//     componentName: path.basename(filePath).replace(/\.(jsx|js)$/, ""),
//     imports,
//     hooks: extractHooks(sourceCode),
//     jsxSignals: extractJSXSignals(sourceCode),
//     relatedFiles
//   };
// }

// module.exports = { parseComponent };


// ================= ES MODULE IMPORTS =================
import fs from "fs";
import path from "path";

import { extractImports } from "./extractImports.js";
import { extractHooks } from "./extractHooks.js";
import { extractJSXSignals } from "./extractJSXSignals.js";
import { resolveDependencies } from "./dependencyResolver.js";

/**
 * STEP-1 + STEP-2 COMBINED
 * - STEP-1: Analyze component internals
 * - STEP-2: Discover related files (dependency graph)
 */
export function parseComponent(filePath) {
  // 1️⃣ Resolve absolute path
  const absolutePath = path.resolve(filePath);

  // 2️⃣ Read source code
  const sourceCode = fs.readFileSync(absolutePath, "utf-8");

  // 3️⃣ STEP-1: Extract imports first (needed for dependency graph)
  const imports = extractImports(sourceCode);

  // 4️⃣ STEP-2: Resolve related local files recursively
  const relatedFiles = resolveDependencies(absolutePath);

  // 5️⃣ Return COMPLETE context object
  return {
    file: filePath,
    componentName: path.basename(filePath).replace(/\.(jsx|js)$/, ""),
    imports,
    hooks: extractHooks(sourceCode),
    jsxSignals: extractJSXSignals(sourceCode),
    relatedFiles
  };
}
