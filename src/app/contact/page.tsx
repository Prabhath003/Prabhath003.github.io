"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants/contact";
import { cn } from "@/lib/utils/cn";

/**
 * Contact Page
 * Contact information and social links
 */
export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      color: "text-red-600 bg-red-50",
    },
    {
      icon: Phone,
      label: "Phone",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
      color: "text-green-600 bg-green-50",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: CONTACT_INFO.linkedin,
      color: "text-blue-700 bg-blue-50",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: CONTACT_INFO.github,
      color: "text-slate-900 bg-slate-50",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "Follow me",
      href: CONTACT_INFO.twitter || "#",
      color: "text-sky-500 bg-sky-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageLayout title="Get In Touch">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Contact Message */}
        <motion.div variants={itemVariants}>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels below!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                variants={itemVariants}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-4 p-6 rounded-lg",
                  "border border-slate-200 hover:shadow-lg transition-all",
                  "group hover:border-slate-300"
                )}
              >
                <div
                  className={cn(
                    "p-3 rounded-lg",
                    method.color
                  )}
                >
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                    {method.label}
                  </h3>
                  <p className="text-slate-900 font-medium mt-1">
                    {method.value}
                  </p>
                </div>
                <span className="text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Calendly Scheduling */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Schedule a Meeting
          </h3>
          <div
            className="calendly-inline-widget"
            data-url={CONTACT_INFO.calendly}
            style={{ minHeight: "600px" }}
            suppressHydrationWarning
          ></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Interested in collaboration?
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Whether you have a project in mind, want to discuss AI solutions, or just want to chat about the latest developments in ML and AI, I'd love to hear from you!
          </p>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
}
