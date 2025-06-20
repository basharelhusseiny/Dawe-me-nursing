import Image from "next/image";
import {
  FaFlask,
  FaAmbulance,
  FaSyringe,
  FaUserMd,
  FaHandHoldingMedical,
  FaXRay,
  FaHeartbeat,
  FaUserNurse,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <FaFlask className="text-3xl text-sky-600" />,
      title: "معمل تحاليل متكامل",
      description:
        "سحب عينات من المنزل لجميع أنواع التحاليل الطبية بدقة وسرعة.",
      image: "/images/t7lil.jpg",
    },
    {
      id: 2,
      icon: <FaAmbulance className="text-3xl text-sky-600" />,
      title: "إسعاف مجهز",
      description: "عربة إسعافات مجهزة لنقل المرضى بأمان في جميع المحافظات.",
      image: "/images/as3af.jpg",
    },
    {
      id: 3,
      icon: <FaSyringe className="text-3xl text-sky-600" />,
      title: "خدمات تمريضية سريعة",
      description:
        "تركيب كانيولا ومحاليل، جميع أنواع الحقن، تركيب ورعاية القسطرة والرايل، غيار على الجروح (عمليات - قدم سكري)",
      image: "/images/7okan.jpg",
    },
    {
      id: 4,
      icon: <FaUserMd className="text-3xl text-sky-600" />,
      title: "استشارات طبية",
      description:
        "توفير فريق من أفضل الأطباء الاخصائيين والاستشاريين في جميع التخصصات للكشف المنزلي.",
      image: "/images/astshara.jpg",
    },
    {
      id: 5,
      icon: <FaHandHoldingMedical className="text-3xl text-sky-600" />,
      title: "علاج طبيعي وحجامة",
      description:
        "جلسات علاج طبيعي وتأهيل وحجامة علاجية في راحة منزلك على أيدي متخصصين.",
      image: "/images/7ogama.jpeg",
    },
    {
      id: 6,
      icon: <FaXRay className="text-3xl text-sky-600" />,
      title: "أشعة منزلية",
      description:
        "أشعة عادية X-Ray، أشعة دوبلر ودوبلكس، سونار على البطن والحوض، إيكو على القلب (كبار وأطفال)",
      image: "/images/ash3a.jpg",
    },
    {
      id: 7,
      icon: <FaHeartbeat className="text-3xl text-sky-600" />,
      title: "أجهزة طبية و ڤاك",
      description:
        "توفير وتأجير جميع الأجهزة الطبية مثل أجهزة الڤاك، مولدات وأسطوانات الأكسجين، وأجهزة الضغط والسكر.",
      image: "/images/aghza.jpeg",
    },
    {
      id: 8,
      icon: <FaUserNurse className="text-3xl text-sky-600" />,
      title: "رعاية المرضى وكبار السن",
      description:
        "توفير جليسات وجليس لمرضى الزهايمر وكبار السن، ورعاية الأطفال (بيبي سيتر)، وتمريض متخصص للحالات الحرجة وشفتات إقامة كاملة.",
      image: "/images/re3aya.jpeg",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-b from-white to-sky-200 scroll-mt-[71px]"
    >
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-2">
            خدماتنا الطبية المتكاملة
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            اسرع وافضل فريق طبي متكامل لتقديم خدمات موثوقة في محافظات القاهرة
            الكبرى
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px]"
            >
              <div className="relative h-40">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent"></div>
                <div className="absolute bottom-0 right-0 p-4">
                  <div className="bg-white p-2 rounded-full">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-sky-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-[15px]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
