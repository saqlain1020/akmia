import badar from "src/assets/images/people/badar.png";
import saifullah from "src/assets/images/people/saifullah.png";
import hajirahat from "src/assets/images/people/hajirahat.jpeg";
import innayat from "src/assets/images/people/innayat.png";
import irshad from "src/assets/images/people/irshad.png";
import shakirullah from "src/assets/images/people/shakirullah.jpg";
import shoaib from "src/assets/images/people/shoaib.png";
import mansoor from "src/assets/images/people/mansoor.png";
import muneer from "src/assets/images/people/muneer.jpeg";
import adnan from "src/assets/images/people/adnan.jpeg";
import abdulraheem from "src/assets/images/people/abdulraheem.png";
import faisalwasi from "src/assets/images/people/faisalwasi.png";
import sharaf from "src/assets/images/people/sharaf.png";
import waseem from "src/assets/images/people/waseem.png";
import shahjahan from "src/assets/images/people/shahjahan.png";
import saleem from "src/assets/images/people/saleem.png";
import ahmad from "src/assets/images/people/ahmad.png";
import ahsanullah from "src/assets/images/people/ahsanullah.png";
import raj from "src/assets/images/people/raj.png";
import faisalqureshi from "src/assets/images/people/faisalqureshi.png";

interface IPeople {
  name: string;
  image: string;
  designation?: string;
  industry: string[];
  contact: string[];
  facebook?: string;
  email?: string;
  titleCardLines: string[];
  whatsapp?: string;
  tag: string;
}

const peoples: IPeople[] = [
  {
    name: "Badar Iqbal",
    image: badar,
    designation: "Founder Chairman",
    industry: ["All Karachi Marbles Industries Association", "Bisma Marbles Industry"],
    contact: ["+92-313-9292654", "+92-300-2292654"],
    facebook: "https://facebook.com",
    email: "bismamarble@email.com",
    titleCardLines: ["Founder Chairman", "M/S Bisma Marbles Industry"],
    tag: "badar",
    whatsapp: "+923139292654",
  },
  {
    name: "Saifullah Khan Niaz",
    designation: "Chairman",
    image: saifullah,
    industry: ["M/S. Stonecrafts industry"],
    titleCardLines: ["Chairman", "M/S. Stonecrafts industry"],
    contact: ["+92-300-82819139"],
    tag: "saifullah",
  },
  {
    name: "Haji Rahat Gul",
    designation: "Vice Chairman Traded",
    industry: ["M/S Haji Rahat gul & brothers marble"],
    titleCardLines: ["Vice Chairman Traded", "M/S Haji Rahat gul & brothers marble"],
    contact: ["+92-300-0929355"],
    tag: "hajirahat",
    image: hajirahat,
  },
  {
    name: "Inayat-ur-rahman",
    designation: "Vice Chairman Industres",
    industry: ["M/S Rehman City Marble"],
    titleCardLines: ["Vice Chairman Industres", "M/S Rehman City Marble"],
    contact: ["+92-321-212521", "+92-347-4747947"],
    tag: "inayarurrehman",
    image: innayat,
    email: "rehmancity@gmail.com",
    whatsapp: "+923212125219",
  },
  {
    name: "Muhammad Irshad",
    designation: "Vice Chairman Marble City",
    industry: ["Asif Marble"],
    contact: ["+92-309-2626060"],
    titleCardLines: ["Vice Chairman Marble City", "Asif Marbles"],
    tag: "irshad",
    image: irshad,
  },
  {
    name: "Shakirullah khan",
    designation: "Genernal Secretary",
    industry: ["M/S. Urooj marble"],
    contact: ["+92-300-9219381"],
    titleCardLines: ["Genernal Secretary", "M/S. Urooj marble"],
    tag: "shakirullah",
    image: shakirullah,
  },
  {
    name: "Shoaib Ishaq",
    designation: "Finance Secretary",
    industry: ["Firdous Marble"],
    contact: ["+92-345-3453450"],
    titleCardLines: ["Finance Secretary", "Firdous Marble"],
    tag: "shoaib",
    image: shoaib,
  },
  {
    name: "Mansoor Ali",
    industry: ["Inayat Marble"],
    contact: ["+92-332-2238657"],
    titleCardLines: ["Inayat Marble", "."],
    tag: "mansoor",
    image: mansoor,
  },
  {
    name: "Muneer",
    industry: ["Muneer Marble"],
    contact: ["+92-321-2964756"],
    titleCardLines: ["Muneer Marble", "."],
    tag: "muneer",
    image: muneer,
  },
  {
    name: "Adnan",
    industry: ["New Dilawer Marble"],
    contact: ["+92-316-2147812"],
    titleCardLines: ["New Dilawer Marble", "."],
    tag: "adnan",
    image: adnan,
  },
  {
    name: "Abdul Raheem",
    industry: ["Sultan e Hindh Marble"],
    contact: [],
    titleCardLines: ["Sultan e Hindh Marble", "."],
    tag: "abdulraheem",
    image: abdulraheem,
  },
  {
    name: "Faisalwasi Ansari",
    industry: ["Sayada Marble"],
    contact: [],
    titleCardLines: ["Sayada Marble", "."],
    tag: "faisalwasi",
    image: faisalwasi,
  },
  {
    name: "Sharf Ahmed",
    industry: ["Chustia Sulaimania Marble"],
    contact: [],
    titleCardLines: ["Chustia Sulaimania Marble", "."],
    tag: "sharaf",
    image: sharaf,
  },
  {
    name: "Waseem Raja",
    industry: ["Sono Marble"],
    contact: [],
    titleCardLines: ["Sono Marble", "."],
    tag: "waseem",
    image: waseem,
  },
  {
    name: "Shahjahan",
    industry: ["Shahjahan Muskan Marble"],
    contact: [],
    titleCardLines: ["Shahjahan Muskan Marble", "."],
    tag: "shahjahan",
    image: shahjahan,
  },
  {
    name: "M. Saleem",
    industry: ["Safa Marble"],
    contact: [],
    titleCardLines: ["Safa Marble", "."],
    tag: "saleem",
    image: saleem,
  },
  {
    name: "Ahmad Khan",
    industry: ["Sindh Marble"],
    contact: [],
    titleCardLines: ["Sindh Marble", "."],
    tag: "ahmad",
    image: ahmad,
  },
  {
    name: "Ahsanullah (Shina)",
    industry: ["Shina Marble"],
    contact: [],
    titleCardLines: ["Shina Marble", "."],
    tag: "ahsanullah",
    image: ahsanullah,
  },
  {
    name: "Raj Muhammad",
    industry: ["Sajed ullah Marble"],
    contact: [],
    titleCardLines: ["Sajed ullah Marble", "."],
    tag: "raj",
    image: raj,
  },
  {
    name: "Faisal Qureshi",
    industry: ["Majeed & Sons Marble"],
    contact: [],
    titleCardLines: ["Majeed & Sons Marble", "."],
    tag: "faisalqureshi",
    image: faisalqureshi,
  },
];

export default peoples;
