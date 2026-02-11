import { Hono } from 'npm:hono';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const userData = new Hono();

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Get user dashboard data
userData.get('/dashboard', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ message: 'Token não fornecido' }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      console.error('Error getting user:', error);
      return c.json({ message: 'Não autorizado' }, 401);
    }

    // Get user assets
    const assetsKey = `user:${user.id}:assets`;
    const assets = await kv.get(assetsKey) || [];

    // Get user sales
    const salesKey = `user:${user.id}:sales`;
    const sales = await kv.get(salesKey) || [];

    // Get tracked assets
    const trackingKey = `user:${user.id}:tracking`;
    const trackedAssets = await kv.get(trackingKey) || [];

    // Calculate stats
    const stats = {
      totalAssets: Array.isArray(assets) ? assets.length : 0,
      totalSales: Array.isArray(sales) ? sales.filter((s: any) => s.type === 'sell' && s.status === 'completed').length : 0,
      totalRevenue: Array.isArray(sales) 
        ? sales
            .filter((s: any) => s.type === 'sell' && s.status === 'completed')
            .reduce((sum: number, s: any) => sum + (s.price || 0), 0)
        : 0,
      pendingTransactions: Array.isArray(sales) ? sales.filter((s: any) => s.status === 'pending').length : 0,
    };

    console.log(`Dashboard data loaded for user: ${user.id}`);

    return c.json({
      stats,
      assets,
      sales,
      trackedAssets,
    });
  } catch (error) {
    console.error('Error loading dashboard data:', error);
    return c.json({ message: 'Erro interno do servidor' }, 500);
  }
});

// Create sample data for testing
userData.post('/create-sample-data', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ message: 'Token não fornecido' }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ message: 'Não autorizado' }, 401);
    }

    // Create sample assets
    const sampleAssets = [
      {
        id: crypto.randomUUID(),
        tokenId: '1001',
        type: 'ERC1155',
        name: 'Lote Esmeralda Premium',
        weight: 25.5,
        quality: 'AAA',
        status: 'tokenized',
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: crypto.randomUUID(),
        tokenId: '2001',
        type: 'ERC721',
        name: 'Esmeralda Campos Verdes #2001',
        weight: 3.2,
        quality: 'AA+',
        status: 'certified',
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: crypto.randomUUID(),
        tokenId: '1002',
        type: 'ERC1155',
        name: 'Lote Esmeralda Comercial',
        weight: 18.3,
        quality: 'AA',
        status: 'registered',
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ];

    // Create sample sales
    const sampleSales = [
      {
        id: crypto.randomUUID(),
        type: 'sell',
        assetName: 'Esmeralda Campos Verdes #1500',
        tokenId: '1500',
        amount: 1,
        price: 15000,
        buyer: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
        status: 'completed',
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        txHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
      },
      {
        id: crypto.randomUUID(),
        type: 'buy',
        assetName: 'Lote Esmeralda Mix',
        tokenId: '900',
        amount: 10,
        price: 8500,
        seller: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
        status: 'completed',
        date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
        txHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      },
      {
        id: crypto.randomUUID(),
        type: 'sell',
        assetName: 'Esmeralda Premium #2100',
        tokenId: '2100',
        amount: 1,
        price: 22000,
        buyer: '0xdD2FD4581271e230360230F9337D5c0430Bf44C0',
        status: 'pending',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ];

    // Create sample tracking
    const sampleTracking = [
      {
        id: crypto.randomUUID(),
        name: 'Esmeralda Campos Verdes #2001',
        tokenId: '2001',
        currentStage: 'Em Certificação',
        events: [
          {
            id: crypto.randomUUID(),
            stage: 'mining',
            title: 'Extração Mineral',
            description: 'Esmeralda extraída da jazida certificada em Campos Verdes',
            location: 'Campos Verdes, GO - Brasil',
            timestamp: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
          },
          {
            id: crypto.randomUUID(),
            stage: 'registered',
            title: 'Registro na Blockchain',
            description: 'Ativo registrado no Protocolo GEMLAB',
            location: 'GemLab Platform',
            timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
            txHash: '0xabc123def456789012345678901234567890123456789012345678901234abcd',
          },
          {
            id: crypto.randomUUID(),
            stage: 'certified',
            title: 'Certificação Gemológica',
            description: 'Análise completa realizada por gemólogo certificado',
            location: 'Laboratório GemLab - Campos Verdes',
            timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
          },
        ],
      },
    ];

    // Save to KV store
    await kv.set(`user:${user.id}:assets`, sampleAssets);
    await kv.set(`user:${user.id}:sales`, sampleSales);
    await kv.set(`user:${user.id}:tracking`, sampleTracking);

    console.log(`Sample data created for user: ${user.id}`);

    return c.json({
      success: true,
      message: 'Dados de exemplo criados com sucesso',
      stats: {
        totalAssets: sampleAssets.length,
        totalSales: sampleSales.filter(s => s.type === 'sell' && s.status === 'completed').length,
        totalRevenue: sampleSales
          .filter(s => s.type === 'sell' && s.status === 'completed')
          .reduce((sum, s) => sum + s.price, 0),
        pendingTransactions: sampleSales.filter(s => s.status === 'pending').length,
      },
    });
  } catch (error) {
    console.error('Error creating sample data:', error);
    return c.json({ message: 'Erro interno do servidor' }, 500);
  }
});

export default userData;
