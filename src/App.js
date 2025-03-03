function App() {
  return (
    <div className="app">
      <ProfileImage />
      <PersonalInfo />
      <SocialLink />
    </div>
  );
}

export default App;

//APP COMPONENT

/* PROFILE IMAGE COMPONENT */

function ProfileImage() {
  return (
    <div className="imgProfile">
      <img src="/assets/images/avatar-jessica.jpeg" alt="jessica" />
    </div>
  );
}

/* PERSONAL INFORMATION */

function PersonalInfo() {
  return (
    <>
      <h2 style={{ fontWeight: "400", fontSize: "1.7rem" }}>Jessica Randall</h2>
      <p style={{ color: "hsl(75, 94%, 57%)", fontWeight: "700" }}>
        London, United Kingdom
      </p>
      <p style={{ margin: "1rem 0", fontWeight: "400" }}>
        "Front-end Developer and avid reader"
      </p>
    </>
  );
}

/* SOCIAL LINK */

function SocialLink() {
  return (
    <div className="socialContainer">
      <button>GitHub</button>
      <button>Linkedin</button>
      <button>Twitter</button>
      <button>Instagram</button>
      <button>YouTube</button>
    </div>
  );
}
