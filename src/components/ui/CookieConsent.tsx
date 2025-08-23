import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Shield, Info } from 'lucide-react';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já deu consentimento
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Mostrar o popup após 2 segundos para não ser intrusivo
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    onAccept?.();
    
    // Ativar Google Tag Manager se necessário
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    onDecline?.();
    
    // Configurar GTM para modo restrito
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    // Se fechar sem escolher, considerar como declined
    handleDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 animate-fade-in-up">
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg p-3 md:p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-1.5">
            <Cookie className="w-4 h-4 text-gold" />
            <h3 className="font-montserrat font-semibold text-gray-900 text-xs md:text-sm">
              Cookies
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <p className="text-xs text-gray-700 leading-snug">
            Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego conforme a LGPD.
          </p>

          {showDetails && (
            <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-600 space-y-1.5">
              <div className="flex items-start space-x-1.5">
                <Shield className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs">Essenciais:</p>
                  <p className="text-xs">Funcionamento básico do site.</p>
                </div>
              </div>
              <div className="flex items-start space-x-1.5">
                <Info className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-xs">Analíticos:</p>
                  <p className="text-xs">Google Analytics para melhorias.</p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-1.5 pt-1">
            <Button
              onClick={handleAccept}
              className="bg-gold hover:bg-gold/90 text-white font-medium text-xs px-3 py-1.5 rounded-md transition-all duration-200 flex-1"
            >
              Aceitar
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-xs px-3 py-1.5 rounded-md transition-all duration-200 flex-1"
            >
              Essenciais
            </Button>
          </div>

          {/* Toggle Details */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-gold hover:text-gold/80 transition-colors underline w-full text-center mt-1"
          >
            {showDetails ? 'Ocultar' : 'Detalhes'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Hook para verificar consentimento
export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setHasConsent(consent === 'accepted');
  }, []);

  return hasConsent;
};