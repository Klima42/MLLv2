import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[980px] mx-auto px-4 text-center"
        >
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-8">
            Un lieu d'accueil unique<br />pour vos enfants.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre Maison d'Assistantes Maternelles, où bienveillance et professionnalisme se rencontrent.
          </p>
          <Link
            to="/registration"
            className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 font-medium text-white hover:bg-gray-900 transition-colors"
          >
            Pré-inscrire mon enfant
          </Link>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <Feature
              title="Bienveillance"
              description="Une approche centrée sur le respect et l'écoute de chaque enfant, favorisant leur épanouissement."
            />
            <Feature
              title="Professionnalisme"
              description="Une équipe qualifiée et passionnée par l'éveil des enfants, assurant un encadrement de qualité."
            />
            <Feature
              title="Flexibilité"
              description="Des horaires adaptés aux besoins des familles, pour un équilibre parfait entre vie professionnelle et personnelle."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}