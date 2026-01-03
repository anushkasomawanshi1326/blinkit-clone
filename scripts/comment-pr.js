// // scripts/comment-pr.js
// const fs = require("fs");
// const { github, context } = require("@actions/github"); // Make sure github-script provides context

// const schemaPath = "context/react-component-schema.json";

// if (!fs.existsSync(schemaPath)) {
//   console.log("Schema not found. Skipping PR comment.");
//   process.exit(0);
// }

// const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

// const body = `## 🧩 React Context Extraction Complete

// **Component:** ${schema.meta?.componentName || "N/A"}
// **File:** ${schema.meta?.entryFile || "N/A"}

// ### 📦 Extracted Signals
// - **Props:** ${(schema.props || []).map(p => p.name).join(", ") || "None"}
// - **Hooks:** ${(schema.behavior?.hooksUsed || []).join(", ") || "None"}
// - **Uses State:** ${schema.behavior?.usesState || false}
// - **Uses Effect:** ${schema.behavior?.usesEffect || false}

// ### 🧠 UI Patterns
// - **Conditional Rendering:** ${schema.uiPatterns?.conditionalRendering || false}
// - **Loader State:** ${schema.uiPatterns?.hasLoader || false}
// - **Error State:** ${schema.uiPatterns?.hasErrorState || false}
// - **Event Handlers:** ${schema.uiPatterns?.eventHandlerCount || 0}

// ### 🔗 Dependencies
// - **Child Components:** ${(schema.dependencies?.components || []).join(", ") || "None"}
// - **Custom Hooks:** ${(schema.dependencies?.customHooks || []).join(", ") || "None"}

// ### 🤖 LLM Context
// - Full source code of component
// - Full source code of all related files
// - Schema + dependencies included

// ✅ Ready for high-coverage unit test generation
// `;

// github.rest.issues.createComment({
//   issue_number: context.issue.number,
//   owner: context.repo.owner,
//   repo: context.repo.repo,
//   body: body
// });


// ================= ES MODULE =================
import fs from "fs";
import path from "path";
import process from "process";

/**
 * Comment PR with React Context Extraction Summary
 */

const schemaPath = path.resolve("context", "react-component-schema.json");

if (!fs.existsSync(schemaPath)) {
  console.log("Schema not found. Skipping PR comment.");
  process.exit(0);
}

const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

const body = `## 🧩 React Context Extraction Complete

**Component:** ${schema.meta?.componentName || "N/A"}
**File:** ${schema.meta?.entryFile || "N/A"}

### 📦 Extracted Signals
- **Props:** ${(schema.props || []).map(p => p.name).join(", ") || "None"}
- **Hooks:** ${(schema.behavior?.hooksUsed || []).join(", ") || "None"}
- **Uses State:** ${schema.behavior?.usesState || false}
- **Uses Effect:** ${schema.behavior?.usesEffect || false}

### 🧠 UI Patterns
- **Conditional Rendering:** ${schema.uiPatterns?.conditionalRendering || false}
- **Loader State:** ${schema.uiPatterns?.hasLoader || false}
- **Error State:** ${schema.uiPatterns?.hasErrorState || false}
- **Event Handlers:** ${schema.uiPatterns?.eventHandlerCount || 0}

### 🔗 Dependencies
- **Child Components:** ${(schema.dependencies?.components || []).join(", ") || "None"}
- **Custom Hooks:** ${(schema.dependencies?.customHooks || []).join(", ") || "None"}

### 🤖 LLM Context
- Full source code of component
- Full source code of all related files
- Schema + dependencies included

✅ Ready for high-coverage unit test generation
`;

// GitHub Actions provides this automatically
const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  console.log("GITHUB_TOKEN not found. Skipping PR comment.");
  process.exit(0);
}

const eventPath = process.env.GITHUB_EVENT_PATH;
const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));

const issueNumber = event.pull_request.number;
const { owner, repo } = event.repository;

// GitHub REST API call (native fetch in Node 18)
await fetch(
  `https://api.github.com/repos/${owner.login}/${repo.name}/issues/${issueNumber}/comments`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${githubToken}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json"
    },
    body: JSON.stringify({ body })
  }
);

console.log("✅ PR comment posted successfully");
