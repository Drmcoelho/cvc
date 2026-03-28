# Diagnostico Revisado por Codex - CVC Academy v20+

Data: 2026-03-28

Objetivo: revisar o `dx.md` encontrado em `.claude/worktrees/dazzling-zhukovsky/dx.md` contra o estado real atual do bundle canonico em `project/cvc_academy_v20_premium_dual_layer/`.

## 1. Resumo executivo

O `dx.md` original e bom como leitura macro. Ele entende a tese pedagogica do projeto, identifica corretamente a desigualdade entre a forca conceitual e a distribuicao editorial, e aponta bugs tecnicos reais no PWA.

O problema e que ele ja nao e uma fotografia fiel do bundle atual. Em especial:

- ele subestima a quantidade de imagem real ja distribuida em Part 5 e Part 6
- ele superestima a saude da validacao automatizada
- ele mistura problemas ainda reais com problemas que ja foram parcialmente resolvidos

Meu veredicto atual:

- pensamento pedagogico: forte
- infraestrutura base: funcional, mas com debitos concretos
- distribuicao editorial: ainda desigual
- automacao de QA: descalibrada

O projeto nao precisa de outra arquitetura. Precisa de:

- corrigir o offline de verdade
- equalizar a densidade da segunda metade da serie
- alinhar testes e diagnostico com o estado atual do pacote

## 2. Metodo de revisao

Esta revisao foi feita por:

- leitura do `dx.md`
- inspecao estatica dos arquivos HTML, JS, JSON e assets do bundle
- execucao local de `python3 tools/smoke_test_bundle.py`
- execucao local de `python3 tools/validate_bundle.py`

Observacoes de estado:

- bundle atual: 39 HTML em `pages/`
- scripts atuais: 14 arquivos JS em `scripts/`
- dados atuais: 12 JSON de dados mais `manifest.json`
- assets atuais: 374 arquivos em `assets/`

## 3. O que o dx original acerta

### 3.1 Tese pedagogica

O projeto tem um arco conceitual forte. A serie de 9 Parts continua coerente: indicacao, escada, familias, tecnica, confirmacao, complicacao, ensino, territorios hostis e fechamento. Isso continua sendo um dos maiores ativos do bundle.

### 3.2 Debitos tecnicos reais

Os pontos abaixo seguem validos:

- `sw.js` continua com precache minimo e `CACHE_NAME` fixo.
- o `fetch` fallback do service worker continua fraco para offline frio.
- `manifest.json` ainda usa `"purpose": "any maskable"` como string unica.
- nao ha sync entre abas via `storage` event.
- ha duplicacao de helpers entre `site.js` e `dashboard-alpha.js`.
- `mediaPulse` segue hardcoded em `dashboard-alpha.js`.
- a acessibilidade continua rasa nas paginas estaticas.

### 3.3 Desigualdade editorial

O diagnostico de "densidade distribuida de modo desigual" continua correto.

As lacunas mais evidentes hoje sao:

- Parts 6-9 sem overkills dedicados
- Part 4 sem atlas proprio
- Part 1 overkill ainda raso
- `dreno-toracico.html` ainda subdesenvolvido
- arquivos `stage*-data.js` de placeholder ainda presentes

## 4. Onde o dx original envelheceu

### 4.1 A tese central sobre imagens esta parcialmente desatualizada

O `dx.md` dizia, em essencia, que "as imagens existem no catalogo mas nao chegam as superficies que ensinam a le-las". Isso ja nao descreve bem o bundle atual.

Hoje ja existe distribuicao relevante de imagem real em pontos criticos:

- `pages/v20-part5-atlas.html` traz US real, RX real, AP e lateral reais, e pneumotorax real
- `pages/v20-part5-osce.html` ja usa RX real de pneumotorax
- `pages/v20-reality-class-part6.html` ja usa quatro ancoras reais: pneumotorax, trombose de VCS, sitio de saida e biofilme
- `dashboard-alpha.js` ja reconhece explicitamente os lotes reais 3 e 4

Portanto, o problema atual nao e mais "as imagens nao chegaram". O problema atual e:

- elas chegaram de forma desigual
- chegaram melhor no atlas e na Part 6 do que nas superficies de exercicio/base
- o discurso do projeto ainda esta mais atualizado do que algumas paginas de treino

### 4.2 O estado de validacao automatizada esta superestimado no dx

O `dx.md` afirma:

- "0 referencias quebradas"
- "7/7 smoke tests passam"

Isso nao bate com o estado atual observado no workspace.

Resultado atual do smoke test local:

- 6 checks passaram
- 1 check falhou: `/pages/v20-graphics-catalog.html`
- motivo: marcador textual `Batch 4` esperado pelo teste nao aparece literalmente na pagina

Resultado atual do validador estrutural:

- `python3 tools/validate_bundle.py` retorna erro
- ele reporta refs ausentes ligadas a `v20-part3-masterclass.html`
- o arquivo existe de fato no bundle

Leitura mais provavel:

- o smoke test esta desatualizado em relacao ao conteudo real da pagina
- o validador estrutural esta descalibrado para ao menos parte das referencias do Part 3

Em outras palavras: hoje existe drift entre bundle e ferramentas de QA.

### 4.3 Alguns juizos editoriais precisam ser refinados

O `dx.md` esta certo ao chamar Part 1 de fraca no overkill, mas exagera quando descreve "hub vazio" e "zero codigo" como se nao houvesse material algum. Hoje existe material, mas ele ainda e raso:

- `v20-part1-masterclass.html` tem estrutura e tema, mas baixa densidade
- `v20-part1-exercises.html` tem apenas tres blocos simples
- `v20-part1-code-lab.html` traz um fluxo conceitual, mas nao um code lab denso

Isso e diferente de "nao existe". O problema atual e profundidade, nao ausencia absoluta.

## 5. Diagnostico tecnico atual

### 5.1 Estado do PWA e offline

Diagnostico:

- o shell continua pequeno demais para sustentar experiencia offline-first robusta
- pagina, dados de treino e conteudo real so entram no cache apos visita
- o nome de cache fixo reduz confiabilidade de invalidacao em deploy

Impacto:

- primeira experiencia offline continua fraca
- atualizacao de bundle em GitHub Pages pode conviver com cache velho
- o discurso "offline-first" ainda esta acima da implementacao real

### 5.2 Estado do JS aplicacional

Pontos relevantes:

- `routeHref`, `clone` e `formatRelativeTime` continuam dispersos
- `mediaPulse` hardcoded segue introduzindo drift editorial
- `replaceAll()` ainda aparece em `search-index.js` e `training-arena.js`
- nao ha listener de `storage` para sincronizar dashboard e arena entre abas

Leitura:

O problema nao e complexidade excessiva. O problema e manutencao fragmentada.

### 5.3 Acessibilidade

O bundle melhorou pouco aqui. O padrao atual ainda e fraco para um produto educacional que quer parecer maduro.

Sinais encontrados:

- apenas duas instancias de `aria-pressed`
- ausencia pratica de `aria-label`, `aria-live`, `role="dialog"` e `aria-modal`
- nenhuma skip-link encontrada

Leitura:

A experiencia visual esta mais madura do que a experiencia de teclado e leitor de tela.

### 5.4 QA e automacao

Este e um problema importante porque distorce a percepcao de qualidade.

Estado atual:

- smoke test falhando por marcador de conteudo defasado
- validador estrutural reportando ao menos um falso positivo plausivel

Leitura:

Hoje a automacao esta mais util como alerta bruto do que como verdade operacional.

## 6. Diagnostico editorial atual

### 6.1 Onde o bundle esta forte

Superficies mais fortes hoje:

- serie principal como arco conceitual
- Parts 7 e 8
- Cross-Part Cases
- Modo Professor
- Graphics Catalog
- Training Arena como motor de treino

Leitura:

O projeto pensa bem. O motor conceitual esta pronto para um produto forte.

### 6.2 Onde o bundle ainda esta desigual

Lacunas principais:

- metade final da serie continua sem expansao equivalente
- a base da Part 5 ainda nao usa a imagem real tao bem quanto o atlas
- `v20-part5-exercises.html` continua textual demais para um modulo de leitura de imagem
- `v20-premium-review.html` formula principios fortes, mas ainda sem amarracao suficiente a casos concretos
- `dreno-toracico.html` ainda e ponte, nao modulo

### 6.3 A desigualdade atual e mais precisa assim

Em vez de dizer "as imagens nao chegam", a formulacao mais fiel hoje seria:

"O bundle ja comecou a distribuir imagem real nas superficies certas, mas ainda nao de forma proporcional ao lugar pedagogico de cada pagina."

Essa frase descreve melhor o estado atual de:

- atlas da Part 5
- OSCE da Part 5
- Part 6
- exercicios da Part 5
- base da Part 5

### 6.4 Part 1: existe, mas ainda nao sustenta o nome overkill

O problema da Part 1 nao e ausencia total. E subdensidade.

Hoje ela funciona como:

- introducao estendida

Nao funciona ainda como:

- aprofundamento equivalente ao padrao Parts 2-5

### 6.5 Premium Review: ainda forte no principio, fraco na amarracao

Os 8 principios continuam bons. O que falta ainda e:

- link explicito para casos concretos
- ponte mais forte com exercicios e atlas
- prova de aplicacao, nao so formulacao elegante

## 7. Prioridades reais agora

### Tier 1 - corrigir o que compromete credibilidade

1. Corrigir `sw.js` para fallback offline mais util, precache mais amplo e versionamento de cache.
2. Corrigir `manifest.json` para icones com `purpose` valido.
3. Atualizar `tools/smoke_test_bundle.py` para refletir o conteudo atual do catalogo.
4. Corrigir ou recalibrar `tools/validate_bundle.py` para eliminar falso positivo no Part 3.
5. Completar ou remover `pages/dreno-toracico.html`.

### Tier 2 - equalizar densidade editorial

1. Adicionar overkills minimos para Parts 6-9, comecando por exercises.
2. Criar atlas da Part 4.
3. Densificar Part 1 overkill ate um nivel comparavel ao menos com Part 2.
4. Levar imagem real para `v20-part5-exercises.html`.
5. Ancorar `v20-premium-review.html` em casos e exercicios concretos.

### Tier 3 - reduzir drift e manutencao manual

1. Extrair `mediaPulse` e KPIs para fonte calculada ou JSON.
2. Unificar helpers repetidos entre `site.js` e `dashboard-alpha.js`.
3. Adicionar sync entre abas via `storage` event.
4. Enderecar acessibilidade basica: landmarks, dialog, skip-link e feedback acessivel.
5. Revisar os `stage*-data.js` placeholders: preencher ou remover.

## 8. Veredicto final

O `dx.md` original continua valioso como leitura estrategica. Eu concordo com sua tese principal sobre:

- qualidade do pensamento pedagogico
- desigualdade de execucao
- existencia de debitos tecnicos reais

Mas eu nao concordo com ele como diagnostico literal do snapshot atual.

Hoje a leitura mais fiel e esta:

- o bundle melhorou mais do que o `dx.md` reconhece em imagem real e distribuicao visual
- o bundle ainda esta mais desigual do que o visual premium faz parecer
- a automacao esta mais fraca do que o `dx.md` afirma

Formula final:

O projeto ja nao sofre de falta de direcao. Sofre de assimetria entre superficies, offline ainda incompleto e instrumentacao de QA fora de sincronia com o produto.

Esse e o diagnostico que melhor representa o estado atual do CVC Academy v20+ em 2026-03-28.
