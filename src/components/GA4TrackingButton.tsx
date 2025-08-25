import React from 'react';
import { Button } from '@/components/ui/button';

// Declaração global para gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface GA4TrackingButtonProps {
  children: React.ReactNode;
  eventLabel: string;
  eventCategory?: string;
  customData?: Record<string, any>;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const GA4TrackingButton: React.FC<GA4TrackingButtonProps> = ({
  children,
  eventLabel,
  eventCategory = 'engagement',
  customData = {},
  className,
  variant = 'default',
  size = 'default',
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const handleClick = () => {
    // Enviar evento para GA4
    if (typeof window !== 'undefined' && window.gtag) {
      const eventData = {
        event_category: eventCategory,
        event_label: eventLabel,
        page_location: window.location.href,
        button_text: typeof children === 'string' ? children : eventLabel,
        timestamp: new Date().toISOString(),
        ...customData
      };

      window.gtag('event', 'click', eventData);
      
      console.log('GA4 Button Click Event:', {
        event: 'click',
        ...eventData
      });
    }

    // Executar onClick personalizado se fornecido
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={handleClick}
      disabled={disabled}
      type={type}
      data-track="true"
      data-event-label={eventLabel}
      data-event-category={eventCategory}
    >
      {children}
    </Button>
  );
};

// Hook para rastreamento manual de eventos
export const useGA4Event = () => {
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const eventData = {
        page_location: window.location.href,
        timestamp: new Date().toISOString(),
        ...parameters
      };

      window.gtag('event', eventName, eventData);
      
      console.log('GA4 Custom Event:', {
        event: eventName,
        ...eventData
      });
    }
  };

  const trackFormSubmission = (formName: string, success: boolean = true) => {
    trackEvent('form_submit', {
      event_category: 'form',
      form_name: formName,
      success: success
    });
  };

  const trackVideoPlay = (videoTitle: string, videoUrl?: string) => {
    trackEvent('video_play', {
      event_category: 'video',
      video_title: videoTitle,
      video_url: videoUrl
    });
  };

  const trackDownload = (fileName: string, fileType: string) => {
    trackEvent('file_download', {
      event_category: 'download',
      file_name: fileName,
      file_type: fileType
    });
  };

  const trackOutboundLink = (url: string, linkText: string) => {
    trackEvent('click', {
      event_category: 'outbound_link',
      event_label: 'external_link_click',
      link_url: url,
      link_text: linkText
    });
  };

  return {
    trackEvent,
    trackFormSubmission,
    trackVideoPlay,
    trackDownload,
    trackOutboundLink
  };
};