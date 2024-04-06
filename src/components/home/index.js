import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/7d26/92c3/02df419cba923b35861b32302ece4d90?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MUmgb5L4jAXQBEtHgpcsalDpeoAYcZt3mpmF607DkqHwzMDlDQWnHNKrbZyuHkJ1xK7i5ehYTsUqVJ7CHyqf7rlKdnU6SvKX5CiiBJ8yD1MZxeiATIWldXZqu6yGTcflX0ZK9lZGV0nCy6r5OayBcGyov4EUQQhPCJm-LJ0OviBR4xDXAK3dR~3ahhihL9AiCe8JXerJUN~U8Ln0jzQl-N2rzGRUy1sey736-Ubc5LryBBRUaIt3eRTUJXIFFa32Ni2uGLJ7A-FSo5WjFYDTzrhOLRexkoZQPpSosfSkrm16DYH4dUoK1PtOC~oIXVMtEY3Aa7WZqAaVyVp0nrpiLQ__")',
        backgroundSize: "cover",
        backgroundPosition: "left center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        className="container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "80%", // Adjusted for responsiveness
        }}
      >
        <div
          className="box"
          style={{
            width: "100%", // Adjusted for responsiveness
            maxWidth: "630px", // Figma scale width
            padding: "14px 20px 22px 20px",
            backgroundColor: "#1CBDDD",
            opacity: 0.8, // Figma scale opacity
            borderRadius: "10px", // Rounded corners
          }}
        >
          <p
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: "2.5vw", // Adjusted for responsiveness
              lineHeight: "1.2",
              marginBottom: "1rem", // Added spacing below text
            }}
          >
            We crush your competitors, goals, and sales records - without the B.S.
          </p>
          <button
            style={{
              color: "white",
              backgroundColor: "#F28D35",
              padding: "0.5rem 1rem", // Adjusted padding
              border: "none",
              borderRadius: "5px",
              fontSize: "1.5vw", // Adjusted for responsiveness
            }}
          >
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
