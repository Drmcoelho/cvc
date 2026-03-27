# Dashboard Future

## Estado atual

Agora existe um `dashboard-alpha` em `pages/dashboard-alpha.html`.
Ele ja cumpre quatro funcoes:

1. porta operacional do bundle
2. mapa de trilhas
3. ponte entre serie, premium e ensino
4. exposicao dos registros que sustentam a proxima casca

## O que o alpha ja prova

- o dashboard faz sentido no produto
- o bundle ja tem entidades suficientes para navegacao superior
- serie, premium, casos, catalogo e ensino podem conviver sem virar arquipelago

## O que ainda falta para o dashboard maduro

### 1. Filtros reais

- por Part
- por surface
- por dominio
- por maturidade
- por finalidade didatica

### 2. Estado local

- progresso por trilha
- favoritos
- retomada de estudo
- historico de ultimo acesso

### 3. Metricas vivas

- cobertura por Part
- cobertura por surface
- ativos por dominio
- treino disponivel por trilha

### 4. Integracao de treino

- leitura do training registry
- atalhos para sessao docente
- agrupamento por caso, osce, mcq e visual review

## Entidades canonicas que o dashboard deve consumir

- `data/v20_surface_registry.json`
- `data/v20_media_registry_seed.json`
- `data/v20_case_registry.json`
- `data/v20_training_registry.json`
- `data/v20_premium_map.json`

## Regra de produto

O dashboard nao deve substituir a serie.
Tambem nao deve esconder o premium.
Ele deve ser:

- porta superior
- painel operacional
- mapa do ecossistema

## Proximo passo recomendado

1. transformar filtros em interacao real
2. adicionar estado local de progresso
3. conectar dashboard aos registries em vez de texto estatico
4. manter o alpha honesto enquanto a plataforma amadurece
