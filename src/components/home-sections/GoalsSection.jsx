import React from "react";
import {
  FaCheckCircle,
  FaStarOfLife,
  FaHandHoldingMedical,
  FaHospital,
  FaHome,
} from "react-icons/fa";

const GoalsSection = () => {
  const goals = [
    {
      id: 1,
      icon: <FaStarOfLife className="text-4xl text-sky-600 mb-3" />,
      title: "أعلى جودة",
      description: "توفير خدمات طبية بأعلى جودة واحترافية.",
    },
    {
      id: 2,
      icon: <FaHandHoldingMedical className="text-4xl text-sky-600 mb-3" />,
      title: "تسهيل الحياة",
      description: "تسهيل حياة المرضى وأسرهم.",
    },
    {
      id: 3,
      icon: <FaHospital className="text-4xl text-sky-600 mb-3" />,
      title: "تقليل العناء",
      description: "تقليل الحاجة للذهاب إلى المستشفيات.",
    },
    {
      id: 4,
      icon: <FaHome className="text-4xl text-sky-600 mb-3" />,
      title: "بيئة آمنة",
      description: "دعم تعافي المرضى في بيئة مريحة وآمنة.",
    },
  ];

  return (
    <section id="goals" className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-2">أهدافنا</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            نسعى لتحقيق مجموعة من الأهداف التي تضمن تقديم أفضل رعاية صحية منزلية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-sky-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] text-center"
            >
              <div className="flex justify-center">{goal.icon}</div>
              <h3 className="text-xl font-bold text-sky-700 mb-2">
                {goal.title}
              </h3>
              <p className="text-gray-700">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
