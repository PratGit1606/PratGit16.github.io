'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-green-500 font-mono">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/me.jpg" // Replace with your photo URL
            alt="Pratham Hegde"
            className="rounded-full w-150 h-auto border-4 border-green-500 shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-8 text-center md:text-left text-green-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
<p className="mb-4 text-lg text-gray-300 leading-relaxed">
  Hello! I&apos;m <span className="text-green-500 font-bold">Pratham Hegde</span>, a student at <span className="text-green-500 font-bold">Arizona State University</span>, pursuing a degree in Computer Science with a focus on <span className="text-green-500 font-bold">Cybersecurity</span>. I&apos;m proud to hold a <span className="text-green-500">GPA of 4.0/4.0</span> and be part of the <span className="text-green-500 font-bold">Barrett Honors College</span> and the <span className="text-green-500 font-bold">Grand Challenges Scholars Program</span>, while conducting hands-on research at the <span className="text-green-500 font-bold">SEFCOM Lab</span>.
</p>
<p className="mb-4 text-lg text-gray-300 leading-relaxed">
  My interests lie at the intersection of systems security and applied cryptography. From reverse engineering x86 and MIPS binaries to crafting shellcode and exploit chains for real-world vulnerabilities, I enjoy solving complex problems hands-on. Through my research and projects, I&apos;ve worked on everything from framebuffer exploits to AES-ECB oracle attacks, aiming to simulate and patch practical threats.
</p>
<p className="mb-4 text-lg text-gray-300 leading-relaxed">
  I also have a strong interest in customer-facing engineering roles, especially those that involve bridging technical knowledge with end-user needs. My experience as a <span className="text-green-500">Web Experience Designer</span> and Teaching Assistant has refined my ability to debug in real-time, work across front-end and back-end systems, and communicate solutions clearly—skills directly.
</p>
<p className="mb-4 text-lg text-gray-300 leading-relaxed">
  Outside of research, I thrive in leadership and creative roles—serving as <span className="text-green-500">President</span> of the <span className="text-green-500">Indian Students&apos; Association</span> and <span className="text-green-500">Director of Finance</span> at <span className="text-green-500">CS+Social Good ASU</span>. I&apos;ve mentored students in C++ as a UGTA, and these roles help me stay grounded in community, communication, and impact.
</p>
        </motion.div>
      </div>
    </section>
  )
}
