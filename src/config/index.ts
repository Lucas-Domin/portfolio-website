import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Home",
  author: "Lucas Agustin Dominguez",
  description:
    "Data Engineer based in Lima, Peru. I specialize in AWS, Data Pipelines, ETL processes, and Big Data solutions.",
  lang: "en",
  siteLogo: "/me_small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/lucas-dominguez-agustin/" },
    { text: "Github", href: "https://github.com/Lucas-Domin" },
  ],
  socialImage: "",
  canonicalURL: "https://www.lucasdominguez.dev/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lucas Dominguez",
    specialty: "Data Engineer",
    summary:
      "Based in Lima, Peru. I specialize in AWS, Data Pipelines, ETL processes, and Big Data solutions.",
    email: "dominguez_la@outlook.com",
  },
  experience: [
    {
      company: "SEIDOR Analytics",
      position: "Data Engineer",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Conducted comprehensive architecture review of existing data infrastructure, identifying critical optimization opportunities across ingestion, transformation, and warehousing processes using AWS services (Glue, Lambda, Redshift, S3, Step Functions).",
        "Migrated and standardized 150+ AWS Glue jobs into a unified data lake architecture using PySpark, implementing raw/transformation/consumption layers in S3 with the latest Glue version. Leveraged autoscaling and parallel processing capabilities, reducing operational costs by 30% and improving data processing speed by over 50%.",
        "Implemented Single Source of Truth (SSOT) framework with automated raw-to-Parquet conversion, schema drift detection, and data quality validation, feeding the standardized pipeline architecture across multiple business domains and ensuring data consistency throughout the organization.",
        "Automated infrastructure deployment using CloudFormation templates and GitHub Actions CI/CD pipelines, enabling version-controlled, repeatable deployments of the data lake architecture across multiple environments.",
      ],
    },
    {
      company: "SEIDOR Analytics",
      position: "Analytics Consultant",
      startDate: "Feb 2023",
      endDate: "May 2025",
      summary: [
        "Built end-to-end data pipelines for insurance and reinsurance clients using AWS (S3, Glue, Lambda, Redshift, Athena), automating SFTP data extraction, transformation, and warehousing. Reduced data processing time by 40% and enabled real-time analytics through integrated Power BI dashboards.",
        "Migrated CDS Views from SAP BW S4 HANA to AWS S3 for an automotive client, modeling data with Glue and exposing through Athena for Tableau consumption, enabling flexible cloud-based analytics.",
        "Developed automated Python/Lambda web scraping solution for a Peruvian energy company, eliminating manual file downloads and ensuring real-time data retrieval.",
      ],
    },
  {
      company: "SEIDOR Analytics",
      position: "Business Intelligence Analyst",
      startDate: "Oct 2022",
      endDate: "Feb 2023",
      summary: [
        "Migrated 13 analytical data marts from SAP BW to AWS, building a scalable data lake with raw/transformation/consumption layers and deploying models in Tableau. This migration improved data accessibility and flexibility while enabling self-service analytics for business users through cloud-based infrastructure.",
        "Designed and deployed interactive Power BI dashboards for global agribusiness and energy clients, automating grain shipment tracking, quality control, and renewable energy project monitoring. Integrated multiple data sources (Excel, SQL, COES, MINEM, georeferenced data), eliminating manual reporting and reducing report generation time by over 60%.",
      ],
    },
  ],
  projects: [
    {
      name: "Modernizing Legacy Data Infrastructure on AWS",
      summary: "Scalable, multi-layer ETL pipeline using AWS Glue and Step Functions",
      linkPreview: "",
      linkSource: "https://github.com/Lucas-Domin/Portfolio/tree/main/Case%20Study%3A%20Enterprise%20Data%20Migration",
      image: "/image.png",
    },
    {
      name: "TODO",
      summary: "TODO",
      linkPreview: "/",
      linkSource: " ",
      image: "/shopify-clon.png",
    },
    {
      name: "TODO",
      summary: "TODO",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `Hi, I'm Lucas, a Data Engineer who's been tinkering with tech since I could hold a screwdriver. I solve data problems by building efficient pipelines and architecting solutions that move data from point A to point B with the right tools. What drives me is fixing problems, whether it's untangling a messy migration or optimizing a slow query. I'm a visual learner who figures things out by building and breaking stuff until it works. I believe being a good data engineer starts with being a good developer first, so that's where I focus my energy: making 1% progress every day, one project at a time.`,
    image: "/me_big_nb.png",
  },
};

// #5755ff
