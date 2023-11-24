import badar from "src/assets/images/people/badar.png";
import saifullah from "src/assets/images/people/saifullah.png";
import hajirahat from "src/assets/images/people/hajirahat.jpeg";
import innayat from "src/assets/images/people/innayat.png";
import irshad from "src/assets/images/people/irshad.png";
import shakirullah from "src/assets/images/people/shakirullah.jpg";
import shoaib from "src/assets/images/people/shoaib.png";

interface IPeople {
  name: string;
  image: string;
  designation: string;
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
    whatsapp: "+923139292654"
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
    whatsapp: "+923212125219"
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
];

export default peoples;
