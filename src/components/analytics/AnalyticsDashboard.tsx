import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { analytics, AnalyticsEvent } from '../../utils/analytics';
import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';
import { Button } from '../ui/button';

/**
 * Dashboard de Analytics para visualização de dados do usuário
 * Útil para demonstração no Programa Centelha
 */
export function AnalyticsDashboard() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [navigationStats, setNavigationStats] = useState<Record<string, number>>({});

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = () => {
    setEvents(analytics.getEvents());
    setNavigationStats(analytics.getNavigationStats());
  };

  const handleClearData = () => {
    if (confirm('Deseja limpar todos os dados de analytics?')) {
      analytics.clearEvents();
      loadAnalytics();
    }
  };

  const totalEvents = events.length;
  const navigationEvents = events.filter((e) => e.category === 'Navigation').length;
  const ctaEvents = events.filter((e) => e.category === 'CTA').length;

  return (
    <div className="space-y-6 p-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-['Montserrat'] text-3xl font-bold text-[#1b1b1b] dark:text-white">
            Analytics Dashboard
          </h2>
          <p className="font-['Inter'] text-sm text-gray-600 dark:text-gray-400 mt-1">
            Monitoramento de comportamento do usuário para o Programa Centelha
          </p>
        </div>
        <Button
          onClick={handleClearData}
          variant="outline"
          className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f]/10"
        >
          Limpar Dados
        </Button>
      </div>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-2 border-gray-200 dark:border-gray-800 hover:border-[#006b4f] transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 font-['Inter'] text-sm text-gray-600 dark:text-gray-400">
              <BarChart3 className="h-4 w-4 text-[#006b4f]" />
              Total de Eventos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-['Montserrat'] text-3xl font-bold text-[#1b1b1b] dark:text-white">
              {totalEvents}
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 dark:border-gray-800 hover:border-[#006b4f] transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 font-['Inter'] text-sm text-gray-600 dark:text-gray-400">
              <TrendingUp className="h-4 w-4 text-[#006b4f]" />
              Navegações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-['Montserrat'] text-3xl font-bold text-[#1b1b1b] dark:text-white">
              {navigationEvents}
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 dark:border-gray-800 hover:border-[#006b4f] transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 font-['Inter'] text-sm text-gray-600 dark:text-gray-400">
              <Eye className="h-4 w-4 text-[#006b4f]" />
              Verificações de Certificado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-['Montserrat'] text-3xl font-bold text-[#1b1b1b] dark:text-white">
              {ctaEvents}
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 dark:border-gray-800 hover:border-[#006b4f] transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 font-['Inter'] text-sm text-gray-600 dark:text-gray-400">
              <Users className="h-4 w-4 text-[#006b4f]" />
              Taxa de Engajamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-['Montserrat'] text-3xl font-bold text-[#1b1b1b] dark:text-white">
              {totalEvents > 0 ? ((navigationEvents / totalEvents) * 100).toFixed(1) : '0'}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Estatísticas de Navegação por Pilar */}
      <Card className="border-2 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="font-['Montserrat'] text-xl font-bold text-[#1b1b1b] dark:text-white">
            Navegação por Pilar do Protocolo
          </CardTitle>
          <CardDescription className="font-['Inter']">
            Cliques registrados em cada pilar da Tríade de Confiança
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(navigationStats).length > 0 ? (
              Object.entries(navigationStats)
                .sort(([, a], [, b]) => b - a)
                .map(([pillar, count]) => (
                  <div key={pillar} className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full flex-1">
                        <div
                          className="h-2 bg-gradient-to-r from-[#006b4f] to-[#014733] rounded-full transition-all duration-500"
                          style={{
                            width: `${(count / Math.max(...Object.values(navigationStats))) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="font-['Inter'] text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[200px]">
                        {pillar}
                      </span>
                    </div>
                    <span className="font-['Montserrat'] text-lg font-bold text-[#006b4f] dark:text-emerald-400 ml-4">
                      {count}
                    </span>
                  </div>
                ))
            ) : (
              <p className="font-['Inter'] text-sm text-gray-500 dark:text-gray-500 text-center py-8">
                Nenhum dado de navegação registrado ainda. Interaja com os pilares para ver estatísticas.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Últimos Eventos */}
      <Card className="border-2 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="font-['Montserrat'] text-xl font-bold text-[#1b1b1b] dark:text-white">
            Últimos Eventos Registrados
          </CardTitle>
          <CardDescription className="font-['Inter']">
            Histórico recente de ações do usuário
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {events.length > 0 ? (
              [...events].reverse().slice(0, 10).map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-['Inter'] text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {event.label}
                    </p>
                    <p className="font-['Inter'] text-xs text-gray-500 dark:text-gray-500">
                      {event.category} • {new Date(event.timestamp).toLocaleString('pt-BR')}
                    </p>
                  </div>
                  <span className="font-['Inter'] text-xs font-medium text-[#006b4f] dark:text-emerald-400 bg-[#006b4f]/10 px-3 py-1 rounded-full">
                    {event.event}
                  </span>
                </div>
              ))
            ) : (
              <p className="font-['Inter'] text-sm text-gray-500 dark:text-gray-500 text-center py-8">
                Nenhum evento registrado. Comece a interagir com a plataforma.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
