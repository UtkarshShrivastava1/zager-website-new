import "../ui/Clients.css"; // Import the CSS file

const Clients = () => {
  return (
    <div className="clients-container relative overflow-hidden py-14 ">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle at top-right */}
        <div className="absolute -top-32 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -top-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>

        {/* Small circle at bottom-left */}
        <div className="absolute -bottom-32 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>
      <div className="clients-box mb-3">
        <h4
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#ffbe00",
            marginBottom: "20px",
          }}
          className="text-3xl font-bold text-center text-[#ffbe00] mb-4 outline-3 outline-[#ffbe00] rounded-2xl px-6 py-1  mt-5"
        >
          Our Clients
        </h4>
        <div className="clients-carousel">
          <div className="gradient-left"></div>
          <div className="gradient-right"></div>
          <div className="scroll-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffront.png?alt=media&token=a649eb27-4375-4244-a58e-6195da276306"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffusion.png?alt=media&token=95dea704-ce1c-4b1b-87c7-60d7c7896d7d"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Flpc.png?alt=media&token=c7236b6b-4b59-40e5-8b0e-e0bbb593955b"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fskygym.png?alt=media&token=164f00db-f726-4625-a24b-f037271a7aac"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fnidaanmonopng.PNG.png?alt=media&token=2a4349bf-2714-4b7f-920a-70cede7ae914"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2FLogo4x.png?alt=media&token=2620ba16-f280-4fd3-90a6-0f4a1de2d2f3"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fargo.png?alt=media&token=29f0c24f-2f7b-4d20-8aba-1e0d36f26d0f"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Farise.jpg?alt=media&token=88c4161d-8988-419c-970a-53ef8169b8ae"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffinedine.png?alt=media&token=586d67bc-6228-4b23-924b-9f413505f565"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fhygiene.jpg?alt=media&token=b75d473b-f842-41f4-8d42-a00e50bfd238"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Flpc.png?alt=media&token=c7236b6b-4b59-40e5-8b0e-e0bbb593955b"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fmomos_nation2.png?alt=media&token=636db2fd-46f3-47b7-a0f6-aea8c949317e"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Frevive.png?alt=media&token=4bddc43b-d024-4eba-9b55-c818aad9d86d"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffront.png?alt=media&token=a649eb27-4375-4244-a58e-6195da276306"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffusion.png?alt=media&token=95dea704-ce1c-4b1b-87c7-60d7c7896d7d"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Flpc.png?alt=media&token=c7236b6b-4b59-40e5-8b0e-e0bbb593955b"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fskygym.png?alt=media&token=164f00db-f726-4625-a24b-f037271a7aac"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fnidaanmonopng.PNG.png?alt=media&token=2a4349bf-2714-4b7f-920a-70cede7ae914"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
