# V20 Premium Unified

## Finalidade

Este documento define a camada premium do ecossistema v20+.
Premium aqui nao significa "mais bonito".
Significa costura transversal, linguagem de expertise, reuso intencional de midia e treino que atravessa varias Parts no mesmo raciocinio.

## O que a camada premium precisa entregar

1. revisao transversal de principios que nao cabem isolados em uma Part
2. atlas visual concentrado para revisao rapida e reutilizacao
3. casos multi-step que atravessem decisao, tecnica, imagem, dano e manutencao
4. governanca editorial para boards, posters, docs e surfaces premium
5. ponte superior para dashboard, teacher mode e futuros shells de app

## O que premium nao e

- nao e duplicacao cosmetica da trilha principal
- nao e esconder conteudo basico atras de outro nome
- nao e juntar imagens soltas sem destino didatico
- nao e confundir profundidade com volume de texto

## Superficies canonicas

### `premium_hub`

Porta de entrada da camada premium.
Deve explicar:

- por que premium existe
- o que cada superficie premium faz
- quais rotas valem para revisao, treino e ensino

### `premium_review`

Revisao por principio e por falha recorrente.
Nao e por Part.
Deve costurar:

- proporcionalidade
- escalonamento
- identidade de dispositivo
- tecnica e stop rules
- confirmacao e humildade interpretativa
- dano e resposta precoce
- manutencao e remocao

### `premium_atlas`

Mapa visual concentrado do ecossistema.
Deve servir para:

- revisao rapida
- achar boards e posters relevantes
- descobrir reusos por Part e por surface

### `cross_part_cases`

Casos que atravessem varias Parts no mesmo arco.
Cada caso premium ou transversal deve ter:

- titulo
- pergunta inicial
- arco de Parts
- pontos de decisao
- erro tentador
- preco do erro
- take-home

### `graphics_catalog`

Catalogo governado de boards, posters, maps e assets reusaveis.
Deve mostrar:

- id do asset
- dominio
- surfaces alvo
- reuse targets
- status

## Relacao com a trilha principal

Trilha principal e premium nao competem.

- a trilha principal organiza a jornada da decisao ao fechamento
- premium atravessa a trilha inteira e costura linguagem de expertise
- premium nao substitui reality class
- premium ajuda revisao, ensino e navegacao superior

## Relacao com dashboard

Dashboard futuro precisa consumir premium como entidade real.
Por isso premium deve nascer com:

- surfaces nomeadas
- docs de funcao
- registros JSON
- rotas estaveis

## Estado atual local

No bundle atual existem:

- `pages/v20-premium-hub.html`
- `pages/v20-premium-review.html`
- `pages/v20-premium-atlas.html`
- `pages/v20-cross-part-cases.html`
- `pages/v20-graphics-catalog.html`
- `data/v20_premium_map.json`
- `data/v20_case_registry.json`

## Contratos minimos de conteudo

### Premium review

Minimo aceitavel:

- 6 a 8 principios transversais
- 1 taxonomia de falha
- 1 ponte explicita para casos
- 1 ponte explicita para atlas

### Premium atlas

Minimo aceitavel:

- 6 a 10 assets prioritarios
- agrupamento por dominio
- reuse targets visiveis
- ponte para catalogo grafico

### Cross-part cases

Minimo aceitavel:

- 3 a 5 casos ativos
- cada caso com arco multi-Part
- decisao errada plausivel
- custo clinico do erro
- links para reality class ou overkills relevantes

## Vocabulario canonico

### Maturidade

- `placeholder`
- `staged`
- `functional`
- `mature`

### Papel didatico

- `transversal_review`
- `visual_review`
- `multi_step_reasoning`
- `asset_discovery`
- `teaching_support`

## Regra editorial

Nenhuma surface premium deve existir sem uma destas tres coisas:

- costura transversal real
- reuso visual real
- caso multi-step real

Se nao houver ao menos uma dessas tres camadas, a pagina ainda e cenografica.

## Proximo salto esperado

Depois da camada premium ficar funcional, o caminho mais forte e:

1. densificar `cross_part_cases`
2. ampliar `graphics_catalog`
3. conectar premium ao dashboard alpha
4. puxar teacher mode para mais perto dos casos e do atlas
