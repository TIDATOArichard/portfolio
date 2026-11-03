"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  MessageSquare,
  Sparkles,
  Clock
} from "lucide-react";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 border-t border-[#ffffff10]"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-[#a476ff] mb-2 shiny-sec block">
            Échangeons ensemble
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Contact
          </h3>
          <p className="text-sm md:text-base text-[#f3f3f398] mt-2 max-w-xl">
            Vous avez une idée de projet, une mission freelance ou une opportunité professionnelle ? N'hésitez pas à m'écrire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#1414149c] border border-[#ffffff10] space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#a476ff]" />
                Coordonnées Directes
              </h4>

              {/* Email with copy button */}
              <div className="space-y-1.5">
                <span className="text-xs text-[#f3f3f360] uppercase tracking-wider block">
                  Adresse Email
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1a1a] border border-[#ffffff0a]">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-medium text-white hover:text-[#a476ff] transition-colors truncate"
                  >
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 text-[#f3f3f380] hover:text-white transition-colors"
                    title="Copier l'adresse email"
                  >
                    {copied ? (
                      <CheckCircle className="w-4 h-4 text-[#A9FF5B]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-1.5">
                <span className="text-xs text-[#f3f3f360] uppercase tracking-wider block">
                  Téléphone / WhatsApp
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1a1a] border border-[#ffffff0a]">
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-medium text-white hover:text-[#A9FF5B] transition-colors"
                  >
                    {personal.phone}
                  </a>
                  <a
                    href={personal.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 rounded-md bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-medium hover:bg-[#25D366]/30 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <span className="text-xs text-[#f3f3f360] uppercase tracking-wider block">
                  Localisation
                </span>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1a1a1a] border border-[#ffffff0a]">
                  <MapPin className="w-4 h-4 text-[#a476ff] shrink-0" />
                  <span className="text-sm font-medium text-white">
                    {personal.location} (Disponible à distance & sur site)
                  </span>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-2 text-xs text-[#f3f3f370] pt-2 border-t border-[#ffffff0a]">
                <Clock className="w-3.5 h-3.5 text-[#A9FF5B]" />
                <span>Temps de réponse habituel : moins de 24 heures</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1414149c] border border-[#ffffff10]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#A9FF5B]/20 border border-[#A9FF5B]/50 flex items-center justify-center text-[#A9FF5B] shadow-[0_0_20px_rgba(169,255,91,0.3)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Message transmis avec succès !
                  </h4>
                  <p className="text-sm text-[#f3f3f390] max-w-md mx-auto">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais à l'adresse indiquée.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-[#1f1f1f] border border-[#ffffff15] text-sm text-white hover:bg-[#252525] transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs text-[#f3f3f380] uppercase tracking-wider">
                        Nom complet *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Dupont"
                        className="w-full px-4 py-3 bg-[#181818] text-white border border-[#ffffff15] rounded-xl focus:outline-none focus:border-[#a476ff] focus:ring-1 focus:ring-[#a476ff] transition-all text-sm placeholder:text-[#555]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs text-[#f3f3f380] uppercase tracking-wider">
                        Email de contact *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jean@exemple.com"
                        className="w-full px-4 py-3 bg-[#181818] text-white border border-[#ffffff15] rounded-xl focus:outline-none focus:border-[#a476ff] focus:ring-1 focus:ring-[#a476ff] transition-all text-sm placeholder:text-[#555]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs text-[#f3f3f380] uppercase tracking-wider">
                      Sujet du projet *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Refonte de site web ou collaboration"
                      className="w-full px-4 py-3 bg-[#181818] text-white border border-[#ffffff15] rounded-xl focus:outline-none focus:border-[#a476ff] focus:ring-1 focus:ring-[#a476ff] transition-all text-sm placeholder:text-[#555]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs text-[#f3f3f380] uppercase tracking-wider">
                      Votre Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez brièvement vos besoins, objectifs ou calendrier..."
                      className="w-full px-4 py-3 bg-[#181818] text-white border border-[#ffffff15] rounded-xl focus:outline-none focus:border-[#a476ff] focus:ring-1 focus:ring-[#a476ff] transition-all text-sm placeholder:text-[#555] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#a476ff] hover:bg-[#b993ff] text-black font-semibold text-sm transition-all duration-300 disabled:opacity-50 shadow-[0_0_20px_-5px_#a476ff]"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

