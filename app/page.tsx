const dripFlow = [
  { index: "01", title: "洞察", en: "INSIGHT", detail: "识别客户意图与业务信号" },
  { index: "02", title: "分层", en: "SEGMENT", detail: "建立动态客户画像与优先级" },
  { index: "03", title: "培育", en: "NURTURE", detail: "由 AI 持续组织精准内容与触达" },
  { index: "04", title: "转化", en: "CONVERT", detail: "驱动销售动作并协同关键任务" },
  { index: "05", title: "归因", en: "ATTRIBUTE", detail: "回收结果，持续优化增长策略" },
];

const foundations = [
  {
    code: "AGENT FOUNDATION",
    title: "太擎",
    label: "企业级智能体开发平台",
    description:
      "连接主流大模型、企业知识与业务工具，开发真正理解上下文、能够执行复杂任务的企业级智能体。",
    capabilities: ["智能体开发", "知识与记忆", "工具与流程编排"],
    href: "https://hanpaas.com/",
    className: "foundation-agent",
  },
  {
    code: "DATA FOUNDATION",
    title: "旷湖",
    label: "大数据开发平台",
    description:
      "完成多源数据采集、治理、开发和服务化，为企业 AI 提供可信、可复用、可持续更新的数据上下文。",
    capabilities: ["数据开发", "数据治理", "数据服务"],
    href: "https://www.handaas.com/",
    className: "foundation-data",
  },
];

const solutionScenes = [
  {
    index: "01",
    title: "营销增长",
    subtitle: "从一次触达，走向持续培育",
    description:
      "围绕客户全生命周期组织内容、任务和触点，让每个高价值机会都被持续看见与推进。",
    tags: ["滴灌营销", "客户分层", "智能跟进"],
    className: "scene-growth",
  },
  {
    index: "02",
    title: "知识服务",
    subtitle: "让企业知识进入每一次决策",
    description:
      "把分散的制度、经验和专业资料转化为可理解、可追溯、可执行的企业智能。",
    tags: ["企业知识库", "智能问答", "辅助决策"],
    className: "scene-knowledge",
  },
  {
    index: "03",
    title: "业务协同",
    subtitle: "让智能体真正参与复杂流程",
    description:
      "连接人、系统与数据，自动完成跨部门、跨工具的任务编排，并保留人工决策边界。",
    tags: ["流程编排", "任务执行", "人机协同"],
    className: "scene-operation",
  },
  {
    index: "04",
    title: "数据智能",
    subtitle: "从数据资产，到业务行动",
    description:
      "统一指标、标签和业务上下文，让数据不止被看见，更能持续驱动智能应用。",
    tags: ["多源融合", "指标标签", "数据服务"],
    className: "scene-data",
  },
];

const deliverySteps = [
  ["01", "业务诊断", "锁定值得优先进入的真实业务问题"],
  ["02", "方案设计", "定义数据、智能体与业务协同方式"],
  ["03", "快速验证", "以小场景验证价值和组织适配度"],
  ["04", "规模部署", "接入系统、知识与关键业务流程"],
  ["05", "持续运营", "围绕业务结果迭代策略与智能能力"],
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "域擎 UKing",
  url: "https://www.uking.uk",
  email: "contact@uking.uk",
  description:
    "域擎提供让 AI 进入企业业务的解决方案，以太擎企业级智能体开发平台和旷湖大数据开发平台为技术底座。",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="域擎 UKing 首页">
          <img
            className="brand-logo"
            src="/logo-uking-header-v3.png"
            alt=""
            width="1400"
            height="461"
          />
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          <a href="#drip">滴灌营销</a>
          <a href="#foundations">技术底座</a>
          <a href="#solutions">解决方案</a>
          <a href="#delivery">交付体系</a>
        </nav>

        <a className="header-cta" href="#contact">
          预约方案演示
          <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="打开导航菜单">
            <i />
            <i />
          </summary>
          <nav aria-label="移动端主导航">
            <a href="#drip">滴灌营销</a>
            <a href="#foundations">技术底座</a>
            <a href="#solutions">解决方案</a>
            <a href="#delivery">交付体系</a>
            <a href="#contact">预约方案演示</a>
          </nav>
        </details>
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
            UKING · ENTERPRISE AI SOLUTIONS
          </div>
          <h1>
            <span>让 AI 真正进入</span>
            <em>企业业务</em>
          </h1>
          <p>
            域擎以业务价值为起点，将旷湖的数据能力、太擎的智能体能力与行业方法论融合，
            为企业交付可落地、可运营、可持续进化的 AI 解决方案。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#drip">
              探索滴灌营销 <span>→</span>
            </a>
            <a className="ghost-button" href="#foundations">
              了解双技术底座 <span>↘</span>
            </a>
          </div>
          <div className="hero-principles" aria-label="域擎解决方案特点">
            <span>业务目标优先</span>
            <span>双底座协同</span>
            <span>持续运营优化</span>
          </div>
        </div>

        <div className="hero-product" aria-label="域擎滴灌营销业务闭环示意">
          <div className="product-window">
            <div className="window-bar">
              <div>
                <i />
                <i />
                <i />
              </div>
              <span>UKING / BUSINESS LOOP</span>
              <b>ONLINE</b>
            </div>
            <div className="product-status">
              <span>AI DRIP GROWTH SYSTEM</span>
              <strong>持续增长业务闭环</strong>
              <small>从客户信号到业务结果，每一步都有智能参与</small>
            </div>
            <div className="flow-track">
              {dripFlow.map((step) => (
                <div className="flow-node" key={step.index}>
                  <span>{step.index}</span>
                  <i />
                  <strong>{step.title}</strong>
                  <small>{step.en}</small>
                </div>
              ))}
            </div>
            <div className="window-footer">
              <span>DATA CONTEXT / 旷湖</span>
              <span>AGENT EXECUTION / 太擎</span>
            </div>
          </div>
          <div className="platform-chip chip-agent">
            <span>AGENT</span>
            <strong>太擎</strong>
          </div>
          <div className="platform-chip chip-data">
            <span>DATA</span>
            <strong>旷湖</strong>
          </div>
        </div>

        <div className="hero-foot">
          <span>SCROLL TO DISCOVER</span>
          <i />
          <p>域擎 UKing · 让 AI 进入企业业务</p>
        </div>
      </section>

      <section className="brand-architecture" aria-label="域擎品牌与技术架构">
        <div>
          <span>COMPANY & SOLUTIONS</span>
          <strong>域擎 UKing</strong>
          <small>企业 AI 解决方案与业务入口</small>
        </div>
        <i aria-hidden="true">+</i>
        <div>
          <span>CORE PRODUCT</span>
          <strong>滴灌营销</strong>
          <small>持续培育客户的业务系统</small>
        </div>
        <i aria-hidden="true">←</i>
        <div>
          <span>TECH FOUNDATION</span>
          <strong>太擎 × 旷湖</strong>
          <small>智能体与数据双技术底座</small>
        </div>
      </section>

      <section className="section drip-section" id="drip">
        <div className="section-heading dark-heading">
          <div>
            <span className="section-kicker">01 / DRIP GROWTH</span>
            <h2>
              不是一次营销，
              <br />
              而是持续培育每个机会
            </h2>
          </div>
          <div className="heading-side">
            <p>
              域擎滴灌营销系统以客户全生命周期为主线，让数据持续识别机会，
              让 AI 持续组织内容与动作，让销售专注于真正有价值的沟通。
            </p>
            <a href="#contact">预约产品演示 ↗</a>
          </div>
        </div>

        <div className="drip-showcase">
          <div className="drip-copy">
            <span className="live-label">
              <i /> INTELLIGENT GROWTH LOOP
            </span>
            <h3>让每次触达，都成为下一次转化的上下文</h3>
            <p>
              客户信号进入系统后，AI 会持续完成识别、分层、内容匹配、任务建议与结果回收，
              形成不会因一次活动结束而中断的增长能力。
            </p>
            <ul>
              <li>
                <span>01</span>
                动态客户分层与机会识别
              </li>
              <li>
                <span>02</span>
                个性化内容生成与节奏编排
              </li>
              <li>
                <span>03</span>
                AI 跟进建议与销售任务协同
              </li>
              <li>
                <span>04</span>
                全链路反馈回收与效果归因
              </li>
            </ul>
          </div>

          <div className="growth-console" aria-label="滴灌营销系统流程界面示意">
            <div className="console-head">
              <div>
                <span>UKing</span>
                <strong>滴灌营销控制台</strong>
              </div>
              <b>策略运行中</b>
            </div>
            <div className="console-body">
              <aside>
                <span className="active">客户旅程</span>
                <span>人群分层</span>
                <span>内容策略</span>
                <span>智能任务</span>
                <span>效果归因</span>
              </aside>
              <div className="journey">
                <div className="journey-top">
                  <div>
                    <small>CUSTOMER JOURNEY</small>
                    <strong>高价值客户持续培育</strong>
                  </div>
                  <span>本周期</span>
                </div>
                <div className="journey-line" aria-hidden="true">
                  {dripFlow.map((step) => (
                    <div key={step.index}>
                      <span>{step.index}</span>
                      <i />
                      <strong>{step.title}</strong>
                      <small>{step.detail}</small>
                    </div>
                  ))}
                </div>
                <div className="journey-insight">
                  <span>AI NEXT ACTION</span>
                  <strong>结合客户最新行为，生成下一轮培育策略与销售任务</strong>
                  <i aria-hidden="true">→</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section foundations-section" id="foundations">
        <div className="section-heading light-heading">
          <div>
            <span className="section-kicker">02 / FOUNDATIONS</span>
            <h2>
              一个懂业务的入口，
              <br />
              两个可靠的技术底座
            </h2>
          </div>
          <p>
            域擎负责将技术变成业务结果；太擎负责智能体开发与执行，旷湖负责数据开发与服务。
            三者层级清晰、紧密协同。
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
                <span>{foundation.code}</span>
                <i aria-hidden="true">↗</i>
              </div>
              <div className="foundation-visual" aria-hidden="true">
                <div className="foundation-orbit orbit-outer" />
                <div className="foundation-orbit orbit-inner" />
                <div className="foundation-core">
                  <small>{foundation.code.split(" ")[0]}</small>
                  <strong>{foundation.title}</strong>
                </div>
                <span className="foundation-node node-one" />
                <span className="foundation-node node-two" />
                <span className="foundation-node node-three" />
              </div>
              <div className="foundation-copy">
                <span>{foundation.label}</span>
                <h3>{foundation.title}</h3>
                <p>{foundation.description}</p>
                <ul>
                  {foundation.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </div>
              <div className="foundation-link">访问{foundation.title}官网</div>
            </a>
          ))}
        </div>
      </section>

      <section className="section solutions-section" id="solutions">
        <div className="section-heading compact">
          <div>
            <span className="section-kicker">03 / BUSINESS SOLUTIONS</span>
            <h2>从真实业务问题开始，让 AI 产生可衡量的价值</h2>
          </div>
          <p>
            域擎不展示孤立的模型能力，而是让数据、知识、智能体与业务流程共同工作。
          </p>
        </div>

        <div className="scene-grid">
          {solutionScenes.map((scene) => (
            <article
              className={`scene-card ${scene.className}`}
              key={scene.index}
            >
              <div className="scene-top">
                <span>{scene.index}</span>
                <i aria-hidden="true">↗</i>
              </div>
              <div className="scene-visual" aria-hidden="true">
                <span />
                <span />
                <span />
                <i />
              </div>
              <div className="scene-copy">
                <small>{scene.subtitle}</small>
                <h3>{scene.title}</h3>
                <p>{scene.description}</p>
                <ul>
                  {scene.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section delivery-section" id="delivery">
        <div className="delivery-intro">
          <span className="section-kicker">04 / DELIVERY SYSTEM</span>
          <h2>
            从一个场景验证，
            <br />
            到一套持续进化的业务能力
          </h2>
          <p>
            域擎以业务结果为共同语言，组合咨询、技术、产品与运营，让 AI 项目从试点走向规模化应用。
          </p>
        </div>
        <div className="delivery-path" aria-label="域擎解决方案交付路径">
          {deliverySteps.map(([index, title, description]) => (
            <div key={index}>
              <span>{index}</span>
              <i />
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-grid" aria-hidden="true" />
        <div className="cta-orbit" aria-hidden="true" />
        <span>BUILD THE NEXT INTELLIGENT BUSINESS</span>
        <h2>
          让 AI 从“可以”，
          <br />
          走向企业业务中的“正在发生”
        </h2>
        <p>从一个真实业务问题开始，我们一起定义第一条价值路径。</p>
        <div className="cta-actions">
          <a href="mailto:contact@uking.uk">预约方案交流</a>
          <a href="#top">返回顶部 ↑</a>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a
            className="brand footer-brand"
            href="#top"
            aria-label="返回域擎 UKing 首页"
          >
            <img
              className="brand-logo"
              src="/logo-uking-header-v3.png"
              alt=""
              width="1400"
              height="461"
            />
          </a>
          <p>
            域擎 UKing
            <br />
            让 AI 进入企业业务的解决方案公司
          </p>
        </div>
        <div className="footer-column">
          <strong>网站导航</strong>
          <a href="#drip">滴灌营销</a>
          <a href="#foundations">技术底座</a>
          <a href="#solutions">解决方案</a>
          <a href="#delivery">交付体系</a>
        </div>
        <div className="footer-column">
          <strong>关联技术平台</strong>
          <a href="https://hanpaas.com/" target="_blank" rel="noreferrer">
            太擎 · 智能体开发平台 ↗
          </a>
          <a href="https://www.handaas.com/" target="_blank" rel="noreferrer">
            旷湖 · 大数据开发平台 ↗
          </a>
        </div>
        <div className="footer-column">
          <strong>联系域擎</strong>
          <a href="mailto:contact@uking.uk">contact@uking.uk</a>
          <span>预约企业 AI 方案交流</span>
        </div>
        <small>© 2026 UKing Intelligence. All rights reserved.</small>
      </footer>
    </main>
  );
}
