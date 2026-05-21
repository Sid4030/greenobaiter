import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Send,
    CheckCircle2,
    User,
    Mail,
    Users,
    FileText,
    Zap,
    Phone,
    Building2,
    MapPin,
    Crown,
} from "lucide-react";

// No Google API needed anymore - simple file upload!

export default function RegistrationModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        teamName: "",
        track: "waste-to-wealth",
        teamSize: "1",
        members: [
            {
                name: "",
                phone: "",
                email: "",
                institute: "",
                city: "",
                isLeader: true,
            },
        ],
        documentationLink: "",
        documentationName: "",
        declarationAccepted: false,
        brief: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.documentElement.style.overflow = "hidden";
            document.documentElement.style.position = "fixed";
            document.documentElement.style.width = "100%";
            document.documentElement.style.height = "100%";
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            document.body.style.height = "100%";
            document.body.style.top = `-${scrollY}px`;
        } else {
            const scrollY = parseInt(document.body.style.top || "0") * -1;
            document.documentElement.style.overflow = "unset";
            document.documentElement.style.position = "unset";
            document.documentElement.style.width = "unset";
            document.documentElement.style.height = "unset";
            document.body.style.overflow = "unset";
            document.body.style.position = "unset";
            document.body.style.width = "unset";
            document.body.style.height = "unset";
            document.body.style.top = "unset";
            window.scrollTo(0, scrollY);
        }
        return () => {
            document.documentElement.style.overflow = "unset";
            document.documentElement.style.position = "unset";
            document.documentElement.style.width = "unset";
            document.documentElement.style.height = "unset";
            document.body.style.overflow = "unset";
            document.body.style.position = "unset";
            document.body.style.width = "unset";
            document.body.style.height = "unset";
            document.body.style.top = "unset";
        };
    }, [isOpen]);

    const handleTeamSizeChange = (newSize) => {
        const size = parseInt(newSize);
        const currentMembers = [...formData.members];

        if (size > currentMembers.length) {
            // Add new member slots
            for (let i = currentMembers.length; i < size; i++) {
                currentMembers.push({
                    name: "",
                    phone: "",
                    email: "",
                    institute: "",
                    city: "",
                    isLeader: false,
                });
            }
        } else {
            // Remove extra member slots
            currentMembers.splice(size);
        }

        // Ensure at least one leader
        const hasLeader = currentMembers.some((m) => m.isLeader);
        if (!hasLeader && currentMembers.length > 0) {
            currentMembers[0].isLeader = true;
        }

        setFormData({
            ...formData,
            teamSize: newSize,
            members: currentMembers,
        });
    };

    const handleMemberChange = (index, field, value) => {
        const updatedMembers = [...formData.members];
        updatedMembers[index] = { ...updatedMembers[index], [field]: value };
        setFormData({ ...formData, members: updatedMembers });
    };

    const handleLeaderSelect = (index) => {
        const updatedMembers = formData.members.map((member, i) => ({
            ...member,
            isLeader: i === index,
        }));
        setFormData({ ...formData, members: updatedMembers });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const WEB_APP_URL =
            "https://script.google.com/macros/s/AKfycbxseztDfwRjTlFnRHOs6jSJDJFdXA4nsZS90rn21hb8QLBEtB90V5jVgAfZ8N3oCQ/exec";

        const form = new FormData();
        form.append("teamName", formData.teamName);
        form.append("track", formData.track);
        form.append("teamSize", formData.teamSize);
        form.append("members", JSON.stringify(formData.members));
        form.append("brief", formData.brief);
        form.append("declarationAccepted", formData.declarationAccepted);
        form.append("documentationLink", formData.documentationLink);
        form.append("documentationName", formData.documentationName);

        fetch(WEB_APP_URL, {
            method: "POST",
            body: form,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setIsSubmitting(false);
                    setIsSubmitted(true);
                } else {
                    alert("Error: " + data.message);
                    setIsSubmitting(false);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Submission failed. Please try again.");
                setIsSubmitting(false);
            });
    };

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Read file as Base64
            const reader = new FileReader();
            reader.onload = (event) => {
                setFormData({
                    ...formData,
                    documentationName: file.name,
                    documentationLink: event.target.result, // Base64 encoded file
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReset = () => {
        setFormData({
            teamName: "",
            track: "waste-to-wealth",
            teamSize: "1",
            members: [
                {
                    name: "",
                    phone: "",
                    email: "",
                    institute: "",
                    city: "",
                    isLeader: true,
                },
            ],
            documentationLink: "",
            documentationName: "",
            declarationAccepted: false,
            brief: "",
        });
        setIsSubmitted(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 200,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "1.5rem",
                        overflow: "hidden",
                    }}
                    onWheel={(e) => e.stopPropagation()}
                >
                    {/* Backdrop */}
                    <motion.div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(7, 25, 18, 0.75)",
                            pointerEvents: "auto",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        className="glass-panel"
                        style={{
                            position: "relative",
                            width: "100%",
                            maxWidth: "560px",
                            maxHeight: "90vh",
                            borderRadius: "28px",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                            boxShadow: "0 30px 60px rgba(7, 25, 18, 0.25)",
                            background: "rgba(251, 251, 249, 0.98)",
                            overflow: "hidden",
                            zIndex: 201,
                            display: "flex",
                            flexDirection: "column",
                        }}
                        initial={{ scale: 0.95, y: 15, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 15, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: "absolute",
                                top: "1.5rem",
                                right: "1.5rem",
                                border: "none",
                                background: "rgba(11, 61, 43, 0.05)",
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                display: "grid",
                                placeItems: "center",
                                cursor: "pointer",
                                color: "var(--primary)",
                                transition: "all 0.2s",
                                zIndex: 10,
                            }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(11, 61, 43, 0.1)",
                            }}
                            whileTap={{ scale: 0.9 }}
                            type="button"
                        >
                            <X size={18} />
                        </button>

                        {/* Scrollable Content Container */}
                        <div
                            style={{
                                flex: 1,
                                overflowY: "auto",
                                overflowX: "hidden",
                                padding: "2.5rem 2.5rem 2.5rem 2.5rem",
                                scrollBehavior: "smooth",
                                WebkitOverflowScrolling: "touch",
                                touchAction: "pan-y",
                            }}
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div
                                            style={{
                                                marginBottom: "2rem",
                                                textAlign: "left",
                                            }}
                                        >
                                            <span
                                                className="badge badge-accent"
                                                style={{
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
                                                REGISTRATION OPEN
                                            </span>
                                            <h2
                                                style={{
                                                    fontSize: "1.85rem",
                                                    fontWeight: 800,
                                                    fontFamily:
                                                        "var(--font-heading)",
                                                    color: "var(--primary)",
                                                    letterSpacing: "-0.02em",
                                                }}
                                            >
                                                Secure Your Spot
                                            </h2>
                                            <p
                                                style={{
                                                    fontSize: "0.9rem",
                                                    color: "var(--text-muted)",
                                                }}
                                            >
                                                Enter your details below to
                                                register for the Greenovators
                                                Hackathon 2026.
                                            </p>
                                        </div>

                                        <form
                                            onSubmit={handleSubmit}
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1.25rem",
                                                textAlign: "left",
                                            }}
                                        >
                                            {/* Team Name */}
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
                                                        fontWeight: 700,
                                                        color: "var(--primary)",
                                                        textTransform:
                                                            "uppercase",
                                                        letterSpacing: "0.05em",
                                                    }}
                                                >
                                                    Team Name
                                                </label>
                                                <div className="input-wrapper">
                                                    <Users
                                                        size={16}
                                                        className="input-icon"
                                                    />
                                                    <input
                                                        type="text"
                                                        required
                                                        value={
                                                            formData.teamName
                                                        }
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                teamName:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                        placeholder="e.g., EchoTech Innovators"
                                                        className="form-input"
                                                    />
                                                </div>
                                            </div>

                                            {/* Track Selection */}
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
                                                        fontWeight: 700,
                                                        color: "var(--primary)",
                                                        textTransform:
                                                            "uppercase",
                                                        letterSpacing: "0.05em",
                                                    }}
                                                >
                                                    Hackathon Track
                                                </label>
                                                <div className="input-wrapper">
                                                    <Zap
                                                        size={16}
                                                        className="input-icon"
                                                    />
                                                    <select
                                                        value={formData.track}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                track: e.target
                                                                    .value,
                                                            })
                                                        }
                                                        className="form-input"
                                                        style={{
                                                            appearance: "none",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        <option value="waste-to-wealth">
                                                            Waste to Wealth
                                                        </option>
                                                        <option value="smart-infrastructure">
                                                            Smart & Sustainable
                                                            Infrastructure
                                                        </option>
                                                        <option value="net-zero-ai">
                                                            Net Zero AI
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Members Details */}
                                            <div
                                                style={{
                                                    background:
                                                        "rgba(11, 61, 43, 0.03)",
                                                    padding: "1.25rem",
                                                    borderRadius: "16px",
                                                    border: "1px solid rgba(11, 61, 43, 0.1)",
                                                    marginTop: "1.5rem",
                                                }}
                                            >
                                                <h4
                                                    style={{
                                                        fontSize: "0.9rem",
                                                        fontWeight: 700,
                                                        color: "var(--primary)",
                                                        marginBottom: "1rem",
                                                        textTransform:
                                                            "uppercase",
                                                    }}
                                                >
                                                    Team Members Details
                                                </h4>

                                                {formData.members.map(
                                                    (member, index) => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                marginBottom:
                                                                    index !==
                                                                    formData
                                                                        .members
                                                                        .length -
                                                                        1
                                                                        ? "1.5rem"
                                                                        : "0",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    marginBottom:
                                                                        "0.75rem",
                                                                    gap: "0.5rem",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize:
                                                                            "0.8rem",
                                                                        fontWeight: 700,
                                                                        color: "var(--primary)",
                                                                    }}
                                                                >
                                                                    Member{" "}
                                                                    {index + 1}
                                                                </span>
                                                                <label
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        gap: "0.5rem",
                                                                        cursor: "pointer",
                                                                        fontSize:
                                                                            "0.75rem",
                                                                        fontWeight: 600,
                                                                        color: "var(--secondary)",
                                                                    }}
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={
                                                                            member.isLeader
                                                                        }
                                                                        onChange={() =>
                                                                            handleLeaderSelect(
                                                                                index,
                                                                            )
                                                                        }
                                                                        style={{
                                                                            cursor: "pointer",
                                                                            width: "16px",
                                                                            height: "16px",
                                                                        }}
                                                                    />
                                                                    <Crown
                                                                        size={
                                                                            14
                                                                        }
                                                                    />{" "}
                                                                    Team Leader
                                                                </label>
                                                            </div>

                                                            {/* Name */}
                                                            <div
                                                                style={{
                                                                    marginBottom:
                                                                        "0.75rem",
                                                                }}
                                                            >
                                                                <label
                                                                    style={{
                                                                        fontSize:
                                                                            "0.7rem",
                                                                        fontWeight: 600,
                                                                        color: "var(--text-muted)",
                                                                        textTransform:
                                                                            "uppercase",
                                                                    }}
                                                                >
                                                                    Name
                                                                </label>
                                                                <div className="input-wrapper">
                                                                    <User
                                                                        size={
                                                                            16
                                                                        }
                                                                        className="input-icon"
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        required
                                                                        value={
                                                                            member.name
                                                                        }
                                                                        onChange={(
                                                                            e,
                                                                        ) =>
                                                                            handleMemberChange(
                                                                                index,
                                                                                "name",
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                            )
                                                                        }
                                                                        placeholder="Full name"
                                                                        className="form-input"
                                                                    />
                                                                </div>
                                                            </div>

                                                            {/* Phone & Email Row */}
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "grid",
                                                                    gridTemplateColumns:
                                                                        "1fr 1fr",
                                                                    gap: "0.75rem",
                                                                    marginBottom:
                                                                        "0.75rem",
                                                                }}
                                                                className="form-grid-members"
                                                            >
                                                                <div>
                                                                    <label
                                                                        style={{
                                                                            fontSize:
                                                                                "0.7rem",
                                                                            fontWeight: 600,
                                                                            color: "var(--text-muted)",
                                                                            textTransform:
                                                                                "uppercase",
                                                                        }}
                                                                    >
                                                                        Phone
                                                                    </label>
                                                                    <div className="input-wrapper">
                                                                        <Phone
                                                                            size={
                                                                                16
                                                                            }
                                                                            className="input-icon"
                                                                        />
                                                                        <input
                                                                            type="tel"
                                                                            required
                                                                            value={
                                                                                member.phone
                                                                            }
                                                                            onChange={(
                                                                                e,
                                                                            ) =>
                                                                                handleMemberChange(
                                                                                    index,
                                                                                    "phone",
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                                )
                                                                            }
                                                                            placeholder="+91 XXXXX XXXXX"
                                                                            className="form-input"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        style={{
                                                                            fontSize:
                                                                                "0.7rem",
                                                                            fontWeight: 600,
                                                                            color: "var(--text-muted)",
                                                                            textTransform:
                                                                                "uppercase",
                                                                        }}
                                                                    >
                                                                        Email
                                                                    </label>
                                                                    <div className="input-wrapper">
                                                                        <Mail
                                                                            size={
                                                                                16
                                                                            }
                                                                            className="input-icon"
                                                                        />
                                                                        <input
                                                                            type="email"
                                                                            required
                                                                            value={
                                                                                member.email
                                                                            }
                                                                            onChange={(
                                                                                e,
                                                                            ) =>
                                                                                handleMemberChange(
                                                                                    index,
                                                                                    "email",
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                                )
                                                                            }
                                                                            placeholder="email@university.edu"
                                                                            className="form-input"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Institute & City Row */}
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "grid",
                                                                    gridTemplateColumns:
                                                                        "1fr 1fr",
                                                                    gap: "0.75rem",
                                                                }}
                                                                className="form-grid-members"
                                                            >
                                                                <div>
                                                                    <label
                                                                        style={{
                                                                            fontSize:
                                                                                "0.7rem",
                                                                            fontWeight: 600,
                                                                            color: "var(--text-muted)",
                                                                            textTransform:
                                                                                "uppercase",
                                                                        }}
                                                                    >
                                                                        Institute
                                                                    </label>
                                                                    <div className="input-wrapper">
                                                                        <Building2
                                                                            size={
                                                                                16
                                                                            }
                                                                            className="input-icon"
                                                                        />
                                                                        <input
                                                                            type="text"
                                                                            required
                                                                            value={
                                                                                member.institute
                                                                            }
                                                                            onChange={(
                                                                                e,
                                                                            ) =>
                                                                                handleMemberChange(
                                                                                    index,
                                                                                    "institute",
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                                )
                                                                            }
                                                                            placeholder="Institute Name/Startup"
                                                                            className="form-input"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        style={{
                                                                            fontSize:
                                                                                "0.7rem",
                                                                            fontWeight: 600,
                                                                            color: "var(--text-muted)",
                                                                            textTransform:
                                                                                "uppercase",
                                                                        }}
                                                                    >
                                                                        City
                                                                    </label>
                                                                    <div className="input-wrapper">
                                                                        <MapPin
                                                                            size={
                                                                                16
                                                                            }
                                                                            className="input-icon"
                                                                        />
                                                                        <input
                                                                            type="text"
                                                                            required
                                                                            value={
                                                                                member.city
                                                                            }
                                                                            onChange={(
                                                                                e,
                                                                            ) =>
                                                                                handleMemberChange(
                                                                                    index,
                                                                                    "city",
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                                )
                                                                            }
                                                                            placeholder="City name"
                                                                            className="form-input"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {index !==
                                                                formData.members
                                                                    .length -
                                                                    1 && (
                                                                <div
                                                                    style={{
                                                                        marginTop:
                                                                            "1rem",
                                                                        borderBottom:
                                                                            "1px solid rgba(11, 61, 43, 0.1)",
                                                                    }}
                                                                />
                                                            )}
                                                        </div>
                                                    ),
                                                )}
                                            </div>

                                            {/* Team Size */}
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
                                                        fontWeight: 700,
                                                        color: "var(--primary)",
                                                        textTransform:
                                                            "uppercase",
                                                        letterSpacing: "0.05em",
                                                    }}
                                                >
                                                    Team Size (including leader)
                                                </label>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: "0.5rem",
                                                    }}
                                                >
                                                    {["1", "2", "3", "4"].map(
                                                        (size) => (
                                                            <button
                                                                key={size}
                                                                type="button"
                                                                onClick={() =>
                                                                    handleTeamSizeChange(
                                                                        size,
                                                                    )
                                                                }
                                                                className={`size-btn ${formData.teamSize === size ? "active" : ""}`}
                                                                style={{
                                                                    flex: 1,
                                                                    padding:
                                                                        "0.6rem 0",
                                                                    borderRadius:
                                                                        "10px",
                                                                    border: `1px solid ${formData.teamSize === size ? "var(--primary)" : "rgba(11, 61, 43, 0.1)"}`,
                                                                    background:
                                                                        formData.teamSize ===
                                                                        size
                                                                            ? "var(--primary)"
                                                                            : "transparent",
                                                                    color:
                                                                        formData.teamSize ===
                                                                        size
                                                                            ? "var(--bg-light)"
                                                                            : "var(--primary)",
                                                                    fontWeight: 700,
                                                                    cursor: "pointer",
                                                                    transition:
                                                                        "all 0.2s",
                                                                }}
                                                            >
                                                                {size}
                                                            </button>
                                                        ),
                                                    )}
                                                </div>
                                            </div>

                                            {/* Short Idea Brief */}
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
                                                        fontWeight: 700,
                                                        color: "var(--primary)",
                                                        textTransform:
                                                            "uppercase",
                                                        letterSpacing: "0.05em",
                                                    }}
                                                >
                                                    Initial Idea Abstract
                                                    (Optional)
                                                </label>
                                                <div
                                                    className="input-wrapper"
                                                    style={{
                                                        alignItems:
                                                            "flex-start",
                                                    }}
                                                >
                                                    <FileText
                                                        size={16}
                                                        className="input-icon"
                                                        style={{
                                                            marginTop: "10px",
                                                        }}
                                                    />
                                                    <textarea
                                                        rows="3"
                                                        value={formData.brief}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                brief: e.target
                                                                    .value,
                                                            })
                                                        }
                                                        placeholder="Briefly describe the sustainability problem and your proposed technology solution..."
                                                        className="form-input"
                                                        style={{
                                                            padding:
                                                                "0.75rem 0.75rem 0.75rem 2.5rem",
                                                            resize: "none",
                                                            fontFamily:
                                                                "var(--font-body)",
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Supplementary Documentation - Google Drive Link */}
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
                                                        fontWeight: 700,
                                                        color: "var(--primary)",
                                                        textTransform:
                                                            "uppercase",
                                                        letterSpacing: "0.05em",
                                                    }}
                                                >
                                                    Upload Documentation -
                                                    Optional
                                                </label>
                                                <label
                                                    style={{
                                                        padding: "0.75rem 1rem",
                                                        borderRadius: "10px",
                                                        border: "2px dashed var(--primary)",
                                                        background:
                                                            "rgba(11, 61, 43, 0.05)",
                                                        color: "var(--primary)",
                                                        fontWeight: 600,
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        gap: "0.5rem",
                                                        fontSize: "0.9rem",
                                                        transition: "all 0.2s",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background =
                                                            "rgba(11, 61, 43, 0.1)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background =
                                                            "rgba(11, 61, 43, 0.05)";
                                                    }}
                                                >
                                                    <input
                                                        type="file"
                                                        onChange={
                                                            handleFileChange
                                                        }
                                                        accept=".pdf,.doc,.docx,.txt,.xlsx"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    />
                                                    <FileText size={18} />
                                                    {formData.documentationName
                                                        ? `✓ ${formData.documentationName}`
                                                        : "📁 Choose File"}
                                                </label>
                                                {formData.documentationName && (
                                                    <div
                                                        style={{
                                                            fontSize: "0.75rem",
                                                            color: "var(--secondary)",
                                                            fontWeight: 600,
                                                            marginTop:
                                                                "0.25rem",
                                                        }}
                                                    >
                                                        ✓ File linked:{" "}
                                                        {
                                                            formData.documentationName
                                                        }
                                                    </div>
                                                )}
                                            </div>

                                            {/* Declaration */}
                                            <div
                                                style={{
                                                    background:
                                                        "rgba(16, 185, 129, 0.08)",
                                                    padding: "1rem",
                                                    borderRadius: "12px",
                                                    border: "1px solid rgba(16, 185, 129, 0.2)",
                                                    marginTop: "1rem",
                                                }}
                                            >
                                                <label
                                                    style={{
                                                        display: "flex",
                                                        alignItems:
                                                            "flex-start",
                                                        gap: "0.75rem",
                                                        cursor: "pointer",
                                                        fontSize: "0.85rem",
                                                        color: "var(--primary)",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        required
                                                        checked={
                                                            formData.declarationAccepted
                                                        }
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                declarationAccepted:
                                                                    e.target
                                                                        .checked,
                                                            })
                                                        }
                                                        style={{
                                                            cursor: "pointer",
                                                            width: "18px",
                                                            height: "18px",
                                                            minWidth: "18px",
                                                            marginTop: "2px",
                                                        }}
                                                    />
                                                    <span>
                                                        I declare that all the
                                                        information provided
                                                        above is correct and
                                                        complete. I confirm that
                                                        all team members have
                                                        consented to their
                                                        participation and the
                                                        details submitted are
                                                        accurate. I understand
                                                        that providing false
                                                        information may result
                                                        in disqualification from
                                                        the hackathon.
                                                    </span>
                                                </label>
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={
                                                    isSubmitting ||
                                                    !formData.declarationAccepted
                                                }
                                                className="btn-primary"
                                                style={{
                                                    width: "100%",
                                                    justifyContent: "center",
                                                    padding: "1rem",
                                                    marginTop: "1rem",
                                                    opacity:
                                                        !formData.declarationAccepted
                                                            ? 0.6
                                                            : 1,
                                                    cursor: !formData.declarationAccepted
                                                        ? "not-allowed"
                                                        : "pointer",
                                                }}
                                            >
                                                {isSubmitting ? (
                                                    <span>
                                                        Validating
                                                        credentials...
                                                    </span>
                                                ) : !formData.declarationAccepted ? (
                                                    <span>
                                                        Accept Declaration to
                                                        Continue
                                                    </span>
                                                ) : (
                                                    <>
                                                        Submit Registration{" "}
                                                        <Send size={16} />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "3rem 1.5rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: [0, 1.2, 1] }}
                                            transition={{
                                                delay: 0.1,
                                                duration: 0.6,
                                            }}
                                            style={{
                                                color: "var(--secondary)",
                                                marginBottom: "1.5rem",
                                            }}
                                        >
                                            <CheckCircle2 size={72} />
                                        </motion.div>

                                        <h3
                                            style={{
                                                fontSize: "2rem",
                                                fontWeight: 900,
                                                color: "var(--primary)",
                                                fontFamily:
                                                    "var(--font-heading)",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Successfully Registered!
                                        </h3>
                                        <p
                                            style={{
                                                color: "var(--text-muted)",
                                                marginBottom: "1.5rem",
                                                maxWidth: "380px",
                                            }}
                                        >
                                            Welcome to the revolution.
                                            Verification emails have been sent
                                            to all team members. Mark your
                                            calendar for{" "}
                                            <strong>17th September 2026</strong>
                                            .
                                        </p>

                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100%",
                                                gap: "1rem",
                                                background:
                                                    "rgba(16, 185, 129, 0.05)",
                                                padding: "1.25rem",
                                                borderRadius: "16px",
                                                border: "1px solid rgba(16, 185, 129, 0.15)",
                                                textAlign: "left",
                                                fontSize: "0.85rem",
                                                marginBottom: "1.5rem",
                                                maxHeight: "300px",
                                                overflowY: "auto",
                                            }}
                                        >
                                            <div>
                                                <strong>Team Name:</strong>{" "}
                                                {formData.teamName}
                                            </div>
                                            <div>
                                                <strong>Track:</strong>{" "}
                                                {formData.track
                                                    .replace(/-/g, " ")
                                                    .toUpperCase()}
                                            </div>
                                            <div>
                                                <strong>Team Size:</strong>{" "}
                                                {formData.teamSize} Member
                                                {formData.teamSize > 1
                                                    ? "s"
                                                    : ""}
                                            </div>

                                            <div
                                                style={{
                                                    borderTop:
                                                        "1px solid rgba(16, 185, 129, 0.2)",
                                                    paddingTop: "1rem",
                                                    marginTop: "0.5rem",
                                                }}
                                            >
                                                <strong
                                                    style={{
                                                        display: "block",
                                                        marginBottom: "0.75rem",
                                                    }}
                                                >
                                                    Team Members:
                                                </strong>
                                                {formData.members.map(
                                                    (member, idx) => (
                                                        <div
                                                            key={idx}
                                                            style={{
                                                                marginBottom:
                                                                    "0.75rem",
                                                                paddingLeft:
                                                                    "0.5rem",
                                                                borderLeft:
                                                                    "2px solid var(--secondary)",
                                                            }}
                                                        >
                                                            <div>
                                                                <strong>
                                                                    {
                                                                        member.name
                                                                    }
                                                                </strong>{" "}
                                                                {member.isLeader && (
                                                                    <span
                                                                        style={{
                                                                            color: "var(--secondary)",
                                                                            fontSize:
                                                                                "0.75rem",
                                                                            fontWeight: 700,
                                                                        }}
                                                                    >
                                                                        (LEADER)
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "0.8rem",
                                                                    color: "var(--text-muted)",
                                                                }}
                                                            >
                                                                {member.email}
                                                            </div>
                                                            <div
                                                                style={{
                                                                    fontSize:
                                                                        "0.8rem",
                                                                    color: "var(--text-muted)",
                                                                }}
                                                            >
                                                                {member.phone} |{" "}
                                                                {member.city}
                                                            </div>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "1rem",
                                                width: "100%",
                                            }}
                                        >
                                            <button
                                                onClick={handleReset}
                                                className="btn-secondary"
                                                style={{
                                                    flex: 1,
                                                    justifyContent: "center",
                                                }}
                                            >
                                                Register Another
                                            </button>
                                            <button
                                                onClick={onClose}
                                                className="btn-primary"
                                                style={{
                                                    flex: 1,
                                                    justifyContent: "center",
                                                }}
                                            >
                                                Close Window
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        {/* End of Scrollable Content Container */}
                    </motion.div>
                </div>
            )}

            {/* Styled embedded CSS for Form elements to keep layout clean */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          color: var(--primary);
          opacity: 0.5;
          pointer-events: none;
        }
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border-radius: 12px;
          border: 1px solid rgba(11, 61, 43, 0.15);
          background: rgba(255,255,255,0.7);
          color: var(--primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s;
        }
        .form-input:focus {
          border-color: var(--secondary);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
        }
        .form-input::placeholder {
          color: rgba(11, 61, 43, 0.4);
        }
        .size-btn:hover {
          background: rgba(11, 61, 43, 0.05);
        }
        .size-btn.active:hover {
          background: var(--primary);
        }
        .form-grid {
          grid-template-columns: 1fr 1fr;
        }
        .form-grid-members {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 576px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          .form-grid-members {
            grid-template-columns: 1fr !important;
          }
        }
      `,
                }}
            />
        </AnimatePresence>
    );
}
