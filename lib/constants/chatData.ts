import { ChatOption, Project, Experience, Skill } from '@/lib/types';

export const CHAT_OPTIONS: ChatOption[] = [
    { id: '1', label: 'Tell me about yourself', command: '/about', section: 'about' },
    { id: '2', label: 'Show me your projects', command: '/projects', section: 'projects' },
    { id: '3', label: 'Your experience', command: '/experience', section: 'experience' },
    { id: '4', label: 'Technical skills', command: '/skills', section: 'skills' },
    { id: '5', label: 'Contact me', command: '/contact', section: 'contact' },
];

export const PROJECTS: Project[] = [
    {
        title: "AI-Powered Recommendation System",
        description: "Built a machine learning recommendation engine using collaborative filtering and deep learning techniques to personalize user experiences.",
        technologies: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "Redis"],
        github: "#",
        link: "#"
    },
    {
        title: "NLP Sentiment Analysis Pipeline",
        description: "Developed an end-to-end sentiment analysis system for social media data using transformer models and deployed on AWS.",
        technologies: ["PyTorch", "Hugging Face", "AWS SageMaker", "Docker", "PostgreSQL"],
        github: "#",
        link: "#"
    },
    {
        title: "Computer Vision Object Detection",
        description: "Created a real-time object detection system using YOLO and implemented edge deployment for IoT devices.",
        technologies: ["Python", "OpenCV", "YOLO", "TensorFlow Lite", "Raspberry Pi"],
        github: "#",
        link: "#"
    },
];

export const EXPERIENCE: Experience[] = [
    {
        role: "Machine Learning Engineer",
        company: "Tech Company",
        duration: "2022 - Present",
        description: [
        "Developed and deployed ML models for production systems serving 1M+ users",
        "Built data pipelines for training and inference using Apache Spark and Airflow",
        "Improved model performance by 35% through feature engineering and hyperparameter tuning"
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes"]
    },
    {
        role: "Data Scientist",
        company: "Previous Company",
        duration: "2020 - 2022",
        description: [
        "Implemented predictive models for customer churn and revenue forecasting",
        "Created automated ML pipelines reducing model training time by 60%",
        "Collaborated with cross-functional teams to integrate ML solutions"
        ],
        technologies: ["Python", "Scikit-learn", "SQL", "Tableau", "Git"]
    },
];

export const SKILLS: Skill[] = [
    {
        category: "ML/AI Frameworks",
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Keras", "XGBoost"]
    },
    {
        category: "Programming Languages",
        items: ["Python", "SQL", "JavaScript", "TypeScript", "R"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS", "Docker", "Kubernetes", "MLflow", "Apache Airflow", "Git"]
    },
    {
        category: "Data Engineering",
        items: ["Apache Spark", "Pandas", "NumPy", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
        category: "GenAI & LLMs",
        items: ["LangChain", "OpenAI API", "Claude API", "Vector Databases", "RAG Systems"]
    },
];

export const ABOUT_TEXT = `Hey! I'm a Machine Learning Engineer passionate about building intelligent systems that solve real-world problems. 

With expertise in deep learning, NLP, and computer vision, I've developed and deployed ML models that serve millions of users. I love working at the intersection of research and engineering, turning cutting-edge AI techniques into production-ready solutions.

Currently focused on GenAI applications and large language models, building systems that leverage the latest advancements in AI technology.`;

export const CONTACT_INFO = {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    location: "Your City, Country"
};