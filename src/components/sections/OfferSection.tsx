import { GA4TrackingButton } from "@/components/GA4TrackingButton";

export const OfferSection = () => {
  const handleCTA = () => {
    // Here you would typically redirect to a payment processor
    // For demo purposes, we'll show an alert
    alert('Redirecionando para o checkout... (Demo)');
  };

  return (
    <section id="offer-section" className="section-padding bg-gradient-to-b from-background via-muted to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold text-primary mb-4 sm:mb-6 leading-tight">
            Veja como você pode começar{" "}
            <span className="text-gold">hoje</span>{" "}
            a instalar este novo sistema operacional...
          </h2>
        </div>

        {/* Main Offer */}
        <div className="bg-card rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-2xl border-2 border-gold/30 mb-6 sm:mb-8">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Product Presentation */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat font-bold text-primary leading-tight">
                📚 Fator Essencial – O Protocolo de Reinstalação Mental 5P
              </h3>
              <p className="text-base sm:text-lg font-inter text-muted-foreground leading-relaxed">
                Eu compilei todo o passo a passo, os exercícios e as ferramentas no e-book completo
              </p>
            </div>

            {/* Value Anchor */}
            <div className="bg-muted rounded-2xl p-4 sm:p-6 border border-gold/20">
              <p className="text-base sm:text-lg font-inter leading-relaxed text-card-foreground mb-3 sm:mb-4">
                <span className="font-bold text-primary">O valor de destravar seu potencial é incalculável.</span> 
                Cursos que prometem menos que isso custam facilmente mais de R$ 500.
              </p>
              <p className="text-sm sm:text-base font-inter text-muted-foreground">
                Mas meu objetivo é criar uma ponte, não uma barreira.
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-3 sm:space-y-4">
              <div className="text-center">
                <p className="text-base sm:text-lg lg:text-xl font-inter text-muted-foreground mb-2 leading-tight">
                  Por isso, hoje, seu investimento não será de{" "}
                  <span className="line-through text-destructive">R$ 197</span>... 
                  nem de <span className="line-through text-destructive">R$ 97</span>.
                </p>
                
                <div className="bg-gradient-to-r from-gold to-gold-light rounded-3xl p-4 sm:p-6 lg:p-8 border-4 border-gold-dark animate-glow">
                  <p className="text-xs sm:text-sm font-montserrat font-bold text-gold-foreground/80 mb-2 leading-tight">
                    Seu acesso vitalício ao manual completo da sua mente próspera é de apenas:
                  </p>
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold text-gold-foreground mb-3 sm:mb-4">
                    R$ 27
                    <span className="text-lg sm:text-xl lg:text-2xl align-top">,00</span>
                  </div>
                  <p className="text-sm sm:text-base font-inter text-gold-foreground/90 leading-tight">
                    💎 Acesso Imediato • 💫 Garantia Total • 🎁 + 4 Bônus Exclusivos
                  </p>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-3 sm:space-y-4">
              <GA4TrackingButton 
                variant="hero" 
                size="xl"
                onClick={handleCTA}
                className="w-full text-xs sm:text-sm md:text-base lg:text-lg py-4 sm:py-6 px-3 sm:px-4 leading-tight"
                eventLabel="offer_cta_click"
                eventCategory="conversion"
                customData={{
                  cta_position: 'offer_section',
                  cta_text: 'SIM, QUERO MEU ACESSO AGORA POR APENAS R$ 27!',
                  value: 27.00,
                  currency: 'BRL',
                  funnel_stage: 'offer_presentation'
                }}
              >
                🚀 SIM, QUERO MEU ACESSO AGORA POR APENAS R$ 27!
              </GA4TrackingButton>
              
              <p className="text-xs sm:text-sm text-muted-foreground font-inter leading-tight">
                ✅ Pagamento 100% Seguro • ✅ Acesso Imediato • ✅ Garantia de 7 Dias
              </p>
            </div>
          </div>
        </div>

        {/* Payment Security */}
        <div className="text-center bg-white/50 rounded-2xl p-4 sm:p-6 border border-gold/20">
          <div className="flex justify-center items-center space-x-3 sm:space-x-6 mb-3 sm:mb-4 flex-wrap gap-2">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-green-500">🔒</span>
              <span className="text-xs sm:text-sm font-inter">SSL Seguro</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-blue-500">💳</span>
              <span className="text-xs sm:text-sm font-inter">Cartão/PIX</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-purple-500">⚡</span>
              <span className="text-xs sm:text-sm font-inter">Acesso Imediato</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground font-inter">
            Processamento seguro garantido. Seus dados estão protegidos.
          </p>
        </div>
      </div>
    </section>
  );
};