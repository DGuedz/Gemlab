import { Card } from './ui/card';
import { Button } from './ui/button';
import { LayoutDashboard, ArrowRight, Package, TrendingUp } from 'lucide-react';
import logo from 'figma:asset/cde6329a6c4b255a7d190dd68be01f6589014264.png';

interface DashboardAccessCardProps {
  userName?: string;
  onAccessDashboard: () => void;
}

export function DashboardAccessCard({ userName, onAccessDashboard }: DashboardAccessCardProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <Card className="bg-gradient-to-br from-[#006b4f] to-[#014733] border-none overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48" />
        </div>

        <div className="relative p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start mb-8">
                <img 
                  src={logo} 
                  alt="GemLab Logo" 
                  className="w-32 h-32 object-contain brightness-0 invert drop-shadow-lg" 
                />
              </div>
              
              <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-white mb-4">
                {userName ? `Bem-vindo, ${userName}!` : 'Bem-vindo!'}
              </h2>
              
              <p className="font-['Inter'] text-lg text-white/90 mb-8 max-w-2xl">
                Acesse seu dashboard para gerenciar seus ativos, visualizar transações e acompanhar a rastreabilidade de suas esmeraldas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={onAccessDashboard}
                  className="bg-white text-[#006b4f] hover:bg-gray-100 font-semibold group"
                >
                  Acessar Meu Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 min-w-[220px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-['Inter'] text-white/90">
                    Gerencie Ativos
                  </p>
                </div>
                <p className="font-['Inter'] text-sm text-white/70">
                  Registre e acompanhe suas esmeraldas
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 min-w-[220px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-['Inter'] text-white/90">
                    Visualize Vendas
                  </p>
                </div>
                <p className="font-['Inter'] text-sm text-white/70">
                  Histórico completo de transações
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}