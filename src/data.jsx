const github = 'https://github.com/Kundan265/';

export const featured = {
  title: 'Vision-guided quadruped',
  period: '2021–2022',
  summary: 'A 12-servo robot built by a two-person team. I worked on Raspberry Pi gait control and connected a live person detector to the robot’s motion system.',
  notes: [
    {
      title: 'Getting the legs to walk',
      detail: 'We used inverse kinematics to turn desired foot positions into joint angles. The gait controller used those angles to coordinate 12 servos for walking, turning, and standing.',
    },
    {
      title: 'Connecting vision to motion',
      detail: 'A threaded YOLO detector ran through NCNN on live camera frames. We sent detection output to the motion controller over a serial connection.',
    },
    {
      title: 'Testing the handoffs',
      detail: 'We tested and debugged the full path from camera capture and inference through serial communication, gait control, and servo actuation.',
    },
  ],
};

export const projects = [
  {
    title: 'Edge-to-cloud image processing',
    category: 'Computer vision',
    summary: 'Built a pipeline that takes images from IoT devices, extracts text with Tesseract, and routes the processed output to PostgreSQL and MongoDB.',
    url: github + 'hybrid-iot-ocr-to-audio_pipeline',
  },
  {
    title: '3D spatial-index benchmarks',
    category: 'Systems measurement',
    summary: 'Compared k-d trees, octrees, and sparse voxel octrees across seven data scales and five point distributions. Measured build time, memory use, and query latency.',
    url: github + 'Spatial-Indexing_edge-device',
  },
  {
    title: 'Operational demand forecasting',
    category: 'Machine learning',
    summary: 'Used synthetic weekly demand data to compare naive baselines, Ridge regression, and gradient boosting with rolling-origin evaluation and a final holdout.',
    url: github + 'data_forcasting',
  },
  {
    title: 'Food-delivery data warehouse',
    category: 'Data engineering',
    summary: 'Designed a PostgreSQL star schema and ETL workflow with data quality checks to make raw food-delivery records ready for SQL analysis.',
    url: github + 'food-delivery_data-warehouse',
  },
];

export const experience = [
  {
    role: 'Teaching Assistant, Electrical and Computer Engineering',
    organization: 'Rutgers University',
    period: 'Sept 2026–Present',
    detail: 'Grade assessments and give technical feedback on circuit analysis, op-amps, and transistor circuits. Coordinate with instructors and other TAs on grading consistency.',
  },
  {
    role: 'Business Intelligence Engineer Intern',
    organization: 'Psiog Digital',
    period: 'June–July 2026',
    detail: 'Cleaned and modeled internal business data for Power BI dashboards and published dashboards through Azure.',
  },
  {
    role: 'Coadjutant, AI Pipeline Development',
    organization: 'Rutgers Laureate Project',
    period: 'Dec 2025–Mar 2026',
    detail: 'Built a workflow that combined NLP, computer vision, and TripoSR to turn botanical descriptions into 3D assets.',
  },
  {
    role: 'Technical Analyst II, Data Systems and Automation',
    organization: 'Bank of America',
    period: 'Sept 2022–Aug 2025',
    detail: 'Implemented IBM Optim archiving workflows for financial data in SQL Server and Oracle. Supported database migrations and automated recurring monitoring and configuration tasks.',
  },
  {
    role: 'Engineering Intern',
    organization: 'Telangana Power Generation Corporation',
    period: 'Jan–Feb 2021',
    detail: 'Analyzed synchronous generator excitation systems in a hydropower plant during maintenance and troubleshooting.',
  },
];
