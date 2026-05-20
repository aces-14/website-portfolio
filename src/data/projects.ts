export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlight?: string;
  tech: string[];
  category: 'agentic' | 'rag' | 'document-ai' | 'classical-ml';
  blogUrl?: string;
  links: {
    huggingface?: string;
    github?: string;
    colab?: string;
    apiDocs?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'sentinelph',
    title: 'SentinelPH — Dengue Risk Monitor',
    subtitle: 'Multi-Agent Public Health Intelligence Platform',
    description:
      'A full-stack public health intelligence platform for Philippine dengue surveillance. Ingests 12 years of case data, weather records, news signals, and Google Trends; runs an XGBoost risk model that outperforms the ARIMA baseline by ~40%; delivers citation-enforced RAG answers from WHO guidelines; and generates AI situation briefings via a 4-node LangGraph validator workflow.',
    highlight: 'outperforms the ARIMA baseline by ~40%',
    tech: ['Python', 'LangGraph', 'XGBoost', 'ChromaDB', 'Groq (Llama 3.3 70B)', 'Streamlit', 'BAAI/bge-small-en-v1.5'],
    category: 'agentic',
    blogUrl: '/projects/sentinelph',
    links: {
      demo: 'https://sentinel-ph.streamlit.app/',
      github: 'https://github.com/aces-14/sentinel-ph',
    },
  },
  {
    slug: 'market-intelligence-agent',
    title: 'Market Intelligence Agent',
    subtitle: 'Stateful Multi-Agent System with Self-Revision',
    description:
      'An autonomous research agent with a self-evaluating revision loop using LangGraph — agent critiques its own draft, scores it, and re-searches targeted gaps until quality threshold is met. Researches a company across 4 parallel angles (overview, news, competitors, market trends) via live web search and delivers a structured intelligence report as a Word document.',
    highlight: 'self-evaluating revision loop',
    tech: ['Python', 'LangGraph', 'LangChain', 'Groq (Llama 3.3 70B)', 'Tavily Search API', 'Pydantic v2', 'Gradio', 'LangSmith'],
    category: 'agentic',
    links: {
      huggingface: 'https://acepilpil-market-intelligence-agent.hf.space',
      github: 'https://github.com/aces-14/market-intelligence-agent.git',
    },
  },
  {
    slug: 'job-application-agent',
    title: 'Job Application Assistant Agent',
    subtitle: 'Autonomous Multi-Step LLM Agent',
    description:
      'A 9-step agent with integrity enforcement — architecturally prohibited from fabricating resume content. A post-tailoring diff check flags violations, with every change logged in a fully auditable changelog (reason + confidence score). Pipeline: resume parsing → JD scoring → company research → ATS-tailored resume + cover letter + outreach in under 30 seconds.',
    highlight: 'integrity enforcement',
    tech: ['Python', 'Groq (Llama 3.3 70B)', 'Tavily Search API', 'Pydantic v2', 'Gradio', 'python-docx'],
    category: 'agentic',
    links: {
      huggingface: 'https://acepilpil-job-application-agent.hf.space',
      github: 'https://github.com/aces-14/job-application-agent.git',
    },
  },
  {
    slug: 'labor-law-rag',
    title: 'Philippine Labor Law RAG Assistant',
    subtitle: 'End-to-End Retrieval-Augmented Generation',
    description:
      'End-to-end RAG pipeline over the Philippine Labor Code — document ingestion, semantic chunking, vector embeddings (all-MiniLM-L6-v2), ChromaDB retrieval, and Flan-T5 generation. Returns natural-language answers (leave entitlements, overtime rules, termination procedures) with source citations grounded in the actual law, reducing hallucination through retrieval-first design.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Hugging Face Transformers', 'Flan-T5', 'sentence-transformers', 'Gradio'],
    category: 'rag',
    links: {
      huggingface: 'https://acepilpil-labor-law-assistant.hf.space',
      colab: 'https://colab.research.google.com/drive/1r8P2OP7ScZPExYn9UBn0KuJPmGdPhKt_?usp=sharing',
    },
  },
  {
    slug: 'financial-doc-api',
    title: 'Financial Document Intelligence API',
    subtitle: 'Production REST API',
    description:
      'Production-grade REST API that ingests bank statement PDFs and returns structured JSON — extracted transactions, auto-categorized spending, computed financial summaries (income, expenses, savings rate), anomaly flags, and actionable insights. Containerized with Docker, deployed to Railway with auto-generated Swagger / OpenAPI docs.',
    tech: ['Python', 'FastAPI', 'pdfplumber', 'pandas', 'Docker', 'Railway'],
    category: 'document-ai',
    links: {
      huggingface: 'https://acepilpil-financial-doc-api.hf.space',
      github: 'https://github.com/aces-14/financial-doc-api.git',
      apiDocs: 'https://financial-doc-api-production.up.railway.app/docs',
    },
  },
  {
    slug: 'receipt-extractor',
    title: 'Receipt Data Extractor (LayoutLMv3)',
    subtitle: 'Multimodal Document AI',
    description:
      'Extracts structured data (menu items, quantities, prices, totals) from receipt images using LayoutLMv3, a multimodal transformer that jointly reasons over text, layout, and visual features. Achieved 93.96% F1 on validation set, demonstrating document AI capability beyond plain-text NLP.',
    highlight: '93.96% F1 on validation set',
    tech: ['Python', 'Hugging Face Transformers', 'LayoutLMv3', 'PyTorch'],
    category: 'document-ai',
    links: {
      huggingface: 'https://acepilpil-receipt-intelligence.hf.space',
    },
  },
  {
    slug: 'bert-sentiment',
    title: 'BERT Sentiment Analyzer',
    subtitle: 'Social Media Intelligence Tool',
    description:
      'Multi-input bulk sentiment analysis tool that processes batches of reviews, tweets, or comments and returns an aggregate sentiment score, breakdown chart, and the top positive / negative phrases driving the score. Dashboard-style output (not single-label classification), making it usable as a social-media intelligence tool.',
    tech: ['Python', 'Hugging Face Transformers', 'PyTorch', 'DistilBERT', 'Gradio'],
    category: 'classical-ml',
    links: {
      huggingface: 'https://acepilpil-sentiment-analyzer.hf.space',
      colab: 'https://colab.research.google.com/drive/1UoF2wvjVktONa8rj03iGoCQfNx4EK_Qp?usp=sharing',
    },
  },
  {
    slug: 'churn-predictor',
    title: 'Customer Churn Predictor',
    subtitle: 'Customer Retention Dashboard',
    description:
      'Production-ready churn risk dashboard: ingests CSV customer data, predicts churn probability with XGBoost, and outputs a retention report with risk distribution, ranked high-risk customers, and SHAP-based feature explanations — translating raw model output into business-actionable retention recommendations using explainable AI (SHAP).',
    highlight: 'explainable AI (SHAP)',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'pandas', 'Gradio'],
    category: 'classical-ml',
    links: {
      huggingface: 'https://acepilpil-customer-churn-predictor.hf.space',
      colab: 'https://colab.research.google.com/drive/1RiLHZ3Tw4VnsfFpaTBkud6EPngNNOfs5?usp=sharing',
    },
  },
];
