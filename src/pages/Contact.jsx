import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    CheckCircle,
    Send,
    Globe,
    ChevronRight,
} from "lucide-react";
import { sendContactToDiscord } from "../utils/contactDiscordWebhook";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        university: "",
        track: "circular-waste",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) return;

        // Send to Discord
        sendContactToDiscord(formState);

        setIsSubmitted(true);
        // Reset form after a brief delay
        setTimeout(() => {
            setFormState({
                name: "",
                email: "",
                university: "",
                track: "circular-waste",
                message: "",
            });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

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
                <span
                    className="badge badge-outline"
                    style={{ marginBottom: "1.25rem" }}
                >
                    Contact Us
                </span>

                <h1
                    style={{
                        fontSize: "3.75rem",
                        color: "var(--primary)",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        lineHeight: 1.1,
                        maxWidth: "900px",
                        margin: "0 auto 1.5rem",
                    }}
                >
                    Let's Start a{" "}
                    <span style={{ color: "var(--secondary)" }}>
                        Sustainable Conversation
                    </span>
                </h1>

                <p
                    style={{
                        fontSize: "1.25rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.6",
                        maxWidth: "650px",
                        margin: "0 auto",
                    }}
                >
                    Need clarification on eligibility, proposal submission
                    templates, or sponsorship? Reach out directly.
                </p>
            </section>

            {/* ================= DUAL GRID ================= */}
            <section className="container">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.25fr 1fr",
                        gap: "5rem",
                        alignItems: "start",
                        textAlign: "left",
                    }}
                    className="contact-grid"
                >
                    {/* Left Form Column */}
                    <div
                        style={{
                            background: "#ffffff",
                            border: "1px solid rgba(11, 61, 43, 0.06)",
                            borderRadius: "28px",
                            padding: "3rem",
                            boxShadow: "0 4px 30px rgba(0,0,0,0.01)",
                            position: "relative",
                        }}
                    >
                        <AnimatePresence>
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: "#ffffff",
                                        borderRadius: "28px",
                                        zIndex: 10,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "1.25rem",
                                        padding: "2rem",
                                        textAlign: "center",
                                    }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.15, 1] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <CheckCircle
                                            size={56}
                                            style={{
                                                color: "var(--secondary)",
                                            }}
                                        />
                                    </motion.div>
                                    <h3
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "var(--primary)",
                                            fontWeight: 800,
                                        }}
                                    >
                                        Message Sent Successfully!
                                    </h3>
                                    <p
                                        style={{
                                            color: "var(--text-muted)",
                                            fontSize: "0.9rem",
                                            maxWidth: "320px",
                                            margin: 0,
                                        }}
                                    >
                                        Thank you. The coordinating secretary
                                        from AIES will review and respond to you
                                        within 24 hours.
                                    </p>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        <form
                            onSubmit={handleSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.4rem",
                                }}
                            >
                                <label
                                    style={{
                                        fontSize: "0.8rem",
                                        fontWeight: 800,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                        color: "var(--primary)",
                                    }}
                                >
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Rahul Sharma"
                                    required
                                    style={{
                                        padding: "0.85rem 1.1rem",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(11, 61, 43, 0.08)",
                                        background: "#fbfbfa",
                                        fontSize: "0.95rem",
                                        color: "var(--primary)",
                                        outline: "none",
                                    }}
                                    className="contact-field"
                                />
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.4rem",
                                }}
                            >
                                <label
                                    style={{
                                        fontSize: "0.8rem",
                                        fontWeight: 800,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                        color: "var(--primary)",
                                    }}
                                >
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="name@university.edu"
                                    required
                                    style={{
                                        padding: "0.85rem 1.1rem",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(11, 61, 43, 0.08)",
                                        background: "#fbfbfa",
                                        fontSize: "0.95rem",
                                        color: "var(--primary)",
                                        outline: "none",
                                    }}
                                    className="contact-field"
                                />
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.4rem",
                                }}
                            >
                                <label
                                    style={{
                                        fontSize: "0.8rem",
                                        fontWeight: 800,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                        color: "var(--primary)",
                                    }}
                                >
                                    University / Institute Name
                                </label>
                                <input
                                    type="text"
                                    name="university"
                                    value={formState.university}
                                    onChange={handleChange}
                                    placeholder="Amity University Uttar Pradesh"
                                    style={{
                                        padding: "0.85rem 1.1rem",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(11, 61, 43, 0.08)",
                                        background: "#fbfbfa",
                                        fontSize: "0.95rem",
                                        color: "var(--primary)",
                                        outline: "none",
                                    }}
                                    className="contact-field"
                                />
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.4rem",
                                }}
                            >
                                <label
                                    style={{
                                        fontSize: "0.8rem",
                                        fontWeight: 800,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                        color: "var(--primary)",
                                    }}
                                >
                                    Preferred Innovation Track
                                </label>
                                <select
                                    name="track"
                                    value={formState.track}
                                    onChange={handleChange}
                                    style={{
                                        padding: "0.85rem 1.1rem",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(11, 61, 43, 0.08)",
                                        background: "#fbfbfa",
                                        fontSize: "0.95rem",
                                        color: "var(--primary)",
                                        outline: "none",
                                    }}
                                    className="contact-field"
                                >
                                    <option value="circular-waste">
                                        Track 1: Circular Waste Recovery
                                    </option>
                                    <option value="smart-cities">
                                        Track 2: Smart Climate Cities
                                    </option>
                                    <option value="net-zero-ai">
                                        Track 3: Net Zero AI Architectures
                                    </option>
                                </select>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.4rem",
                                }}
                            >
                                <label
                                    style={{
                                        fontSize: "0.8rem",
                                        fontWeight: 800,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                        color: "var(--primary)",
                                    }}
                                >
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Detail your question or inquiry here..."
                                    required
                                    rows={4}
                                    style={{
                                        padding: "0.85rem 1.1rem",
                                        borderRadius: "12px",
                                        border: "1px solid rgba(11, 61, 43, 0.08)",
                                        background: "#fbfbfa",
                                        fontSize: "0.95rem",
                                        color: "var(--primary)",
                                        outline: "none",
                                        resize: "none",
                                    }}
                                    className="contact-field"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary"
                                style={{
                                    padding: "0.85rem 2rem",
                                    marginTop: "0.5rem",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                }}
                            >
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </div>

                    {/* Right Info Column */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2.5rem",
                        }}
                    >
                        {/* Host info */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem",
                            }}
                        >
                            <span
                                className="badge badge-outline"
                                style={{ alignSelf: "flex-start" }}
                            >
                                Coordinating Host
                            </span>
                            <h3
                                style={{
                                    fontSize: "1.65rem",
                                    color: "var(--primary)",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 800,
                                }}
                            >
                                Amity Institute of Environmental Sciences
                            </h3>
                            <p
                                style={{
                                    color: "var(--text-muted)",
                                    fontSize: "0.95rem",
                                    lineHeight: "1.5",
                                }}
                            >
                                Amity University Uttar Pradesh, Sector-125,
                                Noida, Uttar Pradesh, Pin - 201313, India.
                            </p>
                        </div>

                        <div
                            style={{
                                height: "1px",
                                background: "rgba(11, 61, 43, 0.08)",
                            }}
                        />

                        {/* Direct Channels */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "10px",
                                        backgroundColor:
                                            "rgba(162, 230, 53, 0.08)",
                                        color: "var(--secondary)",
                                        display: "grid",
                                        placeItems: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Mail size={18} />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        lineHeight: "1.2",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.7rem",
                                            color: "var(--text-muted)",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Email Address
                                    </span>
                                    <strong
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "var(--primary)",
                                        }}
                                    >
                                        aies@amity.edu
                                    </strong>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "10px",
                                        backgroundColor:
                                            "rgba(2, 132, 199, 0.08)",
                                        color: "#0284c7",
                                        display: "grid",
                                        placeItems: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Phone size={18} />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        lineHeight: "1.2",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.7rem",
                                            color: "var(--text-muted)",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Contact Support
                                    </span>
                                    <strong
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "var(--primary)",
                                        }}
                                    >
                                        +91 (0) 120 4392604
                                    </strong>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "10px",
                                        backgroundColor:
                                            "rgba(139, 92, 246, 0.08)",
                                        color: "#8b5cf6",
                                        display: "grid",
                                        placeItems: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Globe size={18} />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        lineHeight: "1.2",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.7rem",
                                            color: "var(--text-muted)",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Institutional Portal
                                    </span>
                                    <strong
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "var(--primary)",
                                        }}
                                    >
                                        amity.edu/aies
                                    </strong>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                height: "1px",
                                background: "rgba(11, 61, 43, 0.08)",
                            }}
                        />

                        {/* Strategic Campus Map details */}
                        <div
                            style={{
                                background: "rgba(11, 61, 43, 0.02)",
                                border: "1px solid rgba(11, 61, 43, 0.06)",
                                padding: "1.5rem",
                                borderRadius: "20px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    color: "var(--primary)",
                                }}
                            >
                                <MapPin
                                    size={16}
                                    style={{ color: "var(--secondary)" }}
                                />
                                <strong
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: 800,
                                    }}
                                >
                                    Sector-125 Campus Logistics
                                </strong>
                            </div>
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    color: "var(--text-muted)",
                                    lineHeight: "1.5",
                                    margin: 0,
                                }}
                            >
                                Grand Finale presentations are conducted inside
                                the AIES Block I-2 Seminar Hall. Located 20
                                minutes from the Okhla Bird Sanctuary Metro
                                Station (Delhi Metro Magenta Line).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Styled inputs focus states */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        .contact-field:focus {
          border-color: var(--secondary) !important;
          background: #ffffff !important;
        }
      `,
                }}
            />
        </div>
    );
}
