# Intervention Plan

Date: 2026-03-28
Source diagnosis: `docs/reviews/full_dx.md`
Workspace: `/Users/matheuscoelho/Library/Mobile Documents/com~apple~CloudDocs/Downloads/Temp/Dreno/cvc`

## Objetivo

Transformar o bundle atual de:

- serie base forte + camada premium heterogenea

para:

- ecossistema inteiro com densidade didatica mais uniforme
- promessas editoriais alinhadas com o que cada superficie realmente entrega
- melhor aproveitamento do conteudo bom que ja existe no engine, no atlas e nos registries

## Regra Central

Nao expandir feature antes de alinhar densidade.

Traduzindo:

- primeiro corrigir superficies que prometem mais do que entregam
- depois promover o melhor conteudo escondido
- so depois ampliar volume, casos e novas rotas

## Principios de Intervencao

### 1. Promessa e entrega precisam coincidir

Se uma pagina se chama:

- `Masterclass`
- `OSCE`
- `Casos`
- `Atlas`
- `Bridge`

ela precisa se comportar como isso.
Se nao se comporta, ha dois caminhos validos:

- aprofundar a pagina
- ou rebaixar a promessa do nome e da navegacao

### 2. Promover antes de reinventar

O projeto ja tem bom material em:

- `training-arena-data.js`
- `modo-professor.html`
- `v20-part5-atlas.html`
- `v20-premium-atlas.html`
- `v20-graphics-catalog.html`

Antes de criar conteudo novo, mover ou reaproveitar o que ja esta forte.

### 3. Real primeiro continua sendo regra de ouro

Toda superficie que usar imagem deve seguir esta ordem:

1. pergunta clinica
2. midia real
3. leitura guiada
4. contraste prudente vs perigoso
5. derivado / board como compressao, nao como substituto

### 4. Toda superficie precisa responder quatro perguntas

- O que esta ensinando?
- O que o aluno precisa fazer aqui?
- O que muda no raciocinio ao sair daqui?
- Qual e a proxima superficie natural?

Se uma pagina nao responde isso, ela esta mais perto de shell do que de unidade didatica.

## Ordem de Prioridade

### P0

Itens de impacto alto e urgencia alta.

1. Reestruturar Part 6.
2. Reescrever OSCE publico da Part 4.
3. Tornar `cross-part cases` ativos.
4. Corrigir representacao da camada premium no `premium hub`.

### P1

Itens de impacto alto e urgencia media.

1. Levar `Masterclass` 1 / 2 / 3 / 5 ao padrao real da Part 4.
2. Aprofundar ponte para dreno toracico.
3. Expor melhor `teacher mode` e a logica docente.

### P2

Itens de impacto medio e urgencia media.

1. Auditoria completa de assets derivados.
2. Expandir corpus da arena.
3. Alinhar registries e nomes de superficies ao estado real do produto.

## Plano Por Superficie

## 1. Entrada e Arquitetura

### `project/cvc_academy_v20_premium_dual_layer/index.html`

Decisao:

- `manter`
- `ajustar`

Motivo:

- A pagina e boa como hub geral.
- O problema nao e a existencia dela.
- O problema e que ela trata overkills heterogeneos como se todos tivessem maturidade equivalente.

Intervencoes:

- Ajustar copy dos cards `Overkill` para refletir profundidade real hoje.
- Se as masterclasses 1 / 2 / 3 / 5 nao forem aprofundadas primeiro, reduzir o tom de promessa.
- Destacar melhor quais superficies sao `curso`, quais sao `review`, quais sao `toolkit`.

Definition of done:

- o usuario sabe diferenciar serie base, premium, treino e catalogo
- a navegacao nao vende profundidade uniforme onde ela nao existe

### `project/cvc_academy_v20_premium_dual_layer/pages/v20-premium-hub.html`

Decisao:

- `aprofundar`
- `reorganizar`

Motivo:

- O hub premium nao representa com clareza toda a arquitetura premium definida em `v20_premium_map.json`.

Intervencoes:

- Dar entrada equivalente para:
  - `premium_review`
  - `premium_atlas`
  - `cross_part_cases`
  - `graphics_catalog`
  - `teacher_mode`
- Explicar quando usar cada superficie com uma frase operacional, nao so editorial.
- Inserir um mapa de fluxo simples:
  - revisar principio
  - ver imagem
  - treinar caso
  - preparar docencia

Definition of done:

- o hub premium funciona como porta de entrada real
- todas as superficies canonicas ficam visiveis e intuitivas

### `project/cvc_academy_v20_premium_dual_layer/data/v20_premium_map.json`

Decisao:

- `manter`
- `sincronizar`

Motivo:

- O mapa esta mais claro do que o hub.

Intervencoes:

- Usar o mapa como contrato de navegacao.
- Garantir que o hub represente literalmente essas superficies.
- Atualizar `maturity` conforme o estado real depois das intervencoes.

## 2. Serie Base

### Parts 1-3

Arquivos principais:

- `pages/v20-reality-class-part1.html`
- `pages/v20-reality-class-part2.html`
- `pages/v20-reality-class-part3.html`

Decisao:

- `manter`

Motivo:

- A logica destas Parts esta forte.
- A estrutura didatica e boa.
- O problema aqui nao e a serie base; e o descompasso com a camada de aprofundamento.

Intervencoes:

- Ajustes finos apenas.
- Nao reescrever antes de corrigir premium / overkill.

Definition of done:

- apenas pequenos refinamentos de copy ou exemplos, se necessario

### Part 4

Arquivos principais:

- `pages/v20-reality-class-part4.html`
- `pages/v20-part4-masterclass.html`
- `pages/v20-part4-osce.html`

Decisao:

- `manter` base e masterclass
- `reescrever` OSCE publico

Motivo:

- Part 4 e uma das melhores partes do bundle.
- O elo fraco e o OSCE publico, que nao acompanha a qualidade do bloco.

Intervencoes:

- Transformar `v20-part4-osce.html` em superficie de verdade com:
  - estacoes
  - prompts observaveis
  - rubrica por dominio
  - exemplos de desempenho excelente / parcial / ruim
  - ponte com `modo-professor`
- Promover criterios ja existentes em `training-arena-data.js`.

Definition of done:

- o OSCE da Part 4 fica no mesmo patamar da Part 5
- a pagina testa checkpoints reais, nao so checklists genericas

### Part 5

Arquivos principais:

- `pages/v20-reality-class-part5.html`
- `pages/v20-part5-masterclass.html`
- `pages/v20-part5-atlas.html`
- `pages/v20-part5-osce.html`

Decisao:

- `manter` base, atlas e OSCE
- `aprofundar` ou `rebatizar` masterclass

Motivo:

- Atlas e OSCE sao fortes.
- A `masterclass` hoje funciona mais como hub de formatos do que como aula robusta.

Intervencoes:

- Escolher uma de duas rotas:

Rota A:

- aprofundar `v20-part5-masterclass.html` para virar de fato uma aula
- incluir leitura guiada, comparadores, mini-casos e fechamento

Rota B:

- rebatizar a pagina para algo como `overview visual` ou `hub de aprofundamento`

Recomendacao:

- seguir rota A, para alinhar com o nome e com a expectativa criada no index

Definition of done:

- a pagina ensina por si so
- ela nao depende do atlas para parecer completa

### Part 6

Arquivo principal:

- `pages/v20-reality-class-part6.html`

Decisao:

- `reestruturar profundamente`

Motivo:

- E o principal ponto fraco conceitual e operacional da trilha.

Intervencoes:

- Reorganizar o modulo em classes clinicamente estaveis.

Modelo sugerido:

1. dano mecanico imediato
2. erro de trajeto / malposicao / confirmacao inadequada
3. dano biologico e permanencia nociva

- Para cada classe, incluir:
  - o que ver
  - o que isso significa
  - o que fazer agora
  - o que interromper
  - quando chamar ajuda
- Inserir mini-bundles de resposta.
- Tornar os casos menos morais e mais operacionais.
- Conectar explicitamente com Part 5 e Part 7.

Definition of done:

- o aluno sai sabendo classificar e agir
- a taxonomia nao mistura mecanismo de dano com modalidade de leitura

### Parts 7-9

Arquivos principais:

- `pages/v20-reality-class-part7.html`
- `pages/v20-reality-class-part8.html`
- `pages/v20-reality-class-part9.html`

Decisao:

- `manter`
- `reforcar conexoes`

Motivo:

- Estas Parts sao boas e relativamente maduras.
- O ganho maior aqui nao e reescrever, e sim conectar melhor com teacher mode, cases e arena.

Intervencoes:

- Ampliar pontes operacionais para:
  - `modo-professor`
  - `cross-part cases`
  - `training arena`
- Tornar a passagem Part 7 -> Part 8 -> Part 9 mais explicitamente cumulativa.

Definition of done:

- fechamento da jornada mais coeso
- manutencao / remocao / ensino mais visivelmente integrados

## 3. Masterclasses / Overkills

### `pages/v20-part1-masterclass.html`

Decisao:

- `aprofundar`

Motivo:

- Hoje e uma pagina curta demais para merecer o nome `masterclass`.

Intervencoes:

- Expandir em 4 blocos:
  - necessidade real
  - nao invadir por conforto operacional
  - custo biologico da invasao
  - casos-limite de escalada legitima
- Inserir 2 ou 3 comparadores reais.
- Fechar com rubrica verbal: "frase clinica que legitima a escalada".

### `pages/v20-part2-masterclass.html`

Decisao:

- `aprofundar`

Motivo:

- Hoje funciona mais como poster map.

Intervencoes:

- Transformar em aula sobre escada do acesso.
- Incluir:
  - duracao
  - natureza da infusao
  - urgencia
  - manutencao
  - custo da escalada
- Reaproveitar comparadores fortes da serie base e do boost.

### `pages/v20-part3-masterclass.html`

Decisao:

- `aprofundar`

Motivo:

- O tema e muito forte, mas a pagina hoje esta superficial demais.

Intervencoes:

- Virar aula de identidade de familia.
- Incluir:
  - PICC vs CVC agudo
  - PICC vs port
  - HD vs "qualquer central"
  - Huber e reservatorio
  - manutencao por familia

### `pages/v20-part4-masterclass.html`

Decisao:

- `manter como referencia`

Motivo:

- Esta e a masterclass-modelo do bundle.

Intervencoes:

- Usar como template para reescrever as outras.

### `pages/v20-part5-masterclass.html`

Decisao:

- `aprofundar`

Motivo:

- O nome promete "versao mais robusta de todas", mas a entrega e mais de hub.

Intervencoes:

- Tornar a pagina aula de leitura de imagem:
  - entrada
  - trajeto
  - termino
  - malposicao
  - AP vs lateral
  - artefato
  - ponte com dano
- Inserir pelo menos dois mini-casos interpretativos completos.

### Exercises e Code Labs 1-5

Arquivos:

- `pages/v20-part1-exercises.html`
- `pages/v20-part2-exercises.html`
- `pages/v20-part3-exercises.html`
- `pages/v20-part4-exercises.html`
- `pages/v20-part5-exercises.html`
- `pages/v20-part1-code-lab.html`
- `pages/v20-part2-code-lab.html`
- `pages/v20-part3-code-lab.html`
- `pages/v20-part4-code-lab.html`
- `pages/v20-part5-code-lab.html`

Decisao:

- `manter`
- `padronizar`

Motivo:

- A ideia e boa.
- A densidade e que varia.

Intervencoes:

- Criar um padrao minimo por pagina:
  - 1 framing didatico
  - 3 a 5 itens de treino
  - 1 fechamento
  - 1 ponte clara
- Evitar paginas muito curtas quando o nome sugere superficie completa.

## 4. Casos e Docencia

### `pages/v20-cross-part-cases.html`

Decisao:

- `reestruturar`

Motivo:

- O conceito esta certo.
- A experiencia ainda e estatico-informativa.

Intervencoes:

- Para cada caso:
  - pergunta inicial
  - escolha do usuario
  - erro tentador
  - custo do erro
  - take-home
  - ponte para as Parts
- Ideal minimo:
  - 1 branching simples por caso
  - 1 teacher prompt
  - 1 feedback curto por escolha

Recomendacao:

- aproveitar a logica de itens ja existente na arena

Definition of done:

- `cross-part cases` deixa de ser pagina-resumo
- vira teste de integracao de raciocinio

### `pages/modo-professor.html`

Decisao:

- `manter`
- `promover`

Motivo:

- O conteudo esta bom.
- A superficie so esta subvalorizada na arquitetura.

Intervencoes:

- Dar mais destaque no Premium Hub.
- Ligar cada estacao docente a:
  - uma Part base
  - um caso transversal
  - um item da arena
- Explicitar "como usar em 8 / 12 / 15 minutos".

Definition of done:

- professor entende rapidamente como converter bundle em sessao real

## 5. Arena e Registries

### `pages/training-arena.html`

Decisao:

- `manter`
- `expandir corpus`

Motivo:

- O motor esta bom.
- O volume ainda nao sustenta toda a promessa.

Intervencoes:

- dobrar ou triplicar o numero de itens por modulo
- puxar itens das melhores superficies:
  - Part 4
  - Part 5
  - Part 6
  - Part 7-9
- criar progressao por dificuldade

Definition of done:

- arena deixa de parecer prototipo forte com biblioteca curta

### `data/v20_training_registry.json`

Decisao:

- `manter`
- `atualizar conforme corpus`

Motivo:

- O registry esta claro.
- Ele precisa acompanhar a expansao real da arena.

Intervencoes:

- aumentar `item_count`
- refletir mais modulos se forem adicionados
- manter coerencia entre promessa da arena e volume real

### `scripts/training-arena-data.js`

Decisao:

- `promover`
- `reusar`

Motivo:

- Parte do melhor conteudo do produto ja esta aqui.

Intervencoes:

- migrar logica forte para paginas publicas:
  - OSCE Part 4
  - cross-part cases
  - teacher mode

## 6. Atlas, Catalogo e Review

### `pages/v20-premium-review.html`

Decisao:

- `manter`
- `refinar`

Motivo:

- A pagina cumpre bem a funcao.

Intervencoes:

- adicionar mais pontes para caso ativo e teacher mode
- talvez incluir uma taxonomia mais operacional em 1 bloco curto

### `pages/v20-premium-atlas.html`

Decisao:

- `manter`

Motivo:

- Esta entre as melhores paginas do premium.

Intervencoes:

- usar como referencia para outras superficies visuais

### `pages/v20-graphics-catalog.html`

Decisao:

- `manter`

Motivo:

- Esta muito bem pensado.

Intervencoes:

- so ajustar links / governanca quando houver auditoria de assets

### `pages/revisao-integral.html`

Decisao:

- `manter`
- `afinar`

Motivo:

- A pagina faz uma boa triagem de entrada.

Intervencoes:

- garantir que as rotas indicadas apontem para superficies realmente maduras
- evitar mandar o usuario para shells rasos quando a promessa e profundidade

## 7. Ponte Toracica

### `pages/dreno-toracico.html`

Decisao:

- `aprofundar`

Motivo:

- Como conceito, a ponte e boa.
- Como pagina, ainda esta fina demais.

Intervencoes:

- incluir um mini-modulo:
  - quando o problema deixa de ser "so confirmacao"
  - quais sinais mudam o dominio
  - quando pensar em equipe / tecnica / procedimento toracico
- incluir 1 mini-caso
- incluir 1 algoritmo curto de escalonamento

Definition of done:

- a pagina ensina transferencia, nao so sugere transferencia

## 8. Auditoria Visual

### Assets derivados

Decisao:

- `auditar`
- `classificar`

Classes sugeridas:

1. `didaticamente forte`
2. `resumo util`
3. `capa / cenografia`
4. `placeholder / refazer`

Motivo:

- Nem todo asset derivado hoje merece o mesmo status pedagogico.

Intervencoes:

- Rebaixar assets decorativos na navegacao.
- Parar de chamar de "ancora didatica" o que hoje so funciona como capa.
- Priorizar boards realmente sintéticos e legiveis.

Provaveis candidatos a reavaliacao:

- `assets/v20_part4_boost/posters_png/poster_part4_masterclass.png`
- `assets/v20_part5_boost/posters_png/poster_part5_atlas.png`
- `assets/v20_part3_boost/posters_png/poster_part3_atlas.png`
- `assets/real/derived/v20_premium_system_map.jpg`
- `assets/real/derived/v20_question_arsenal_board.jpg`

Provavel referencia positiva:

- `assets/real/derived/maintenance_bundles_board.jpg`

## Sequenciamento Recomendado

## Sprint 1

- Reestruturar Part 6
- Reescrever OSCE Part 4
- Corrigir Premium Hub

## Sprint 2

- Reestruturar Cross-Part Cases
- Aprofundar Masterclass 5
- Aprofundar ponte toracica

## Sprint 3

- Aprofundar Masterclass 1 / 2 / 3
- Promover teacher mode
- Comecar auditoria visual

## Sprint 4

- Expandir Arena
- Atualizar registries
- Harmonizar copy do index e revisao integral

## Heuristica de Decisao

Se houver duvida entre criar pagina nova ou melhorar pagina existente:

- melhorar a existente

Se houver duvida entre fazer arte nova ou promover conteudo escondido:

- promover conteudo escondido

Se houver duvida entre aumentar volume ou aumentar densidade:

- aumentar densidade

## Resultado Esperado

Ao final das intervencoes, o bundle deve passar a ter:

- serie base forte e premium coerente com ela
- menos shells disfarçados de aula profunda
- melhor alinhamento entre nomes e entrega
- Part 6 no mesmo patamar de maturidade do arco 4-5
- casos realmente ativos
- OSCEs mais observaveis
- ponte toracica que ensina transferencia
- assets derivados tratados com criterio didatico real

## Resumo Executivo de Execucao

Se fosse para resumir tudo em cinco comandos:

1. Corrigir Part 6.
2. Subir o OSCE da Part 4 ao nivel da Part 5.
3. Fazer `cross-part cases` deixar de ser resumo.
4. Fazer `masterclass` significar aula de verdade em todas as Parts.
5. Parar de tratar asset cenografico como explicacao.
