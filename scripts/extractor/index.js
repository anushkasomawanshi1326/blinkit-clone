const { detectChangedFiles } = require("./detectChangedFiles");
const { parseComponent } = require("./parseComponent");
const { buildSchema } = require("./schemaBuilder");
const { logExtraction } = require("./logger");
const { logSchema } = require("./schemaLogger");

/**
 * MASTER ORCHESTRATOR
 * Step-1: Detect changed components
 * Step-2: Extract component + dependencies
 * Step-3: Build LLM-ready schema
 */
function run() {
  console.log("🚀 Starting React Context Extraction Pipeline\n");

  // 1️⃣ Detect changed React component files
  const changedFiles = detectChangedFiles();

  if (!changedFiles || changedFiles.length === 0) {
    console.log("⚠️ No React component changes detected");
    return;
  }

  // 2️⃣ Process each changed component
  changedFiles.forEach((filePath) => {
    console.log("====================================");
    console.log(`🔍 Processing Component: ${filePath}`);
    console.log("====================================");

    // STEP-1 + STEP-2
    const extractedData = parseComponent(filePath);

    // (Optional but recommended) Log raw extraction
    console.log("\n📄 RAW EXTRACTION OUTPUT");
    logExtraction(extractedData);

    // STEP-3
    const schema = buildSchema(extractedData);

    // Log final compressed schema
    console.log("\n📦 FINAL LLM-READY SCHEMA");
    logSchema(schema);
  });

  console.log("\n✅ Context extraction pipeline completed");
}

run();
