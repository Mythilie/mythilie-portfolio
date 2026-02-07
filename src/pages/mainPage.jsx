import React from "react";
import Images from "../utils/images";

const MainPage = () => {
  const styles = {
    section: {
      backgroundColor: "#ffffff",
      padding: "96px 24px",
      fontFamily: "Inter, system-ui, sans-serif",
    },

    container: {
      maxWidth: "1080px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "280px 1fr",
      gap: "72px",
      alignItems: "center",
    },

    imageWrapper: {
      display: "flex",
      justifyContent: "center",
    },

    profilePic: {
      width: "260px",
      height: "260px",
      borderRadius: "14px",
      objectFit: "cover",
      border: "1px solid #e5e7eb",
    },

    content: {
      color: "#111827",
    },

    heading: {
      fontSize: "14px",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#6b7280",
      marginBottom: "12px",
      fontWeight: "600",
    },

    title: {
      fontSize: "28px",
      fontWeight: "600",
      marginBottom: "24px",
      lineHeight: "1.3",
    },

    text: {
      fontSize: "16px",
      lineHeight: "1.75",
      color: "#374151",
      marginBottom: "18px",
      maxWidth: "640px",
    },

    button: {
      marginTop: "28px",
      padding: "12px 24px",
      backgroundColor: "#111827",
      color: "#ffffff",
      border: "1px solid #111827",
      borderRadius: "6px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
    },

    divider: {
      width: "60px",
      height: "2px",
      backgroundColor: "#111827",
      marginBottom: "24px",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Image */}
        <div style={styles.imageWrapper}>
          <img src={Images.profile} alt="Mythilie" style={styles.profilePic} />
        </div>

        {/* Content */}
        <div style={styles.content}>
          <h3 style={styles.heading}>About Me</h3>
          <div style={styles.divider}></div>

          <h2 style={styles.title}>Front End Developer</h2>

          <p style={styles.text}>
            I'm a Front End Developer with 3+ years of experience in building
            scalable and responsive applications using React.js, Redux,
            JavaScript, and TypeScript.
          </p>

          <p style={styles.text}>
            Skilled in modern UI frameworks like Tailwind CSS and Bootstrap,
            with experience in React Native for mobile apps. I enjoy crafting
            clean interfaces and smooth user experiences.
          </p>

          <button style={styles.button}>Download Resume</button>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
