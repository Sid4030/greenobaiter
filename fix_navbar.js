import fs from 'fs';

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

// Add import for Link
content = content.replace("import { Leaf, Award, Menu, X } from 'lucide-react';", "import { Leaf, Award, Menu, X } from 'lucide-react';\nimport { Link } from 'react-router-dom';");

// Replace Logo link
content = content.replace(/<a href="#" style=\{\{ display: 'flex'(.*?)<\/a>/s, `<Link to="/" style={{ display: 'flex'$1</Link>`);

// Replace Desktop Links
const desktopNav = `          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link to="/about" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor }}>About</Link>
            <Link to="/problem-statement" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor }}>Problem Statement</Link>
            <Link to="/contributors" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor }}>Contributors</Link>
            <Link to="/faqs" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor }}>FAQs</Link>
            <Link to="/contact" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor }}>Contact</Link>
          </div>`;

content = content.replace(/<div className="desktop-nav".*?<\/div>/s, desktopNav);

// Replace Mobile Links
const mobileLinks = `        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>About</Link>
        <Link to="/problem-statement" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>Problem Statement</Link>
        <Link to="/contributors" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>Contributors</Link>
        <Link to="/faqs" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>FAQs</Link>
        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>Contact</Link>`;

content = content.replace(/<a href="#about".*?<\/a>/s, mobileLinks);

fs.writeFileSync('src/components/Navbar.jsx', content);
