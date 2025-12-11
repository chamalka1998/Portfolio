import React from "react";
import { motion } from "framer-motion";
import { contact, socialLinks } from "../../config";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Send,
} from "lucide-react";

function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: contact.location,
    },
  ];

  const socials = [
    {
      icon: <Github className="w-6 h-6" />,
      href: socialLinks.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: socialLinks.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: socialLinks.facebook,
      label: "Facebook",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Send className="w-4 h-4" />
            GET IN TOUCH
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Connect
            </span>
          </h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-start gap-5 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 font-semibold uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-lg text-white group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-5 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 font-semibold uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-lg text-white">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <p className="text-gray-400 mb-6 font-semibold uppercase tracking-wider text-sm">
                Follow Me
              </p>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 hover:border-transparent transition-all duration-300 shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form or CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Card glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-slate-800/90 backdrop-blur-sm p-10 rounded-2xl border border-slate-700/50 shadow-xl h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to start a project?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                I'm always open to discussing new opportunities, creative ideas,
                or partnership possibilities. Let's build something amazing
                together!
              </p>

              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Send Me an Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
