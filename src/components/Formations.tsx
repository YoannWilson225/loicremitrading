'use client';

export default function Formations() {
  const formations = [
    {
      title: "Formation Vidéo Préenregistrée",
      price: "99€",
      level: "Débutant",
      badge: "ESSENTIALS",
      description: "Apprenez à votre rythme, tout en bénéficiant d'un soutien de groupe !",
      features: [
        "Accès illimité aux vidéos de cours (théorie + pratique)",
        "Suivi individuel pour vous aider à progresser",
        "Intégration à la communauté privée LRT Académie",
        "Interactions entre membres de la LRT Student Work"
      ],
      buttonColor: "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600",
      popular: false
    },
    {
      title: "Formation Vidéo + Coaching",
      price: "199€",
      level: "Débutant à Intermédiaire",
      badge: "POPULAIRE",
      description: "Bénéficiez d'un accompagnement personnalisé pour des résultats optimaux !",
      features: [
        "Accès illimité aux vidéos de cours (théorie + pratique)",
        "Un coaching personnalisé pour des résultats optimaux",
        "Des zooms après chaque module pour renforcer la compréhension",
        "Suivi individuel pour vous aider à progresser",
        "Intégration à la communauté privée LRT Académie",
        "Interactions entre membres de la LRT Student Work"
      ],
      buttonColor: "bg-[#005CD9] hover:bg-[#0047a3]",
      popular: true
    },
    {
      title: "Formation Complète",
      subtitle: "De débutant à trader pro",
      price: "299€",
      priceOnline: "299€",
      pricePresential: "359€",
      priceDetails: "(en ligne / présentiel)",
      level: "Débutant à Expert",
      badge: "PRO",
      description: "Programme complet avec accompagnement structuré et strict pour des résultats garantis !",
      features: [
        "Cours intensif one-to-one en live via Zoom",
        "Suivi personnalisé pour atteindre vos objectifs",
        "Accès illimité à la communauté LRT Student Work",
        "Accès illimité à des cours préenregistrés",
        "Accès aux analyses et aux prises de position",
        "3 mois dans le groupe premium"
      ],
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      popular: false,
      note: "Ce programme est conçu pour ceux qui préfèrent évoluer à leur rythme avec un accompagnement très structuré et strict"
    },
    {
      title: "Coaching Privé SMC",
      subtitle: "One-to-One",
      price: "699€",
      level: "Avancé / Expert",
      badge: "PREMIUM",
      description: "Débloquez votre potentiel de trading avec un mentorat exclusif !",
      features: [
        "Cours intensif one-to-one en live via Zoom",
        "Suivi personnalisé pour atteindre vos objectifs",
        "Accès illimité à la communauté LRT Student Work",
        "Accès illimité à des cours préenregistrés",
        "3 mois dans le groupe premium"
      ],
      buttonColor: "bg-gray-900 hover:bg-gray-800",
      textColor: "text-gray-900",
      popular: false,
      note: "Ce programme est réservé aux traders expérimentés. Il ne convient pas aux débutants."
    }
  ];

  const openTelegram = (planTitle: string, price: string) => {
    const message = encodeURIComponent(
      `Bonjour ! Je suis intéressé(e) par la formation "${planTitle}" à ${price}. Pourriez-vous me donner plus d'informations ?`
    );
    window.open(`https://t.me/loicremy06?text=${message}`, '_blank');
  };

  return (
    <section id="formations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#005CD9]/10 dark:bg-[#005CD9]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <div className="inline-block mb-4">
            <span className="bg-[#005CD9] text-white px-6 py-2 rounded-full text-sm font-semibold">
              NOS OFFRES DE FORMATION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Formations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choisissez la formation qui correspond à votre niveau et vos objectifs. Chaque programme est conçu pour vous apporter les compétences nécessaires pour réussir.
          </p>
          <div className="w-24 h-1 bg-[#005CD9] mx-auto mt-6"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((formation, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                formation.popular
                  ? 'ring-2 ring-[#005CD9] scale-105 lg:scale-110 z-10'
                  : 'hover:scale-105'
              } animate-fadeInUp animate-delay-${index}00`}
            >
              {/* Popular Badge */}
              {formation.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#005CD9] text-white text-center py-2 text-xs font-bold">
                  ⭐ {formation.badge}
                </div>
              )}

              {/* Card Content */}
              <div className={`p-6 ${formation.popular ? 'pt-12' : 'pt-6'}`}>
                {/* Badge for non-popular plans */}
                {!formation.popular && (
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                      {formation.badge}
                    </span>
                  </div>
                )}

                {/* Plan Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {formation.title}
                </h3>
                {formation.subtitle && (
                  <p className="text-sm font-medium text-[#005CD9] dark:text-blue-400 mb-2">
                    {formation.subtitle}
                  </p>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  {formation.level}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${formation.textColor || 'text-gray-900 dark:text-white'}`}>
                      {formation.priceOnline || formation.price}
                    </span>
                  </div>
                  {formation.priceDetails && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {formation.priceOnline} en ligne / {formation.pricePresential} présentiel
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openTelegram(formation.title, formation.price)}
                  className={`w-full ${formation.buttonColor} text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg mb-6`}
                >
                  S&apos;inscrire maintenant
                </button>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  {formation.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3">
                    Ce qui est inclus :
                  </h4>
                  {formation.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Warning Note */}
                {formation.note && (
                  <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="text-xs text-yellow-800 dark:text-yellow-200 flex items-start">
                      <svg
                        className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{formation.note}</span>
                    </p>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center animate-fadeInUp animate-delay-400">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-[#005CD9]/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <svg
                className="w-12 h-12 text-[#005CD9]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Garantie de satisfaction
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Toutes nos formations incluent un suivi personnalisé et une communauté active.
              Rejoignez plus de 1000 traders qui ont transformé leur vie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
