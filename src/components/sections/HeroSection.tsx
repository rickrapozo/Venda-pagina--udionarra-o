import { GA4TrackingButton } from "@/components/GA4TrackingButton";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const handleCTA = () => {
    // Scroll to offer section or redirect to checkout
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 61, 58, 0.95), rgba(45, 90, 84, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Faixa de Aviso Importante */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm md:text-base font-bold font-montserrat leading-tight animate-pulse">
            ⚠️ AVISO IMPORTANTE: O que você está prestes a descobrir nesta página desafia 99% dos métodos de desenvolvimento pessoal que você já tentou. Leia até o final com atenção. Essa Informação não ficará no ar por muito tempo! ⚠️
          </p>
        </div>
      </div>
      
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/95 to-secondary/90"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold leading-tight max-w-5xl mx-auto">
            <span className="text-gold block mb-2">Cansado de se sentir travado?</span>
            <span className="text-primary-foreground block">
              Um polêmico método de{" "}
              <span className="text-gold underline decoration-gold/50">15 minutos diários</span>{" "}
              revela como reprogramar sua mente para a prosperidade...
            </span>
          </h1>
          
          {/* Audio Player */}
          <div className="pt-4 sm:pt-6">
            <AudioPlayer audioUrl="https://wurtjidtmpdpbnzomunu.supabase.co/storage/v1/object/public/audio%20pagina%20f5ps/sales-letter-narration.mp3" />
          </div>
          
          {/* Subheading */}
          <div className="max-w-4xl mx-auto space-y-4 px-2">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 font-inter leading-relaxed">
              Mesmo que você já tenha tentado de tudo e nada funcionou.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gold/20 mx-2 sm:mx-0">
              <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/95 font-inter leading-relaxed">
                Se você se sente trabalhando duro, mas os resultados nunca chegam, e pensamentos como{" "}
                <span className="font-playfair italic text-gold">"não sou bom o suficiente"</span>{" "}
                te paralisam, esta pode ser a{" "}
                <span className="font-bold text-gold">mensagem mais importante da sua vida.</span>
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-6 sm:pt-8 space-y-4 px-4">
            <GA4TrackingButton 
              variant="hero" 
              size="xl"
              onClick={handleCTA}
              className="w-full sm:w-auto animate-scale-in text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
              eventLabel="hero_cta_click"
              eventCategory="conversion"
              customData={{
                cta_position: 'hero_section',
                cta_text: 'Sim, Eu Quero Instalar Minha Mente Próspera Agora!',
                value: 27.00,
                currency: 'BRL'
              }}
            >
              ✨ Sim, Eu Quero Instalar Minha Mente Próspera Agora!
            </GA4TrackingButton>
            
            <p className="text-xs sm:text-sm text-primary-foreground/70 font-inter">
              Acesso imediato • Garantia de 7 dias • Apenas R$ 27,00
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};