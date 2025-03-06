const data = [
  {
    name: "GitHub",
    url: "https://github.com/GTWB",
  },
  { name: "YouTube", url: "https://www.youtube.com/" },
  { name: "Instagram", url: "https://www.instagram.com/" },
  { name: "Twitter", url: "https://x.com/" },
];

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
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/avatar-jessica.jpeg`}
        alt="jessica"
      />
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
      {data.map((obj) => (
        <button onClick={() => (window.location.href = obj.url)}>
          {obj.name}
        </button>
      ))}
    </div>
  );
}
