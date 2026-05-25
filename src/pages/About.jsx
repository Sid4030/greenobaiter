import React from "react";
import { motion } from "framer-motion";
import {
    Target,
    Globe,
    Leaf,
    Users,
    Zap,
    BookOpen,
    GraduationCap,
} from "lucide-react";
import { useOutletContext } from "react-router-dom";
// GSAP animations removed — static layout used instead

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" },
};

const SplitText = ({ text }) => {
    return <span style={{ color: "#000", display: "inline" }}>{text}</span>;
};

export default function About() {
    const { openModal } = useOutletContext();

    const milestones = [
        {
            number: "Top 3%",
            label: "Global Universities",
            desc: "Consistently ranked by QS & THE rankings",
        },
        {
            number: "1880+",
            label: "Patents Filed",
            desc: "Among the highest by an Indian academic institution",
        },
        {
            number: "A+",
            label: "NAAC Grade",
            desc: "Awarded by National Assessment and Accreditation Council",
        },
        {
            number: "LEED Platinum",
            label: "Green Campuses",
            desc: "Certified sustainable and energy-efficient infrastructure",
        },
    ];

    const pillars = [
        {
            title: "Scientific Excellence",
            desc: "Applying rigorous chemical, biological, and geological laboratory processes to green solutions.",
            icon: <BookOpen size={24} />,
            color: "var(--secondary)",
        },
        {
            title: "Commercial Scalability",
            desc: "Structuring innovations into realistic incubation pathways and viable business models.",
            icon: <Target size={24} />,
            color: "#0284c7",
        },
        {
            title: "Public Resiliency",
            desc: "Aligning technologies with direct public utility, local government standards, and citizen health.",
            icon: <Globe size={24} />,
            color: "#8b5cf6",
        },
    ];

    return (
        <div
            style={{
                background: "#fbfbfa",
                minHeight: "100vh",
                paddingTop: "140px",
                paddingBottom: "80px",
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
                    About The Initiative
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: "clamp(2.5rem, 8vw, 3.75rem)",
                        color: "var(--primary)",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        lineHeight: 1.1,
                        maxWidth: "900px",
                        margin: "0 auto 1.5rem",
                    }}
                >
                    Fusing Academic Research with{" "}
                    <span style={{ color: "var(--secondary)" }}>
                        Sustainable Scalability
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: "clamp(1rem, 4vw, 1.25rem)",
                        color: "var(--text-muted)",
                        lineHeight: "1.6",
                        maxWidth: "750px",
                        margin: "0 auto",
                    }}
                >
                    Under the visionary leadership of Amity University, the
                    Greenovators Hackathon acts as a catalyst, bridging
                    laboratory experiments with national climate action.
                </motion.p>
            </section>

            {/* ================= DETAILED BLOCKS ================= */}
            <section className="pin-section">
                {/* Full width image wrapper initially */}
                <div className="pin-image-wrapper">
                    <div className="pin-image-inner">
                        <img
                            src="https://amity.edu/images/university.jpg"
                            alt="Amity University Campus"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center center",
                                display: "block",
                            }}
                        />
                    </div>
                </div>

                {/* Text wrapper positioned on the right */}
                <div className="pin-text-wrapper container">
                    <div className="pin-text-spacer">
                        <div className="pin-text-content">
                            <span
                                className="badge badge-outline"
                                style={{ alignSelf: "flex-start" }}
                            >
                                Organizing Host
                            </span>
                            <h2
                                className="amity-heading"
                                style={{
                                    fontSize: "clamp(1.75rem, 6vw, 2.5rem)",
                                    color: "#000",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 900,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.2,
                                    marginTop: "1.5rem",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Amity University Uttar Pradesh
                            </h2>
                            <p
                                style={{
                                    color: "var(--text-muted)",
                                    fontSize: "1.05rem",
                                    lineHeight: "1.6",
                                    marginBottom: "1rem",
                                }}
                            >
                                <SplitText text="Amity University is a globally recognized institution committed to nation-building and societal progress through integrated, value-based, and transcultural education that harmonizes modernity with tradition. Established in 2005, Amity University Noida is a premier NAAC A+ graded private university located in the Delhi NCR region, renowned for its 60+ acre hi-tech campus and wide academic offerings." />
                            </p>
                            <p
                                style={{
                                    color: "var(--text-muted)",
                                    fontSize: "1.05rem",
                                    lineHeight: "1.6",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                <SplitText text="With over 600 undergraduate, postgraduate, and doctoral programs across diverse and emerging disciplines, Amity promotes excellence in education, research, innovation, and professional development. The university emphasizes holistic growth by nurturing human values, cultural pride, leadership, and critical thinking. Through global exposure, extensive patent contributions, and international study pathways, Amity shapes students into skilled professionals, ethical individuals, and compassionate citizens dedicated to responsible leadership, societal advancement, and global development." />
                            </p>
                            <button
                                onClick={openModal}
                                className="btn-primary"
                                style={{
                                    padding: "0.85rem 2rem",
                                    cursor: "pointer",
                                }}
                            >
                                Join the Hackathon Proposal
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATS COUNTERS ================= */}
            <section
                style={{
                    padding: "5rem 0",
                    background: "var(--primary)",
                    color: "white",
                    marginBottom: "6rem",
                }}
            >
                <div className="container">
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "2.5rem",
                        }}
                        className="stats-grid"
                    >
                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                style={{
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.25rem",
                                }}
                            >
                                <strong
                                    style={{
                                        fontSize: "clamp(2rem, 6vw, 2.75rem)",
                                        color: "var(--accent)",
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 900,
                                    }}
                                >
                                    {milestone.number}
                                </strong>
                                <span
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: 800,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    {milestone.label}
                                </span>
                                <p
                                    style={{
                                        fontSize: "0.8rem",
                                        color: "rgba(255,255,255,0.6)",
                                        maxWidth: "200px",
                                        margin: "0 auto",
                                    }}
                                >
                                    {milestone.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= THE THREE CORE VALUES ================= */}
            <section className="container">
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span
                        className="badge badge-outline"
                        style={{ marginBottom: "0.5rem" }}
                    >
                        Our Foundations
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.75rem, 6vw, 2.5rem)",
                            color: "var(--primary)",
                            fontFamily: "var(--font-heading)",
                            fontWeight: 900,
                        }}
                    >
                        Methodologies Fostering Change
                    </h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "2rem",
                    }}
                    className="values-grid"
                >
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            style={{
                                padding: "clamp(1.5rem, 5vw, 2.5rem)",
                                background: "#ffffff",
                                border: "1px solid rgba(11, 61, 43, 0.06)",
                                borderRadius: "24px",
                                textAlign: "left",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.25rem",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                            }}
                            className="value-card"
                        >
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "12px",
                                    backgroundColor: `${pillar.color}08`,
                                    color: pillar.color,
                                    display: "grid",
                                    placeItems: "center",
                                }}
                            >
                                {pillar.icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    color: "var(--primary)",
                                    fontWeight: 800,
                                }}
                            >
                                {pillar.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "var(--text-muted)",
                                    lineHeight: "1.5",
                                    margin: 0,
                                }}
                            >
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Responsive overrides */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                                .pin-section {
                                        position: relative;
                                        width: 100vw;
                                        margin-left: calc(-50vw + 50%);
                                        margin-bottom: 6rem;
                                        padding: 0 4vw;
                                        display: grid;
                                        grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
                                        gap: clamp(1.5rem, 4vw, 3rem);
                                        align-items: center;
                                        overflow: visible;
                                        background-color: transparent;
                                }
                                .pin-image-wrapper {
                                        position: relative;
                                        width: 100%;
                                        aspect-ratio: 16 / 9;
                                        z-index: 1;
                                }
                                .pin-image-inner {
                                        position: absolute;
                                        inset: 0;
                                        overflow: hidden;
                                        border-radius: 18px;
                                        box-shadow: none;
                                        transform-origin: center center;
                                }
                                .pin-text-wrapper {
                                        position: relative;
                                        width: 100%;
                                        height: auto;
                                        display: flex;
                                        align-items: center;
                                        justify-content: flex-start;
                                        z-index: 2;
                                        pointer-events: auto;
                                        padding: 0;
                                }
                                .pin-text-spacer {
                                        width: 100%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: flex-start;
                                        pointer-events: auto;
                                }
                                .pin-text-content {
                                        width: 100%;
                                        max-width: 620px;
                                        padding: 0;
                                        margin: 0;
                                        background: transparent;
                                        color: #000;
                                        text-align: left;
                                }

                                @media (max-width: 992px) {
                                        .pin-section {
                                                width: 100%;
                                                margin-left: 0;
                                                padding: 0 1rem;
                                                grid-template-columns: 1fr;
                                                gap: 2rem;
                                        }
                                        .pin-image-wrapper {
                                                aspect-ratio: 16 / 10;
                                        }
                                        .pin-image-inner {
                                                border-radius: 14px;
                                        }
                                        .pin-text-wrapper {
                                                justify-content: flex-start;
                                        }
                                        .pin-text-content {
                                                max-width: 100%;
                                        }
                                        .stats-grid {
                                                grid-template-columns: 1fr 1fr !important;
                                        }
                                        .values-grid {
                                                grid-template-columns: 1fr !important;
                                        }
                                }
                                @media (max-width: 576px) {
                                        .stats-grid {
                                                grid-template-columns: 1fr !important;
                                        }
                                }
      `,
                }}
            />
        </div>
    );
}
