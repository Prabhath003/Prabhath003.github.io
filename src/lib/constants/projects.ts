import { Project } from "@/types";

/**
 * Featured Projects - Displayed in the footer and projects page
 * Edit this array to showcase your projects
 */
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AgenticRAG Framework",
    description: "Autonomous retrieval framework with chunk-level traversal for knowledge systems",
    tags: ["LLM", "RAG", "Knowledge Graphs", "Python"],
  },
  {
    id: "2",
    title: "Voice AI Agent for EdTech",
    description: "Voice-enabled AI agent serving 1,500+ courses with <300ms latency and 90%+ accuracy",
    tags: ["Speech Recognition", "LLM", "FastAPI", "Python"],
  },
  {
    id: "3",
    title: "Knowledge Graph-Powered Search Engines",
    description: "Search engine built on knowledge graphs for e-commerce platforms with semantic understanding",
    tags: ["Knowledge Graphs", "Neo4j", "LLM", "Search"],
  },
  {
    id: "4",
    title: "Agentic JSON Builder",
    description: "Autonomous system for generating valid JSON structures handling 8,000+ keys with 95% manual effort reduction",
    tags: ["Agents", "LLM", "JSON", "Automation"],
  },
  {
    id: "5",
    title: "LLM Inference Server",
    description: "GPU-optimized inference server with dynamic model management for production LLM deployments",
    tags: ["LLM", "vLLM", "FastAPI", "CUDA", "Docker"],
  },
  {
    id: "6",
    title: "RamayanaGPT",
    description: "Context-aware retrieval system with graph-based retrieval engine for cultural knowledge",
    tags: ["RAG", "Knowledge Graphs", "NLP"],
  },
  {
    id: "7",
    title: "Finance Time Series Forecasting",
    description: "Time series forecasting model using MixerMLP architecture for financial data prediction",
    tags: ["Time Series", "Deep Learning", "PyTorch", "Financial ML"],
  },
  {
    id: "8",
    title: "Model Compression & Optimization",
    description: "Computer vision model optimization achieving 8x size reduction and 11x FLOPs optimization",
    tags: ["Computer Vision", "Model Compression", "Optimization"],
  },
];
