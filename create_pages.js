import fs from 'fs';

const pages = [
  { name: 'About', title: 'About Greenovators' },
  { name: 'ProblemStatement', title: 'Problem Statement' },
  { name: 'Contributors', title: 'Organizing Committee' },
  { name: 'Faqs', title: 'Frequently Asked Questions' },
  { name: 'Contact', title: 'Contact Us' }
];

pages.forEach(p => {
  const content = `import React from 'react';

export default function ${p.name}() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '80vh', background: 'var(--bg-light)' }}>
      <div className="container">
        <span className="badge badge-outline" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
          ${p.name.replace(/([A-Z])/g, ' $1').trim()}
        </span>
        <h1 style={{ fontSize: '4rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-0.03em' }}>
          ${p.title}
        </h1>
        <div style={{ marginTop: '3rem', fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px' }}>
          <p>Content for ${p.title} will be seamlessly integrated here once the copy is finalized by the team.</p>
        </div>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(`src/pages/${p.name}.jsx`, content);
});
