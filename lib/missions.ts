/**
 * missions.ts — The single source of truth for all engineering sprint missions.
 *
 * Each mission maps an ISO date to its mission metadata.
 * To add/edit a mission: update MISSIONS_DATA below.
 */

export interface Mission {
  date: string
  missionName: string
  company: string
  companyIcon: string
  skill: string
  week: number
  weekTheme: string
  title: string
  desc: string
  tasks: string[]
  deliverables: string[]
  optionalDeliverables?: string[]
  isSpecial?: boolean
  specialNote?: string
  guide?: string
}

export const WEEK_THEMES: Record<number, { label: string; companies: string; color: string }> = {
  1: { label: 'Consulting & Services',          companies: 'TCS · Deloitte', color: 'blue' },
  2: { label: 'Data, AI & Analytics',           companies: 'MathCompany · Jungroo', color: 'yellow' },
  3: { label: 'Tech Giants & Security',         companies: 'IBM · Palo Alto', color: 'purple' },
  4: { label: 'FinTech, Product & Enterprise',  companies: 'PhonePe · Societe Generale', color: 'green' },
  5: { label: 'Advanced Engineering',           companies: 'Commvault · Bounteous', color: 'indigo' },
  6: { label: 'Cloud & Infrastructure',         companies: 'Oracle · AWS', color: 'blue' },
  7: { label: 'System Design',                  companies: 'TCS · IBM', color: 'purple' },
  8: { label: 'Security & Optimization',        companies: 'Palo Alto · PhonePe', color: 'red' },
  9: { label: 'Capstone & Review',              companies: 'All Companies', color: 'green' },
  10: { label: 'Final Demo Week',               companies: 'Cohort 25MX', color: 'yellow' },
}

const STANDARD_DELIVERABLES = ['README.md', 'reflection.md', 'prompts.md']

export const MISSIONS_DATA: Mission[] = [
  {
    "date": "2026-07-16",
    "missionName": "Mission Tata 1",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Git & Collaboration",
    "week": 1,
    "weekTheme": "Consulting & Services",
    "title": "Claim Your Folder — Git, Forks & First PR",
    "desc": "The goal of this day is purely operational — every student must experience the full Git workflow (Fork, Clone, Commit, Push, Pull Request) successfully.",
    "tasks": [
      "Fork the main Placement Readiness repository to your GitHub account.",
      "Clone your forked repository to your local machine.",
      "Create a new folder using your Roll Number inside activities/2026-07-16/.",
      "Add your profile.md, commit the changes, and open a Pull Request to the main repo."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Day 1 Operational Task\n\nYour goal today is not to write complex code, but to master the Git workflow.\n1. **Fork** this repository to your own account.\n2. **Clone** it locally.\n3. **Create your folder** at `activities/2026-07-16/YOUR_ROLL_NUMBER/`.\n4. **Create** a `profile.md` file introducing yourself.\n5. **Push** to your fork and open a **Pull Request** to the main repository. Do NOT edit any files outside your folder!"
  },
  {
    "date": "2026-07-17",
    "missionName": "Mission Deloitte 2",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A hands-on engineering task focused on resolving client requirements and optimizing consulting deliverables.",
    "tasks": [
      "Analyze the client's problem statement and identify technical requirements.",
      "Design a scalable system architecture or algorithmic solution for the service.",
      "Implement the core logic and test it against edge cases.",
      "Document your architecture, trade-offs, and technical decisions in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Deloitte USI\n\n**Scenario:** You are an engineer at Deloitte USI. \n\n**Your Task:**\nBuild a dynamic JSON-driven form generator in React/Next.js that renders a complex nested questionnaire for a consulting client. The schema should enforce validation (e.g., age > 18) and support conditional logic (if 'Employed' is checked, show 'Company Name' field).\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-20",
    "missionName": "Mission Thorogood 3",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A detailed product engineering task for Thorogood Associates focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Thorogood Associates.",
      "Implement a K-Means Clustering algorithm from scratch (no Scikit-learn).",
      "Given a 2D dataset of customer coordinates, cluster them into K distinct zones.",
      "Output the final centroid coordinates and visualize the result (or print the clustered arrays).",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Thorogood Associates\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Thorogood Associates.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement a K-Means Clustering algorithm from scratch (no Scikit-learn).\n- Given a 2D dataset of customer coordinates, cluster them into K distinct zones.\n- Output the final centroid coordinates and visualize the result (or print the clustered arrays).\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement a K-Means Clustering algorithm from scratch (no Scikit-learn).\n- Given a 2D dataset of customer coordinates, cluster them into K distinct zones.\n- Output the final centroid coordinates and visualize the result (or print the clustered arrays).\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-07-21",
    "missionName": "Mission The 4",
    "company": "The MathCompany",
    "companyIcon": "📐",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - The MathCompany",
    "desc": "A detailed product engineering task for The MathCompany focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for The MathCompany.",
      "Build a predictive text Markov Chain generator.",
      "Ingest a large text corpus (e.g., Shakespeare).",
      "Build a transition probability matrix, and write a function that generates a 100-word paragraph of readable, procedurally generated text based on the corpus.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - The MathCompany\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for The MathCompany.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a predictive text Markov Chain generator.\n- Ingest a large text corpus (e.g., Shakespeare).\n- Build a transition probability matrix, and write a function that generates a 100-word paragraph of readable, procedurally generated text based on the corpus.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a predictive text Markov Chain generator.\n- Ingest a large text corpus (e.g., Shakespeare).\n- Build a transition probability matrix, and write a function that generates a 100-word paragraph of readable, procedurally generated text based on the corpus.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-07-22",
    "missionName": "Mission Jungroo 5",
    "company": "Jungroo AI labs",
    "companyIcon": "🧠",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Jungroo AI labs",
    "desc": "A detailed product engineering task for Jungroo AI labs focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Jungroo AI labs.",
      "Write a Pandas/Polars data cleaning pipeline.",
      "Ingest a messy CSV with missing dates, negative prices, and duplicate IDs.",
      "Impute missing dates using forward-fill, cap prices at the 99th percentile, remove duplicates, and output a strict, strongly-typed Parquet file.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Jungroo AI labs\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Jungroo AI labs.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Write a Pandas/Polars data cleaning pipeline.\n- Ingest a messy CSV with missing dates, negative prices, and duplicate IDs.\n- Impute missing dates using forward-fill, cap prices at the 99th percentile, remove duplicates, and output a strict, strongly-typed Parquet file.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Write a Pandas/Polars data cleaning pipeline.\n- Ingest a messy CSV with missing dates, negative prices, and duplicate IDs.\n- Impute missing dates using forward-fill, cap prices at the 99th percentile, remove duplicates, and output a strict, strongly-typed Parquet file.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-07-23",
    "missionName": "Mission Celeredge 6",
    "company": "Celeredge Inc",
    "companyIcon": "🕸️",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Celeredge Inc",
    "desc": "A detailed product engineering task for Celeredge Inc focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Celeredge Inc.",
      "Develop a TF-IDF (Term Frequency - Inverse Document Frequency) search engine.",
      "Given a local directory of 100 text files, index them, and write a search function that takes a query string and returns the top 5 most relevant files ranked by TF-IDF score.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Celeredge Inc\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Celeredge Inc.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Develop a TF-IDF (Term Frequency - Inverse Document Frequency) search engine.\n- Given a local directory of 100 text files, index them, and write a search function that takes a query string and returns the top 5 most relevant files ranked by TF-IDF score.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Develop a TF-IDF (Term Frequency - Inverse Document Frequency) search engine.\n- Given a local directory of 100 text files, index them, and write a search function that takes a query string and returns the top 5 most relevant files ranked by TF-IDF score.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-07-24",
    "missionName": "Mission Caterpillar 7",
    "company": "Caterpillar Hackathon",
    "companyIcon": "🚜",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Caterpillar Hackathon",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Build an interactive dashboard for equipment monitoring and rental management.",
      "Implement equipment check-in/check-out and usage tracking.",
      "Provide demand forecasting and anomaly detection features.",
      "Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Intelligent Equipment Rental Management Platform\n\n**Scenario:**\nYou are an engineer participating in the Heavy Equipment Innovation Challenge.\n\nCompanies in construction, mining, and infrastructure projects frequently lease heavy machinery from rental providers. Managing these assets manually often results in poor visibility of equipment location, inefficient utilization, delayed returns, and increased rental expenses. Your goal is to build a smart digital solution that helps businesses efficiently monitor, manage, and optimize their rented equipment throughout its rental lifecycle.\n\n**Your Task:**\nDevelop an Intelligent Equipment Rental Management Platform that enables organizations to:\n- Monitor rented equipment in near real time.\n- Manage equipment check-in and check-out operations.\n- Record equipment usage, operating hours, and site information.\n- Generate utilization insights and rental summaries.\n- Send alerts for upcoming or overdue returns.\n- Forecast future equipment demand using historical rental data.\n- Detect underutilized or unassigned assets to improve operational efficiency.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build an interactive dashboard for equipment monitoring and rental management.\n- Implement equipment check-in/check-out and usage tracking.\n- Provide demand forecasting and anomaly detection features.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-07-27",
    "missionName": "Mission IBM 8",
    "company": "IBM",
    "companyIcon": "☁️",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - IBM",
    "desc": "A detailed product engineering task for IBM focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for IBM.",
      "Implement a robust JWT (JSON Web Token) authentication system.",
      "Create your own function to sign and verify RS256 (asymmetric RSA keys) JWTs.",
      "The token must include strict expiration (exp) and issuer (iss) claims.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - IBM\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for IBM.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement a robust JWT (JSON Web Token) authentication system.\n- Create your own function to sign and verify RS256 (asymmetric RSA keys) JWTs.\n- The token must include strict expiration (exp) and issuer (iss) claims.\n- Create a middleware that rejects expired or tampered tokens.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement a robust JWT (JSON Web Token) authentication system.\n- Create your own function to sign and verify RS256 (asymmetric RSA keys) JWTs.\n- The token must include strict expiration (exp) and issuer (iss) claims.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-07-28",
    "missionName": "Mission Palo 9",
    "company": "Palo Alto Networks",
    "companyIcon": "🛡️",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Palo Alto Networks",
    "desc": "A detailed product engineering task for Palo Alto Networks focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Palo Alto Networks.",
      "Build a secure file upload service.",
      "Accept an image upload via multipart/form-data.",
      "Validate the file's 'Magic Bytes' (not just the extension) to ensure it's truly a PNG/JPEG.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Palo Alto Networks\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Palo Alto Networks.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a secure file upload service.\n- Accept an image upload via multipart/form-data.\n- Validate the file's 'Magic Bytes' (not just the extension) to ensure it's truly a PNG/JPEG.\n- Limit size to 2MB, sanitize the filename, and store it safely without directory traversal vulnerabilities.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a secure file upload service.\n- Accept an image upload via multipart/form-data.\n- Validate the file's 'Magic Bytes' (not just the extension) to ensure it's truly a PNG/JPEG.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-07-29",
    "missionName": "Mission Oracle 10",
    "company": "Oracle OFSS",
    "companyIcon": "💽",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Oracle OFSS",
    "desc": "A detailed product engineering task for Oracle OFSS focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Oracle OFSS.",
      "Design and implement a Role-Based Access Control (RBAC) matrix.",
      "Create an API with three endpoints.",
      "Users can have roles like 'Admin', 'Editor', and 'Viewer'.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Oracle OFSS\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Oracle OFSS.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Design and implement a Role-Based Access Control (RBAC) matrix.\n- Create an API with three endpoints.\n- Users can have roles like 'Admin', 'Editor', and 'Viewer'.\n- Use a bitmask (e.g., 1 for Read, 2 for Write, 4 for Delete) to validate if the requesting user has permission for the action.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Design and implement a Role-Based Access Control (RBAC) matrix.\n- Create an API with three endpoints.\n- Users can have roles like 'Admin', 'Editor', and 'Viewer'.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-07-30",
    "missionName": "Mission PhonePe 11",
    "company": "PhonePe",
    "companyIcon": "💸",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - PhonePe",
    "desc": "A detailed product engineering task for PhonePe focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for PhonePe.",
      "Build a double-entry bookkeeping ledger.",
      "Every financial transaction must create two entries (a debit and a credit) that perfectly balance to zero.",
      "Implement an API that transfers money between User A and User B, enforcing strict ACID properties using database transactions.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - PhonePe\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for PhonePe.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a double-entry bookkeeping ledger.\n- Every financial transaction must create two entries (a debit and a credit) that perfectly balance to zero.\n- Implement an API that transfers money between User A and User B, enforcing strict ACID properties using database transactions.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a double-entry bookkeeping ledger.\n- Every financial transaction must create two entries (a debit and a credit) that perfectly balance to zero.\n- Implement an API that transfers money between User A and User B, enforcing strict ACID properties using database transactions.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-07-31",
    "missionName": "Mission Societe 12",
    "company": "Societe Generale",
    "companyIcon": "🏦",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Societe Generale",
    "desc": "A detailed product engineering task for Societe Generale focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Societe Generale.",
      "Implement Idempotency for a Payment API.",
      "Clients will send a unique 'Idempotency-Key' header.",
      "If the exact same request is sent twice (e.g.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Societe Generale\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Societe Generale.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement Idempotency for a Payment API.\n- Clients will send a unique 'Idempotency-Key' header.\n- If the exact same request is sent twice (e.g.\n- network timeout retry), your server must intercept it, skip processing, and return the cached successful response from the first attempt.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement Idempotency for a Payment API.\n- Clients will send a unique 'Idempotency-Key' header.\n- If the exact same request is sent twice (e.g.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-03",
    "missionName": "Mission Commvault 13",
    "company": "Commvault",
    "companyIcon": "💾",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Commvault",
    "desc": "A detailed product engineering task for Commvault focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Commvault.",
      "Design a complex shopping cart pricing engine.",
      "The cart receives an array of items.",
      "Implement rules for: 'Buy 1 Get 1 Free', '10% off orders over $100', and complex tax calculations based on regional zip codes.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Commvault\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Commvault.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Design a complex shopping cart pricing engine.\n- The cart receives an array of items.\n- Implement rules for: 'Buy 1 Get 1 Free', '10% off orders over $100', and complex tax calculations based on regional zip codes.\n- Ensure all float math uses precise integer representations (cents) to avoid rounding errors.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Design a complex shopping cart pricing engine.\n- The cart receives an array of items.\n- Implement rules for: 'Buy 1 Get 1 Free', '10% off orders over $100', and complex tax calculations based on regional zip codes.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-04",
    "missionName": "Mission Bounteous 14",
    "company": "Bounteous x Accolite",
    "companyIcon": "🛍️",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Bounteous x Accolite",
    "desc": "A detailed product engineering task for Bounteous x Accolite focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Bounteous x Accolite.",
      "Build an Audit Log tracking system.",
      "For a given sensitive database table (e.g., Users), write a system (via DB Triggers or Application Layer) that records every INSERT, UPDATE, and DELETE.",
      "The log must capture the exact 'before' and 'after' JSON state, the timestamp, and the actor's ID.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Bounteous x Accolite\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Bounteous x Accolite.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build an Audit Log tracking system.\n- For a given sensitive database table (e.g., Users), write a system (via DB Triggers or Application Layer) that records every INSERT, UPDATE, and DELETE.\n- The log must capture the exact 'before' and 'after' JSON state, the timestamp, and the actor's ID.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build an Audit Log tracking system.\n- For a given sensitive database table (e.g., Users), write a system (via DB Triggers or Application Layer) that records every INSERT, UPDATE, and DELETE.\n- The log must capture the exact 'before' and 'after' JSON state, the timestamp, and the actor's ID.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-05",
    "missionName": "Mission Tata 15",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Tata Consultancy Services",
    "desc": "A detailed product engineering task for Tata Consultancy Services focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Tata Consultancy Services.",
      "Design and implement a robust API rate-limiting middleware in Express.js using Redis.",
      "The client requires a sliding window algorithm that allows exactly 100 requests per minute per IP, returning a 429 status code with a 'Retry-After' header if exceeded.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Tata Consultancy Services\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Tata Consultancy Services.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Design and implement a robust API rate-limiting middleware in Express.js using Redis.\n- The client requires a sliding window algorithm that allows exactly 100 requests per minute per IP, returning a 429 status code with a 'Retry-After' header if exceeded.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Design and implement a robust API rate-limiting middleware in Express.js using Redis.\n- The client requires a sliding window algorithm that allows exactly 100 requests per minute per IP, returning a 429 status code with a 'Retry-After' header if exceeded.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-06",
    "missionName": "Mission Deloitte 16",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A detailed product engineering task for Deloitte USI focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Deloitte USI.",
      "Write a script that parses a massive 1GB log file stream without loading it entirely into memory (use Node.js Streams or Python Generators).",
      "Extract all HTTP 500 error traces, anonymize any PII (email/IP addresses) using Regex, and output a clean JSON summary report.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Deloitte USI\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Deloitte USI.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Write a script that parses a massive 1GB log file stream without loading it entirely into memory (use Node.js Streams or Python Generators).\n- Extract all HTTP 500 error traces, anonymize any PII (email/IP addresses) using Regex, and output a clean JSON summary report.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Write a script that parses a massive 1GB log file stream without loading it entirely into memory (use Node.js Streams or Python Generators).\n- Extract all HTTP 500 error traces, anonymize any PII (email/IP addresses) using Regex, and output a clean JSON summary report.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-07",
    "missionName": "Mission Thorogood 17",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A detailed product engineering task for Thorogood Associates focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Thorogood Associates.",
      "Create a Data Pipeline DAG (Directed Acyclic Graph) executor.",
      "Write a script that reads a JSON definition of 5 tasks (Extract, Transform A, Transform B, Join, Load).",
      "Execute independent tasks in parallel, and wait for prerequisites to finish before running dependent tasks.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Thorogood Associates\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Thorogood Associates.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Create a Data Pipeline DAG (Directed Acyclic Graph) executor.\n- Write a script that reads a JSON definition of 5 tasks (Extract, Transform A, Transform B, Join, Load).\n- Execute independent tasks in parallel, and wait for prerequisites to finish before running dependent tasks.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Create a Data Pipeline DAG (Directed Acyclic Graph) executor.\n- Write a script that reads a JSON definition of 5 tasks (Extract, Transform A, Transform B, Join, Load).\n- Execute independent tasks in parallel, and wait for prerequisites to finish before running dependent tasks.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-10",
    "missionName": "Mission The 18",
    "company": "The MathCompany",
    "companyIcon": "📐",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - The MathCompany",
    "desc": "A detailed product engineering task for The MathCompany focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for The MathCompany.",
      "Implement an Anomaly Detection script using Z-Scores.",
      "Read a time-series dataset of server response times.",
      "Identify any data points that are more than 3 standard deviations from a rolling window mean, and output an alert payload for each anomaly.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - The MathCompany\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for The MathCompany.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement an Anomaly Detection script using Z-Scores.\n- Read a time-series dataset of server response times.\n- Identify any data points that are more than 3 standard deviations from a rolling window mean, and output an alert payload for each anomaly.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement an Anomaly Detection script using Z-Scores.\n- Read a time-series dataset of server response times.\n- Identify any data points that are more than 3 standard deviations from a rolling window mean, and output an alert payload for each anomaly.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-11",
    "missionName": "Mission Jungroo 19",
    "company": "Jungroo AI labs",
    "companyIcon": "🧠",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Jungroo AI labs",
    "desc": "A detailed product engineering task for Jungroo AI labs focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Jungroo AI labs.",
      "Build a recommendation engine using Collaborative Filtering.",
      "Given a matrix of User-Item ratings (1-5 stars), calculate the cosine similarity between users.",
      "Predict the missing ratings for a target user and recommend the top 3 items they haven't seen yet.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Jungroo AI labs\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Jungroo AI labs.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a recommendation engine using Collaborative Filtering.\n- Given a matrix of User-Item ratings (1-5 stars), calculate the cosine similarity between users.\n- Predict the missing ratings for a target user and recommend the top 3 items they haven't seen yet.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a recommendation engine using Collaborative Filtering.\n- Given a matrix of User-Item ratings (1-5 stars), calculate the cosine similarity between users.\n- Predict the missing ratings for a target user and recommend the top 3 items they haven't seen yet.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-12",
    "missionName": "Mission Celeredge 20",
    "company": "Celeredge Inc",
    "companyIcon": "🕸️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Celeredge Inc",
    "desc": "A detailed product engineering task for Celeredge Inc focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Celeredge Inc.",
      "Write a web scraper using Playwright or Puppeteer that circumvents basic anti-bot protections.",
      "Navigate to an e-commerce page, extract the product name, price, and stock status for 20 items, handle pagination, and save the structured data to a SQLite database.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Celeredge Inc\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Celeredge Inc.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Write a web scraper using Playwright or Puppeteer that circumvents basic anti-bot protections.\n- Navigate to an e-commerce page, extract the product name, price, and stock status for 20 items, handle pagination, and save the structured data to a SQLite database.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Write a web scraper using Playwright or Puppeteer that circumvents basic anti-bot protections.\n- Navigate to an e-commerce page, extract the product name, price, and stock status for 20 items, handle pagination, and save the structured data to a SQLite database.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-13",
    "missionName": "Mission Caterpillar 21",
    "company": "Caterpillar Hackathon",
    "companyIcon": "🚜",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Caterpillar Hackathon",
    "desc": "A detailed product engineering task for Caterpillar Hackathon focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Caterpillar Hackathon.",
      "Design a scalable metrics aggregation pipeline.",
      "Simulate incoming IoT temperature data at 1000 requests/sec.",
      "Buffer these events in memory and write them to the database in bulk batches every 5 seconds to reduce database IOPS, ensuring zero data loss during the flush.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Caterpillar Hackathon\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Caterpillar Hackathon.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Design a scalable metrics aggregation pipeline.\n- Simulate incoming IoT temperature data at 1000 requests/sec.\n- Buffer these events in memory and write them to the database in bulk batches every 5 seconds to reduce database IOPS, ensuring zero data loss during the flush.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Design a scalable metrics aggregation pipeline.\n- Simulate incoming IoT temperature data at 1000 requests/sec.\n- Buffer these events in memory and write them to the database in bulk batches every 5 seconds to reduce database IOPS, ensuring zero data loss during the flush.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-14",
    "missionName": "Mission IBM 22",
    "company": "IBM",
    "companyIcon": "☁️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - IBM",
    "desc": "A detailed product engineering task for IBM focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for IBM.",
      "Implement a distributed locking mechanism using Redis.",
      "Write a script where multiple concurrent workers try to run a 'cron job', but the Redis lock ensures that exactly one worker executes it.",
      "Handle edge cases like the worker crashing before releasing the lock (use TTLs).",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - IBM\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for IBM.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement a distributed locking mechanism using Redis.\n- Write a script where multiple concurrent workers try to run a 'cron job', but the Redis lock ensures that exactly one worker executes it.\n- Handle edge cases like the worker crashing before releasing the lock (use TTLs).\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement a distributed locking mechanism using Redis.\n- Write a script where multiple concurrent workers try to run a 'cron job', but the Redis lock ensures that exactly one worker executes it.\n- Handle edge cases like the worker crashing before releasing the lock (use TTLs).\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-17",
    "missionName": "Mission Palo 23",
    "company": "Palo Alto Networks",
    "companyIcon": "🛡️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Palo Alto Networks",
    "desc": "A detailed product engineering task for Palo Alto Networks focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Palo Alto Networks.",
      "Build a defense mechanism against Brute Force attacks.",
      "Track failed login attempts per IP address in a fast cache.",
      "If an IP fails 5 times within 10 minutes, implement an exponential backoff lockout (e.g., blocked for 1 min, then 5 mins, then 1 hour).",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Palo Alto Networks\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Palo Alto Networks.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a defense mechanism against Brute Force attacks.\n- Track failed login attempts per IP address in a fast cache.\n- If an IP fails 5 times within 10 minutes, implement an exponential backoff lockout (e.g., blocked for 1 min, then 5 mins, then 1 hour).\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a defense mechanism against Brute Force attacks.\n- Track failed login attempts per IP address in a fast cache.\n- If an IP fails 5 times within 10 minutes, implement an exponential backoff lockout (e.g., blocked for 1 min, then 5 mins, then 1 hour).\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-18",
    "missionName": "Mission Oracle 24",
    "company": "Oracle OFSS",
    "companyIcon": "💽",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Oracle OFSS",
    "desc": "A detailed product engineering task for Oracle OFSS focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Oracle OFSS.",
      "Write a comprehensive SQL Injection vulnerability patch.",
      "Take an existing intentionally vulnerable codebase (provided conceptually) that uses string concatenation for queries.",
      "Rewrite the entire data layer to use strict Parameterized Queries and ORM query builders, preventing all injections.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Oracle OFSS\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Oracle OFSS.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Write a comprehensive SQL Injection vulnerability patch.\n- Take an existing intentionally vulnerable codebase (provided conceptually) that uses string concatenation for queries.\n- Rewrite the entire data layer to use strict Parameterized Queries and ORM query builders, preventing all injections.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Write a comprehensive SQL Injection vulnerability patch.\n- Take an existing intentionally vulnerable codebase (provided conceptually) that uses string concatenation for queries.\n- Rewrite the entire data layer to use strict Parameterized Queries and ORM query builders, preventing all injections.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-19",
    "missionName": "Mission PhonePe 25",
    "company": "PhonePe",
    "companyIcon": "💸",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - PhonePe",
    "desc": "A detailed product engineering task for PhonePe focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for PhonePe.",
      "Implement a scalable Pagination API using Keyset Pagination (Cursor-based).",
      "Instead of using standard SQL OFFSET (which gets slow on large datasets), design an endpoint that takes a 'next_cursor' parameter to efficiently fetch the next 50 rows using indexed column sorting.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - PhonePe\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for PhonePe.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement a scalable Pagination API using Keyset Pagination (Cursor-based).\n- Instead of using standard SQL OFFSET (which gets slow on large datasets), design an endpoint that takes a 'next_cursor' parameter to efficiently fetch the next 50 rows using indexed column sorting.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement a scalable Pagination API using Keyset Pagination (Cursor-based).\n- Instead of using standard SQL OFFSET (which gets slow on large datasets), design an endpoint that takes a 'next_cursor' parameter to efficiently fetch the next 50 rows using indexed column sorting.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-20",
    "missionName": "Mission Societe 26",
    "company": "Societe Generale",
    "companyIcon": "🏦",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Societe Generale",
    "desc": "A detailed product engineering task for Societe Generale focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Societe Generale.",
      "Create a multi-currency wallet system.",
      "Fetch real-time exchange rates from a public API, cache them for 5 minutes, and allow a user to convert their balance from USD to EUR.",
      "Ensure thread safety so concurrent conversion requests do not result in a negative or duplicated balance.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Societe Generale\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Societe Generale.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Create a multi-currency wallet system.\n- Fetch real-time exchange rates from a public API, cache them for 5 minutes, and allow a user to convert their balance from USD to EUR.\n- Ensure thread safety so concurrent conversion requests do not result in a negative or duplicated balance.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Create a multi-currency wallet system.\n- Fetch real-time exchange rates from a public API, cache them for 5 minutes, and allow a user to convert their balance from USD to EUR.\n- Ensure thread safety so concurrent conversion requests do not result in a negative or duplicated balance.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-21",
    "missionName": "Mission Commvault 27",
    "company": "Commvault",
    "companyIcon": "💾",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Commvault",
    "desc": "A detailed product engineering task for Commvault focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Commvault.",
      "Build a robust CSV Bulk Import tool.",
      "Accept a CSV upload of 50,000 product records.",
      "Process the file asynchronously.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Commvault\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Commvault.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a robust CSV Bulk Import tool.\n- Accept a CSV upload of 50,000 product records.\n- Process the file asynchronously.\n- Validate each row (price > 0, name required).\n- Insert valid rows into the database and generate a downloadable 'Error Report' CSV containing only the rows that failed validation.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a robust CSV Bulk Import tool.\n- Accept a CSV upload of 50,000 product records.\n- Process the file asynchronously.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-24",
    "missionName": "Mission Bounteous 28",
    "company": "Bounteous x Accolite",
    "companyIcon": "🛍️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Bounteous x Accolite",
    "desc": "A detailed product engineering task for Bounteous x Accolite focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Bounteous x Accolite.",
      "Design a state machine for an Order Fulfillment process.",
      "Define states: PENDING, PAID, SHIPPED, DELIVERED, CANCELLED.",
      "Enforce strict transition rules (e.g., cannot transition from PENDING directly to SHIPPED).",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Bounteous x Accolite\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Bounteous x Accolite.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Design a state machine for an Order Fulfillment process.\n- Define states: PENDING, PAID, SHIPPED, DELIVERED, CANCELLED.\n- Enforce strict transition rules (e.g., cannot transition from PENDING directly to SHIPPED).\n- Throw explicit domain errors if an invalid transition is attempted.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Design a state machine for an Order Fulfillment process.\n- Define states: PENDING, PAID, SHIPPED, DELIVERED, CANCELLED.\n- Enforce strict transition rules (e.g., cannot transition from PENDING directly to SHIPPED).\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-25",
    "missionName": "Mission Tata 29",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Tata Consultancy Services",
    "desc": "A detailed product engineering task for Tata Consultancy Services focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Tata Consultancy Services.",
      "Create a microservice that generates PDF invoices dynamically from JSON data using a library like Puppeteer or ReportLab.",
      "The service must support custom HTML templates, handle pagination gracefully, and upload the final PDF to a mock S3 bucket.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Tata Consultancy Services\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Tata Consultancy Services.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Create a microservice that generates PDF invoices dynamically from JSON data using a library like Puppeteer or ReportLab.\n- The service must support custom HTML templates, handle pagination gracefully, and upload the final PDF to a mock S3 bucket.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Create a microservice that generates PDF invoices dynamically from JSON data using a library like Puppeteer or ReportLab.\n- The service must support custom HTML templates, handle pagination gracefully, and upload the final PDF to a mock S3 bucket.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-26",
    "missionName": "Mission Deloitte 30",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A detailed product engineering task for Deloitte USI focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Deloitte USI.",
      "Develop a real-time 'Status Dashboard' backend.",
      "Create a WebSocket server that receives simulated server health metrics (CPU, Memory) every second from 5 different 'nodes'.",
      "Aggregate this data and broadcast it to connected frontend clients with less than 50ms latency.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Deloitte USI\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Deloitte USI.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Develop a real-time 'Status Dashboard' backend.\n- Create a WebSocket server that receives simulated server health metrics (CPU, Memory) every second from 5 different 'nodes'.\n- Aggregate this data and broadcast it to connected frontend clients with less than 50ms latency.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Develop a real-time 'Status Dashboard' backend.\n- Create a WebSocket server that receives simulated server health metrics (CPU, Memory) every second from 5 different 'nodes'.\n- Aggregate this data and broadcast it to connected frontend clients with less than 50ms latency.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-27",
    "missionName": "Mission Thorogood 31",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A detailed product engineering task for Thorogood Associates focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Thorogood Associates.",
      "Build a custom LRU (Least Recently Used) Cache class from scratch using a Doubly Linked List and a Hash Map.",
      "Ensure that both `get(key)` and `put(key, value)` operate in O(1) time complexity.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Thorogood Associates\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Thorogood Associates.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a custom LRU (Least Recently Used) Cache class from scratch using a Doubly Linked List and a Hash Map.\n- Ensure that both `get(key)` and `put(key, value)` operate in O(1) time complexity.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a custom LRU (Least Recently Used) Cache class from scratch using a Doubly Linked List and a Hash Map.\n- Ensure that both `get(key)` and `put(key, value)` operate in O(1) time complexity.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-28",
    "missionName": "Mission The 32",
    "company": "The MathCompany",
    "companyIcon": "📐",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - The MathCompany",
    "desc": "A detailed product engineering task for The MathCompany focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for The MathCompany.",
      "Implement a rate-limited asynchronous task queue.",
      "Given an array of 100 URLs, write a function that fetches them concurrently, but strictly ensures that no more than 5 requests are in-flight at any given millisecond.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - The MathCompany\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for The MathCompany.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement a rate-limited asynchronous task queue.\n- Given an array of 100 URLs, write a function that fetches them concurrently, but strictly ensures that no more than 5 requests are in-flight at any given millisecond.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement a rate-limited asynchronous task queue.\n- Given an array of 100 URLs, write a function that fetches them concurrently, but strictly ensures that no more than 5 requests are in-flight at any given millisecond.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-08-31",
    "missionName": "Mission Jungroo 33",
    "company": "Jungroo AI labs",
    "companyIcon": "🧠",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Jungroo AI labs",
    "desc": "A detailed product engineering task for Jungroo AI labs focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Jungroo AI labs.",
      "Design a URL Shortener API (like bit.ly).",
      "Generate a unique Base62 encoded short code for long URLs.",
      "Implement a fast redirection endpoint, and track the total click count, storing analytics asynchronously without blocking the redirect.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Jungroo AI labs\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Jungroo AI labs.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Design a URL Shortener API (like bit.ly).\n- Generate a unique Base62 encoded short code for long URLs.\n- Implement a fast redirection endpoint, and track the total click count, storing analytics asynchronously without blocking the redirect.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Design a URL Shortener API (like bit.ly).\n- Generate a unique Base62 encoded short code for long URLs.\n- Implement a fast redirection endpoint, and track the total click count, storing analytics asynchronously without blocking the redirect.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-01",
    "missionName": "Mission Celeredge 34",
    "company": "Celeredge Inc",
    "companyIcon": "🕸️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Celeredge Inc",
    "desc": "A detailed product engineering task for Celeredge Inc focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Celeredge Inc.",
      "Write a generic deep object differ.",
      "Given two complex nested JSON objects (with arrays, dates, and nulls), write a recursive function that returns a strict patch object containing only the fields that were modified, added, or removed.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Celeredge Inc\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Celeredge Inc.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Write a generic deep object differ.\n- Given two complex nested JSON objects (with arrays, dates, and nulls), write a recursive function that returns a strict patch object containing only the fields that were modified, added, or removed.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Write a generic deep object differ.\n- Given two complex nested JSON objects (with arrays, dates, and nulls), write a recursive function that returns a strict patch object containing only the fields that were modified, added, or removed.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-02",
    "missionName": "Mission Caterpillar 35",
    "company": "Caterpillar Hackathon",
    "companyIcon": "🚜",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Caterpillar Hackathon",
    "desc": "A detailed product engineering task for Caterpillar Hackathon focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Caterpillar Hackathon.",
      "Build a scalable Chat Room backend using Server-Sent Events (SSE) or WebSockets.",
      "Allow users to subscribe to specific 'rooms', and broadcast messages to only the connected clients in that specific room.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Caterpillar Hackathon\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Caterpillar Hackathon.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a scalable Chat Room backend using Server-Sent Events (SSE) or WebSockets.\n- Allow users to subscribe to specific 'rooms', and broadcast messages to only the connected clients in that specific room.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a scalable Chat Room backend using Server-Sent Events (SSE) or WebSockets.\n- Allow users to subscribe to specific 'rooms', and broadcast messages to only the connected clients in that specific room.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-03",
    "missionName": "Mission IBM 36",
    "company": "IBM",
    "companyIcon": "☁️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - IBM",
    "desc": "A detailed product engineering task for IBM focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for IBM.",
      "Implement Cross-Site Request Forgery (CSRF) protection from scratch.",
      "Generate a unique, cryptographically secure CSRF token per session.",
      "Require this token in a custom HTTP header for all POST/PUT/DELETE requests, and validate it strictly on the server.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - IBM\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for IBM.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement Cross-Site Request Forgery (CSRF) protection from scratch.\n- Generate a unique, cryptographically secure CSRF token per session.\n- Require this token in a custom HTTP header for all POST/PUT/DELETE requests, and validate it strictly on the server.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement Cross-Site Request Forgery (CSRF) protection from scratch.\n- Generate a unique, cryptographically secure CSRF token per session.\n- Require this token in a custom HTTP header for all POST/PUT/DELETE requests, and validate it strictly on the server.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-04",
    "missionName": "Mission Palo 37",
    "company": "Palo Alto Networks",
    "companyIcon": "🛡️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Palo Alto Networks",
    "desc": "A detailed product engineering task for Palo Alto Networks focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Palo Alto Networks.",
      "Build a generic Webhook dispatch system.",
      "When an event occurs, your system must send an HTTP POST to a registered URL.",
      "Implement exponential retry logic for failed deliveries (HTTP 500s), and use an HMAC-SHA256 signature so the receiver can verify the payload's authenticity.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Palo Alto Networks\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Palo Alto Networks.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a generic Webhook dispatch system.\n- When an event occurs, your system must send an HTTP POST to a registered URL.\n- Implement exponential retry logic for failed deliveries (HTTP 500s), and use an HMAC-SHA256 signature so the receiver can verify the payload's authenticity.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a generic Webhook dispatch system.\n- When an event occurs, your system must send an HTTP POST to a registered URL.\n- Implement exponential retry logic for failed deliveries (HTTP 500s), and use an HMAC-SHA256 signature so the receiver can verify the payload's authenticity.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-07",
    "missionName": "Mission Oracle 38",
    "company": "Oracle OFSS",
    "companyIcon": "💽",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Oracle OFSS",
    "desc": "A detailed product engineering task for Oracle OFSS focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Oracle OFSS.",
      "Design a secure password reset flow.",
      "Generate a high-entropy, time-limited (15 mins) reset token.",
      "Store a cryptographically hashed version of the token in the DB (not plain text).",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Oracle OFSS\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Oracle OFSS.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Design a secure password reset flow.\n- Generate a high-entropy, time-limited (15 mins) reset token.\n- Store a cryptographically hashed version of the token in the DB (not plain text).\n- Verify the token upon the user clicking the link, and immediately invalidate it after use.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Design a secure password reset flow.\n- Generate a high-entropy, time-limited (15 mins) reset token.\n- Store a cryptographically hashed version of the token in the DB (not plain text).\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-08",
    "missionName": "Mission PhonePe 39",
    "company": "PhonePe",
    "companyIcon": "💸",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - PhonePe",
    "desc": "A detailed product engineering task for PhonePe focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for PhonePe.",
      "Implement a Subscription Billing engine.",
      "Write a cron-like script that runs daily.",
      "It must query all active subscriptions whose 'next_billing_date' is today, attempt to charge them via a mock Payment Gateway, and update their status to PAST_DUE if the payment fails, handling retries.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - PhonePe\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for PhonePe.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement a Subscription Billing engine.\n- Write a cron-like script that runs daily.\n- It must query all active subscriptions whose 'next_billing_date' is today, attempt to charge them via a mock Payment Gateway, and update their status to PAST_DUE if the payment fails, handling retries.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement a Subscription Billing engine.\n- Write a cron-like script that runs daily.\n- It must query all active subscriptions whose 'next_billing_date' is today, attempt to charge them via a mock Payment Gateway, and update their status to PAST_DUE if the payment fails, handling retries.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-09",
    "missionName": "Mission Societe 40",
    "company": "Societe Generale",
    "companyIcon": "🏦",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Societe Generale",
    "desc": "A detailed product engineering task for Societe Generale focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Societe Generale.",
      "Build a GraphQL API for an enterprise product catalog.",
      "Define strict schema types, queries, and mutations.",
      "Implement a DataLoader to solve the 'N+1 Query Problem' when fetching the associated categories and reviews for a list of products.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Societe Generale\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Societe Generale.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a GraphQL API for an enterprise product catalog.\n- Define strict schema types, queries, and mutations.\n- Implement a DataLoader to solve the 'N+1 Query Problem' when fetching the associated categories and reviews for a list of products.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a GraphQL API for an enterprise product catalog.\n- Define strict schema types, queries, and mutations.\n- Implement a DataLoader to solve the 'N+1 Query Problem' when fetching the associated categories and reviews for a list of products.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-10",
    "missionName": "Mission Commvault 41",
    "company": "Commvault",
    "companyIcon": "💾",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Commvault",
    "desc": "A detailed product engineering task for Commvault focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Commvault.",
      "Build a custom LRU (Least Recently Used) Cache class from scratch using a Doubly Linked List and a Hash Map.",
      "Ensure that both `get(key)` and `put(key, value)` operate in O(1) time complexity.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Commvault\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Commvault.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a custom LRU (Least Recently Used) Cache class from scratch using a Doubly Linked List and a Hash Map.\n- Ensure that both `get(key)` and `put(key, value)` operate in O(1) time complexity.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a custom LRU (Least Recently Used) Cache class from scratch using a Doubly Linked List and a Hash Map.\n- Ensure that both `get(key)` and `put(key, value)` operate in O(1) time complexity.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-11",
    "missionName": "Mission Bounteous 42",
    "company": "Bounteous x Accolite",
    "companyIcon": "🛍️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Bounteous x Accolite",
    "desc": "A detailed product engineering task for Bounteous x Accolite focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Bounteous x Accolite.",
      "Implement a rate-limited asynchronous task queue.",
      "Given an array of 100 URLs, write a function that fetches them concurrently, but strictly ensures that no more than 5 requests are in-flight at any given millisecond.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Bounteous x Accolite\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Bounteous x Accolite.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement a rate-limited asynchronous task queue.\n- Given an array of 100 URLs, write a function that fetches them concurrently, but strictly ensures that no more than 5 requests are in-flight at any given millisecond.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement a rate-limited asynchronous task queue.\n- Given an array of 100 URLs, write a function that fetches them concurrently, but strictly ensures that no more than 5 requests are in-flight at any given millisecond.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-14",
    "missionName": "Mission Tata 43",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Tata Consultancy Services",
    "desc": "A detailed product engineering task for Tata Consultancy Services focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Tata Consultancy Services.",
      "Implement an OAuth2 Authorization Code flow from scratch (without passport.js or high-level wrappers).",
      "Build the endpoints for /authorize, /token, and /userinfo, securely handling state, nonces, and JWT signing for a multi-tenant client portal.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Tata Consultancy Services\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Tata Consultancy Services.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Implement an OAuth2 Authorization Code flow from scratch (without passport.js or high-level wrappers).\n- Build the endpoints for /authorize, /token, and /userinfo, securely handling state, nonces, and JWT signing for a multi-tenant client portal.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Implement an OAuth2 Authorization Code flow from scratch (without passport.js or high-level wrappers).\n- Build the endpoints for /authorize, /token, and /userinfo, securely handling state, nonces, and JWT signing for a multi-tenant client portal.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-15",
    "missionName": "Mission Deloitte 44",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A detailed product engineering task for Deloitte USI focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Deloitte USI.",
      "Build a custom 'Undo/Redo' history stack for a complex JSON configuration editor.",
      "Implement the Command Pattern in TypeScript so that every mutation (add, edit, delete) can be reverted or reapplied sequentially without data corruption.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Deloitte USI\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Deloitte USI.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Build a custom 'Undo/Redo' history stack for a complex JSON configuration editor.\n- Implement the Command Pattern in TypeScript so that every mutation (add, edit, delete) can be reverted or reapplied sequentially without data corruption.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Build a custom 'Undo/Redo' history stack for a complex JSON configuration editor.\n- Implement the Command Pattern in TypeScript so that every mutation (add, edit, delete) can be reverted or reapplied sequentially without data corruption.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-16",
    "missionName": "Mission Thorogood 45",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A detailed product engineering task for Thorogood Associates focusing on solving real-world business challenges.",
    "tasks": [
      "Analyze the business scenario and technical requirements for Thorogood Associates.",
      "Design a URL Shortener API (like bit.ly).",
      "Generate a unique Base62 encoded short code for long URLs.",
      "Implement a fast redirection endpoint, and track the total click count, storing analytics asynchronously without blocking the redirect.",
      "Document the system architecture, design decisions, and Big-O complexity analysis in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Thorogood Associates\n\n**Scenario:**\nYou are an engineer participating in the Technical Challenge for Thorogood Associates.\n\nYour goal is to build a smart engineering solution that solves the client's business needs efficiently and cleanly.\n\n**Your Task:**\nDevelop a solution that enables organizations to:\n- Design a URL Shortener API (like bit.ly).\n- Generate a unique Base62 encoded short code for long URLs.\n- Implement a fast redirection endpoint, and track the total click count, storing analytics asynchronously without blocking the redirect.\n\n**Deliverables:**\n- Implement the complete solution in code.\n- Design a URL Shortener API (like bit.ly).\n- Generate a unique Base62 encoded short code for long URLs.\n- Implement a fast redirection endpoint, and track the total click count, storing analytics asynchronously without blocking the redirect.\n- Document the system architecture, design decisions, API endpoints, and Big-O complexity analysis in the README.md."
  },
  {
    "date": "2026-09-17",
    "missionName": "Mission Demo Day",
    "company": "Cohort 25MX",
    "companyIcon": "🏆",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Demo Day + Engineering Showcase",
    "desc": "The final day of the sprint. Present your engineering portfolio, demonstrate your skills, and showcase your capstone projects.",
    "tasks": [
      "Prepare your final presentation and project demonstration.",
      "Showcase your engineering growth and highlight your best missions.",
      "Review peers' projects and provide constructive feedback.",
      "Celebrate the completion of the 25MX 46-Day Engineering Sprint!"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "isSpecial": true,
    "guide": "### Demo Day Showcase\n\nPrepare a 5-minute presentation demonstrating your most complex engineering solution from the past 45 days. Highlight your architecture diagrams, the bottlenecks you overcame, and your exact Git commit history. Be ready for a live Q&A on your technical decisions."
  }
]

export function getMission(date: string): Mission | undefined {
  return MISSIONS_DATA.find(m => m.date === date)
}

export function getMissionsByWeek(week: number): Mission[] {
  return MISSIONS_DATA.filter(m => m.week === week)
}

export function getTodayMission(): Mission | undefined {
  const istTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const yyyy = istTime.getFullYear()
  const mm   = String(istTime.getMonth() + 1).padStart(2, '0')
  const dd   = String(istTime.getDate()).padStart(2, '0')
  const todayISO = `${yyyy}-${mm}-${dd}`
  return getMission(todayISO)
}

export function isMissionUnlocked(date: string): boolean {
  const istTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const yyyy = istTime.getFullYear()
  const mm   = String(istTime.getMonth() + 1).padStart(2, '0')
  const dd   = String(istTime.getDate()).padStart(2, '0')
  const todayISO = `${yyyy}-${mm}-${dd}`
  
  // A mission is unlocked if its date is less than or equal to today
  return date <= todayISO
}

export function getNextMission(activeDates: string[]): Mission | undefined {
  const activeSet = new Set(activeDates)
  return MISSIONS_DATA.find(m => !activeSet.has(m.date) && m.date > (activeDates[activeDates.length - 1] ?? ''))
}

export const ALL_MISSION_DATES = MISSIONS_DATA.map(m => m.date)
