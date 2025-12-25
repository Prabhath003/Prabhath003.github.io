import { Project } from "@/types";

/**
 * Project type extended with GitHub and demo links
 */
interface ProjectExtended extends Project {
  github?: string;
  link?: string;
}

/**
 * Featured Projects - Displayed in the footer and projects page
 * Edit this array to showcase your projects
 */
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AgenticRAG Framework",
    description: "Autonomous retrieval framework enabling chunk-level traversal and document jumping with adaptive context management, improving factual accuracy by 25%",
    tags: ["LLM", "RAG", "Knowledge Graphs", "Python"],
    github: "https://github.com/Prabhath003/AgenticRAG.git",
    link: "https://github.com/Prabhath003/AgenticRAG.git",
  },
  {
    id: "2",
    title: "Voice AI Agent for EdTech",
    description: "Voice-enabled AI agent serving 1,500+ courses with sub-300ms latency and 90%+ intent accuracy for autonomous customer interaction",
    tags: ["Speech Recognition", "LLM", "FastAPI", "Python"],
  },
  {
    id: "3",
    title: "Knowledge Graph-Powered Search Engine",
    description: "Semantic search engine built on knowledge graphs for e-commerce platforms enabling intent-based product discovery with improved retrieval accuracy",
    tags: ["Knowledge Graphs", "Neo4j", "LLM", "Search"],
  },
  {
    id: "4",
    title: "Agentic JSON Builder",
    description: "Autonomous system for large-scale structured data completion, autonomously populating 8,000+ fields via context-aware retrieval with 95% manual effort reduction",
    tags: ["Agents", "LLM", "JSON", "Automation"],
  },
  {
    id: "5",
    title: "LLM Inference Server",
    description: "GPU-optimized inference server with dynamic model offloading for HuggingFace models, supporting 10+ concurrent tasks with OLLAMA alternative enhanced performance",
    tags: ["LLM", "vLLM", "FastAPI", "CUDA", "Docker"],
    github: "https://github.com/Prabhath003/model-inference-server.git",
    link: "https://github.com/Prabhath003/model-inference-server.git",
  },
  {
    id: "6",
    title: "RamayanaGPT",
    description: "Context-aware knowledge retrieval system with graph-based retrieval engine linking database chunks via semantic entities to reduce LLM hallucinations",
    tags: ["RAG", "Knowledge Graphs", "NLP", "Research"],
  },
  {
    id: "7",
    title: "Finance Time Series Forecasting",
    description: "Time series forecasting using MixerMLP architecture for financial data prediction, achieving MSE of 1.3 x 10⁻³ on benchmark datasets",
    tags: ["Time Series", "Deep Learning", "PyTorch", "Financial ML"],
  },
  {
    id: "8",
    title: "Model Compression & Optimization",
    description: "Computer vision model optimization achieving 8x size reduction and 11x FLOPs reduction using quantization and pruning for edge deployment",
    tags: ["Computer Vision", "Model Compression", "Optimization", "CNN"],
  },
];
