const platformLayers = [
  {
    index: "01",
    title: "旷湖大数据开发平台",
    description:
      "作为域擎解决方案的数据底座，打通企业内外部数据，完成采集、治理、开发与服务化，为 AI 提供可信的数据上下文。",
    tags: ["数据开发", "数据治理", "数据服务"],
  },
  {
    index: "02",
    title: "太擎企业级智能体开发平台",
    description:
      "作为域擎解决方案的技术底座，融合主流大模型、企业知识与业务工具，快速开发可执行、可运营的企业级智能体。",
    tags: ["Agent 开发", "企业知识库", "工具编排"],
  },
  {
    index: "03",
    title: "域擎企业 AI 解决方案",
    description:
      "面向真实业务目标组合数据、智能体与行业方法论，让 AI 进入企业流程，并以域擎滴灌营销系统等产品交付业务结果。",
    tags: ["业务咨询", "场景落地", "持续运营"],
  },
];

const solutions = [
  {
    number: "01",
    title: "域擎滴灌营销系统",
    subtitle: "持续触达 · 精准培育 · 智能转化",
    description:
      "围绕客户全生命周期，以数据识别需求、以 AI 持续培育、以任务驱动跟进，让每一次触达像滴灌一样精准、连续且可衡量。",
    highlights: ["客户分层培育", "AI 持续跟进", "全链路效果归因"],
  },
  {
    number: "02",
    title: "企业智能体解决方案",
    subtitle: "基于太擎的智能体开发能力",
    description:
      "把企业知识、业务规则与系统工具封装为智能体，让 AI 能理解上下文、执行任务并持续协同，成为真正进入岗位的数字生产力。",
    highlights: ["专属 Agent", "知识与工具融合", "复杂流程编排"],
  },
  {
    number: "03",
    title: "数据智能解决方案",
    subtitle: "基于旷湖的大数据开发能力",
    description:
      "从数据接入、治理和开发到指标、标签与服务，帮助企业形成可复用的数据资产，为智能体和业务应用提供稳定底座。",
    highlights: ["多源数据融合", "指标标签体系", "数据资产服务化"],
  },
];

const capabilities = [
  ["连接", "统一接入多源业务系统与数据资产"],
  ["理解", "构建企业知识图谱与上下文记忆"],
  ["决策", "让模型基于规则、数据和目标完成推理"],
  ["执行", "调用业务工具，自动完成跨系统任务"],
];

const metrics = [
  ["UKing", "域擎 · 企业 AI 解决方案"],
  ["Agent OS", "太擎 · 企业级智能体开发平台"],
  ["Data OS", "旷湖 · 大数据开发平台"],
  ["Drip Growth", "滴灌营销 · 核心业务系统"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="域擎首页">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span>域擎</span>
          <small>UKING</small>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#platform">平台能力</a>
          <a href="#solutions">解决方案</a>
          <a href="#advantages">核心优势</a>
          <a href="#ecosystem">合作生态</a>
        </nav>
        <a className="header-cta" href="#contact">
          预约交流
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            UKING · 企业 AI 解决方案
          </div>
          <h1>
            让 AI 进入企业业务，
            <br />
            <em>重构数字生产力</em>
          </h1>
          <p>
            域擎以业务价值为起点，将旷湖的数据开发能力、太擎的企业级智能体开发能力与行业方法论融合，
            为企业提供真正可落地、可运营的 AI 解决方案。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#solutions">
              探索解决方案 <span>→</span>
            </a>
            <a className="text-button" href="#platform">
              了解平台架构 <span>↘</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="域擎企业 AI 解决方案架构图">
          <div className="core-glow" />
          <div className="core-ring ring-a" />
          <div className="core-ring ring-b" />
          <div className="core">
            <span>AI</span>
            <small>AGENT OS</small>
          </div>
          <div className="satellite sat-a">
            <span>01</span>
            旷湖
          </div>
          <div className="satellite sat-b">
            <span>02</span>
            太擎
          </div>
          <div className="satellite sat-c">
            <span>03</span>
            域擎
          </div>
          <div className="signal signal-a" />
          <div className="signal signal-b" />
          <div className="signal signal-c" />
        </div>

        <div className="hero-foot">
          <span>SCROLL TO EXPLORE</span>
          <i />
          <p>专注于让 AI 进入企业业务的解决方案公司</p>
        </div>
      </section>

      <section className="metrics-strip" aria-label="域擎品牌与技术架构">
        {metrics.map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section platform-section" id="platform">
        <div className="section-heading">
          <div>
            <span className="section-kicker">01 / PLATFORM</span>
            <h2>
              两大技术底座，
              <br />
              一套企业 AI 解决方案
            </h2>
          </div>
          <p>
            旷湖负责数据开发，太擎负责智能体开发，域擎面向企业业务完成咨询、产品与交付，三者各司其职又紧密协同。
          </p>
        </div>

        <div className="platform-stack">
          {platformLayers.map((layer) => (
            <article className="layer-card" key={layer.index}>
              <span className="layer-index">{layer.index}</span>
              <div className="layer-copy">
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
              </div>
              <div className="layer-tags">
                {layer.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <span className="layer-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section capability-section" id="advantages">
        <div className="capability-intro">
          <span className="section-kicker light">02 / AI AGENT</span>
          <h2>太擎，让智能体不止回答问题</h2>
          <p>
            作为域擎解决方案的企业级智能体开发平台，太擎让 AI 能够理解业务上下文、调用企业工具并持续执行任务。
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div className="capability-icon" aria-hidden="true">
                <i />
                <b />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section solutions-section" id="solutions">
        <div className="section-heading compact">
          <div>
            <span className="section-kicker">03 / SOLUTIONS</span>
            <h2>从企业业务出发，交付真实结果</h2>
          </div>
          <p>
            不是展示 AI，而是把 AI 嵌入关键路径，形成可衡量的增长、效率与组织能力。
          </p>
        </div>

        <div className="solution-list">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.number}>
              <div className="solution-number">{solution.number}</div>
              <div className="solution-main">
                <span>{solution.subtitle}</span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className={`solution-art art-${solution.number}`}>
                <div className="art-grid" />
                <div className="art-disc" />
                <span>AI</span>
                <i />
                <b />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section delivery-section">
        <div className="delivery-panel">
          <div className="delivery-copy">
            <span className="section-kicker light">04 / DELIVERY</span>
            <h2>
              系统有发展前提，
              <br />
              效率倍增是结果
            </h2>
            <p>
              从诊断、方案、部署到运营，域擎组合太擎与旷湖两大技术底座、行业方法论和持续服务，帮助企业完成从试点到规模化应用。
            </p>
          </div>
          <div className="delivery-path" aria-label="交付路径">
            {["业务诊断", "方案设计", "智能部署", "协同运营", "持续优化"].map(
              (item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section ecosystem-section" id="ecosystem">
        <div className="section-heading compact">
          <div>
            <span className="section-kicker">05 / ARCHITECTURE</span>
            <h2>清晰分工，协同支撑企业 AI 落地</h2>
          </div>
          <p>
            从数据基础、智能体能力到业务交付，域擎构建面向企业结果的完整能力链。
          </p>
        </div>
        <div className="ecosystem-grid">
          <article>
            <span>SOLUTION</span>
            <h3>域擎 UKing</h3>
            <p>公司与主品牌，负责企业 AI 解决方案、行业产品与持续交付。</p>
          </article>
          <article>
            <span>AGENT PLATFORM</span>
            <h3>太擎</h3>
            <p>企业级智能体开发平台，为域擎解决方案提供智能体技术底座。</p>
          </article>
          <article>
            <span>DATA PLATFORM</span>
            <h3>旷湖</h3>
            <p>大数据开发平台，为域擎解决方案提供可信、可复用的数据底座。</p>
          </article>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-grid" aria-hidden="true" />
        <span>BUILD THE NEXT INTELLIGENT BUSINESS</span>
        <h2>
          与域擎一起，
          <br />
          开启智能生产力新阶段
        </h2>
        <p>从一个真实业务问题开始，让 AI 产生可衡量的价值。</p>
        <div className="cta-actions">
          <a href="mailto:contact@uking.uk">预约方案交流</a>
          <a href="#top">返回顶部 ↑</a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span>域擎</span>
          <small>UKING</small>
        </a>
        <p>让 AI 进入企业业务的解决方案公司</p>
        <div>
          <a href="#platform">平台能力</a>
          <a href="#solutions">解决方案</a>
          <a href="#ecosystem">合作生态</a>
        </div>
        <small>© 2026 UKing Intelligence. All rights reserved.</small>
      </footer>
    </main>
  );
}
