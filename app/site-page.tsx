import { translate, type SiteLocale } from "./site-translations";

const heroPath = [
  { index: "01", title: "进入现场", en: "DISCOVER" },
  { index: "02", title: "定义目标", en: "DEFINE" },
  { index: "03", title: "连接数据", en: "CONNECT" },
  { index: "04", title: "构建方案", en: "BUILD" },
  { index: "05", title: "上线进化", en: "EVOLVE" },
];

const dripFlow = [
  { index: "01", title: "洞察", detail: "识别客户意图与业务信号" },
  { index: "02", title: "分层", detail: "建立动态客户画像与优先级" },
  { index: "03", title: "培育", detail: "由 AI 持续组织精准内容与触达" },
  { index: "04", title: "转化", detail: "驱动销售动作并协同关键任务" },
  { index: "05", title: "归因", detail: "回收结果，持续优化增长策略" },
];

const platformLayers = [
  {
    code: "SOLUTION ENGINEERING",
    title: "解决方案工程",
    description: "把业务目标拆解为角色、流程、数据、智能体与衡量指标。",
    items: ["场景诊断", "方案编排", "系统集成", "运营度量"],
    tone: "solution",
  },
  {
    code: "AGENT PLATFORM · 太擎",
    title: "企业级智能体能力",
    description: "让模型连接企业知识、工具和流程，形成能够执行任务的智能体。",
    items: ["智能体开发", "知识与记忆", "工具调用", "工作流编排"],
    tone: "agent",
  },
  {
    code: "DATA PLATFORM · 旷湖",
    title: "企业数据工程能力",
    description: "让多源数据经过连接、治理、开发与服务化，成为可信业务上下文。",
    items: ["数据连接", "数据治理", "指标标签", "数据服务"],
    tone: "data",
  },
];

const platformPrinciples = [
  {
    index: "01",
    title: "从结果定义场景",
    description: "先明确业务问题、关键角色与衡量指标，再决定 AI 应该做什么。",
  },
  {
    index: "02",
    title: "用双底座构建方案",
    description: "旷湖让数据可用，太擎让智能体可执行，域擎把两者组织成业务系统。",
  },
  {
    index: "03",
    title: "在运行中持续进化",
    description: "执行结果持续回流，推动知识、流程、策略和智能体能力一起迭代。",
  },
];

const solutionScenes = [
  {
    index: "01",
    eyebrow: "FLAGSHIP SOLUTION",
    title: "滴灌营销",
    subtitle: "销售与营销增长",
    description:
      "连接公域获客、私域培育、销售转化、复购与经营管理，把一次营销活动变成持续运行的客户经营系统。",
    tags: ["精准获客", "客户分层", "持续培育", "销售协同", "效果归因"],
    className: "scene-growth",
  },
  {
    index: "02",
    eyebrow: "B2B GROWTH",
    title: "B2B 销售智能",
    subtitle: "从商机发现到成交推进",
    description:
      "围绕目标客户识别、内容组织、个性化触达、商机研判与销售跟进，组合面向复杂销售链路的智能体。",
    tags: ["商机洞察", "内容 Agent", "触达 Agent", "销售助手"],
    className: "scene-knowledge",
  },
  {
    index: "03",
    eyebrow: "SERVICE & KNOWLEDGE",
    title: "知识与服务智能",
    subtitle: "让企业经验进入每次响应",
    description:
      "把制度、产品资料、服务经验和专家知识转化为可追溯、可维护、能参与任务执行的知识能力。",
    tags: ["企业知识库", "员工助手", "客户服务", "辅助决策"],
    className: "scene-operation",
  },
  {
    index: "04",
    eyebrow: "BUSINESS AUTOMATION",
    title: "运营与流程协同",
    subtitle: "让智能体真正参与工作",
    description:
      "连接人、系统和数据，自动完成标准化任务与跨工具协作，让人聚焦规则、例外处理和关键决策。",
    tags: ["流程编排", "任务执行", "系统协同", "人机共治"],
    className: "scene-data",
  },
  {
    index: "05",
    eyebrow: "RETAIL & COMMERCE",
    title: "零售与客户运营",
    subtitle: "连接营销、客服、运营与私域",
    description:
      "围绕消费者旅程组合内容、客服、运营与复购智能能力，形成适应具体渠道和组织的客户运营方案。",
    tags: ["智能客服", "内容运营", "私域经营", "复购策略"],
    className: "scene-retail",
  },
  {
    index: "06",
    eyebrow: "DATA & INDUSTRY",
    title: "数据洞察与产业协同",
    subtitle: "把分散数据变成业务行动",
    description:
      "围绕经营分析、供需关系、产业链研究与全球业务协作连接数据和流程，按企业现场组合可落地的方案。",
    tags: ["经营分析", "供需洞察", "产业链研究", "全球业务协同"],
    className: "scene-industry",
  },
];

const dripModules = [
  {
    index: "01",
    title: "公域精准获客",
    description: "从目标客户识别、持续触达到高价值内容培育，把有效线索沉淀为可运营的客户资产。",
    items: ["潜客识别", "意向标签", "内容匹配", "私域承接"],
  },
  {
    index: "02",
    title: "私域精细运营",
    description: "根据客户阶段、价值和行为信号组织差异化内容与互动，持续建立认知、关系与信任。",
    items: ["动态分层", "客户旅程", "关系培育", "成交路径"],
  },
  {
    index: "03",
    title: "销售与管理提效",
    description: "让客户跟进、任务进度和风险信号可见，把优秀经验沉淀为可复制的话术、知识与 SOP。",
    items: ["客户资产", "过程可视", "风险预警", "经验复制"],
  },
  {
    index: "04",
    title: "智能运营与协同",
    description: "AI 负责发现、触达、跟进、记录与分析，人负责规则、例外判断和关键业务决策。",
    items: ["策略编排", "智能执行", "数据回流", "持续优化"],
  },
];

const foundations = [
  {
    code: "AGENT FOUNDATION",
    title: "太擎",
    label: "企业级智能体开发平台",
    description:
      "连接主流大模型、企业知识与业务工具，支持智能体开发、运行和复杂任务编排，为解决方案提供可执行的智能能力。",
    capabilities: ["模型接入", "智能体开发", "知识与记忆", "工具与流程编排"],
    href: "https://hanpaas.com/",
    className: "foundation-agent",
  },
  {
    code: "DATA FOUNDATION",
    title: "旷湖",
    label: "大数据开发平台",
    description:
      "完成多源数据连接、治理、开发和服务化，为企业 AI 提供可信、可复用、可持续更新的数据与业务上下文。",
    capabilities: ["数据连接", "数据开发", "数据治理", "数据服务"],
    href: "https://www.handaas.com/",
    className: "foundation-data",
  },
];

const deliverySteps = [
  ["01", "现场诊断", "与业务负责人和一线团队共同找到真正的问题与机会"],
  ["02", "系统盘点", "梳理数据、知识、流程、工具和组织边界"],
  ["03", "方案共创", "定义目标指标、智能体角色与人机协作方式"],
  ["04", "原型验证", "用真实数据和真实流程快速验证最小价值闭环"],
  ["05", "生产上线", "完成系统接入、权限控制、培训与组织启用"],
  ["06", "运营迭代", "围绕结果复盘，让策略、流程和智能能力持续进化"],
];

const deliveryAssets = [
  "业务诊断与目标指标",
  "数据与系统接入蓝图",
  "企业知识库",
  "智能体与工作流",
  "业务 SOP 与运营策略",
  "验证报告与迭代计划",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "域擎 UKing",
  url: "https://www.uking.uk",
  email: "contact@uking.uk",
  telephone: "+8617001171717",
  description:
    "域擎 UKing 是企业 AI 解决方案平台，融合太擎企业级智能体能力与旷湖数据工程能力，由 FDE 深入业务现场完成诊断、构建、上线与持续运营。",
};

export function UKingPage({ locale }: { locale: SiteLocale }) {
  const t = (text: string) => translate(locale, text);
  const english = locale === "en";
  const localizedOrganizationSchema = {
    ...organizationSchema,
    name: t(organizationSchema.name),
    url: english ? "https://www.uking.uk/en" : organizationSchema.url,
    description: t(organizationSchema.description),
    inLanguage: english ? "en" : "zh-CN",
  };

  return (
    <main lang={english ? "en" : "zh-CN"} className={english ? "locale-en" : "locale-zh"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localizedOrganizationSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label={t("域擎 UKing 首页")}>
          <img
            className="brand-logo"
            src="/logo-uking-header-v3.png"
            alt=""
            width="1400"
            height="461"
          />
        </a>

        <nav className="desktop-nav" aria-label={t("主导航")}>
          <a href="#platform">{t("平台")}</a>
          <a href="#solutions">{t("解决方案")}</a>
          <a href="#drip">{t("滴灌营销")}</a>
          <a href="#foundations">{t("技术底座")}</a>
          <a href="#delivery">{t("FDE 交付")}</a>
        </nav>

        <div className="header-actions">
          <a
            className="language-switch"
            href={english ? "/" : "/en"}
            lang={english ? "zh-CN" : "en"}
            hrefLang={english ? "zh-CN" : "en"}
            aria-label={english ? "Switch to Chinese" : "Switch to English"}
          >
            {english ? "中文" : "EN"}
          </a>

          <a className="header-cta" href="#contact">
            {t("预约业务诊断")}
            <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label={t("打开导航菜单")}>
              <i />
              <i />
            </summary>
            <nav aria-label={t("移动端主导航")}>
              <a href="#platform">{t("平台")}</a>
              <a href="#solutions">{t("解决方案")}</a>
              <a href="#drip">{t("滴灌营销")}</a>
              <a href="#foundations">{t("技术底座")}</a>
              <a href="#delivery">{t("FDE 交付")}</a>
              <a href="#contact">{t("预约业务诊断")}</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-aura aura-one" aria-hidden="true" />
        <div className="hero-aura aura-two" aria-hidden="true" />
        <div className="stream stream-one" aria-hidden="true" />
        <div className="stream stream-two" aria-hidden="true" />
        <div className="stream stream-three" aria-hidden="true" />

        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            UKING · ENTERPRISE AI SOLUTION PLATFORM
          </div>
          <h1>
            <span>{t("让 AI 进入现场")}</span>
            <em>{t("解决真实问题")}</em>
          </h1>
          <p>
            {t(
              "域擎是面向企业的 AI 解决方案平台。我们融合太擎的企业级智能体能力与旷湖的数据工程能力， 由 FDE 团队深入业务一线，把复杂问题转化为可上线、可度量、可持续迭代的业务系统。",
            )}
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#platform">
              {t("了解域擎平台")} <span>→</span>
            </a>
            <a className="ghost-button" href="#solutions">
              {t("查看解决方案")} <span>↘</span>
            </a>
          </div>
          <div className="hero-principles" aria-label={t("域擎解决方案特点")}>
            <span>{t("FDE 深入现场")}</span>
            <span>{t("智能体 × 数据双底座")}</span>
            <span>{t("从验证到持续运营")}</span>
          </div>
        </div>

        <div className="hero-product" aria-label={t("域擎企业 AI 解决方案平台示意")}>
          <div className="product-window">
            <div className="window-bar">
              <div>
                <i />
                <i />
                <i />
              </div>
              <span>UKING / SOLUTION ENGINE</span>
              <b>IN THE FIELD</b>
            </div>
            <div className="product-status">
              <span>ENTERPRISE AI SOLUTION PLATFORM</span>
              <strong>{t("从业务问题到持续运行")}</strong>
              <small>{t("FDE、数据、智能体与业务流程在同一个价值闭环中协作")}</small>
            </div>
            <div className="flow-track">
              {heroPath.map((step) => (
                <div className="flow-node" key={step.index}>
                  <span>{step.index}</span>
                  <i />
                  <strong>{t(step.title)}</strong>
                  <small>{step.en}</small>
                </div>
              ))}
            </div>
            <div className="window-footer">
              <span>{t("FIELD ENGINEERING / 域擎")}</span>
              <span>{t("DATA × AGENT / 旷湖 × 太擎")}</span>
            </div>
          </div>
          <div className="platform-chip chip-agent">
            <span>AGENT</span>
            <strong>{t("太擎")}</strong>
          </div>
          <div className="platform-chip chip-data">
            <span>DATA</span>
            <strong>{t("旷湖")}</strong>
          </div>
        </div>

        <div className="hero-foot">
          <span>SCROLL TO DISCOVER</span>
          <i />
          <p>{t("域擎 UKing · 企业 AI 解决方案平台")}</p>
        </div>
      </section>

      <section className="brand-architecture" aria-label={t("域擎平台架构")}>
        <div>
          <span>BUSINESS FIELD</span>
          <strong>{t("企业业务现场")}</strong>
          <small>{t("真实问题、流程、人员与结果指标")}</small>
        </div>
        <i aria-hidden="true">→</i>
        <div>
          <span>SOLUTION PLATFORM</span>
          <strong>{t("域擎 UKing")}</strong>
          <small>{t("FDE 驱动的解决方案工程与持续运营")}</small>
        </div>
        <i aria-hidden="true">←</i>
        <div>
          <span>TECH FOUNDATIONS</span>
          <strong>{t("太擎 × 旷湖")}</strong>
          <small>{t("企业级智能体与数据工程双底座")}</small>
        </div>
      </section>

      <section className="section platform-section" id="platform">
        <div className="section-heading light-heading">
          <div>
            <span className="section-kicker">01 / UKING PLATFORM</span>
            <h2>
              {t("不是交付一个 AI 功能，")}
              <br />
              {t("而是建立一套解决问题的机制")}
            </h2>
          </div>
          <p>
            {t(
              "企业不缺孤立的 AI 工具，缺的是让模型与数据、知识、流程、人员和目标真正协同的方法。 域擎把双技术底座、行业 Know-how 与现场交付组织成一个完整平台。",
            )}
          </p>
        </div>

        <div className="platform-blueprint">
          <div className="blueprint-head">
            <div>
              <span>BUSINESS SCENES</span>
              <strong>{t("从企业正在发生的业务开始")}</strong>
            </div>
            <ul>
              <li>{t("销售增长")}</li>
              <li>{t("客户服务")}</li>
              <li>{t("知识协作")}</li>
              <li>{t("运营提效")}</li>
              <li>{t("经营决策")}</li>
              <li>{t("产业协同")}</li>
            </ul>
          </div>

          <div className="blueprint-body">
            <aside className="fde-core">
              <span>UKING FDE</span>
              <div className="fde-symbol" aria-hidden="true">
                <i />
                <b>FDE</b>
              </div>
              <h3>{t("现场解决方案团队")}</h3>
              <p>
                {t(
                  "与业务负责人、一线人员和技术团队并肩工作，把模糊需求变成可验证、可上线的业务系统。",
                )}
              </p>
              <ul>
                <li>{t("进入现场")}</li>
                <li>{t("共同定义")}</li>
                <li>{t("快速构建")}</li>
                <li>{t("持续运营")}</li>
              </ul>
            </aside>

            <div className="platform-layers">
              {platformLayers.map((layer, layerIndex) => (
                <article className={`platform-layer layer-${layer.tone}`} key={layer.code}>
                  <div className="layer-index">0{layerIndex + 1}</div>
                  <div className="layer-copy">
                    <span>{t(layer.code)}</span>
                    <h3>{t(layer.title)}</h3>
                    <p>{t(layer.description)}</p>
                  </div>
                  <ul>
                    {layer.items.map((item) => (
                      <li key={item}>{t(item)}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="blueprint-foot">
            <span>ENTERPRISE CONTEXT</span>
            <strong>{t("连接企业已有系统与资产")}</strong>
            <ul>
              <li>CRM / SCRM</li>
              <li>ERP / OA</li>
              <li>{t("数据仓库")}</li>
              <li>{t("知识文档")}</li>
              <li>{t("业务工具")}</li>
              <li>{t("渠道与终端")}</li>
            </ul>
          </div>
        </div>

        <div className="platform-principles">
          {platformPrinciples.map((principle) => (
            <article key={principle.index}>
              <span>{principle.index}</span>
              <h3>{t(principle.title)}</h3>
              <p>{t(principle.description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section solutions-section" id="solutions">
        <div className="section-heading compact">
          <div>
            <span className="section-kicker">02 / SOLUTION PORTFOLIO</span>
            <h2>
              {t("从滴灌营销开始，")}
              <br />
              {t("进入更多关键业务场景")}
            </h2>
          </div>
          <p>
            {t(
              "域擎不是单一产品。我们从真实问题出发，按场景组合数据、知识、智能体、工作流与运营机制， 逐步形成可复用的企业解决方案体系。",
            )}
          </p>
        </div>

        <div className="scene-grid">
          {solutionScenes.map((scene) => (
            <article className={`scene-card ${scene.className}`} key={scene.index}>
              <div className="scene-top">
                <span>{scene.eyebrow} / {scene.index}</span>
                <i aria-hidden="true">↗</i>
              </div>
              <div className="scene-visual" aria-hidden="true">
                <span />
                <span />
                <span />
                <i />
              </div>
              <div className="scene-copy">
                <small>{t(scene.subtitle)}</small>
                <h3>{t(scene.title)}</h3>
                <p>{t(scene.description)}</p>
                <ul>
                  {scene.tags.map((tag) => (
                    <li key={tag}>{t(tag)}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="solution-note">
          {t("每个方向都从现场诊断开始，具体能力与范围按企业目标、数据条件和组织流程共同定义。")}
        </p>
      </section>

      <section className="section drip-section" id="drip">
        <div className="section-heading dark-heading">
          <div>
            <span className="section-kicker">03 / FLAGSHIP · DRIP MARKETING</span>
            <h2>
              {t("不做大水漫灌，")}
              <br />
              {t("持续培育每一个机会")}
            </h2>
          </div>
          <div className="heading-side">
            <p>
              {t(
                "滴灌营销是域擎面向企业销售与营销打造的标杆解决方案，但不是域擎的全部。 它把获客、培育、转化、复购、管理和数据反馈连成持续运行的客户经营系统。",
              )}
            </p>
            <a href="#contact">{t("预约滴灌营销演示")} ↗</a>
          </div>
        </div>

        <div className="drip-showcase">
          <div className="drip-copy">
            <span className="live-label">
              <i /> INTELLIGENT GROWTH LOOP
            </span>
            <h3>{t("在正确的时间，把正确的内容送给正确的客户")}</h3>
            <p>
              {t(
                "客户信号进入系统后，AI 持续完成识别、分层、内容匹配、任务建议与结果回收； 人负责规则、例外判断和关键沟通，形成不会因一次活动结束而中断的增长能力。",
              )}
            </p>
            <ul>
              <li>
                <span>01</span>
                {t("动态客户分层与机会识别")}
              </li>
              <li>
                <span>02</span>
                {t("个性化内容生成与节奏编排")}
              </li>
              <li>
                <span>03</span>
                {t("AI 跟进建议与销售任务协同")}
              </li>
              <li>
                <span>04</span>
                {t("全链路反馈回收与效果归因")}
              </li>
            </ul>
          </div>

          <div className="growth-console" aria-label={t("滴灌营销系统流程界面示意")}>
            <div className="console-head">
              <div>
                <span>UKing</span>
                <strong>{t("滴灌营销控制台")}</strong>
              </div>
              <b>{t("策略运行中")}</b>
            </div>
            <div className="console-body">
              <aside>
                <span className="active">{t("客户旅程")}</span>
                <span>{t("人群分层")}</span>
                <span>{t("内容策略")}</span>
                <span>{t("智能任务")}</span>
                <span>{t("效果归因")}</span>
              </aside>
              <div className="journey">
                <div className="journey-top">
                  <div>
                    <small>CUSTOMER JOURNEY</small>
                    <strong>{t("高价值客户持续培育")}</strong>
                  </div>
                  <span>{t("本周期")}</span>
                </div>
                <div className="journey-line" aria-hidden="true">
                  {dripFlow.map((step) => (
                    <div key={step.index}>
                      <span>{step.index}</span>
                      <i />
                      <strong>{t(step.title)}</strong>
                      <small>{t(step.detail)}</small>
                    </div>
                  ))}
                </div>
                <div className="journey-insight">
                  <span>AI NEXT ACTION</span>
                  <strong>{t("结合客户最新行为，生成下一轮培育策略与销售任务")}</strong>
                  <i aria-hidden="true">→</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="drip-modules">
          {dripModules.map((module) => (
            <article key={module.index}>
              <span>{module.index}</span>
              <h3>{t(module.title)}</h3>
              <p>{t(module.description)}</p>
              <ul>
                {module.items.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section foundations-section" id="foundations">
        <div className="section-heading light-heading">
          <div>
            <span className="section-kicker">04 / TECHNOLOGY FOUNDATIONS</span>
            <h2>
              {t("域擎负责解决问题，")}
              <br />
              {t("太擎与旷湖提供可靠底座")}
            </h2>
          </div>
          <p>
            {t(
              "域擎不是简单的技术转售或产品集合。太擎负责智能体开发与执行，旷湖负责数据工程与服务， 域擎则把两者转化为面向具体业务结果的解决方案。",
            )}
          </p>
        </div>

        <div className="foundation-grid">
          {foundations.map((foundation) => (
            <a
              className={`foundation-card ${foundation.className}`}
              href={foundation.href}
              target="_blank"
              rel="noreferrer"
              key={foundation.title}
            >
              <div className="foundation-meta">
                <span>{t(foundation.code)}</span>
                <i aria-hidden="true">↗</i>
              </div>
              <div className="foundation-visual" aria-hidden="true">
                <div className="foundation-orbit orbit-outer" />
                <div className="foundation-orbit orbit-inner" />
                <div className="foundation-core">
                  <small>{foundation.code.split(" ")[0]}</small>
                  <strong>{t(foundation.title)}</strong>
                </div>
                <span className="foundation-node node-one" />
                <span className="foundation-node node-two" />
                <span className="foundation-node node-three" />
              </div>
              <div className="foundation-copy">
                <span>{t(foundation.label)}</span>
                <h3>{t(foundation.title)}</h3>
                <p>{t(foundation.description)}</p>
                <ul>
                  {foundation.capabilities.map((capability) => (
                    <li key={capability}>{t(capability)}</li>
                  ))}
                </ul>
              </div>
              <div className="foundation-link">
                {english
                  ? `Explore the ${t(foundation.title)} platform`
                  : `了解${foundation.title}平台能力`}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section delivery-section" id="delivery">
        <div className="delivery-intro">
          <span className="section-kicker">05 / FORWARD DEPLOYED ENGINEERING</span>
          <h2>
            {t("把 AI 送进现场，")}
            <br />
            {t("直到业务真正运行")}
          </h2>
          <p>
            {t(
              "FDE（Forward Deployed Engineer）不是远程交付一个标准答案。 域擎 FDE 与企业团队并肩工作，从发现问题、构建方案到生产上线和持续运营，对业务结果负责。",
            )}
          </p>
          <div className="delivery-manifesto">
            <span>OUR APPROACH</span>
            <strong>{t("先让业务系统有效，再让 AI 放大效率。")}</strong>
          </div>
        </div>

        <div className="delivery-work">
          <div className="delivery-path" aria-label={t("域擎 FDE 现场交付路径")}>
            {deliverySteps.map(([index, title, description]) => (
              <div key={index}>
                <span>{index}</span>
                <i />
                <strong>{t(title)}</strong>
                <p>{t(description)}</p>
              </div>
            ))}
          </div>
          <div className="delivery-output">
            <div>
              <span>REUSABLE ASSETS</span>
              <strong>{t("每次交付，都沉淀为企业可以继续使用的能力")}</strong>
            </div>
            <ul>
              {deliveryAssets.map((asset) => (
                <li key={asset}>{t(asset)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="capability-loop" aria-label={t("域擎能力沉淀闭环")}>
        <div>
          <span>01 / FIELD</span>
          <strong>{t("现场问题")}</strong>
          <p>{t("来自真实岗位、流程和经营目标")}</p>
        </div>
        <i aria-hidden="true">→</i>
        <div>
          <span>02 / SOLUTION</span>
          <strong>{t("可运行方案")}</strong>
          <p>{t("数据、智能体与人机协作共同上线")}</p>
        </div>
        <i aria-hidden="true">→</i>
        <div>
          <span>03 / FEEDBACK</span>
          <strong>{t("结果回流")}</strong>
          <p>{t("以真实执行数据复盘和验证")}</p>
        </div>
        <i aria-hidden="true">→</i>
        <div>
          <span>04 / PLATFORM</span>
          <strong>{t("平台沉淀")}</strong>
          <p>{t("形成可复用的场景与能力资产")}</p>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-grid" aria-hidden="true" />
        <div className="cta-orbit" aria-hidden="true" />
        <div className="cta-content">
          <div className="cta-copy">
            <span>START FROM A REAL BUSINESS PROBLEM</span>
            <h2>
              {t("不从“想用 AI”开始，")}
              <br />
              {t("从一个值得解决的问题开始")}
            </h2>
            <p>{t("告诉我们业务目标、现场约束与当前系统，一起定义第一条可验证的价值路径。")}</p>
            <div className="cta-actions">
              <a
                href="tel:+8617001171717"
                aria-label={t("拨打域擎咨询电话 17001171717")}
              >
                {t("电话咨询 · 170 0117 1717")}
              </a>
              <a href="/wecom-contact.jpg" target="_blank" rel="noreferrer">
                {t("企业微信咨询")} ↗
              </a>
            </div>
          </div>
          <aside className="cta-wecom-card" aria-label={t("企业微信联系顾问")}>
            <img
              src="/wecom-contact.jpg"
              alt={t("域擎企业微信联系二维码")}
              width="750"
              height="750"
            />
            <div className="wecom-card-copy">
              <span>WE COM · SOLUTION CONSULTANT</span>
              <strong>{t("添加企业顾问")}</strong>
              <p>{t("扫描二维码，沟通业务目标与当前问题。手机端可打开原图后长按识别。")}</p>
              <a href="/wecom-contact.jpg" target="_blank" rel="noreferrer">
                {t("打开二维码原图")} ↗
              </a>
            </div>
          </aside>
        </div>
      </section>

      <details className="contact-dock">
        <summary aria-label={t("打开企业微信联系二维码")}>
          <span aria-hidden="true">{t("企微")}</span>
          <b>{t("联系顾问")}</b>
        </summary>
        <div className="contact-popover">
          <div className="contact-popover-head">
            <span>CONTACT UKING</span>
            <strong>{t("联系域擎顾问")}</strong>
          </div>
          <img
            src="/wecom-contact.jpg"
            alt={t("域擎企业微信联系二维码")}
            width="750"
            height="750"
          />
          <p>{t("可直接拨打咨询电话，或微信扫码添加企业顾问；手机端可打开原图后长按识别。")}</p>
          <div className="contact-popover-actions">
            <a
              className="contact-phone"
              href="tel:+8617001171717"
              aria-label={t("拨打域擎咨询电话 17001171717")}
            >
              {t("电话咨询 · 170 0117 1717")}
            </a>
            <a href="/wecom-contact.jpg" target="_blank" rel="noreferrer">
              {t("打开二维码原图")}
            </a>
            <a href="mailto:contact@uking.uk">{t("邮件联系")}</a>
          </div>
        </div>
      </details>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top" aria-label={t("返回域擎 UKing 首页")}>
            <img
              className="brand-logo"
              src="/logo-uking-header-v3.png"
              alt=""
              width="1400"
              height="461"
            />
          </a>
          <p>
            {t("域擎 UKing")}
            <br />
            {t("FDE 驱动的企业 AI 解决方案平台")}
          </p>
        </div>
        <div className="footer-column">
          <strong>{t("网站导航")}</strong>
          <a href="#platform">{t("域擎平台")}</a>
          <a href="#solutions">{t("解决方案")}</a>
          <a href="#drip">{t("滴灌营销")}</a>
          <a href="#delivery">{t("FDE 现场交付")}</a>
        </div>
        <div className="footer-column">
          <strong>{t("关联技术平台")}</strong>
          <a href="https://hanpaas.com/" target="_blank" rel="noreferrer">
            {t("太擎 · 智能体开发平台")} ↗
          </a>
          <a href="https://www.handaas.com/" target="_blank" rel="noreferrer">
            {t("旷湖 · 大数据开发平台")} ↗
          </a>
        </div>
        <div className="footer-column">
          <strong>{t("联系域擎")}</strong>
          <a
            href="tel:+8617001171717"
            aria-label={t("拨打域擎咨询电话 17001171717")}
          >
            {t("电话 · 170 0117 1717")}
          </a>
          <a href="/wecom-contact.jpg" target="_blank" rel="noreferrer">
            {t("企业微信 · 扫码联系")} ↗
          </a>
          <a href="mailto:contact@uking.uk">contact@uking.uk</a>
          <span>{t("预约企业 AI 业务诊断")}</span>
        </div>
        <small>© 2026 UKing Intelligence. All rights reserved.</small>
      </footer>
    </main>
  );
}
