const platformLayers = [
  {
    index: "01",
    title: "数据智能底座",
    description:
      "打通企业内外部数据，完成采集、治理、融合与洞察，为智能决策提供可信数据基础。",
    tags: ["数据治理", "标签画像", "指标体系"],
  },
  {
    index: "02",
    title: "大模型智能中台",
    description:
      "融合主流大模型与企业知识，通过 Agent 编排、RAG 与工具调用，构建可执行的业务智能。",
    tags: ["AI Agent", "企业知识库", "模型路由"],
  },
  {
    index: "03",
    title: "行业应用平台",
    description:
      "面向营销、招商、销售与服务场景，快速组合业务流程，让智能能力真正进入一线。",
    tags: ["低代码", "自动化流程", "多端协同"],
  },
];

const solutions = [
  {
    number: "01",
    title: "瀑布营销",
    subtitle: "从公域获客到私域转化",
    description:
      "以 AI 获客系统、私域精细化运营与公域精准获客为核心，形成可度量、可复用的营销增长闭环。",
    highlights: ["6 万家企业验证", "智能触达与跟进", "全链路数据归因"],
  },
  {
    number: "02",
    title: "AI Native 产品矩阵",
    subtitle: "让每个岗位拥有专属智能体",
    description:
      "覆盖 B2B 数字销售、SalesGPT、B2C 电商与全域销售分析，把经验沉淀为可持续执行的智能能力。",
    highlights: ["销售 Agent", "诊断与方案生成", "多角色协同"],
  },
  {
    number: "03",
    title: "OPC 联盟",
    subtitle: "AI 创业者孵化平台",
    description:
      "连接工具、课程、实训与生态资源，帮助个人与团队从能力诊断走向产品验证和商业落地。",
    highlights: ["AI 营销创业赋能", "标准化成长路径", "产教融合生态"],
  },
];

const capabilities = [
  ["连接", "统一接入多源业务系统与数据资产"],
  ["理解", "构建企业知识图谱与上下文记忆"],
  ["决策", "让模型基于规则、数据和目标完成推理"],
  ["执行", "调用业务工具，自动完成跨系统任务"],
];

const metrics = [
  ["50,000+", "企业数字生产力提升"],
  ["30+", "全国服务网点"],
  ["20+", "高校与职业院校合作"],
  ["6 万家", "企业增长场景验证"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="太擎首页">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span>太擎</span>
          <small>TUNGEE</small>
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
            企业级 AI · 数据智能 · 产业生态
          </div>
          <h1>
            让 AI 进入业务，
            <br />
            <em>重构数字生产力</em>
          </h1>
          <p>
            太擎以数据智能底座和大模型智能体平台，连接企业数据、知识与流程，
            为营销增长、产业招商和组织协同提供可落地的智能解决方案。
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

        <div className="hero-visual" aria-label="太擎智能平台能力图">
          <div className="core-glow" />
          <div className="core-ring ring-a" />
          <div className="core-ring ring-b" />
          <div className="core">
            <span>AI</span>
            <small>AGENT OS</small>
          </div>
          <div className="satellite sat-a">
            <span>01</span>
            数据
          </div>
          <div className="satellite sat-b">
            <span>02</span>
            模型
          </div>
          <div className="satellite sat-c">
            <span>03</span>
            场景
          </div>
          <div className="signal signal-a" />
          <div className="signal signal-b" />
          <div className="signal signal-c" />
        </div>

        <div className="hero-foot">
          <span>SCROLL TO EXPLORE</span>
          <i />
          <p>专注于数字生产力的大模型智能体平台</p>
        </div>
      </section>

      <section className="metrics-strip" aria-label="平台关键数据">
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
              一个底座，
              <br />
              驱动每一种智能业务
            </h2>
          </div>
          <p>
            从数据到模型，再到业务执行，太擎将分散的技术能力组合成可持续演进的企业智能操作系统。
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
          <h2>智能体，不止回答问题</h2>
          <p>
            它能够理解业务上下文、调用企业工具并持续执行任务，让 AI 从“助手”成为真正的数字员工。
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
            <h2>从增长场景出发，交付真实结果</h2>
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
              从诊断、方案、部署到运营，太擎以平台能力、行业方法论和持续服务，帮助企业完成从试点到规模化应用。
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
            <span className="section-kicker">05 / ECOSYSTEM</span>
            <h2>连接产业、教育与创新者</h2>
          </div>
          <p>
            以开放平台和联合共创机制，推动 AI 技术从企业实践走向更广泛的产业与人才生态。
          </p>
        </div>
        <div className="ecosystem-grid">
          <article>
            <span>INDUSTRY</span>
            <h3>产业共创</h3>
            <p>与企业伙伴共同建设场景，沉淀可复制的行业解决方案。</p>
          </article>
          <article>
            <span>EDUCATION</span>
            <h3>产教融合</h3>
            <p>联合高校与职业院校，共建数字课程、实训体系与人才标准。</p>
          </article>
          <article>
            <span>INNOVATOR</span>
            <h3>OPC 孵化</h3>
            <p>为 AI 创业者提供工具、课程、实战项目与商业化支持。</p>
          </article>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-grid" aria-hidden="true" />
        <span>BUILD THE NEXT INTELLIGENT BUSINESS</span>
        <h2>
          与太擎一起，
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
          <span>太擎</span>
          <small>TUNGEE</small>
        </a>
        <p>专注于数字生产力解决方案的大模型智能体平台</p>
        <div>
          <a href="#platform">平台能力</a>
          <a href="#solutions">解决方案</a>
          <a href="#ecosystem">合作生态</a>
        </div>
        <small>© 2026 Tungee Intelligence. All rights reserved.</small>
      </footer>
    </main>
  );
}
