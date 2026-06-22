"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  link?: string;
  status?: string;
};

const categories: { name: string; description: string; projects: Project[] }[] = [
  {
    name: "Production & Portfolio",
    description: "End-to-end systems built for real-world use",
    projects: [
      {
        title: "Real-Time Fraud Detection",
        description: "Production-grade fraud detection with CatBoost, Feast, Kafka, and automated MLOps — sub-15ms latency.",
        tech: ["CatBoost", "Feast", "Kafka", "Airflow", "Grafana"],
        link: "/fraud-detection",
        github: "https://github.com/NullBitZer0/real-time-fraud-detection",
        status: "live",
      },
      {
        title: "AI Portfolio Assistant",
        description: "Hybrid RAG system with Docling extraction, BM25 + vector search, cross-encoder re-ranking, and RAGAS evaluation.",
        tech: ["FastAPI", "LangChain", "Groq", "ChromaDB", "Langfuse"],
        link: "/ai-assistant",
        github: "https://github.com/NullBitZer0/ai-portfolio-assistant",
        status: "in-progress",
      },
    ],
  },
  {
    name: "University Projects",
    description: "Academic coursework and research projects",
    projects: [
      {
        title: "Smart Campus Operations Hub",
        description: "Full-stack campus operations system for facilities, bookings, maintenance tickets, and notifications with JWT + OAuth 2.0 authentication.",
        tech: ["Java 17", "Spring Boot", "Spring Security", "MongoDB", "React", "OAuth 2.0"],
        github: "https://github.com/sathirak/sliit-y3-s1-paf-assignment",
      },
      {
        title: "EcoSprout - Carbon Credit Marketplace",
        description: "Carbon credit marketplace connecting project developers, verifiers, and buyers. Built the educational hub with structured learning modules and community resources.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Convex", "Turbo"],
        github: "https://github.com/sano0007/echo-sprout",
      },
      {
        title: "Wildlife Safari Project",
        description: "Full-stack wildlife safari management system with CRUD operations, built as a team project.",
        tech: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
        github: "https://github.com/NullBitZer0/wild-life-safari-project",
      },
      {
        title: "WanderGo",
        description: "Java web application built as a team project for university coursework.",
        tech: ["Java", "JSP", "Servlets", "MySQL"],
        github: "https://github.com/stoXmod/WanderGo",
      },
      {
        title: "Serenity Android App",
        description: "Native Android application built with Kotlin as a solo university project.",
        tech: ["Kotlin", "Android Studio", "Room DB", "Material Design"],
        github: "https://github.com/NullBitZer0/Serenity_android_app",
      },
      {
        title: "Traffic Stability Analysis (LAR)",
        description: "Statistical analysis of Look-Ahead Range impact on traffic flow stability — hypothesis testing, regression, and visualisation in R.",
        tech: ["R", "ggplot2", "plotly", "rstatix"],
        github: "https://github.com/NullBitZer0/look-ahead-research",
      },
      {
        title: "ETL & Data Warehousing with Power BI",
        description: "End-to-end ETL pipeline with Microsoft SSIS, OLAP cube, and Power BI dashboards for business analytics.",
        tech: ["SSIS", "SQL Server", "Power BI", "OLAP Cube", "Excel"],
        github: "https://github.com/NullBitZer0/etl-dw-powerbi-ssis-excel",
      },
    ],
  },
  {
    name: "Learning Projects",
    description: "Practical projects built to learn and experiment",
    projects: [
      {
        title: "Titanic Survival Prediction",
        description: "End-to-end ML pipeline with experiment tracking, hyperparameter tuning, and reproducible pipelines.",
        tech: ["Random Forest", "MLflow", "DVC", "Optuna", "Hydra", "DAGsHub"],
        github: "https://github.com/NullBitZer0/titanic-survival",
      },
      {
        title: "Algerian Forest Fire Prediction",
        description: "Regression models for predicting forest fire severity using linear, ridge, and elastic net regularisation.",
        tech: ["Linear Regression", "Ridge", "Elastic Net", "Scikit-learn"],
        github: "https://github.com/NullBitZer0/algerian-ff",
      },
      {
        title: "PCA on Breast Cancer Dataset",
        description: "Principal Component Analysis for dimensionality reduction and visualisation on the Wisconsin breast cancer dataset.",
        tech: ["PCA", "Scikit-learn", "Matplotlib"],
        github: "https://github.com/NullBitZer0/PCA-Practical",
      },
      {
        title: "Logistic Regression Practical",
        description: "Binary classification with logistic regression on a custom dataset, covering decision boundaries and evaluation metrics.",
        tech: ["Logistic Regression", "Scikit-learn", "NumPy"],
        github: "https://github.com/NullBitZer0/logistic_-reg_practical",
      },
      {
        title: "Used Car Price Prediction",
        description: "Regression model comparison — Random Forest, Linear, Ridge, Lasso, and Decision Tree. Random Forest performed best.",
        tech: ["Random Forest", "Ridge", "Lasso", "Decision Tree", "Scikit-learn"],
        github: "https://github.com/NullBitZer0/used-car-price-Regression",
      },
      {
        title: "XGBoost Practices",
        description: "Hands-on practice with XGBoost for both classification and regression tasks.",
        tech: ["XGBoost", "Scikit-learn", "Pandas"],
        github: "https://github.com/NullBitZer0/xgboost",
      },
      {
        title: "Diabetes Prediction",
        description: "Predicting diabetes progression using Decision Tree Regressor on the sklearn diabetes dataset.",
        tech: ["Decision Tree", "Scikit-learn", "Pandas"],
        github: "https://github.com/NullBitZer0/diabetes-predicion-w-DSR",
      },
    ],
  },
  {
    name: "Fun & Side Projects",
    description: "Personal experiments and passion projects",
    projects: [
      {
        title: "Adeesha Perera — Portfolio",
        description: "This very site — a minimalist developer portfolio with AI assistant, dark/light theme, onboarding, and interactive design elements.",
        tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "RAG"],
        github: "https://github.com/NullBitZer0/modern-portfolio",
      },
      {
        title: "Movie Recommendation System",
        description: "Comprehensive recommendation engine with KNN, SVD, SBERT content-based, and hybrid ensemble models on MovieLens data.",
        tech: ["Scikit-learn", "Surprise", "SBERT", "Pandas", "Jupyter"],
        github: "https://github.com/NullBitZer0/recommendation-system",
      },
      {
        title: "F1 Race Predictor",
        description: "Formula 1 race winner prediction using XGBoost regression on historical race data.",
        tech: ["XGBoost", "Pandas", "Scikit-learn"],
        github: "https://github.com/NullBitZer0/F1-predictions",
      },
    ],
  },
];

const statusColors: Record<string, string> = {
  live: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  "in-progress": "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
};

const statusLabels: Record<string, string> = {
  live: "Live",
  "in-progress": "In Progress",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 pt-8 pb-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">All Projects</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
            A collection of everything I&apos;ve built — from production systems to university coursework to learning experiments.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.05 }}
            >
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {category.name}
                </h2>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {category.description}
                </p>
              </div>

              {category.projects.length === 0 ? (
                <div className="p-6 rounded-xl border border-dashed border-gray-200 dark:border-zinc-800 text-center">
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    Coming soon — check back later.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {category.projects.map((project) => (
                    <div
                      key={project.title}
                      className="group p-5 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {project.link ? (
                            <Link href={project.link} className="font-medium text-black dark:text-white hover:underline underline-offset-4">
                              {project.title}
                            </Link>
                          ) : (
                            <span className="font-medium text-black dark:text-white">{project.title}</span>
                          )}
                          {project.status && (
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${statusColors[project.status]}`}>
                              {statusLabels[project.status]}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {project.link && (
                            <Link
                              href={project.link}
                              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
