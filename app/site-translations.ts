export type SiteLocale = "zh" | "en";

const englishTranslations: Record<string, string> = {
  "进入现场": "Discover",
  "定义目标": "Define Outcomes",
  "连接数据": "Connect Data",
  "构建方案": "Build",
  "上线进化": "Deploy & Evolve",
  "洞察": "Discover",
  "识别客户意图与业务信号": "Identify intent and buying signals",
  "分层": "Segment",
  "建立动态客户画像与优先级": "Build dynamic profiles and priorities",
  "培育": "Nurture",
  "由 AI 持续组织精准内容与触达": "Orchestrate precise content and outreach",
  "转化": "Convert",
  "驱动销售动作并协同关键任务": "Drive sales actions and critical tasks",
  "归因": "Attribute",
  "回收结果，持续优化增长策略": "Feed results back into growth strategy",

  "解决方案工程": "Solution Engineering",
  "把业务目标拆解为角色、流程、数据、智能体与衡量指标。":
    "Translate business goals into roles, workflows, data, AI agents, and measurable outcomes.",
  "场景诊断": "Opportunity Discovery",
  "方案编排": "Solution Design",
  "系统集成": "Systems Integration",
  "运营度量": "Performance Measurement",
  "AGENT PLATFORM · 太擎": "AGENT PLATFORM · TAIQING",
  "企业级智能体能力": "Enterprise AI Agent Capabilities",
  "让模型连接企业知识、工具和流程，形成能够执行任务的智能体。":
    "Connect models with enterprise knowledge, tools, and workflows to create agents that can execute real work.",
  "智能体开发": "Agent Development",
  "知识与记忆": "Knowledge & Memory",
  "工具调用": "Tool Use",
  "工作流编排": "Workflow Orchestration",
  "DATA PLATFORM · 旷湖": "DATA PLATFORM · KUANGHU",
  "企业数据工程能力": "Enterprise Data Engineering",
  "让多源数据经过连接、治理、开发与服务化，成为可信业务上下文。":
    "Connect, govern, transform, and serve multi-source data as trusted business context.",
  "数据连接": "Data Connectivity",
  "数据治理": "Data Governance",
  "指标标签": "Metrics & Taxonomy",
  "数据服务": "Data Services",

  "从结果定义场景": "Define the Use Case by Its Outcome",
  "先明确业务问题、关键角色与衡量指标，再决定 AI 应该做什么。":
    "Start with the business problem, accountable roles, and success metrics—then decide what AI should do.",
  "用双底座构建方案": "Build on Two Technology Foundations",
  "旷湖让数据可用，太擎让智能体可执行，域擎把两者组织成业务系统。":
    "Kuanghu makes enterprise data usable, Taiqing makes agents executable, and UKing turns both into an operating system for the business.",
  "在运行中持续进化": "Improve Through Real-World Operation",
  "执行结果持续回流，推动知识、流程、策略和智能体能力一起迭代。":
    "Operational feedback continuously improves knowledge, workflows, strategy, and agent performance.",

  "滴灌营销": "UKing Drip Marketing",
  "销售与营销增长": "Sales & Marketing Growth",
  "连接公域获客、私域培育、销售转化、复购与经营管理，把一次营销活动变成持续运行的客户经营系统。":
    "Connect acquisition, owned-channel nurture, sales conversion, retention, and revenue operations in one continuously running customer growth system.",
  "精准获客": "Precision Acquisition",
  "客户分层": "Customer Segmentation",
  "持续培育": "Continuous Nurture",
  "销售协同": "Sales Alignment",
  "效果归因": "Performance Attribution",
  "B2B 销售智能": "B2B Sales Intelligence",
  "从商机发现到成交推进": "From Account Discovery to Deal Progression",
  "围绕目标客户识别、内容组织、个性化触达、商机研判与销售跟进，组合面向复杂销售链路的智能体。":
    "Coordinate AI agents for account identification, content development, personalized outreach, opportunity qualification, and sales follow-through.",
  "商机洞察": "Opportunity Intelligence",
  "内容 Agent": "Content Agent",
  "触达 Agent": "Outreach Agent",
  "销售助手": "Sales Copilot",
  "知识与服务智能": "Knowledge & Service Intelligence",
  "让企业经验进入每次响应": "Bring Institutional Knowledge into Every Response",
  "把制度、产品资料、服务经验和专家知识转化为可追溯、可维护、能参与任务执行的知识能力。":
    "Turn policies, product information, service experience, and expert knowledge into governed, traceable capabilities that support action.",
  "企业知识库": "Enterprise Knowledge Base",
  "员工助手": "Employee Copilot",
  "客户服务": "Customer Service",
  "辅助决策": "Decision Support",
  "运营与流程协同": "Operations & Workflow Automation",
  "让智能体真正参与工作": "Put AI Agents into the Flow of Work",
  "连接人、系统和数据，自动完成标准化任务与跨工具协作，让人聚焦规则、例外处理和关键决策。":
    "Connect people, systems, and data to automate repeatable tasks and cross-tool coordination, while people retain control of policy, exceptions, and key decisions.",
  "流程编排": "Workflow Orchestration",
  "任务执行": "Task Execution",
  "系统协同": "Systems Coordination",
  "人机共治": "Human-in-the-Loop Governance",
  "零售与客户运营": "Retail & Customer Operations",
  "连接营销、客服、运营与私域": "Connect Marketing, Service, Operations & Owned Channels",
  "围绕消费者旅程组合内容、客服、运营与复购智能能力，形成适应具体渠道和组织的客户运营方案。":
    "Combine content, service, operations, and retention intelligence across the customer journey in a solution tailored to each channel and organization.",
  "智能客服": "AI-Powered Service",
  "内容运营": "Content Operations",
  "私域经营": "Owned-Channel Engagement",
  "复购策略": "Retention Strategy",
  "数据洞察与产业协同": "Data Intelligence & Industry Collaboration",
  "把分散数据变成业务行动": "Turn Fragmented Data into Business Action",
  "围绕经营分析、供需关系、产业链研究与全球业务协作连接数据和流程，按企业现场组合可落地的方案。":
    "Connect data and workflows for performance analysis, supply-demand insight, value-chain research, and global business collaboration.",
  "经营分析": "Performance Analytics",
  "供需洞察": "Supply-Demand Insight",
  "产业链研究": "Value-Chain Research",
  "全球业务协同": "Global Collaboration",

  "公域精准获客": "Precision Acquisition",
  "从目标客户识别、持续触达到高价值内容培育，把有效线索沉淀为可运营的客户资产。":
    "Identify target accounts, sustain outreach, and nurture with high-value content to turn qualified leads into durable customer assets.",
  "潜客识别": "Prospect Identification",
  "意向标签": "Intent Signals",
  "内容匹配": "Content Matching",
  "私域承接": "Owned-Channel Handoff",
  "私域精细运营": "Lifecycle Nurture",
  "根据客户阶段、价值和行为信号组织差异化内容与互动，持续建立认知、关系与信任。":
    "Use lifecycle stage, value, and behavioral signals to orchestrate relevant content and interactions that build awareness, relationships, and trust.",
  "动态分层": "Dynamic Segmentation",
  "客户旅程": "Customer Journey",
  "关系培育": "Relationship Nurture",
  "成交路径": "Conversion Path",
  "销售与管理提效": "Sales & Management Productivity",
  "让客户跟进、任务进度和风险信号可见，把优秀经验沉淀为可复制的话术、知识与 SOP。":
    "Make follow-ups, task progress, and risk signals visible while turning proven practices into reusable messaging, knowledge, and SOPs.",
  "客户资产": "Customer Assets",
  "过程可视": "Pipeline Visibility",
  "风险预警": "Risk Alerts",
  "经验复制": "Playbook Reuse",
  "智能运营与协同": "Intelligent Operations",
  "AI 负责发现、触达、跟进、记录与分析，人负责规则、例外判断和关键业务决策。":
    "AI handles discovery, outreach, follow-up, documentation, and analysis; people own policy, exceptions, and consequential decisions.",
  "策略编排": "Strategy Orchestration",
  "智能执行": "Intelligent Execution",
  "数据回流": "Feedback Data",
  "持续优化": "Continuous Optimization",

  "太擎": "Taiqing",
  "企业级智能体开发平台": "Enterprise AI Agent Development and Orchestration Platform",
  "连接主流大模型、企业知识与业务工具，支持智能体开发、运行和复杂任务编排，为解决方案提供可执行的智能能力。":
    "Connect leading models with enterprise knowledge and business tools to develop, run, and orchestrate AI agents for complex work.",
  "模型接入": "Model Integration",
  "工具与流程编排": "Tools & Workflow Orchestration",
  "旷湖": "Kuanghu",
  "大数据开发平台": "Enterprise Data Engineering Platform",
  "完成多源数据连接、治理、开发和服务化，为企业 AI 提供可信、可复用、可持续更新的数据与业务上下文。":
    "Connect, govern, transform, and serve multi-source data as trusted, reusable, continuously updated context for enterprise AI.",
  "数据开发": "Data Engineering",

  "现场诊断": "Field Discovery",
  "与业务负责人和一线团队共同找到真正的问题与机会":
    "Work with business owners and frontline teams to identify the real problem and opportunity",
  "系统盘点": "Systems Assessment",
  "梳理数据、知识、流程、工具和组织边界":
    "Map data, knowledge, workflows, tools, and organizational boundaries",
  "方案共创": "Solution Co-Design",
  "定义目标指标、智能体角色与人机协作方式":
    "Define outcomes, agent roles, and the human-AI operating model",
  "原型验证": "Prototype Validation",
  "用真实数据和真实流程快速验证最小价值闭环":
    "Validate the smallest viable value loop with real data and workflows",
  "生产上线": "Production Launch",
  "完成系统接入、权限控制、培训与组织启用":
    "Complete integration, access controls, training, and organizational rollout",
  "运营迭代": "Operational Improvement",
  "围绕结果复盘，让策略、流程和智能能力持续进化":
    "Review outcomes and continuously improve strategy, workflows, and AI performance",
  "业务诊断与目标指标": "Business Diagnosis & Outcome Metrics",
  "数据与系统接入蓝图": "Data & Systems Integration Blueprint",
  "智能体与工作流": "AI Agents & Workflows",
  "业务 SOP 与运营策略": "Business SOPs & Operating Strategy",
  "验证报告与迭代计划": "Validation Report & Improvement Roadmap",

  "域擎 UKing": "UKing",
  "域擎 UKing 首页": "UKing home",
  "主导航": "Primary navigation",
  "平台": "Platform",
  "解决方案": "Solutions",
  "技术底座": "Technology",
  "FDE 交付": "FDE Delivery",
  "预约业务诊断": "Book a Business Diagnostic",
  "打开导航菜单": "Open navigation menu",
  "移动端主导航": "Mobile navigation",
  "让 AI 进入现场": "Put AI to Work",
  "解决真实问题": "Where Business Happens",
  "域擎是面向企业的 AI 解决方案平台。我们融合太擎的企业级智能体能力与旷湖的数据工程能力， 由 FDE 团队深入业务一线，把复杂问题转化为可上线、可度量、可持续迭代的业务系统。":
    "UKing combines Taiqing’s enterprise agent capabilities with Kuanghu’s data engineering foundation. Our forward-deployed engineering teams work alongside clients to turn complex operational challenges into production-ready, measurable systems that improve over time.",
  "了解域擎平台": "Explore the UKing Platform",
  "查看解决方案": "View Solutions",
  "域擎解决方案特点": "What defines a UKing solution",
  "FDE 深入现场": "Forward-deployed teams",
  "智能体 × 数据双底座": "Agents × data foundations",
  "从验证到持续运营": "From validation to ongoing operation",
  "域擎企业 AI 解决方案平台示意": "UKing enterprise AI solutions platform",
  "从业务问题到持续运行": "From Business Problem to Continuous Operation",
  "FDE、数据、智能体与业务流程在同一个价值闭环中协作":
    "FDE, data, agents, and workflows operate in one measurable value loop",
  "FIELD ENGINEERING / 域擎": "FIELD ENGINEERING / UKING",
  "DATA × AGENT / 旷湖 × 太擎": "DATA × AGENT / KUANGHU × TAIQING",
  "企业 AI 解决方案平台": "Enterprise AI Solutions Platform",
  "域擎 UKing · 企业 AI 解决方案平台": "UKing · Enterprise AI Solutions Platform",

  "域擎平台架构": "UKing platform architecture",
  "企业业务现场": "Frontline Business Operations",
  "真实问题、流程、人员与结果指标": "Real problems, workflows, people, and outcomes",
  "FDE 驱动的解决方案工程与持续运营":
    "FDE-led solution engineering and continuous operation",
  "太擎 × 旷湖": "Taiqing × Kuanghu",
  "企业级智能体与数据工程双底座":
    "Enterprise AI agents and data engineering foundations",
  "不是交付一个 AI 功能，": "Not Another Isolated AI Feature.",
  "而是建立一套解决问题的机制": "A Repeatable Way to Solve Business Problems.",
  "企业不缺孤立的 AI 工具，缺的是让模型与数据、知识、流程、人员和目标真正协同的方法。 域擎把双技术底座、行业 Know-how 与现场交付组织成一个完整平台。":
    "Enterprises do not need more disconnected AI tools. They need a way to align models, data, knowledge, workflows, people, and outcomes. UKing brings two technology foundations, domain expertise, and forward-deployed delivery into one platform.",
  "从企业正在发生的业务开始": "Start Where the Business Is Already Operating",
  "销售增长": "Sales Growth",
  "知识协作": "Knowledge Collaboration",
  "运营提效": "Operational Efficiency",
  "经营决策": "Business Decisions",
  "产业协同": "Industry Collaboration",
  "现场解决方案团队": "Forward-Deployed Solution Team",
  "与业务负责人、一线人员和技术团队并肩工作，把模糊需求变成可验证、可上线的业务系统。":
    "Work alongside business owners, frontline teams, and technology leaders to turn ambiguous needs into validated, production-ready systems.",
  "共同定义": "Define Together",
  "快速构建": "Build Quickly",
  "持续运营": "Operate Continuously",
  "连接企业已有系统与资产": "Connect Existing Enterprise Systems and Assets",
  "数据仓库": "Data Warehouse",
  "知识文档": "Knowledge Assets",
  "业务工具": "Business Tools",
  "渠道与终端": "Channels & Endpoints",

  "从滴灌营销开始，": "Start with Drip Marketing.",
  "进入更多关键业务场景": "Expand into Every Critical Business Function.",
  "域擎不是单一产品。我们从真实问题出发，按场景组合数据、知识、智能体、工作流与运营机制， 逐步形成可复用的企业解决方案体系。":
    "UKing is not a single product. We start with a real business problem, then combine data, knowledge, AI agents, workflows, and operating mechanisms into reusable enterprise solutions.",
  "每个方向都从现场诊断开始，具体能力与范围按企业目标、数据条件和组织流程共同定义。":
    "Every engagement begins with field discovery. Scope and capabilities are defined around the client’s goals, data readiness, and operating model.",

  "不做大水漫灌，": "Nurture Every Opportunity—",
  "持续培育每一个机会": "Continuously and Intelligently.",
  "滴灌营销是域擎面向企业销售与营销打造的标杆解决方案，但不是域擎的全部。 它把获客、培育、转化、复购、管理和数据反馈连成持续运行的客户经营系统。":
    "UKing Drip Marketing is our flagship sales and marketing solution—not the limit of the UKing platform. It connects acquisition, nurture, conversion, retention, management, and feedback in a continuously running revenue system.",
  "预约滴灌营销演示": "Book a Drip Marketing Demo",
  "在正确的时间，把正确的内容送给正确的客户":
    "Deliver the Right Content to the Right Customer at the Right Time",
  "客户信号进入系统后，AI 持续完成识别、分层、内容匹配、任务建议与结果回收； 人负责规则、例外判断和关键沟通，形成不会因一次活动结束而中断的增长能力。":
    "As customer signals enter the system, AI continuously identifies, segments, matches content, recommends actions, and captures results. People retain control of rules, exceptions, and pivotal conversations.",
  "动态客户分层与机会识别": "Dynamic segmentation and opportunity identification",
  "个性化内容生成与节奏编排": "Personalized content and cadence orchestration",
  "AI 跟进建议与销售任务协同": "AI follow-up guidance and sales task coordination",
  "全链路反馈回收与效果归因": "End-to-end feedback capture and attribution",
  "滴灌营销系统流程界面示意": "UKing Drip Marketing workflow",
  "滴灌营销控制台": "Drip Marketing Console",
  "策略运行中": "Strategy Active",
  "人群分层": "Audience Segments",
  "内容策略": "Content Strategy",
  "智能任务": "Intelligent Tasks",
  "高价值客户持续培育": "Continuous Nurture for High-Value Accounts",
  "本周期": "Current Cycle",
  "结合客户最新行为，生成下一轮培育策略与销售任务":
    "Generate the next nurture strategy and sales tasks from the customer’s latest behavior",

  "域擎负责解决问题，": "UKing Owns the Business Outcome.",
  "太擎与旷湖提供可靠底座": "Taiqing and Kuanghu Power the Foundation.",
  "域擎不是简单的技术转售或产品集合。太擎负责智能体开发与执行，旷湖负责数据工程与服务， 域擎则把两者转化为面向具体业务结果的解决方案。":
    "UKing is more than technology resale or a product bundle. Taiqing powers agent development and execution, Kuanghu provides data engineering and services, and UKing turns both into solutions built around concrete business outcomes.",

  "把 AI 送进现场，": "From Discovery to Production—",
  "直到业务真正运行": "and Beyond.",
  "FDE（Forward Deployed Engineer）不是远程交付一个标准答案。 域擎 FDE 与企业团队并肩工作，从发现问题、构建方案到生产上线和持续运营，对业务结果负责。":
    "Forward-Deployed Engineering is not a remote handoff of a standard answer. UKing teams work alongside clients from discovery and solution design through production launch and continuous operation—accountable to business outcomes.",
  "先让业务系统有效，再让 AI 放大效率。":
    "Make the operating system effective first—then let AI multiply its impact.",
  "域擎 FDE 现场交付路径": "UKing forward-deployed delivery path",
  "每次交付，都沉淀为企业可以继续使用的能力":
    "Every engagement leaves the enterprise with capabilities it can continue to operate",

  "域擎能力沉淀闭环": "UKing capability compounding loop",
  "现场问题": "Field Problem",
  "来自真实岗位、流程和经营目标": "Grounded in real roles, workflows, and business outcomes",
  "可运行方案": "Operating Solution",
  "数据、智能体与人机协作共同上线":
    "Data, AI agents, and human collaboration go live together",
  "结果回流": "Outcome Feedback",
  "以真实执行数据复盘和验证": "Review and validate with real operating data",
  "平台沉淀": "Platform Assets",
  "形成可复用的场景与能力资产": "Turn each engagement into reusable solution capabilities",

  "不从“想用 AI”开始，": "Do Not Start with “We Want AI.”",
  "从一个值得解决的问题开始": "Start with a Business Problem Worth Solving.",
  "告诉我们业务目标、现场约束与当前系统，一起定义第一条可验证的价值路径。":
    "Tell us your business objective, operating constraints, and current systems. Together, we will define the first measurable path to value.",
  "拨打域擎咨询电话 17001171717": "Call UKing at +86 170 0117 1717",
  "电话咨询 · 170 0117 1717": "Call · +86 170 0117 1717",
  "企业微信咨询": "Contact Us on WeCom",
  "企业微信联系顾问": "Contact a UKing consultant on WeCom",
  "域擎企业微信联系二维码": "UKing WeCom contact QR code",
  "添加企业顾问": "Add a UKing Consultant",
  "扫描二维码，沟通业务目标与当前问题。手机端可打开原图后长按识别。":
    "Scan the QR code to discuss your goals and current challenges. On mobile, open the full image and press to recognize it.",
  "打开二维码原图": "Open Full-Size QR Code",
  "打开企业微信联系二维码": "Open WeCom contact QR code",
  "企微": "WeCom",
  "联系顾问": "Contact",
  "联系域擎顾问": "Contact a UKing Consultant",
  "可直接拨打咨询电话，或微信扫码添加企业顾问；手机端可打开原图后长按识别。":
    "Call us directly or scan with WeCom to add a consultant. On mobile, open the full image and press to recognize it.",
  "邮件联系": "Email Us",
  "返回域擎 UKing 首页": "Return to UKing home",
  "FDE 驱动的企业 AI 解决方案平台":
    "An FDE-led enterprise AI solutions platform",
  "网站导航": "Navigation",
  "域擎平台": "UKing Platform",
  "FDE 现场交付": "Forward-Deployed Engineering",
  "关联技术平台": "Technology Platforms",
  "太擎 · 智能体开发平台": "Taiqing · Enterprise Agent Platform",
  "旷湖 · 大数据开发平台": "Kuanghu · Data Engineering Platform",
  "联系域擎": "Contact UKing",
  "电话 · 170 0117 1717": "Phone · +86 170 0117 1717",
  "企业微信 · 扫码联系": "WeCom · Scan to Connect",
  "预约企业 AI 业务诊断": "Book an Enterprise AI Business Diagnostic",

  "域擎 UKing 是企业 AI 解决方案平台，融合太擎企业级智能体能力与旷湖数据工程能力，由 FDE 深入业务现场完成诊断、构建、上线与持续运营。":
    "UKing is an enterprise AI solutions platform combining Taiqing’s agent capabilities, Kuanghu’s data engineering foundation, and forward-deployed teams that take solutions from discovery to continuous operation.",
};

export function translate(locale: SiteLocale, text: string): string {
  if (locale === "zh") {
    return text;
  }

  return englishTranslations[text] ?? text;
}
