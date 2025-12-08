import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Shield,
  Users,
  Settings,
  Activity,
  UserCheck,
  UserX,
  Key,
  Database,
  AlertTriangle,
  CheckCircle2,
  Clock,
  TrendingUp,
  FileCheck,
  Eye,
} from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function AdminPanel() {
  const [selectedRole, setSelectedRole] = useState("");

  const systemStats = {
    totalUsers: 1428,
    activeContracts: 12,
    totalTransactions: 3847,
    totalValueLocked: "R$ 4.2M",
  };

  const roles = [
    { name: "ADMIN_ROLE", holders: 3, description: "Administradores do sistema" },
    { name: "LAB_ROLE", holders: 23, description: "Laboratórios certificados" },
    { name: "MINER_ROLE", holders: 150, description: "Garimpeiros formalizados" },
    { name: "CUSTODIAN_ROLE", holders: 8, description: "Custodiantes certificados" },
    { name: "ORACLE_ROLE", holders: 1, description: "Oracle Fiscal (Prefeitura)" },
  ];

  const whitelistRequests = [
    {
      id: "REQ-2024-042",
      address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      type: "Laboratório",
      entity: "GemLab International",
      status: "Pendente",
      submittedDate: "2024-11-15",
      kycStatus: "Aprovado",
    },
    {
      id: "REQ-2024-041",
      address: "0x8f3C2aB90eF1d8234bD56789aF123456789aBcD",
      type: "Garimpeiro",
      entity: "José Santos",
      status: "Pendente",
      submittedDate: "2024-11-14",
      kycStatus: "Em Análise",
    },
    {
      id: "REQ-2024-040",
      address: "0x1234567890aBcDeF1234567890aBcDeF12345678",
      type: "Comprador",
      entity: "Joalheria Premium Ltda",
      status: "Aprovado",
      submittedDate: "2024-11-13",
      kycStatus: "Aprovado",
    },
  ];

  const recentTransactions = [
    {
      hash: "0x7f3a...92c4",
      type: "StoneMinted",
      user: "Lab #042",
      timestamp: "2024-11-16 10:32",
      status: "success",
    },
    {
      hash: "0x4b2d...81f3",
      type: "AssetTransferred",
      user: "Buyer #1247",
      timestamp: "2024-11-16 09:15",
      status: "success",
    },
    {
      hash: "0x9c5e...73a1",
      type: "RoyaltyComputed",
      user: "Oracle",
      timestamp: "2024-11-16 08:45",
      status: "success",
    },
    {
      hash: "0x2f7b...94e2",
      type: "GemCertified",
      user: "Lab #018",
      timestamp: "2024-11-15 17:20",
      status: "success",
    },
  ];

  const contracts = [
    { name: "EmeraldBatch (ERC-1155)", address: "0xABC...123", status: "Active", version: "v2.1.0" },
    { name: "EmeraldNFT (ERC-721)", address: "0xDEF...456", status: "Active", version: "v2.1.0" },
    { name: "AccessControl", address: "0xGHI...789", status: "Active", version: "v2.0.0" },
    { name: "MunicipalFund", address: "0xJKL...012", status: "Active", version: "v1.5.0" },
    { name: "Marketplace", address: "0xMNO...345", status: "Active", version: "v1.8.0" },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1b1b1b] to-[#014733] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield 
              className="h-8 w-8 text-[#caa34b]" 
              style={{ filter: 'drop-shadow(0 2px 4px rgba(202, 163, 75, 0.5))' }}
            />
            <h1 className="font-['Inter'] text-3xl font-bold">
              Painel Administrativo
            </h1>
          </div>
          <p className="font-['Inter'] text-gray-300">
            Governança do protocolo, gestão de roles e observabilidade
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <Users 
                className="h-8 w-8 text-[#006b4f]" 
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 107, 79, 0.4))' }}
              />
              <Badge className="bg-blue-100 text-blue-700">Usuários</Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              {systemStats.totalUsers.toLocaleString()}
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">
              Participantes ativos
            </div>
          </Card>

          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <FileCheck 
                className="h-8 w-8 text-[#caa34b]" 
                style={{ filter: 'drop-shadow(0 2px 4px rgba(202, 163, 75, 0.5))' }}
              />
              <Badge className="bg-purple-100 text-purple-700">Contratos</Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              {systemStats.activeContracts}
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">
              Contratos deployados
            </div>
          </Card>

          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <Activity 
                className="h-8 w-8 text-[#014733]" 
                style={{ filter: 'drop-shadow(0 2px 4px rgba(1, 71, 51, 0.4))' }}
              />
              <Badge className="bg-green-100 text-green-700">24h</Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              {systemStats.totalTransactions.toLocaleString()}
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">
              Transações totais
            </div>
          </Card>

          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp 
                className="h-8 w-8 text-green-600" 
                style={{ filter: 'drop-shadow(0 2px 4px rgba(22, 163, 74, 0.4))' }}
              />
              <Badge className="bg-orange-100 text-orange-700">TVL</Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              {systemStats.totalValueLocked}
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">
              Valor total bloqueado
            </div>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="roles" className="space-y-6">
          <TabsList>
            <TabsTrigger value="roles">
              <Key className="h-4 w-4 mr-2" />
              Roles & Permissões
            </TabsTrigger>
            <TabsTrigger value="whitelist">
              <UserCheck className="h-4 w-4 mr-2" />
              Whitelist
            </TabsTrigger>
            <TabsTrigger value="contracts">
              <Database className="h-4 w-4 mr-2" />
              Contratos
            </TabsTrigger>
            <TabsTrigger value="activity">
              <Activity className="h-4 w-4 mr-2" />
              Atividade
            </TabsTrigger>
          </TabsList>

          {/* Roles Tab */}
          <TabsContent value="roles">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-[#e5e7eb]">
                <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-6">
                  Roles Disponíveis
                </h3>
                <div className="space-y-3">
                  {roles.map((role) => (
                    <div
                      key={role.name}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={() => setSelectedRole(role.name)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <code className="font-['Inter'] font-mono text-sm text-[#006b4f] font-semibold">
                            {role.name}
                          </code>
                          <Badge variant="outline">{role.holders} usuários</Badge>
                        </div>
                        <p className="font-['Inter'] text-sm text-gray-600">
                          {role.description}
                        </p>
                      </div>
                      <Key className="h-5 w-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-2 border-[#e5e7eb]">
                <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-6">
                  Gerenciar Role
                </h3>
                {!selectedRole ? (
                  <div className="text-center py-12">
                    <Key className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <p className="font-['Inter'] text-sm text-gray-500">
                      Selecione uma role para gerenciar
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <Alert>
                      <Shield className="h-4 w-4" />
                      <AlertDescription>
                        <div className="font-['Inter'] font-semibold text-[#1b1b1b] mb-1">
                          {selectedRole}
                        </div>
                        <p className="font-['Inter'] text-sm text-gray-600">
                          Gerencie permissões e atribua/revogue esta role
                        </p>
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-2">
                      <Label htmlFor="grantAddress">Conceder Role (Grant)</Label>
                      <Input
                        id="grantAddress"
                        placeholder="0x..."
                        className="font-mono"
                      />
                    </div>

                    <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                      <UserCheck className="h-4 w-4 mr-2" />
                      Grant Role
                    </Button>

                    <div className="pt-4 border-t">
                      <div className="space-y-2">
                        <Label htmlFor="revokeAddress">Revogar Role (Revoke)</Label>
                        <Input
                          id="revokeAddress"
                          placeholder="0x..."
                          className="font-mono"
                        />
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-red-500 text-red-600 hover:bg-red-50"
                    >
                      <UserX className="h-4 w-4 mr-2" />
                      Revoke Role
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          {/* Whitelist Tab */}
          <TabsContent value="whitelist">
            <Card className="border-2 border-[#e5e7eb]">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-1">
                      Solicitações de Whitelist
                    </h3>
                    <p className="font-['Inter'] text-sm text-gray-600">
                      Aprove ou rejeite solicitações de participantes
                    </p>
                  </div>
                  <Badge className="bg-orange-100 text-orange-700">
                    2 Pendentes
                  </Badge>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Endereço</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Entidade</TableHead>
                    <TableHead>KYC</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {whitelistRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-mono text-xs">
                        {request.id}
                      </TableCell>
                      <TableCell className="font-mono text-xs">
                        {request.address.slice(0, 6)}...{request.address.slice(-4)}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{request.type}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {request.entity}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            request.kycStatus === "Aprovado"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        >
                          {request.kycStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {new Date(request.submittedDate).toLocaleDateString("pt-BR")}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            request.status === "Aprovado"
                              ? "bg-green-100 text-green-700"
                              : request.status === "Pendente"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-red-100 text-red-700"
                          }
                        >
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {request.status === "Pendente" && (
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle2 className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-500 text-red-600">
                              <UserX className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Contracts Tab */}
          <TabsContent value="contracts">
            <Card className="border-2 border-[#e5e7eb]">
              <div className="p-6 border-b">
                <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-1">
                  Contratos Deployados
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Status e versões dos smart contracts do protocolo
                </p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contrato</TableHead>
                    <TableHead>Endereço</TableHead>
                    <TableHead>Versão</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contracts.map((contract) => (
                    <TableRow key={contract.address}>
                      <TableCell className="font-semibold">
                        {contract.name}
                      </TableCell>
                      <TableCell className="font-mono text-xs">
                        {contract.address}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{contract.version}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          {contract.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card className="border-2 border-[#e5e7eb]">
              <div className="p-6 border-b">
                <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-1">
                  Transações Recentes
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Eventos on-chain e logs do sistema
                </p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>TX Hash</TableHead>
                    <TableHead>Evento</TableHead>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((tx) => (
                    <TableRow key={tx.hash}>
                      <TableCell className="font-mono text-xs">
                        {tx.hash}
                      </TableCell>
                      <TableCell>
                        <code className="font-['Inter'] font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                          {tx.type}
                        </code>
                      </TableCell>
                      <TableCell className="font-medium">{tx.user}</TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {tx.timestamp}
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Success
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>

        {/* System Health */}
        <div className="mt-8">
          <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
            <div className="flex items-start gap-4">
              <CheckCircle2 
                className="h-6 w-6 text-green-600 flex-shrink-0" 
                style={{ filter: 'drop-shadow(0 2px 3px rgba(22, 163, 74, 0.3))' }}
              />
              <div className="flex-1">
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                  Sistema Operacional
                </h4>
                <p className="font-['Inter'] text-sm text-gray-700 mb-3">
                  Todos os contratos estão operando normalmente. Última verificação: 2 minutos atrás.
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-700">Blockchain conectado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-700">IPFS operacional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-700">Oracle ativo</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}