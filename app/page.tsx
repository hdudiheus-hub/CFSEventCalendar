const platformPillars = [
  {
    title: 'Fighter storefronts',
    copy: 'Personalized landing pages pair athlete stories, product stacks, media, sponsor inventory, and fighter-specific affiliate links.',
  },
  {
    title: 'Attribution engine',
    copy: 'Coupon codes, referral parameters, affiliate IDs, and repeat-purchase tracking connect every sale to the right athlete.',
  },
  {
    title: 'CRM automation',
    copy: 'Welcome sequences, education drips, reorder reminders, cart recovery, and fight-camp campaigns keep customers engaged.',
  },
];

const journey = [
  'Fighter shares content',
  'Fan visits branded page',
  'Checkout records attribution',
  'Dashboards and CRM update',
];

const roadmap = [
  ['Phase 1', 'Website architecture, fighter onboarding, affiliate mapping, CRM data model'],
  ['Phase 2', 'Commerce site, fighter pages, dashboards, shared workspace, workflows'],
  ['Phase 3', 'Monthly content engine, social campaigns, fighter assets, paid ads'],
  ['Phase 4', 'SEO, conversion optimization, retargeting, reporting, new-athlete scale'],
];

const sampleFighters = [
  { name: 'Akeem Cheatham', code: 'AKEEM10', revenue: '$18.4K', conversion: '7.8%' },
  { name: 'Torres', code: 'TORRES10', revenue: '$12.1K', conversion: '6.4%' },
  { name: 'Gallegos', code: 'GALLEGOS10', revenue: '$9.7K', conversion: '5.9%' },
];

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <nav className="nav" aria-label="Primary navigation">
          <div className="brand">CF <span>SPORT</span></div>
          <div className="navlinks">
            <a href="#platform">Platform</a>
            <a href="#crm">CRM</a>
            <a href="#dashboards">Dashboards</a>
            <a href="#roadmap">Roadmap</a>
          </div>
        </nav>

        <section className="hero">
          <div>
            <p className="eyebrow">Athlete commerce ecosystem</p>
            <h1>Turn fighter influence into trackable supplement revenue.</h1>
            <p className="lede">
              CF Sport unites branded fighter pages, affiliate attribution, CRM retention, content approvals,
              and sponsor reporting in one scalable direct-to-consumer platform.
            </p>
            <div className="actions">
              <a className="button primary" href="#platform">Explore the system</a>
              <a className="button" href="#dashboards">View reporting model</a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Platform performance snapshot">
            <p className="eyebrow">Live ecosystem snapshot</p>
            <div className="metric-grid">
              <div className="metric"><strong>24</strong><span>active fighters</span></div>
              <div className="metric"><strong>11.2K</strong><span>attributed customers</span></div>
              <div className="metric"><strong>8.1%</strong><span>landing conversion</span></div>
              <div className="metric"><strong>3.4x</strong><span>retargeting ROAS</span></div>
            </div>
          </aside>
        </section>
      </div>

      <section id="platform" className="container">
        <div className="section-title">
          <h2>Built around fighters, fans, and transparent commerce.</h2>
          <p>
            The main CF Sport hub remains the commerce engine while each athlete receives a branded funnel that
            grows their personal brand and measures sales impact.
          </p>
        </div>
        <div className="cards">
          {platformPillars.map((pillar) => (
            <article className="card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-title">
          <h2>Athlete commerce flow</h2>
          <p>From social post to repeat purchase, every step is captured for CF Sport, fighters, sponsors, and promoters.</p>
        </div>
        <div className="flow">
          {journey.map((step, index) => (
            <div className="flow-step" key={step}>
              <span>0{index + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="crm" className="container">
        <div className="cards">
          <article className="card">
            <h3>Customer CRM</h3>
            <ul>
              <li>Profiles with source fighter, purchase history, interests, and phone/email fields.</li>
              <li>Automated welcome, product education, recovery tips, and upsell sequences.</li>
              <li>Retention segments based on last purchase, AOV, product preferences, and repeat rate.</li>
            </ul>
          </article>
          <article className="card">
            <h3>Fighter CRM</h3>
            <ul>
              <li>Sales, commissions, traffic, conversion rate, top products, and returning customers.</li>
              <li>Media library for photos, videos, logos, sponsor graphics, and promotional assets.</li>
              <li>Calendar integration for camps, launches, content days, obligations, and appearances.</li>
            </ul>
          </article>
          <article className="card">
            <h3>Content approvals</h3>
            <ul>
              <li>Draft, internal review, sponsor review, athlete review, approval, and publication workflow.</li>
              <li>Shared workspace for CF Sport, fighters, managers, sponsors, and the marketing team.</li>
              <li>AI assistance for captions, product descriptions, emails, blogs, FAQs, and recommendations.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="dashboards" className="container dashboard">
        <div className="card">
          <p className="eyebrow">Admin dashboard</p>
          <h2>Revenue, rankings, products, acquisition, and ads in one command center.</h2>
          <p>
            CF Sport can compare product performance, customer acquisition, ad efficiency, and fighter-generated
            revenue without losing the details sponsors need for ROI reporting.
          </p>
        </div>
        <div className="card">
          <table className="table" aria-label="Sample fighter performance table">
            <thead>
              <tr><th>Fighter</th><th>Code</th><th>Revenue</th><th>Conv.</th></tr>
            </thead>
            <tbody>
              {sampleFighters.map((fighter) => (
                <tr key={fighter.code}>
                  <td>{fighter.name}</td>
                  <td>{fighter.code}</td>
                  <td>{fighter.revenue}</td>
                  <td>{fighter.conversion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="roadmap" className="container">
        <div className="section-title">
          <h2>Launch roadmap</h2>
          <p>Ship the foundation first, then expand content, paid media, optimization, and fighter onboarding at scale.</p>
        </div>
        <div className="cards">
          {roadmap.map(([phase, description]) => (
            <article className="card" key={phase}>
              <p className="eyebrow">{phase}</p>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          CF Sport Athlete Commerce Platform — supplement sales, fighter branding, CRM automation, and sponsorship reporting.
        </div>
      </footer>
    </main>
  );
}
