"use client"
import { useState } from 'react'

const testimonials =

 [
  {
    name: "Rajat Rathee",
    position: "IT Manager, WI Energy",
    content: "Vignesh's leadership has been instrumental in our company's digital transformation. His ability to navigate complex technical challenges while keeping the team motivated is truly remarkable."
  },
  {
    name: "Chandramouli Dorai",
    position: "Chief Evangelist - Cyber Solutions & Digital Signatures, Zoho Corporation Private Limited",
    content: "Vignesh’s technical expertise helped Zoho Vault scale quickly while delivering a great user experience. Known for his empathy towards customers, he consistently goes above and beyond to understand their needs. His leadership in optimizing performance and security significantly boosted user satisfaction."
  },
  {
    name: "Hariharan Lakshmanan",
    position: "Member leadership Staff, Zoho Corporation Private Limited",
    content: "As a team member who has worked with Vignesh, I've experienced tremendous professional growth. His mentorship and technical expertise have been invaluable to my career development."
  }
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Testimonials</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg mb-8">
            <p className="text-gray-300 mb-4 italic">{testimonials[activeIndex].content}</p>
            <div>
              <p className="font-bold text-white">{testimonials[activeIndex].name}</p>
              <p className="text-purple-400">{testimonials[activeIndex].position}</p>
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-purple-500' : 'bg-gray-600'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
