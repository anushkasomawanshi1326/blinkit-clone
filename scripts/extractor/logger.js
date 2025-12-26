function logExtraction(data) {
  console.log("📦 Extracted Context:");
  console.log(JSON.stringify(data, null, 2));
}

module.exports = { logExtraction };
