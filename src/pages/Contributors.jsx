import React from "react";
import { motion } from "framer-motion";
import { Users, UserCircle } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-85px" },
    transition: { duration: 0.7, ease: "easeOut" },
};

export default function Contributors() {
    const sections = [
        {
            title: "Chief Patron",
            members: [
                {
                    name: "Dr. Ashok K. Chauhan",
                    role: "Founder, President-The Amity Education Group",
                    dept: "",
                    image: null,
                },
            ],
        },
        {
            title: "Patrons",
            members: [
                {
                    name: "Dr. Atul Chauhan",
                    role: "Chancellor",
                    dept: "Amity University",
                    image: null,
                },
                {
                    name: "Prof. (Dr.) Balvinder Shukla",
                    role: "Vice Chancellor",
                    dept: "Amity University Uttar Pradesh",
                    image: null,
                },
            ],
        },
        {
            title: "Co-Patrons",
            members: [
                {
                    name: "Prof. (Dr.) Sanjeev Bansal",
                    role: "Additional Pro Vice-Chancellor, Dean FMS & Director ABS",
                    dept: "Amity University Uttar Pradesh, Noida",
                    image: null,
                },
                {
                    name: "Prof. (Dr.) Chanderdeep Tandon",
                    role: "Additional Pro Vice Chancellor & Dean Faculty of Bio Sciences & Biotechnology",
                    dept: "Amity University Uttar Pradesh, Noida",
                    image: null,
                },
                {
                    name: "Prof. (Dr.) D. K. Bandyopadhyay",
                    role: "Chief Advisor to the Founder President & Chairman of Law Schools",
                    dept: "Amity University Uttar Pradesh, Noida",
                    image: null,
                },
            ],
        },
        {
            title: "Conveners",
            members: [
                {
                    name: "Prof. (Dr.) Renu Dhupper",
                    role: "Assistant Director",
                    dept: "Amity Institute of Environmental Sciences, Amity University Uttar Pradesh Noida",
                    image: null,
                },
                {
                    name: "Prof. (Dr.) Rachana Singh",
                    role: "Professor",
                    dept: "Amity Institute of Biotechnology, Amity University Uttar Pradesh, Noida",
                    image: null,
                },
                {
                    name: "Dr. Garima Agarwal",
                    role: "Associate Professor and Head",
                    dept: "Amity Centre for Entrepreneurship Development, Amity University Uttar Pradesh, Noida",
                    image: null,
                },
            ],
        },
        {
            title: "Student Organizing Committee",
            members: [
                { name: "Jashn Kulshrestha", role: "", dept: "", image: null },
                { name: "Ananya Padhy", role: "", dept: "", image: null },
                {
                    name: "Aditya Vikram Singh",
                    role: "",
                    dept: "",
                    image: null,
                },
                { name: "Devanshi Verma", role: "", dept: "", image: null },
                { name: "Priyanshi Mishra", role: "", dept: "", image: null },
            ],
        },
    ];

    return (
        <div
            style={{
                backgroundColor: "#f8fdf8",
                backgroundImage: `
        radial-gradient(circle at 0% 0%, rgba(162, 230, 53, 0.4) 0, transparent 50%),
        radial-gradient(circle at 100% 100%, rgba(11, 61, 43, 0.25) 0, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0, transparent 60%),
        linear-gradient(to right, rgba(11, 61, 43, 0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(11, 61, 43, 0.08) 1px, transparent 1px)
      `,
                backgroundSize:
                    "100% 100%, 100% 100%, 100% 100%, 80px 80px, 80px 80px",
                minHeight: "100vh",
                paddingTop: "140px",
                paddingBottom: "80px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* ================= HERO HEADER ================= */}
            <section
                className="container"
                style={{ textAlign: "center", marginBottom: "5rem" }}
            >
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="badge badge-outline"
                    style={{ marginBottom: "1.25rem" }}
                >
                    Organizing Committee
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: "clamp(2rem, 8vw, 3.75rem)",
                        color: "var(--primary)",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        lineHeight: 1.1,
                        maxWidth: "900px",
                        margin: "0 auto 1.5rem",
                        wordBreak: "keep-all",
                        overflowWrap: "normal",
                    }}
                >
                    Organizing Committee
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: "1.25rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.6",
                        maxWidth: "700px",
                        margin: "0 auto",
                    }}
                >
                    The dedicated individuals who coordinate this national forum
                    and guide the sustainable initiative.
                </motion.p>
            </section>

            {/* ================= SECTION: COMMITTEE ================= */}
            <section className="container" style={{ marginBottom: "6rem" }}>
                {sections.map((section, sIdx) => (
                    <div key={sIdx} style={{ marginBottom: "4rem" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                marginBottom: "2.5rem",
                                justifyContent: "center",
                            }}
                        >
                            <Users
                                style={{ color: "var(--secondary)" }}
                                size={24}
                            />
                            <h2
                                style={{
                                    fontSize: "2rem",
                                    color: "var(--primary)",
                                    fontWeight: 800,
                                    fontFamily: "var(--font-heading)",
                                    margin: 0,
                                }}
                            >
                                {section.title}
                            </h2>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "2.5rem",
                            }}
                        >
                            {section.members.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    {...fadeUp}
                                    style={{
                                        flex: "1 1 300px",
                                        maxWidth: "380px",
                                        padding: "2.5rem 2rem",
                                        background: "#ffffff",
                                        border: "1px solid rgba(11, 61, 43, 0.06)",
                                        borderRadius: "24px",
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "1.25rem",
                                        boxShadow:
                                            "0 4px 20px rgba(0,0,0,0.01)",
                                    }}
                                    className="contributor-card"
                                >
                                    <div
                                        style={{
                                            width: "220px",
                                            height: "280px",
                                            borderRadius: "16px",
                                            overflow: "hidden",
                                            background: "var(--bg-light)",
                                            border: "1px solid rgba(11, 61, 43, 0.08)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "var(--secondary)",
                                            margin: "0 auto 0.5rem",
                                        }}
                                    >
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    objectPosition:
                                                        "center top",
                                                }}
                                            />
                                        ) : (
                                            <UserCircle
                                                size={64}
                                                strokeWidth={1}
                                            />
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.5rem",
                                        }}
                                    >
                                        <strong
                                            style={{
                                                fontSize: "1.25rem",
                                                color: "var(--primary)",
                                                fontWeight: 800,
                                            }}
                                        >
                                            {member.name}
                                        </strong>
                                        {member.role && (
                                            <span
                                                style={{
                                                    fontSize: "0.9rem",
                                                    color: "var(--secondary)",
                                                    fontWeight: 700,
                                                    lineHeight: "1.4",
                                                }}
                                            >
                                                {member.role}
                                            </span>
                                        )}
                                        {member.dept && (
                                            <span
                                                style={{
                                                    fontSize: "0.85rem",
                                                    color: "var(--text-muted)",
                                                    lineHeight: "1.4",
                                                }}
                                            >
                                                {member.dept}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Responsive layout rules */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        @media (max-width: 576px) {
          .contributor-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `,
                }}
            />
        </div>
    );
}
