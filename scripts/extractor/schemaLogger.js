function logSchema(schema) {
  console.log("\n📦 FINAL LLM CONTEXT SCHEMA");
  console.log(JSON.stringify(schema, null, 2));
}

module.exports = { logSchema };
