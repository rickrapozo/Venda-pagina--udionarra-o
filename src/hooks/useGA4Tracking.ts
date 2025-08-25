import { useEffect, useRef } from 'react';

// Declaração global para gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface ScrollEvent {
  event: 'scroll';
  scroll_depth: number;
  page_location: string;
}

interface ClickEvent {
  event: 'click';
  event_category: 'engagement';
  event_label: string;
  button_text?: string;
  button_id?: string;
  page_location: string;
}

interface SessionEvent {
  event: 'user_engagement';
  engagement_time_msec: number;
  page_location: string;
}

export const useGA4Tracking = () => {
  const scrollDepthRef = useRef(0);
  const sessionStartRef = useRef(Date.now());
  const lastScrollEventRef = useRef(0);
  const engagementTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Função para enviar eventos para GA4
  const sendEvent = (eventData: ScrollEvent | ClickEvent | SessionEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventData.event, {
        ...eventData,
        custom_parameter_1: 'landing_page_tracking'
      });
      console.log('GA4 Event sent:', eventData);
    }
  };

  // Rastreamento de scroll
  const trackScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

    // Enviar evento a cada 25% de scroll
    const milestones = [25, 50, 75, 90, 100];
    const currentMilestone = milestones.find(milestone => 
      scrollPercentage >= milestone && scrollDepthRef.current < milestone
    );

    if (currentMilestone) {
      scrollDepthRef.current = currentMilestone;
      
      const scrollEvent: ScrollEvent = {
        event: 'scroll',
        scroll_depth: currentMilestone,
        page_location: window.location.href
      };
      
      sendEvent(scrollEvent);
    }
  };

  // Rastreamento de cliques em botões
  const trackButtonClick = (element: HTMLElement) => {
    const buttonText = element.textContent?.trim() || '';
    const buttonId = element.id || '';
    const buttonClass = element.className || '';
    
    let eventLabel = 'button_click';
    
    // Identificar tipo de botão baseado no texto/classe
    if (buttonText.toLowerCase().includes('comprar') || buttonClass.includes('btn-hero')) {
      eventLabel = 'cta_purchase_click';
    } else if (buttonText.toLowerCase().includes('saiba mais')) {
      eventLabel = 'learn_more_click';
    } else if (buttonText.toLowerCase().includes('aceitar') || buttonClass.includes('lgpd')) {
      eventLabel = 'lgpd_accept_click';
    } else if (buttonClass.includes('close') || buttonText.includes('×')) {
      eventLabel = 'close_button_click';
    }

    const clickEvent: ClickEvent = {
      event: 'click',
      event_category: 'engagement',
      event_label: eventLabel,
      button_text: buttonText,
      button_id: buttonId,
      page_location: window.location.href
    };

    sendEvent(clickEvent);
  };

  // Rastreamento de tempo de engajamento
  const trackEngagement = () => {
    const engagementTime = Date.now() - sessionStartRef.current;
    
    const sessionEvent: SessionEvent = {
      event: 'user_engagement',
      engagement_time_msec: engagementTime,
      page_location: window.location.href
    };

    sendEvent(sessionEvent);
  };

  useEffect(() => {
    // Throttle para scroll events
    const throttledScrollHandler = () => {
      const now = Date.now();
      if (now - lastScrollEventRef.current > 500) {
        trackScroll();
        lastScrollEventRef.current = now;
      }
    };

    // Event listener para cliques
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Rastrear cliques em botões, links e elementos com data-track
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.hasAttribute('data-track')
      ) {
        const elementToTrack = target.closest('button') || target.closest('a') || target;
        trackButtonClick(elementToTrack as HTMLElement);
      }
    };

    // Event listener para quando o usuário sai da página
    const beforeUnloadHandler = () => {
      trackEngagement();
    };

    // Event listener para visibilidade da página
    const visibilityChangeHandler = () => {
      if (document.hidden) {
        trackEngagement();
      } else {
        sessionStartRef.current = Date.now();
      }
    };

    // Adicionar event listeners
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    document.addEventListener('click', clickHandler);
    window.addEventListener('beforeunload', beforeUnloadHandler);
    document.addEventListener('visibilitychange', visibilityChangeHandler);

    // Timer para enviar eventos de engajamento a cada 30 segundos
    engagementTimerRef.current = setInterval(() => {
      if (!document.hidden) {
        trackEngagement();
        sessionStartRef.current = Date.now(); // Reset timer
      }
    }, 30000);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      document.removeEventListener('click', clickHandler);
      window.removeEventListener('beforeunload', beforeUnloadHandler);
      document.removeEventListener('visibilitychange', visibilityChangeHandler);
      
      if (engagementTimerRef.current) {
        clearInterval(engagementTimerRef.current);
      }
    };
  }, []);

  return {
    trackScroll,
    trackButtonClick,
    trackEngagement,
    sendEvent
  };
};