import { Database, Cpu, Layers, Server, Code } from 'lucide-react';
export const experience = [{
  company: 'Bank of America',
  role: 'Data Engineer',
  period: 'Sept 2022 – Aug 2025',
  status: 'Completed',
  desc: 'Engineered data archiving lifecycles using IBM Infosphere. Administered enterprise SQL/Oracle databases for high-volume transactions.',
  contributions: ['Engineered data archiving lifecycles using IBM Infosphere for enterprise-scale data management and compliance.', 'Administered enterprise SQL/Oracle databases handling high-volume financial transactions for financial operations.', 'Built automated ETL pipelines for distributed data systems.', 'Optimized query performance on large-scale data warehouses, to improve execution efficiency.'],
  tags: ['IBM Infosphere', 'SQL', 'Oracle', 'ETL', 'Python'],
  icon: <Database className="w-6 h-6" />
}, {
  company: 'TGGENCO',
  role: 'Engineering Intern',
  period: 'Jan 2021 – Feb 2021',
  status: 'Completed',
  desc: 'Analyzed synchronous static generator excitation systems in 815 MW hydropower plant. Optimized efficiency protocols.',
  contributions: ['Analyzed synchronous static generator excitation systems in an 815 MW hydropower plant.', 'Optimized efficiency protocols for power generation systems.', 'Documented technical findings and presented recommendations to engineering team.'],
  tags: ['Power Systems', 'Data Analysis', 'Engineering'],
  icon: <Cpu className="w-6 h-6" />
}, {
  company: 'Rutgers – New Brunswick Laureate Program',
  role: 'AI Data Engineer',
  period: 'Dec 2025 – Mar 2026',
  status: 'Completed',
  desc: 'An interdisciplinary art and science project bringing "botanical ghosts" back into cultural consciousness through critical design.',
  contributions: ['Co-designed and developed a dedicated digital platform to highlight the Chrysler Herbarium, expanding public recognition of archival botanical work.', 'Translated complex ecological loss and scientific data into accessible visual narratives using critical and speculative design frameworks.', 'Assisted in exploring ways to use historical language and material explorations to reintroduce vanished ecologies into contemporary culture.'],
  tags: ['Data Engineering', 'Machine Learning Pipelines', '3D Reconstruction'],
  icon: <Cpu className="w-6 h-6" />
}];
export const projects = [{
  title: 'Hybrid Edge-Cloud IoT',
  category: 'Data systems',
  visual: 'edge',
  focus: 'Connecting OCR-based ingestion with structured storage and downstream analytics across the edge–cloud boundary.',
  pipeline: ['Capture input at the edge', 'Extract text with Tesseract OCR', 'Structure records in PostgreSQL', 'Use stored data for cloud analytics'],
  desc: 'A robust pipeline for IoT data processing using Tesseract OCR and PostgreSQL. Implements edge computing for real-time data ingestion with cloud-based analytics.',
  tags: ['Python', 'Tesseract', 'PostgreSQL'],
  icon: <Layers className="w-6 h-6" />,
  github: 'https://github.com/Kundan265/'
}, {
  title: 'E-Commerce Warehouse',
  category: 'Data systems',
  visual: 'warehouse',
  focus: 'Making source data useful through ETL, dimensional modeling, and explicit data quality checks.',
  pipeline: ['Ingest source records', 'Transform and validate data', 'Load a PostgreSQL star schema', 'Query structured data for analysis'],
  desc: 'Scalable ETL processes and data modeling for high-traffic e-commerce platforms. Features star-schema design and automated data quality checks.',
  tags: ['PostgreSQL', 'ETL', 'Data Modeling'],
  icon: <Server className="w-6 h-6" />,
  github: 'https://github.com/Kundan265/'
}, {
  title: 'Quadruped Robot',
  category: 'Hardware',
  visual: 'robot',
  focus: 'Translating a desired walking gait into joint movements through inverse kinematics and Raspberry Pi control.',
  pipeline: ['Define the walking gait', 'Compute joint angles with inverse kinematics', 'Issue servo commands from Raspberry Pi', 'Produce coordinated leg movement'],
  desc: 'Autonomous movement control using Raspberry Pi and Python servo libraries. Implements inverse kinematics for stable walking gaits.',
  tags: ['Raspberry Pi', 'Python', 'Robotics'],
  icon: <Cpu className="w-6 h-6" />,
  github: 'https://github.com/Kundan265/'
}];
export const skills = [{
  category: 'Languages & Data',
  icon: <Code className="w-6 h-6" />,
  items: ['Python', 'SQL', 'C++', 'PostgreSQL', 'NoSQL', 'PL/SQL']
}, {
  category: 'Cloud & DevOps',
  icon: <Server className="w-6 h-6" />,
  items: ['Terraform', 'Ansible', 'AWS', 'Docker', 'Linux', 'CI/CD']
}, {
  category: 'Data & Analytics',
  icon: <Database className="w-6 h-6" />,
  items: ['Tableau', 'ETL Pipelines', 'Data Modeling', 'Spark', 'Airflow', 'IBM Infosphere']
}];
