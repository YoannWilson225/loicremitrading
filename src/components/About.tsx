export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Loïc Rémy Yao : Expert en Trading
          </h2>
          <div className="w-24 h-1 bg-[#005CD9] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeInLeft">
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg card-hover">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                À propos
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold">Yao Cyrille Romaric</span>, plus connu sous le nom de <span className="font-semibold text-blue-600 dark:text-blue-400">Loïc Rémy Yao</span>, CEO de <span className="font-semibold">LOÏC RÉMY TRADING</span>, est un trader expérimenté et entrepreneur passionné qui mise sur la simplicité pour réussir dans le monde complexe des marchés financiers.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Avec <span className="font-semibold">5 ans d&apos;expérience</span>, il a développé une approche pragmatique et efficace, basée sur la compréhension des fondamentaux et la réduction des risques.
              </p>
            </div>
          </div>

          <div className="space-y-4 animate-fadeInRight">
            <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow card-hover animate-delay-100">
              <h4 className="font-bold text-xl mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Sa Philosophie
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">▸</span>
                  La simplicité est la clé de la réussite
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">▸</span>
                  Comprendre et maîtriser les fondamentaux sans se laisser submerger par des outils ou des analyses excessives
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 card-hover animate-delay-200">
              <h4 className="font-bold text-xl mb-3 text-gray-900 dark:text-white flex items-center">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Ses Services
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Des solutions adaptées à chaque profil, débutant ou trader confirmé
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Des stratégies gagnantes et une approche respectueuse des objectifs financiers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Un accompagnement pour une maîtrise accrue des placements et des décisions éclairées
                </li>
              </ul>
            </div>

            <div className="bg-[#F41213] text-white p-6 rounded-xl shadow-lg card-hover animate-delay-300">
              <h4 className="font-bold text-xl mb-3">LOÏC RÉMY TRADING</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-200 mr-2">◆</span>
                  Une réputation de fiabilité et de professionnalisme
                </li>
                <li className="flex items-start">
                  <span className="text-red-200 mr-2">◆</span>
                  Des stratégies élaborées à partir d&apos;analyses poussées et d&apos;expérience terrain
                </li>
                <li className="flex items-start">
                  <span className="text-red-200 mr-2">◆</span>
                  Un accent sur la réduction des risques et la création de valeur durable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

