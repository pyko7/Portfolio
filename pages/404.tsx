const Custom404 = () => {
  return (
    <section
      style={{
        position: "absolute",
        inset: 0,
        width: 1,
        height: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
      }}
    >
      <h2 style={{ fontWeight: 700 }}>404</h2>
      <p style={{ fontSize: 34, fontWeight: 500 }}>Oops... Page not found</p>
    </section>
  );
};

export default Custom404;
