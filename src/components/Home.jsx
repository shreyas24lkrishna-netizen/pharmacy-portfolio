import React, { useState } from "react";
import "./../App.css";
import shreyaspng from "./../assets/shreyas.png"; // Make sure your photo is here
import bodybg from "./../assets/body-bg.png";
import tcm from "./../assets/tcm.png";
import dls from "./../assets/dls.png";
import dissolution from "./../assets/dissolution.png";
import uv from "./../assets/uv.png";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Home() {
const [showConnectModal, setShowConnectModal] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formSource, setFormSource] = useState("Let's Connect");
  const [selectedInstrument, setSelectedInstrument] = useState("dls");

  const triggerCvDownload = () => {
    const link = document.createElement("a");
    link.href = "/Shreyas_N_CV.pdf";
    link.download = "Shreyas_N_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
     const response = await fetch('${API_BASE_URL}/api/connect', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: formSource,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        if (formSource === "Download CV") {
          triggerCvDownload();
        }
      } else {
        alert("Failed to send details. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error. Make sure the backend server is running.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div className="portfolio-container">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="nav-brand animate-fade-down">SHREYAS N</div>
        <ul className="nav-links animate-fade-down">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#research">Research</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* --- HERO SECTION WITH UPLOADED BACKGROUND --- */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-image-box animate-float">
            <img src={shreyaspng} alt="Shreyas N" className="profile-photo" />
          </div>
          <div className="hero-text animate-slide-up">
            <h1>
              Hi, I'm <span className="highlight-gradient">Shreyas N</span>
            </h1>
            <h3>Research Enthusiast</h3>
            <p className="hero-tags">
              ➢<span>Formulation Development</span> ➢{" "}
              <span>Pharmaceutical  Manufacturing</span>➢{" "}
              <span>Drug Delivery Research</span>
            </p>
            <p className="hero-desc">
              I am a Lung Cancer research enthusiast passionate in developing
              innovative pharmaceutical formulations and exploring advanced drug
              delivery technologies for better therapeutic outcomes
            </p>
            <div className="hero-btns">
             <button
                onClick={() => {
                  setFormSource("Download CV");
                  setShowCvModal(true);
                }}
                className="btn primary-btn"
                style={{ border: "none", cursor: "pointer" }}
              >
                Download CV 📥
              </button>
              <button
                onClick={() => {
                  setFormSource("Let's Connect");
                  setShowConnectModal(true);
                }}
                className="btn secondary-btn"
                style={{ border: "none", cursor: "pointer" }}
              >
                Let's Connect 🤝
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT WRAPPER (Pharmacy Tech Theme) --- */}
      <div className="main-content-body">
        {/* --- ABOUT ME --- */}
        <section id="about" className="section about-section">
          <h2 className="section-title">
            <span>ABOUT ME</span>
          </h2>
          <div className="about-grid glass-card">
            <p className="about-text">
              I am an M.Pharm graduate specializing in Pharmaceutics my academic
              research experience includes formulation development, polymeric
              nanoparticle preparation, formulation optimization,
              characterization and in-vitro drug-release studies. I aspire to
              build my career in pharmaceutical research, formulation
              development, technology transfer and pharmaceutical manufacturing.
            </p>
            <div className="about-cards">
              <div className="mini-card">
                🔬 <strong>Research Scholar</strong>
              </div>
              <div className="mini-card">
                🧪 <strong>Formulation & Drug Delivery</strong>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section
          id="experience"
          className="section sub-section"
          style={{ paddingBottom: 0 }}
        >
          <h2 className="section-title">
            <span>💼 EXPERIENCE</span>
          </h2>
        </section>

        <div className="experience-grid-uneven">
          {/* Research Scholar (Wider Column) */}
          <div className="card glass-card timeline-card">
            <div className="timeline-header">
              <h3>Research Scholar</h3>
              <span className="date-badge">Dec 2025 – Oct 2026</span>
            </div>

            <ul>
              <li>
                Formulated and characterized Erdafitinib-loaded chitosan-coated
                PLGA nanoparticles.
              </li>
              <li>
                Applied Design of Experiments (DoE) for formulation
                optimization.
              </li>
              <li>
                Evaluated particle size, PDI, zeta potential and entrapment
                efficiency.
              </li>
              <li>
                Performed in-vitro drug-release studies and release-kinetic
                analysis.
              </li>
            </ul>
          </div>

          {/* Industrial Intern (Narrower Column) */}
          <div className="card glass-card timeline-card">
            <div className="timeline-header">
              <h3>Industrial Intern</h3>
              <span className="date-badge">Nov 2024 – Dec 2024</span>
            </div>
            <p className="sub-text">Remidex Pharma Pvt. Ltd., Bengaluru</p>
            <ul>
              <li>
                Exposure to Quality Assurance, Quality Control, tablet & capsule
                sections, and store operations.
              </li>
              <li>Exposure to liquid oral manufacturing.</li>
              <li>Observed pharmaceutical stores operations.</li>
            </ul>
          </div>
        </div>

        {/* --- RESEARCH INTERESTS --- */}
        <section id="research" className="section research-interests">
          <h2 className="section-title">
            <span>🔬 RESEARCH INTERESTS</span>
          </h2>
          <div className="interests-grid">
            {[
              "Formulation & Reseach Development",
              "Pharmaceutical Manufacturing System",
              "Regulatory Documentation",

              "Lung Cancer Therapeutics",
            ].map((item, idx) => (
              <div key={idx} className="interest-item glass-card">
                <span className="interest-icon">🧬</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- TECHNICAL SKILLS SECTION --- */}
        <section id="skills" className="section sub-section">
          <h2 className="section-title">
            <span>⚙️ TECHNICAL SKILLS</span>
          </h2>

          <div className="card glass-card instruments-section-container">
            <h3 className="instruments-main-title">Instruments Handled</h3>

            <div className="instruments-split-layout">
              {/* Left Side: Vertical Navigation Buttons */}
              <div className="instrument-nav-vertical">
                <button
                  type="button"
                  className={
                    "inst-vertical-btn " +
                    (selectedInstrument === "tablet" ? "active" : "")
                  }
                  onClick={() => setSelectedInstrument("tablet")}
                >
                  <span className="pill-icon">💊</span>
                  <span>Tablet Compression Machine</span>
                </button>
                <button
                  type="button"
                  className={
                    "inst-vertical-btn " +
                    (selectedInstrument === "dls" ? "active" : "")
                  }
                  onClick={() => setSelectedInstrument("dls")}
                >
                  <span className="pill-icon">🔬</span>
                  <span>Dynamic Light Scattering</span>
                </button>
                <button
                  type="button"
                  className={
                    "inst-vertical-btn " +
                    (selectedInstrument === "dissolution" ? "active" : "")
                  }
                  onClick={() => setSelectedInstrument("dissolution")}
                >
                  <span className="pill-icon">⏱️</span>
                  <span>Dissolution Apparatus</span>
                </button>
                <button
                  type="button"
                  className={
                    "inst-vertical-btn " +
                    (selectedInstrument === "uv" ? "active" : "")
                  }
                  onClick={() => setSelectedInstrument("uv")}
                >
                  <span className="pill-icon">📊</span>
                  <span>UV-Visible Spectrophotometer</span>
                </button>
              </div>

              {/* Right Side: Content Showcase Box */}
              <div className="instrument-showcase-box">
                {selectedInstrument === "dls" && (
                  <div className="animate-fade-down instrument-detail-content">
                    <div className="instrument-text-side">
                      <h4>Dynamic Light Scattering (DLS)</h4>
                      <p className="sub-text">
                        Operated particle size and zeta potential analyser for
                        the characterization of nanoparticle formulations.
                        Gained practical exposure to sample dilution and
                        preparation, cuvette loading, instrument stabilization,
                        measurement setup, and analysis of particle size
                        distribution and zeta potential results.
                      </p>
                    </div>
                    <div className="instrument-image-side">
                      <img
                        src={dls}
                        alt="Dynamic Light Scattering"
                        className="instrument-real-img"
                      />
                    </div>
                  </div>
                )}

                {selectedInstrument === "dissolution" && (
                  <div className="animate-fade-down instrument-detail-content">
                    <div className="instrument-text-side">
                      <h4>Dissolution Apparatus</h4>
                      <p className="sub-text">
                        Gained hands on experience in operating the DS 8000
                        dissolution apparatus for in-vitro drug release studies
                        using basket and paddle-type stirring systems.
                        Experienced in dissolution medium preparation,
                        temperature and RPM setting, sampling at specified time
                        intervals, and monitoring drug release for
                        pharmaceutical dosage forms.
                      </p>
                    </div>
                    <div className="instrument-img-side">
                      <img
                        src={dissolution}
                        alt="dissolution"
                        className="instrument-real-img"
                      />
                    </div>
                  </div>
                )}

                {selectedInstrument === "uv" && (
                  <div className="animate-fade-down instrument-detail-content">
                    <div className="instrument-text-side">
                      <h4>UV-Visible Spectrophotometer</h4>
                      <p className="sub-text">
                        Operated UV-Visible Spectrophotometer under supervision
                        for pharmaceutical drug analysis, including absorbance
                        measurement and wavelength scanning. Gained practical
                        exposure to instrument initialization, baseline
                        correction, wavelength and absorbance checks, sample
                        analysis, and recording results in accordance with the
                        laboratory SOP.
                      </p>
                    </div>
                    <div className="instrument-img-side">
                      <div className="instrument-image-side">
                        <img
                          src={uv}
                          alt="Dynamic Light Scattering"
                          className="instrument-real-img"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {selectedInstrument === "tablet" && (
                  <div className="animate-fade-down instrument-detail-content">
                    <div className="instrument-text-side">
                      <h4>Tablet Compression Equipment</h4>
                      <p className="sub-text">
                        Gained hands on experience in operating tablet punching
                        machine for tablet compression, including punch and die
                        assembly, granule feeding, tablet weight adjustment, and
                        compression pressure control. Gained practical
                        experience in adjusting machine speed and evaluating
                        tablet weight variation, hardness, thickness,
                        disintegration, and friability.
                      </p>
                    </div>
                    <div className="instrument-img-side">
                      <img
                        src={tcm}
                        alt="Tablet Compression Machine"
                        className="instrument-real-img"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS SECTION --- */}

        <section id="projects" className="section sub-section">
          <h2 className="section-title">
            <span>🚀 FEATURED PROJECTS</span>
          </h2>

          <div className="projects-grid-3col">
            <div className="project-card glass-card">
              <h4>
                Formulation and Evaluation of Chitosan-Coated PLGA Nanoparticles
                for Erdafitinib... (2026)
              </h4>
              <p className="sub-text">
                Formulation of Erdafitinib-loaded PLGA nanoparticles with
                chitosan coating and optimization using DoE.
              </p>
              <button className="view-btn">View Details &rarr;</button>
            </div>

            <div className="project-card glass-card">
              <h4>
                Formulation and Evaluation of Polyherbal Face Wash Tablets...
                (2024)
              </h4>
              <p className="sub-text">
                Development of herbal face wash tablets using four plant
                extracts, with formulation optimization and evaluation of tablet
                properties and skin irritation
              </p>
              <button className="view-btn">View Details &rarr;</button>
            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS SECTION --- */}

        <section id="projects" className="section sub-section">
          <h2 className="section-title">
            <span>🖼️ POSTERS</span>
          </h2>
          <div className="projects-grid-3col">
            <div className="project-card glass-card">
              <h4>
                Development of Chitosan-Coated PLGA Nanoparticles for Targeted
                Pulmonary Delivery...
              </h4>
              <p className="sub-text">
                Poster presented at the 74th Indian Pharmaceutical Congress,
                Bengaluru, 2025.
              </p>
              <button className="view-btn">View Details &rarr;</button>
            </div>

            <div className="project-card glass-card">
              <h4>
                Design and Development of Euphorbia hirta-Loaded Nanosponge Gel
                for Warts
              </h4>
              <p className="sub-text">
                Poster presented at the National Conference on Smart
                Biomaterials, NITTE Mangaluru, 2026.
              </p>
              <button className="view-btn">View Details &rarr;</button>
            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS SECTION --- */}

        <section id="projects" className="section sub-section">
          <h2 className="section-title">
            <span>🎤 CONFERENCES</span>
          </h2>

          <div className="project-card glass-card">
            <h4>
              ANRF-Sponsored Advanced Training Workshop – MAHE, Manipal (2026)
            </h4>
            <p className="sub-text">
              Participated in the Advanced Training Workshop on Clinical and
              Translational Research for Precision Medicine in Lung Diseases,
              focusing on emerging research approaches in pulmonary and
              translational medicine.
            </p>
            <button className="view-btn">View Details &rarr;</button>
          </div>

          <div className="project-card glass-card">
            <h4>
              Industry Interaction-cum-Workshop on Biopesticides and
              Biostimulants – IPFT & CSIR-CFTRI, Mysuru
            </h4>
            <p className="sub-text">
              Participated in an industry-oriented workshop conducted by the
              Institute of Pesticide Formulation Technology (IPFT) in
              collaboration with CSIR-CFTRI, Mysuru, exploring biopesticides,
              biostimulants and their formulation-related applications.
            </p>
            <button className="view-btn">View Details &rarr;</button>
          </div>
        </section>

        {/* --- PUBLICATIONS & CERTIFICATIONS --- */}
        <div className="grid-2col">
          <section className="section sub-section">
            <h2 className="section-title">
              <span>📖 PUBLICATION</span>
            </h2>
            <div className="card glass-card">
              <p>
                <strong>
                  Formulation and Evaluation of Poly Herbal Face Wash Tablets: A
                  Novel Approach for Skin Health Improvement.
                </strong>
              </p>
              <p className="sub-text mt-2">
                Sheeba FR, Abhishek R, Shreyas N, et al.{" "}
                <em>Biochem Cell Arch</em>. 2025;25(2):1697-1702.
              </p>
              <a
                href="https://www.researchgate.net/publication/397563530_Formulation_and_evaluation_of_poly_herbal_face_wash_tablets_A_novel_approach_for_skin_health_improvement"
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn mt-3"
                style={{ display: "inline-block", textDecoration: "none" }}
              >
                View DOI 🔗
              </a>
            </div>
          </section>

          <section className="section sub-section">
            <h2 className="section-title">
              <span>🏆 CERTIFICATIONS</span>
            </h2>
            <div className="card glass-card">
              <h3>Certifications</h3>
              <ul className="mb-3">
                <li>
                  Regulatory Affairs for Pharmaceutical Industry – Researium
                  Labs.
                </li>
                <li>
                  Good Clinical Practice (GCP) – NIDA Clinical Trials Network.
                </li>
                <li>
                  Introduction to GMP and Pharmacovigilance – BioPharma
                  Institute.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* --- "LET'S CONNECT" FORM POPUP MODAL --- */}
      {showConnectModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowConnectModal(false)}
        >
          <div
            className="modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close-btn"
              onClick={() => setShowConnectModal(false)}
            >
              &times;
            </span>
            <div className="modal-icon">🤝</div>
            <h3>Let's Connect</h3>
            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="connect-form">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              <button
                  type="submit"
                  disabled={isSending}
                  className="btn primary-btn"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    border: "none",
                    cursor: isSending ? "not-allowed" : "pointer",
                    opacity: isSending ? 0.7 : 1,
                  }}
                >
                  {isSending ? "Sending... ⏳" : "Submit & Connect 🚀"}
                </button>
              </form>
            ) : (
             <div className="success-msg">
                <p
                  style={{
                    color: "#38bdf8",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Thank you, {formData.name}!
                </p>
                <p>
                  {formSource === "Download CV"
                    ? "Your CV download has started! If it didn't start automatically, click below."
                    : "Your details have been sent. I will get back to you shortly."}
                </p>
                {formSource === "Download CV" && (
                  <a
                    href="/Shreyas_N_CV.pdf"
                    download="Shreyas_N_CV.pdf"
                    className="btn secondary-btn"
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      textDecoration: "none",
                    }}
                  >
                    Download CV Again 📥
                  </a>
                )}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "" });
                    setShowConnectModal(false);
                  }}
                  className="btn primary-btn"
                  style={{
                    marginTop: "15px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- "DOWNLOAD CV" WARNING POPUP MODAL --- */}
      {showCvModal && (
        <div className="modal-overlay" onClick={() => setShowCvModal(false)}>
          <div
            className="modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={() => setShowCvModal(false)}>
              &times;
            </span>
            <div className="modal-icon">📄</div>
            <h3>CV Access Notice</h3>
            <p>
              To download my CV or professional documents, please fill out the
              connection form first!
            </p>
            <div className="modal-actions">
              <button
                onClick={() => {
                  setFormSource("Download CV");
                  setShowCvModal(false);
                  setShowConnectModal(true);
                }}
                className="btn primary-btn"
                style={{ border: "none", cursor: "pointer" }}
              >
                Fill Form 📝
              </button>
              <button
                onClick={() => setShowCvModal(false)}
                className="btn secondary-btn"
                style={{ border: "none", cursor: "pointer" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer id="contact" className="footer">
        <h2 className="footer-title">GET IN TOUCH</h2>
        <p className="footer-subtitle">
          Feel free to reach out for collaborations, research opportunities or
          professional inquiries.
        </p>
        <div className="footer-contact-info">
          <div className="contact-badge">✉️ shreyyas.n@gmail.com</div>
          <div className="contact-badge">📍 Bengaluru, India</div>
          <div className="contact-badge">💼 linkedin.com/in/shreyasn05</div>
        </div>
        <p className="copyright">© 2026 Shreyas N. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
