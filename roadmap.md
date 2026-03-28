# Roadmap v20+

## Horizonte

Horizonte realista: 24 a 36 meses.

O produto deve amadurecer em camadas, sem perder a base offline-first e sem sacrificar confiabilidade clinica em troca de brilho superficial.

## Norte do roadmap

Este roadmap assume cinco verdades:

1. o projeto e `offline-first`, nao `offline-only`
2. conectividade externa e permitida quando agrega valor
3. dashboard faz parte do produto, mesmo que sua versao madura venha por fases
4. o projeto deve ser arquitetado para evoluir para Mac e iOS
5. imagem real e curadoria confiavel nao sao opcao; sao o proprio miolo da proposta

## Produto-alvo

No estado maduro, o projeto precisa ser:

### Plataforma web offline-first

- indice robusto
- hubs claros
- trilha principal 1 a 9
- overkills por dominio
- premium review
- premium atlas
- casos transversais
- docs internas
- busca
- cache funcional
- visual unificado

### Acervo de midia maduro

Meta orientadora:

- 450 a 550 midias uteis
- 120 a 180 midias clinicas reais de alto valor
- 100 a 150 midias derivadas didaticas
- 80 a 120 itens de treino visual
- 15 a 30 loops ou microvideos

### Sistema didatico maduro

- casos com preco real
- taxonomia de falha
- OSCE visual
- MCQ, V/F e pegadinhas
- atlas comparativos
- anatomia viva
- decisao antes da tecnica
- confirmacao e manutencao como capitulos centrais
- revisao transversal

### Estrutura de produto madura

- web estavel
- dashboard web com papel claro
- caminho para shell de Mac
- caminho para shell de iOS
- exportacao de conteudo sem retrabalho

## Modelo operacional

O roadmap corre em duas maquinas paralelas.

### Maquina A: producao interna

Tudo que depende de nos:

- arquitetura
- canonizacao
- HTML
- design system
- boards
- sequences
- atlas
- treino visual
- MCQ
- V/F
- OSCE
- casos transversais
- code labs
- review premium
- hubs
- dashboard web

### Maquina B: curadoria externa e acervo real

Tudo que depende de sourcing:

- fotos clinicas reais
- RX reais
- US reais
- loops e microvideos
- complicacoes reais
- dispositivos reais em uso
- contextos hostis reais
- acervo proprio com permissao
- ingestao com metadado e rastreabilidade

Principio central:

- a Maquina A nao espera a Maquina B para produzir valor
- a Maquina B nao deve injetar caos sem governanca na Maquina A

## Estado de partida

O workspace local ja foi limpo e canonizado:

- projeto ativo em `project/cvc_academy_v20_premium_dual_layer`
- referencias em `reference/`
- snapshots em `archive/zips/`
- duplicatas literais removidas
- `master_schema.md` criado como schema operacional de Parts e superficies
- `execution_matrix.md` criado como backlog operacional do que vem a seguir

Isso resolveu a bagunca da pasta e permitiu iniciar a Fase 1 com uma arvore canonica unica.

## Fase 0: fundacao canonica

### Status

Concluida no workspace local, mas ainda incompleta dentro do produto.

### O que esta resolvido

- uma unica arvore extraida canonica
- historico arquivado
- referencias separadas

### O que ainda falta dentro da mesma fase

- espinha estrutural padronizada nas pages antigas e novas
- naming e manifesto de midia mais estaveis
- taxonomia de falha embutida no conteudo
- rotina local obrigatoria para validacao antes de cada release

## Fase 1: tronco utilizavel

### Horizonte

0 a 8 semanas

### Objetivo

Parar improviso estrutural dentro do pacote ativo.

### Status

Em execucao.
O tronco tecnico do pacote foi recomposto, mas a camada editorial, o metadado e a arquitetura superior ainda nao fecharam.

### Entregaveis

1. manter `manifest.json`, `styles/site.css`, `scripts/`, `sw.js` e icones como baseline do pacote canonico
2. manter links mortos em zero via rotina local repetivel
3. consolidar a espinha obrigatoria de cada Part
4. transformar o schema minimo por Part em pages mais densas e consistentes
5. fixar convencoes de metadado para midia
6. formalizar a taxonomia de falha
7. desenhar a arquitetura de informacao do dashboard

### Criterios de aceite

- o pacote abre localmente sem cascata de referencias faltantes
- hubs principais sem links mortos
- cada Part com o mesmo esqueleto estrutural
- dashboard ja existe como arquitetura, mesmo que nao como interface final

### Marco local atual

- `manifest.json`, `styles/site.css`, `scripts/`, `sw.js` e icones locais ja foram restaurados
- a arvore HTML ativa subiu para 39 paginas
- a serie principal ja tem reality classes 1 a 9
- premium hub, premium review, premium atlas, cross-part cases, graphics catalog, modo professor e training arena ja existem como superficies iniciais
- existe uma rotina local de validacao em `tools/validate_bundle.py`
- existe contrato minimo de metadado em `docs/METADATA_MINIMUM.md` e nos registros JSON da arvore ativa
- premium agora tambem tem contrato funcional, mapa premium e case registry dentro do proprio bundle
- dashboard alpha, training registry e training runtime agora tambem existem dentro do proprio bundle
- cockpit local de estudo, favoritos, concluidos, recentes e retomada global agora tambem existem no proprio bundle
- o primeiro lote de midia real aberta ja foi baixado, registrado e exposto no catalogo e no atlas
- o lote 2 ja cobre US real, malposicao real e manutencao real dentro do proprio bundle
- o lote 3 ja cobre foto procedural real de US, par AP-lateral de malposicao e CT real de trombose dentro do proprio bundle
- o lote 4 ja cobre sitio de saida real, biofilme real por staph e biofilme real com Alcaligenes dentro do proprio bundle
- as masterclasses das Parts 2, 3 e 5 tambem ja sairam do modo "overkill de esquema" e passaram a abrir com ancoras reais, comparacao pratica e preco clinico visivel

## Fase 2: enriquecimento interno imediato

### Horizonte

2 a 4 meses

### Objetivo

Aumentar fortemente o valor didatico sem depender de sourcing externo.

### Trilha dominante

Maquina A

### Entregaveis

1. boards comparativos relevantes
2. sequences procedurais e de confirmacao
3. banco inicial de treino visual
4. atlas reforcados
5. premium review e premium atlas consolidados
6. dashboard alpha local para navegacao superior e cockpit de estudo

### Metas operacionais

- +100 a +140 midias internas ou derivadas
- pelo menos 1 board forte por Part critica
- pelo menos 1 bloco de treino visual por Part-chave
- Parts 4 a 9 deixam de parecer secas

### Criterios de aceite

- diferenca visual clara antes vs depois
- premium layer deixa de ser placeholder
- dashboard alpha ja organiza a experiencia sem quebrar o nucleo offline
- treino serio ja existe como superficie canonica com memoria local

## Fase 3: pipeline de curadoria externa

### Horizonte

2 a 6 meses, em paralelo com a Fase 2

### Objetivo

Montar o motor do acervo clinico real.

### Trilha dominante

Maquina B

### Entregaveis

1. manifesto de sourcing
2. regras de uso, permissao e licenca
3. modelo de metadado de ingestao
4. fila de curadoria por dominio
5. protocolo de anonimizacao e uso de acervo proprio
6. templates de documentacao e rastreabilidade

### Criterios de aceite

- nada entra sem metadado
- nada entra sem uso didatico definido
- nada entra sem rastreabilidade de origem

## Fase 4: integracao do acervo clinico real

### Horizonte

4 a 9 meses

### Objetivo

Parar de depender apenas de imagem generica ou derivada.

### Entregaveis

1. lotes clinicos integrados por dominio
2. boards mistos real + derivado
3. contact sheets comentadas
4. casos visuais mais ricos
5. OSCEs com imagem clinica real

### Metas operacionais

- +80 a +140 midias clinicas reais
- Parts 4 a 8 com massa critica visual real

### Criterios de aceite

- o treino clinico deixa de soar abstrato
- pelo menos 3 casos complexos usam imagem real ao longo da trajetoria

## Fase 5: plataforma de treino seria

### Horizonte

6 a 12 meses

### Objetivo

Transformar o projeto em experiencia de treino, nao so consulta.

### Entregaveis

1. 50 MCQs com imagem
2. 30 V/F
3. 20 pegadinhas
4. 20 OSCEs
5. 12 casos transversais multi-step
6. feedback graduado
7. rubricas de debriefing
8. modo professor mais robusto

### Criterios de aceite

- o aluno consegue estudar por trajetoria, nao so por leitura
- os erros deixam de ser binarios
- o preco clinico das decisoes fica visivel

## Fase 6: consolidacao premium e dashboard maduro

### Horizonte

9 a 15 meses

### Objetivo

Fazer a web parecer uma plataforma unica.

### Entregaveis

1. identidade visual mais unificada
2. premium review memoravel
3. premium atlas maduro
4. cross-part layer mais forte
5. dashboard web maduro
6. busca por Part, formato, dominio e falha
7. favoritos, trilhas, historico local e retomada recomendada

### Regra de implementacao

O dashboard nao entra como lustre vazio.
Ele entra como camada superior de navegacao sobre conteudo e metadado ja robustos.

### Criterios de aceite

- a experiencia deixa de oscilar entre paginas soltas e ganha memoria local de uso
- o dashboard melhora navegacao, revisao e treino de verdade
- o produto passa a parecer uma plataforma unica

## Fase 7: Mac shell e iOS specification

### Horizonte

12 a 24 meses

### Objetivo

Transformar a vocacao multiplataforma em caminho concreto.

### Entregaveis

1. especificacao funcional do shell de Mac
2. especificacao funcional do app de iOS
3. mapa de views
4. modelo de dados local
5. estrategia offline
6. estrategia de deep links e links externos
7. paridade minima com a base HTML

### Criterios de aceite

- a transicao para app nao exige reescrever o conteudo do zero
- a separacao entre conteudo, midia, metadado e navegacao suporta a evolucao

## Fase 8: alpha de app

### Horizonte

15 a 24 meses

### Objetivo

Ter um app alpha focado em leitura, revisao, atlas e navegacao rapida.

### Entregaveis

1. shell nativo simples
2. conteudo offline embarcado
3. busca local
4. favoritos
5. trilhas de leitura e revisao
6. suporte inicial a treino visual, se a base ja estiver madura

### Criterios de aceite

- o app nao e um clone burro do site
- ele e uma casca util sobre o mesmo nucleo confiavel

## Trilhas de versao recomendadas

Uma forma pratica de quebrar isso em releases e:

- V1: tronco utilizavel e integridade estrutural
- V2: espinha fixa e taxonomia de falha
- V3: media batch A para Parts 4 a 9
- V4: training batch 1
- V5: decisao, escada e dispositivos em nivel premium
- V6: imagem e confirmacao premium
- V7: complicacoes, bundles e territorios hostis
- V8: casos transversais e linguagem de expertise
- V9: premium web final com dashboard maduro
- V10: pre-dashboard avancado e preparacao seria para Mac/iOS

## O que fazer agora

Nas proximas semanas, a ordem mais inteligente e:

1. fechar infraestrutura minima do pacote ativo
2. desenhar o master schema e a espinha obrigatoria das Parts
3. corrigir links e limpar promessas falsas da navegacao
4. consolidar premium review, premium atlas e hubs como superficies reais
5. especificar o dashboard desde ja, mesmo que a interface madura venha depois
6. estruturar o pipeline de metadado para midia real e derivada

## O que nao fazer

- nao tratar dashboard como vaidade cenografica
- nao adiar para sempre o dashboard so por medo de fazer cedo demais
- nao fazer app antes de separar conteudo de interface
- nao acumular imagem sem metadado
- nao reduzir o projeto a paginas sobre passagem de CVC
- nao aceitar conteudo visualmente pobre como se bastasse "estar correto"
- nao deixar o nucleo clinico virar papagaiada generica

## Frase-guia

O roadmap correto nao e "fazer um HTML e um dia talvez um app".
E construir uma plataforma medica visual, confiavel e escalavel, com base offline-first, conectividade util, dashboard como parte real do ecossistema, e caminho concreto para Mac e iOS.
