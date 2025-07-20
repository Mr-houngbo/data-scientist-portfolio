"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Database,
  Brain,
  BarChart3,
  Zap,
  Users,
  Award,
  Calendar,
  MapPin,
  Send,
} from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "Système de recommandation hybride temps réel",
      tech: ["Apache Spark", "FastAPI", "Redis", "Kafka"],
      description:
        "Architecture distribuée pour recommandations personnalisées en temps réel avec 50M+ utilisateurs. Combinaison de filtrage collaboratif et basé sur le contenu.",
      impact: "Augmentation de 35% du taux d'engagement utilisateur",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 2,
      title: "Chatbot LLM + RAG multilingue",
      tech: ["LangChain", "FAISS", "OpenAI", "FastAPI"],
      description:
        "Assistant conversationnel intelligent avec recherche augmentée (RAG) supportant 12 langues. Base de connaissances de 100k+ documents.",
      impact: "Réduction de 60% du temps de support client",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 3,
      title: "Dashboard BI interactif",
      tech: ["Power BI", "Dash", "Plotly", "SQL Server"],
      description:
        "Tableau de bord exécutif temps réel avec 50+ KPIs métier. Visualisations interactives et alertes automatisées.",
      impact: "Amélioration de 40% de la prise de décision",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 4,
      title: "Prédiction de churn explicable",
      tech: ["XGBoost", "SHAP", "Scikit-learn", "MLflow"],
      description:
        "Modèle prédictif de désabonnement avec explications détaillées. Identification des facteurs de risque par segment client.",
      impact: "Réduction de 25% du taux de churn",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 5,
      title: "Détection de fraude par graphes",
      tech: ["PyTorch Geometric", "Neo4j", "GNNs", "Docker"],
      description:
        "Système de détection de fraude utilisant les réseaux de neurones graphiques. Analyse des relations complexes entre entités.",
      impact: "Détection de 95% des fraudes avec 2% de faux positifs",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 6,
      title: "Diagnostic médical par deep learning",
      tech: ["ResNet", "PyTorch", "DICOM", "Flask"],
      description:
        "Classification d'images médicales pour diagnostic assisté. Modèle entraîné sur 500k+ images radiologiques.",
      impact: "Précision de 94% validée par radiologues",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 7,
      title: "Fine-tuning LLM domaine spécifique",
      tech: ["LoRA", "Hugging Face", "Transformers", "PEFT"],
      description:
        "Adaptation de modèles de langage pour domaines techniques spécialisés. Optimisation mémoire avec techniques PEFT.",
      impact: "Performance supérieure de 30% aux modèles génériques",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 8,
      title: "Pipeline MLOps CI/CD complet",
      tech: ["MLflow", "DVC", "Docker", "Kubernetes"],
      description:
        "Infrastructure complète de déploiement ML avec versioning, monitoring et rollback automatique. GitOps workflow.",
      impact: "Réduction de 80% du temps de déploiement",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 9,
      title: "Générateur IA de contenus multimédias",
      tech: ["GPT-4", "DALL-E", "Stable Diffusion", "React"],
      description:
        "Plateforme de génération automatique de contenus texte et image. Interface intuitive pour créateurs de contenu.",
      impact: "Génération de 10k+ contenus par jour",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "#",
    },
    {
      id: 10,
      title: "Optimisation supply chain",
      tech: ["OR-Tools", "Python", "Gurobi", "Streamlit"],
      description:
        "Optimisation de chaîne logistique avec programmation linéaire. Minimisation des coûts et délais de livraison.",
      impact: "Économies de 15M€ annuelles",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 11,
      title: "Analyse sémantique de textes massifs",
      tech: ["BERT", "spaCy", "NER", "Elasticsearch"],
      description:
        "Extraction d'entités et analyse de sentiment sur corpus de 10M+ documents. Pipeline de traitement distribué.",
      impact: "Traitement de 1M documents/heure",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 12,
      title: "Segmentation clients avancée",
      tech: ["K-Means", "PCA", "t-SNE", "Plotly"],
      description:
        "Segmentation comportementale de 2M+ clients avec réduction dimensionnelle. Profils détaillés par segment.",
      impact: "Amélioration de 45% du ROI marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 13,
      title: "Détection anomalies IoT",
      tech: ["Autoencoder", "TensorFlow", "InfluxDB", "Grafana"],
      description:
        "Surveillance temps réel de 50k+ capteurs IoT. Détection précoce de pannes et maintenance prédictive.",
      impact: "Réduction de 70% des temps d'arrêt",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 14,
      title: "Extraction intelligente de données PDF",
      tech: ["OCR", "LayoutLM", "Tesseract", "OpenCV"],
      description:
        "Extraction automatique de données structurées depuis documents PDF complexes. Reconnaissance de mise en page.",
      impact: "Automatisation de 90% du traitement documentaire",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
      github: "#",
    },
    {
      id: 15,
      title: "Pipeline data engineering grande échelle",
      tech: ["Airflow", "dbt", "Snowflake", "Terraform"],
      description:
        "Architecture de données moderne avec orchestration, transformation et gouvernance. Traitement de 100TB+ quotidiens.",
      impact: "Réduction de 60% du temps de mise à disposition des données",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
      github: "#",
    },
  ]

  const skills = {
    "Data Science & Machine Learning": {
      icon: <BarChart3 className="w-6 h-6" />,
      items: ["Python", "R", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "NumPy", "Jupyter"],
    },
    "IA & Deep Learning": {
      icon: <Brain className="w-6 h-6" />,
      items: ["PyTorch", "TensorFlow", "Transformers", "OpenAI", "LangChain", "BERT", "GPT", "Computer Vision"],
    },
    "Data Engineering & MLOps": {
      icon: <Database className="w-6 h-6" />,
      items: ["Apache Spark", "Airflow", "Docker", "Kubernetes", "MLflow", "DVC", "AWS", "GCP"],
    },
    "Visualisation & Business Analytics": {
      icon: <Code className="w-6 h-6" />,
      items: ["Power BI", "Tableau", "Plotly", "D3.js", "Streamlit", "Dash", "SQL", "MongoDB"],
    },
  }

  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "TechCorp International",
      period: "2022 - Présent",
      location: "Paris, France",
      description:
        "Lead technique sur projets IA stratégiques. Management d'équipe de 8 data scientists. Déploiement de solutions ML en production.",
      achievements: [
        "Augmentation de 40% de la performance des modèles",
        "Réduction de 60% du time-to-market",
        "Formation de 20+ collaborateurs",
      ],
    },
    {
      title: "Data Scientist",
      company: "InnovateLab",
      period: "2020 - 2022",
      location: "Lyon, France",
      description: "Développement de solutions ML pour l'industrie 4.0. Spécialisation en computer vision et NLP.",
      achievements: [
        "Déploiement de 15+ modèles en production",
        "ROI de 5M€ sur projets menés",
        "Publication de 3 articles scientifiques",
      ],
    },
    {
      title: "Data Analyst",
      company: "DataInsights",
      period: "2018 - 2020",
      location: "Toulouse, France",
      description:
        "Analyse de données massives et création de dashboards exécutifs. Automatisation des processus de reporting.",
      achievements: [
        "Automatisation de 80% des rapports",
        "Amélioration de 35% de la qualité des données",
        "Formation Power BI pour 50+ utilisateurs",
      ],
    },
  ]

  const education = [
    {
      title: "Master en Intelligence Artificielle",
      school: "École Polytechnique",
      period: "2016 - 2018",
      description: "Spécialisation Machine Learning et Deep Learning",
    },
    {
      title: "Ingénieur en Informatique",
      school: "INSA Lyon",
      period: "2013 - 2016",
      description: "Majeure Systèmes d'Information et Big Data",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl text-orange-600 dark:text-orange-400">DataScientist.dev</div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {["home", "projects", "skills", "experience", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors duration-200 ${
                      activeSection === item
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                    }`}
                  >
                    {item === "home"
                      ? "Accueil"
                      : item === "projects"
                        ? "Projets"
                        : item === "skills"
                          ? "Compétences"
                          : item === "experience"
                            ? "Parcours"
                            : "Contact"}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-800"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700"
              >
                <div className="px-4 py-2 space-y-2">
                  {["home", "projects", "skills", "experience", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 capitalize"
                    >
                      {item === "home"
                        ? "Accueil"
                        : item === "projects"
                          ? "Projets"
                          : item === "skills"
                            ? "Compétences"
                            : item === "experience"
                              ? "Parcours"
                              : "Contact"}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/intro_preview.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/50 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              GORD ENVER
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-xl md:text-2xl mb-2"
            >
              Data Scientist | AI Developer | Senior Data Analyst
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-lg max-w-xl mx-auto mb-6"
            >
              "Turning Data into Scalable Intelligence"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="flex flex-wrap justify-center gap-4 mt-4"
            >
              <button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors">
                <Download className="w-5 h-5" />
                <span>Télécharger CV</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center space-x-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              className="mt-16"
            >
              <ChevronDown className="w-8 h-8 mx-auto text-white animate-bounce" />
            </motion.div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projets Phares</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Une sélection de 15 projets de haut niveau couvrant l'ensemble du spectre de la data science, de l'IA et
                du data engineering.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
                      <p className="text-green-800 dark:text-green-200 text-sm font-medium">✅ {project.impact}</p>
                    </div>
                    <button className="flex items-center space-x-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Voir le projet</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Compétences Techniques
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Expertise approfondie dans les technologies de pointe de la data science et de l'intelligence
                artificielle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, data], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg text-orange-600 dark:text-orange-400">
                      {data.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {data.items.map((skill) => (
                      <div
                        key={skill}
                        className="bg-gray-50 dark:bg-slate-800 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Parcours Professionnel
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Plus de 6 ans d'expérience dans la data science et l'intelligence artificielle, avec un impact mesurable
                sur les organisations.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Experience Timeline */}
              <div className="space-y-8 mb-16">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-orange-600 dark:text-orange-400" />
                  Expérience Professionnelle
                </h3>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-orange-200 dark:border-orange-800"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"></div>
                    <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-orange-600 dark:text-orange-400 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <Zap className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-orange-600 dark:text-orange-400" />
                  Formation
                </h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-amber-200 dark:border-amber-800"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-amber-500 rounded-full"></div>
                    <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.title}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                      </div>
                      <p className="text-amber-600 dark:text-amber-400 font-medium mb-2">{edu.school}</p>
                      <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contactez-moi</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets data science
                et IA.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le message</span>
                </button>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center space-x-6 mt-8"
              >
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>Email</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">GORD ENVER</h3>
                <p className="text-gray-400">Data Scientist | AI Developer | Senior Data Analyst</p>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <p className="text-gray-400 text-sm">© 2024 Alexandre Dubois. Tous droits réservés.</p>
                  <p className="text-gray-400 text-sm">Développé avec React, Next.js & Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
