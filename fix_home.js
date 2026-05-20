import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Fix paths
content = content.replace(/from '\.\//g, "from '../");

// Change function name
content = content.replace(/export default function App/g, "export default function Home");

// Remove Navbar, Footer, RegistrationModal imports
content = content.replace(/import Navbar.*\n/g, "");
content = content.replace(/import RegistrationModal.*\n/g, "");

// Remove states for Modal
content = content.replace(/const \[isModalOpen.*\n/g, "");
content = content.replace(/const openModal.*\n/g, "");
content = content.replace(/const closeModal.*\n/g, "");

// Add useOutletContext
content = content.replace(/export default function Home\(\) \{/g, `import { useOutletContext } from 'react-router-dom';\n\nexport default function Home() {\n  const { openModal } = useOutletContext();`);

// Remove Navbar usage
content = content.replace(/\{\/\* Navigation Header \*\/\}\n\s*<Navbar[^\>]*\/>/g, "");

// Remove Footer and RegistrationModal usage
content = content.replace(/\{\/\* ================= FOOTER ================= \*\/\}[\s\S]*?(?=\{\/\* ================= REGISTRATION MODAL ================= \*\/)/g, "");

// Remove RegistrationModal
content = content.replace(/\{\/\* ================= REGISTRATION MODAL ================= \*\/\}\n\s*<RegistrationModal[^\>]*\/>/g, "");

// Write back
fs.writeFileSync('src/pages/Home.jsx', content);
