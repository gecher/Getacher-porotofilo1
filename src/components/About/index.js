import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-[#111828] flex flex-col items-center text-gray-100 text-lg font-normal p-5 sm:ml-[25%]">
      {/* Header */}
      <div className="text-4xl md:text-5xl font-bold mt-12 text-center text-yellow-500" data-aos="slide-down">
        About Me 🚀
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-5xl mt-10 bg-[#1E293B] p-8 rounded-lg shadow-lg">
        
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-medium text-yellow-400" data-aos="fade-left">
            I'm <span className="text-yellow-500">Getacher Ashebir,</span> a Full Stack Developer 💻
          </h3>
          <p className="leading-7 text-gray-300 text-justify" data-aos="fade-left">
            Passionate about building scalable and high-performance applications, I specialize in developing e-services, workflow automation, desktop & mobile apps, and dynamic websites. Always eager to explore the latest technologies and solve complex problems! 🔥
          </p>
          <p className="leading-7 text-gray-300 text-justify" data-aos="fade-right">
            My tech stack includes .NET, React.js,Node.js, Next.js,Power Automate, TypeScript, and Java, among others. I'm actively seeking new opportunities 🌍 and excited to collaborate on open-source projects. Let’s innovate together! 🤝
          </p>
        </div>

        {/* Right: Animation & Download Button */}
        <div className="flex-1 flex flex-col items-center" data-aos="slide-left">
          <div className="motion-safe:animate-zoomy w-72 sm:w-80 md:w-96">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
            />
          </div>

          {/* Download Button */}
          <button className="py-3 mt-5 text-white px-9 bg-blue-600 border-2 border-blue-500 rounded-3xl hover:bg-blue-700 hover:scale-105 transition duration-300">
            <a href={require("../../assets/files/GetacherAshebirResume_Latest.pdf")} download={"GetacherAshebirResume_Latest.pdf"} className="flex items-center gap-2">
              Download CV <DownloadIcon /> 📄
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
