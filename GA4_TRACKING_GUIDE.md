# Guia de Rastreamento GA4 - Fator Essencial

## 📊 Visão Geral

Este projeto implementa um sistema completo de rastreamento de eventos para Google Analytics 4 (GA4), permitindo monitorar o comportamento dos usuários na landing page do "Método 5Ps".

## 🎯 Eventos Rastreados

### 1. **Eventos de Scroll (Profundidade de Rolagem)**
- **Evento**: `scroll`
- **Disparado**: A cada 25%, 50%, 75%, 90% e 100% de scroll
- **Dados coletados**:
  - `scroll_depth`: Porcentagem de scroll atingida
  - `page_location`: URL da página

### 2. **Eventos de Clique em Botões**
- **Evento**: `click`
- **Tipos de botões rastreados**:
  - **CTA Principal (Hero)**: `hero_cta_click`
  - **CTA da Oferta**: `offer_cta_click`
  - **CTA Final**: `final_cta_click`
  - **LGPD Accept**: `lgpd_accept_click`
  - **Botões de Fechar**: `close_button_click`
  - **Links Externos**: `external_link_click`

### 3. **Eventos de Engajamento**
- **Evento**: `user_engagement`
- **Disparado**: A cada 30 segundos de permanência ativa
- **Dados coletados**:
  - `engagement_time_msec`: Tempo de engajamento em milissegundos
  - `page_location`: URL da página

### 4. **Eventos de Conversão**
- **Categoria**: `conversion`
- **Dados específicos**:
  - `value`: 27.00 (valor do produto)
  - `currency`: 'BRL'
  - `funnel_stage`: Estágio do funil de vendas
  - `cta_position`: Posição do CTA na página

### 5. **Eventos de Links Externos**
- **WhatsApp**: Rastreamento de cliques no botão de contato
- **Links externos**: Monitoramento de saídas da página

## 🛠️ Implementação Técnica

### Arquivos Principais

1. **`/src/hooks/useGA4Tracking.ts`**
   - Hook principal para rastreamento automático
   - Gerencia scroll, cliques e tempo de engajamento
   - Throttling para otimização de performance

2. **`/src/components/GA4TrackingButton.tsx`**
   - Componente de botão com rastreamento integrado
   - Hook `useGA4Event` para eventos customizados
   - Funções específicas para diferentes tipos de eventos

### Integração no App

```typescript
// App.tsx
import { useGA4Tracking } from "@/hooks/useGA4Tracking";

function App() {
  // Ativar rastreamento GA4
  useGA4Tracking();
  // ...
}
```

### Uso de Botões com Rastreamento

```typescript
// Exemplo de uso
import { GA4TrackingButton } from "@/components/GA4TrackingButton";

<GA4TrackingButton 
  variant="hero" 
  size="xl"
  onClick={handleClick}
  eventLabel="hero_cta_click"
  eventCategory="conversion"
  customData={{
    cta_position: 'hero_section',
    value: 27.00,
    currency: 'BRL'
  }}
>
  Texto do Botão
</GA4TrackingButton>
```

## 📈 Métricas Disponíveis no GA4

### 1. **Funil de Conversão**
- Visualizar o caminho do usuário desde o primeiro clique até a conversão
- Identificar pontos de abandono
- Taxa de conversão por seção

### 2. **Mapa de Calor Comportamental**
- Profundidade de scroll por sessão
- Tempo de permanência em cada seção
- Padrões de navegação

### 3. **Análise de CTAs**
- Performance de cada botão CTA
- Comparação entre diferentes posições
- Taxa de clique por elemento

### 4. **Engajamento do Usuário**
- Tempo médio de sessão
- Páginas por sessão
- Taxa de rejeição qualificada

## 🎛️ Configuração no GA4

### Eventos Personalizados Recomendados

1. **Conversões**:
   - `hero_cta_click` → Marcar como conversão
   - `offer_cta_click` → Marcar como conversão
   - `final_cta_click` → Marcar como conversão

2. **Funis**:
   - Criar funil: Page View → Scroll 50% → CTA Click → Conversion

3. **Audiências**:
   - Usuários que scrollaram 75%+
   - Usuários que clicaram em CTAs
   - Usuários com alta permanência (30s+)

### Relatórios Personalizados

1. **Relatório de Scroll**:
   - Dimensão: `scroll_depth`
   - Métrica: Usuários únicos

2. **Relatório de CTAs**:
   - Dimensão: `event_label`
   - Métrica: Total de eventos

3. **Relatório de Engajamento**:
   - Dimensão: `engagement_time_msec`
   - Métrica: Sessões

## 🔍 Monitoramento e Debug

### Console do Navegador
Todos os eventos são logados no console para debug:
```javascript
console.log('GA4 Event sent:', eventData);
```

### Verificação de Implementação
1. Abrir DevTools (F12)
2. Ir para a aba Console
3. Interagir com a página (scroll, cliques)
4. Verificar se os eventos estão sendo enviados

### GA4 DebugView
1. Ativar o modo debug no GA4
2. Usar a extensão GA Debugger
3. Monitorar eventos em tempo real

## 📊 KPIs Principais

### Métricas de Conversão
- **Taxa de Conversão Geral**: (Conversões / Visitantes) × 100
- **Taxa de Conversão por CTA**: Cliques em CTA / Visualizações
- **Valor por Visitante**: Receita Total / Total de Visitantes

### Métricas de Engajamento
- **Profundidade Média de Scroll**: Média de scroll_depth
- **Tempo Médio de Engajamento**: Média de engagement_time
- **Taxa de Scroll Completo**: Usuários que chegaram a 100%

### Métricas de Comportamento
- **Pontos de Abandono**: Onde os usuários param de scrollar
- **CTAs Mais Efetivos**: Qual CTA gera mais conversões
- **Jornada do Usuário**: Sequência de eventos por sessão

## 🚀 Próximos Passos

1. **Deploy no Vercel**: Para ativar o rastreamento em produção
2. **Configurar Conversões**: Marcar eventos principais como conversões
3. **Criar Audiências**: Segmentar usuários por comportamento
4. **Configurar Alertas**: Notificações para mudanças significativas
5. **A/B Testing**: Testar diferentes versões de CTAs

## 📞 Suporte

Para dúvidas sobre a implementação ou análise dos dados:
- Verificar logs do console do navegador
- Consultar a documentação oficial do GA4
- Usar o GA4 DebugView para troubleshooting

---

**Nota**: Este sistema de rastreamento está em conformidade com a LGPD e só coleta dados após o consentimento do usuário através do popup de cookies.