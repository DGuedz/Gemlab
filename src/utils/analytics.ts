/**
 * Sistema de Analytics Leve para GEMLAB
 * Rastreia eventos de navegação sem bibliotecas pesadas externas
 * 
 * @module utils/analytics
 */

export interface AnalyticsEvent {
  event: string;
  category: string;
  label: string;
  value?: number;
  timestamp: string;
  userAgent?: string;
  url?: string;
}

class AnalyticsService {
  private events: AnalyticsEvent[] = [];
  private readonly storageKey = 'gemlab_analytics_events';
  private readonly maxStoredEvents = 100;

  constructor() {
    this.loadEventsFromStorage();
  }

  /**
   * Registra um evento de navegação
   */
  trackNavigation(pillarName: string) {
    this.track({
      event: 'navigation_click',
      category: 'Navigation',
      label: pillarName,
      timestamp: new Date().toISOString(),
      userAgent: navigator?.userAgent,
      url: window?.location?.href,
    });
  }

  /**
   * Registra um evento de certificado
   */
  trackCertificateVerification() {
    this.track({
      event: 'certificate_verification',
      category: 'CTA',
      label: 'Verificar Certificado',
      timestamp: new Date().toISOString(),
      userAgent: navigator?.userAgent,
      url: window?.location?.href,
    });
  }

  /**
   * Registra um evento customizado
   */
  trackCustomEvent(
    eventName: string,
    category: string,
    label: string,
    value?: number
  ) {
    this.track({
      event: eventName,
      category,
      label,
      value,
      timestamp: new Date().toISOString(),
      userAgent: navigator?.userAgent,
      url: window?.location?.href,
    });
  }

  /**
   * Método interno para registrar evento
   */
  private track(event: AnalyticsEvent) {
    this.events.push(event);

    // Limita o número de eventos armazenados
    if (this.events.length > this.maxStoredEvents) {
      this.events = this.events.slice(-this.maxStoredEvents);
    }

    this.saveEventsToStorage();

    // Log para desenvolvimento (pode ser removido em produção)
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 [Analytics]', event);
    }

    // Aqui você pode enviar para um backend ou serviço de analytics
    // this.sendToBackend(event);
  }

  /**
   * Salva eventos no localStorage
   */
  private saveEventsToStorage() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(this.storageKey, JSON.stringify(this.events));
      }
    } catch (error) {
      console.warn('Failed to save analytics to storage:', error);
    }
  }

  /**
   * Carrega eventos do localStorage
   */
  private loadEventsFromStorage() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
          this.events = JSON.parse(stored);
        }
      }
    } catch (error) {
      console.warn('Failed to load analytics from storage:', error);
      this.events = [];
    }
  }

  /**
   * Retorna todos os eventos registrados
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Retorna eventos por categoria
   */
  getEventsByCategory(category: string): AnalyticsEvent[] {
    return this.events.filter((event) => event.category === category);
  }

  /**
   * Retorna estatísticas de navegação
   */
  getNavigationStats() {
    const navigationEvents = this.getEventsByCategory('Navigation');
    const stats: Record<string, number> = {};

    navigationEvents.forEach((event) => {
      stats[event.label] = (stats[event.label] || 0) + 1;
    });

    return stats;
  }

  /**
   * Limpa todos os eventos armazenados
   */
  clearEvents() {
    this.events = [];
    this.saveEventsToStorage();
  }

  /**
   * Envia eventos para o backend (implementação futura)
   */
  private async sendToBackend(event: AnalyticsEvent) {
    // TODO: Implementar integração com backend/API
    // Exemplo:
    // await fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(event),
    // });
  }
}

// Singleton instance
export const analytics = new AnalyticsService();

// Hook React para usar analytics
export function useAnalytics() {
  return {
    trackNavigation: (pillarName: string) => analytics.trackNavigation(pillarName),
    trackCertificateVerification: () => analytics.trackCertificateVerification(),
    trackCustomEvent: (event: string, category: string, label: string, value?: number) =>
      analytics.trackCustomEvent(event, category, label, value),
    getEvents: () => analytics.getEvents(),
    getNavigationStats: () => analytics.getNavigationStats(),
    clearEvents: () => analytics.clearEvents(),
  };
}
