export const articles = [
  {
    id: 'openclaude-core-integration',
    title: 'OpenClaude: Advanced Agentic Coding CLI Integration',
    date: 'April 7, 2026',
    excerpt: 'Deep dive into OpenClaude, an open-source coding-agent CLI that bridges the gap between cloud APIs and local model backends.',
    content: `
### The Mission
OpenClaude is an open-source coding-agent CLI designed for flexibility. It allows developers to use OpenAI-compatible APIs, Gemini, GitHub Models, Codex, Ollama, and other supported backends while maintaining a unified, terminal-first workflow.

### Key Features
- **Provider Agility**: Switch between cloud APIs (GPT-4o, Gemini 1.5 Pro) and local models (Ollama, DeepSeek-Coder) seamlessly.
- **Unified Workflow**: One CLI for bash execution, file manipulation, grep, glob, and agentic tasks.
- **VS Code Integration**: Bundled extension for launch integration and theme support.
- **Headless gRPC**: Can be run as a service for CI/CD pipelines or custom UIs.

### Installation & Quick Start
To get started with OpenClaude, you can install it via npm:

\`\`\`bash
npm install -g @gitlawb/openclaude
\`\`\`

Then, simply run:
\`\`\`bash
openclaude
\`\`\`

### Advanced Configuration (The "Code")
OpenClaude's power comes from its routing and tool execution engine. Below is a code example of how to route different agents to specific models in \`settings.json\`:

\`\`\`json
{
  "agentModels": {
    "deepseek-chat": {
      "base_url": "https://api.deepseek.com/v1",
      "api_key": "sk-your-key"
    },
    "gpt-4o": {
      "base_url": "https://api.openai.com/v1",
      "api_key": "sk-your-key"
    }
  },
  "agentRouting": {
    "Explore": "deepseek-chat",
    "Plan": "gpt-4o",
    "general-purpose": "gpt-4o",
    "frontend-dev": "deepseek-chat",
    "default": "gpt-4o"
  }
}
\`\`\`

### Tool-Driven Workflow
OpenClaude leverages a multi-step tool loop where the model calls tools, executes them in the local environment (or gRPC headless mode), and receives feedback for the next step. This allows it to perform complex refactorings and project-wide analysis.

### Conclusion
OpenClaude represents a significant step towards democratizing agentic coding tools, moving away from provider lock-in and towards a more open, developer-centric ecosystem.
    `,
    tags: ['Open Source', 'AI', 'CLI', 'Agentic Coding'],
    repo: 'https://github.com/Gitlawb/openclaude.git'
  }
];
