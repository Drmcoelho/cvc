# Full Plan - CVC Academy v20+

Data de consolidacao: 2026-03-28

## 1. Finalidade

Este documento consolida:

- `docs/reviews/dx_codex.md`
- `docs/foundation/roadmap.md`
- `docs/planning/execution_matrix.md`
- `docs/ops/MEGA_MVP_HANDOFF.md`

Objetivo: transformar diagnostico e backlog em um plano unico, sequenciado e executavel, com foco no estado real atual do bundle canonico em `project/cvc_academy_v20_premium_dual_layer/`.

## 2. Leitura executiva

O projeto ja tem:

- tese pedagogica forte
- serie principal 1 a 9 funcional
- premium layer inicial
- training arena
- dashboard alpha
- graphics catalog com acervo real aberto relevante

O projeto ainda nao tem:

- offline-first robusto de verdade
- QA confiavel e alinhado ao bundle real
- densidade editorial proporcional entre as superficies
- integracao madura entre treino, professor e dashboard
- readiness limpa para shell de Mac e iOS

Portanto, a ordem correta nao e "criar mais superficie".
A ordem correta e:

1. restaurar credibilidade tecnica
2. equalizar a densidade editorial mais gritante
3. costurar produto e metadado
4. so entao escalar plataforma

## 3. Principios operacionais

1. Nao abrir novas superficies enquanto o pacote base estiver mentindo sobre offline, QA ou navegacao.
2. Nao chamar placeholder de entrega.
3. Nao escalar dashboard sem metadado suficiente para sustentar filtros reais.
4. Nao escalar shell de app antes de separar conteudo, navegacao, estado e casca.
5. Nao acumular midia sem destino didatico explicito.
6. Nao tratar o projeto como "curso em HTML"; tratar como plataforma educacional offline-first.

## 4. Estado de partida em 2026-03-28

Snapshot operacional:

- 39 HTML em `pages/`
- 14 scripts em `scripts/`
- 374 assets em `assets/`
- dashboard alpha funcional
- training arena funcional
- catalogo com lotes reais 1 a 4 distribuidos de forma parcial no bundle

Problemas confirmados agora:

- `sw.js` com precache pequeno, cache fixo e fallback offline fraco
- `manifest.json` com `purpose` desatualizado
- `tools/smoke_test_bundle.py` falhando por drift de marcador
- `tools/validate_bundle.py` com falso positivo plausivel no Part 3
- `dreno-toracico.html` ainda abaixo do limiar para existir como modulo
- Part 1 overkill raso
- Parts 6-9 sem overkills dedicados
- Part 4 sem atlas
- `v20-part5-exercises.html` ainda textual demais para um modulo de imagem

## 5. Objetivos macro

### O1. Credibilidade tecnica

Fechar a distancia entre discurso offline-first e implementacao real.

### O2. Proporcionalidade editorial

Elevar as superficies fracas ate um patamar compativel com a forca conceitual do produto.

### O3. Integracao de produto

Fazer dashboard, treino, professor, premium e metadado trabalharem como ecossistema, nao como ilhas.

### O4. Readiness de plataforma

Separar o suficiente para viabilizar Mac/iOS sem reescrever o nucleo.

## 6. Nao-objetivos deste ciclo

Ficam explicitamente fora do centro do plano imediato:

- reescrever o projeto em outro framework
- iniciar shell de app antes de fechar a base web
- buscar volume de midia por volume
- criar novas areas conceituais fora do arco principal
- sofisticar analytics antes de resolver confiabilidade local

## 7. Trilhas de trabalho

### Trilha A - Foundation e QA

Escopo:

- `sw.js`
- `manifest.json`
- `tools/smoke_test_bundle.py`
- `tools/validate_bundle.py`
- rotina local de release

Resultado esperado:

- bundle honesto
- automacao confiavel o suficiente para bloquear regressao real

### Trilha B - Densificacao editorial core

Escopo:

- Part 1 overkill
- Part 4 atlas
- Part 5 exercises
- Part 6-9 overkills minimos
- `dreno-toracico.html`
- `v20-premium-review.html`

Resultado esperado:

- reducao da assimetria entre tese e execucao

### Trilha C - Integracao produto e metadado

Escopo:

- dashboard alpha
- treino
- teacher mode
- `mediaPulse`
- filtros reais
- export/import de estado local
- sync entre abas

Resultado esperado:

- produto com memoria, trilha e recomendacao mais coerentes

### Trilha D - Governanca de midia e readiness

Escopo:

- protocolo de acervo proprio
- separacao conteudo/metadado/navegacao/casca
- bases para Mac shell e iOS shell

Resultado esperado:

- plataforma pronta para crescer sem retrabalho estrutural

## 8. Fases do plano

## Fase 1 - Restaurar credibilidade tecnica

Janela sugerida: 2026-03-28 a 2026-04-10

### Meta

Fechar os gaps que fazem o produto parecer mais robusto do que ele realmente e.

### Entregaveis

1. Corrigir `sw.js`:
   - fallback offline util
   - precache das superficies core
   - dados minimos de treino no shell
   - versionamento de cache
2. Corrigir `manifest.json`:
   - separar `purpose`
   - revisar consistencia dos icones
3. Atualizar `tools/smoke_test_bundle.py`:
   - trocar marcadores textuais defasados
   - alinhar checks ao bundle atual
4. Recalibrar `tools/validate_bundle.py`:
   - remover falso positivo do Part 3
   - validar refs relativas de forma robusta
5. Definir regra de release local:
   - `validate_bundle`
   - `smoke_test_bundle`
   - checagem JS alterado

### Criterio de pronto

- offline frio funciona melhor no pacote core
- smoke test volta a verde
- validate bundle deixa de acusar falso positivo conhecido
- o estado tecnico descrito nos docs passa a bater com a realidade

### Risco se adiar

- o produto continua vendendo mais estabilidade do que entrega
- qualquer nova rodada editorial sobe em cima de uma base pouco confiavel

## Fase 2 - Corrigir a assimetria editorial mais gritante

Janela sugerida: 2026-04-11 a 2026-05-02

### Meta

Fechar os buracos que mais contradizem a qualidade conceitual do projeto.

### Entregaveis

1. Densificar Part 1 overkill:
   - masterclass com blocos reais e comparadores
   - exercises alem de 3 cards simples
   - code lab com estrutura mais algorithmica e aplicada
2. Criar atlas da Part 4:
   - tecnica viva
   - campo
   - kit
   - fio
   - dilatacao
   - fixacao
3. Reescrever `v20-part5-exercises.html` para treino visual real:
   - inserir imagens reais e/ou comparadores
   - usar AP/lateral, US e complicacao como material de pergunta
4. Ancorar `v20-premium-review.html`:
   - links explicitos para casos
   - links para atlas
   - links para exercicios
5. Decidir `dreno-toracico.html`:
   - ou vira modulo curto de verdade
   - ou vira ponte minima com menos pretensao
   - ou e removido

### Criterio de pronto

- Part 1 deixa de soar como rascunho
- Part 4 ganha superficie visual proporcional ao tema
- Part 5 exercises deixa de ser contradicao pedagogica
- Premium Review deixa de formular principio sem demonstracao
- `dreno-toracico.html` deixa de ser pagina fraca perdida no bundle

### Risco se adiar

- o bundle continua parecendo mais completo do que e
- o aluno encontra ilhas excelentes cercadas por superficies rasas

## Fase 3 - Completar a segunda metade da serie

Janela sugerida: 2026-05-03 a 2026-06-07

### Meta

Eliminar a sensacao de que a serie foi construida em duas velocidades.

### Entregaveis

1. Criar overkills minimos para Parts 6-9:
   - comecar por exercises
   - depois masterclass curta onde fizer sentido
   - atlas ou OSCE quando houver justificativa real
2. Reforcar Part 6 e Part 9 base onde ainda houver secura excessiva
3. Listar e tratar `stage*-data.js`:
   - preencher com dados reais de treino
   - ou remover referencias vazias
4. Reforcar transicoes entre:
   - Part 5 -> Part 6
   - Part 7 -> Part 8
   - Part 8 -> Part 9

### Criterio de pronto

- a metade final da serie deixa de parecer subatendida
- os placeholders deixam de contaminar a percepcao de maturidade

### Risco se adiar

- a proposta pedagogica continua mais forte no inicio do que no fechamento

## Fase 4 - Integrar produto e experiencia

Janela sugerida: 2026-06-08 a 2026-07-05

### Meta

Transformar dashboard, treino e professor em um sistema coerente.

### Entregaveis

1. Adicionar `storage` sync entre abas
2. Extrair `mediaPulse` e KPIs hardcoded para fonte calculada ou JSON
3. Unificar helpers repetidos:
   - `routeHref`
   - `clone`
   - `formatRelativeTime`
4. Evoluir dashboard alpha com filtros reais:
   - Part
   - superficie
   - dominio
   - falha
   - maturidade
5. Iniciar export/import do estado local
6. Conectar treino ao teacher mode e ao dashboard por metadado:
   - falhas frequentes
   - recomendacoes de estudo
   - retomada mais inteligente

### Criterio de pronto

- dashboard deixa de ser so cockpit e vira painel operacional real
- treino deixa rastro util para professor e revisao
- estado local fica menos fragil e mais portavel

### Risco se adiar

- o produto continua como conjunto de features boas sem costura suficiente

## Fase 5 - Endurecer acessibilidade e readiness de plataforma

Janela sugerida: 2026-07-06 a 2026-08-02

### Meta

Fechar a base que sustenta evolucao seria para web madura e shells futuros.

### Entregaveis

1. Acessibilidade basica:
   - skip-link
   - landmarks
   - `role="dialog"` e `aria-modal` na busca
   - feedback acessivel em interativos
2. Separar melhor:
   - conteudo
   - metadado
   - navegacao
   - estado local
   - casca de interface
3. Definir contrato de app-readiness:
   - entidades
   - views
   - fluxo de navegacao
   - dependencia offline
4. Abrir specs:
   - Mac shell
   - iOS shell
5. Formalizar protocolo de acervo proprio:
   - permissao
   - anonimizacao
   - rastreabilidade
   - criterio de ingestao

### Criterio de pronto

- bundle mais defensavel como produto educacional maduro
- base pronta para salto de casca sem reescrita caotica

### Risco se adiar

- qualquer ambicao multiplataforma nasce em cima de acoplamento ruim

## 9. Backlog priorizado por ordem real

### Agora

1. `sw.js`
2. `manifest.json`
3. `tools/smoke_test_bundle.py`
4. `tools/validate_bundle.py`
5. `pages/dreno-toracico.html`

### Em seguida

1. Part 1 overkill
2. Part 4 atlas
3. `v20-part5-exercises.html`
4. `v20-premium-review.html`
5. `stage*-data.js`

### Depois

1. overkills Parts 6-9
2. filtros reais do dashboard
3. export/import do estado local
4. integracao treino-professor-dashboard
5. protocolo de acervo proprio
6. app-readiness

## 10. Dependencias criticas

### Dependencias de Fase 1

- nenhuma externa
- so precisa de decisao interna e edicao do bundle

### Dependencias de Fase 2

- Fase 1 fechada
- bundle e QA minimamente confiaveis

### Dependencias de Fase 3

- Fase 2 avancada
- schema editorial estabilizado

### Dependencias de Fase 4

- metadado suficiente
- surfaces core mais maduras

### Dependencias de Fase 5

- produto mais coerente
- menos placeholders
- mais separacao entre dados e UI

## 11. Definicao de pronto global

O plano so pode ser considerado bem sucedido quando:

- o pacote core tiver offline mais honesto
- QA local estiver alinhado ao estado real do bundle
- Part 1, Part 4, Part 5 exercises, Parts 6-9 e `dreno-toracico.html` nao forem mais os pontos fracos obvios
- dashboard, treino e professor trocarem sinal util via metadado
- existir base clara para Mac/iOS sem prometer implementacao prematura

## 12. Metricas de acompanhamento

### Tecnicas

- smoke test: verde
- validate bundle: verde
- zero refs placeholders conhecidas nas superficies publicas
- cache versionado e shell ampliado

### Editoriais

- Part 1 sai do estado raso
- Part 4 ganha atlas
- Part 5 exercises usa imagem real ou comparador real
- Parts 6-9 ganham ao menos camada minima de treino

### Produto

- dashboard com filtros reais
- sync entre abas
- export/import definido ou implementado
- metadado reaproveitado por treino, professor e dashboard

## 13. Regra de execucao por sprint

Cada sprint deve:

1. fechar ao menos 1 item de credibilidade ou integridade
2. fechar ao menos 1 item de densidade editorial
3. rerodar QA local no final
4. atualizar docs de estado se o resultado mudou

Se um sprint produzir superficie nova sem reduzir debito real, o plano saiu do trilho.

## 14. Proximo sprint recomendado

Sprint 1 sugerido: 2026-03-28 a 2026-04-10

Escopo fechado:

1. corrigir `sw.js`
2. corrigir `manifest.json`
3. atualizar `tools/smoke_test_bundle.py`
4. recalibrar `tools/validate_bundle.py`
5. decidir o destino de `pages/dreno-toracico.html`

Saida esperada:

- primeira release tecnicamente honesta depois do `dx_codex`

## 15. Frase-guia

O CVC Academy v20+ nao precisa de mais ambicao conceitual agora.
Precisa de alinhamento entre qualidade de pensamento, densidade editorial, confiabilidade tecnica e integracao de produto.
