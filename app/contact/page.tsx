'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              nous
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une question ? Une suggestion ? Notre équipe est là pour vous aider
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-up">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Envoyez-nous un message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-scale-in">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-green-900 dark:text-green-100">Message envoyé !</h3>
                      <p className="text-sm text-green-700 dark:text-green-300">Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="jean@exemple.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="support">Support technique</option>
                    <option value="billing">Facturation</option>
                    <option value="feature">Demande de fonctionnalité</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700 dark:text-gray-300">
                    Je souhaite recevoir la newsletter avec les dernières nouveautés et offres spéciales
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a href="mailto:contact@logomaster-ai.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                    contact@logomaster-ai.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Adresse</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 rue de l'Innovation<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Horaires</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lun - Ven: 9h - 18h<br />
                    Réponse sous 24h
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-primary-600 to-accent-600 text-white" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-2">Besoin d'aide immédiate ?</h3>
              <p className="mb-4 opacity-90">
                Consultez notre centre d'aide pour des réponses instantanées
              </p>
              <a
                href="/help"
                className="inline-block px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Centre d'aide
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
