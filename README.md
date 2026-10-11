# Nebius x NVIDIA Agentic AI Studio ⚡🤖

> **Submitted to the Nebius x NVIDIA Global AI Hackathon ($50,000 Cash Prize Pool)**  
> **Track:** Coding and Agentic Engineering Track / Best Apps and Agents Track  
> **Infrastructure & Stack:** Nebius Token Factory, Nebius Serverless Endpoints, NVIDIA Nemotron Models (`nemotron-3-ultra-70b`, `nemotron-super-34b`, `nemotron-nano-8b`), TypeScript ESM  
> **Live Interactive Studio:** [https://liutingqiu.github.io/nebius-nvidia-agentic-studio/](https://liutingqiu.github.io/nebius-nvidia-agentic-studio/)  
> **GitHub Repository:** [https://github.com/liutingqiu/nebius-nvidia-agentic-studio](https://github.com/liutingqiu/nebius-nvidia-agentic-studio)  
> **Author & Lead Engineer:** Tingqiu Liu (`@liutingqiu`, `tianqi689@gmail.com`)

---

## 🌟 Executive Summary & Problem Statement

Developing autonomous AI agents that write, test, and orchestrate production code requires navigating a difficult tradeoff between **cognitive depth** and **inference latency / token cost**:
- Single-model agent architectures either waste expensive 70B+ inference tokens on trivial regex or syntax formatting, or
- Rely on small models that break down during multi-step system planning, architectural DAG synthesis, and security invariant audits.

**Nebius x NVIDIA Agentic AI Studio** provides an open-source, multi-tier agent orchestrator running directly on **open, independent GPU infrastructure**:
1. **Hierarchical Model Tiering:**
   - **Deep Architectural Reasoning:** Powered by `nvidia/nemotron-3-ultra-70b` for complex consensus graphs and multi-contract planning.
   - **Workflow Orchestration & Code Synthesis:** Powered by `nvidia/nemotron-super-34b` for balanced speed and precision.
   - **Fast Streaming Execution & Sanity Tests:** Powered by `nvidia/nemotron-nano-8b` for near-instant sub-second responses.
2. **Nebius Token Factory Integration:** Zero-vendor-lockup API execution with transparent token economy modeling.
3. **Serverless Asynchronous Job Dispatch:** Seamless background job execution tracking.

---

## 🧮 Architectural Orchestration & Cost Optimization

Let $C_{tier}$ be the inference cost rate per 1,000 tokens:
- $C_{\text{Ultra}} = \$0.0035$ / 1k tokens
- $C_{\text{Super}} = \$0.0015$ / 1k tokens
- $C_{\text{Nano}} = \$0.0004$ / 1k tokens

For an agent pipeline requiring $T_{plan} = 2,000$ tokens of planning, $T_{code} = 4,000$ tokens of code generation, and $T_{test} = 1,000$ tokens of unit test generation:
- **Naive Monolithic Approach (100% 70B model):**  
  $\text{Cost} = (2000 + 4000 + 1000) \times \frac{0.0035}{1000} = \$0.0245$
- **Nebius Hierarchical Agent Studio:**  
  $\text{Cost} = (2000 \times 0.0035) + (4000 \times 0.0015) + (1000 \times 0.0004) = 0.007 + 0.006 + 0.0004 = \$0.0134$  
  *(Achieves a **45.3% reduction in inference cost** while preserving top-tier architectural reasoning).*

---

## 🧪 Automated Test Verification

```bash
node --test tests/nebius.test.js
```

```text
✔ 1. NEMOTRON_ROUTING_TABLE validates 3 tiers of NVIDIA open source models on Nebius (0.9ms)
✔ 2. selectOptimalTier accurately balances reasoning depth against token cost (0.1ms)
✔ 3. executeAgentTask produces valid serverless job ID, token usage, and code output (0.2ms)
✔ 4. Empty prompt raises an error (0.3ms)

ℹ pass 4
ℹ fail 0
```

---

## 🔗 Live Interactive Links

- **Interactive Studio:** [https://liutingqiu.github.io/nebius-nvidia-agentic-studio/](https://liutingqiu.github.io/nebius-nvidia-agentic-studio/)
- **GitHub Repository:** [https://github.com/liutingqiu/nebius-nvidia-agentic-studio](https://github.com/liutingqiu/nebius-nvidia-agentic-studio)
