import React from 'react'
import { FaHeartbeat, FaHandshake, FaAward, FaUserShield, FaClock } from 'react-icons/fa'

const ValuesSection = () => {
  const values = [
    {
      id: 1,
      icon: <FaHeartbeat className="text-4xl text-sky-600 mb-3" />,
      title: "الرحمة",
      description: "في داوي، نؤمن بأن كل لمسة طبية يجب أن تكون إنسانية."
    },
    {
      id: 2,
      icon: <FaHandshake className="text-4xl text-sky-600 mb-3" />,
      title: "الثقة",
      description: "نبني علاقة ثقة دائمة مع مرضانا."
    },
    {
      id: 3,
      icon: <FaAward className="text-4xl text-sky-600 mb-3" />,
      title: "الجودة",
      description: "نلتزم بمعايير طبية دقيقة في كل خدمة نقدمها."
    },
    {
      id: 4,
      icon: <FaUserShield className="text-4xl text-sky-600 mb-3" />,
      title: "الخصوصية",
      description: "نضمن سرية بياناتك واحترام خصوصيتك دائمًا."
    },
    {
      id: 5,
      icon: <FaClock className="text-4xl text-sky-600 mb-3" />,
      title: "الاستجابة السريعة",
      description: "نوصلك بخدمة طبية عند باب بيتك، وقت ما تحتاجها."
    }
  ]

  return (
    <section id="values" className="py-16 bg-gradient-to-b from-sky-200 to-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-2">قيمنا</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">نلتزم بمجموعة من القيم الأساسية التي توجه عملنا وتعاملنا مع المرضى</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value) => (
            <div key={value.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] text-center border-t-4 border-sky-500">
              <div className="flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-bold text-sky-700 mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
