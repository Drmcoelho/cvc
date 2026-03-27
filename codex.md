# CVC Academy v20+

## Identidade do projeto

O CVC Academy nao e apenas um conjunto de paginas sobre passagem de cateter venoso central.
Ele e uma plataforma educacional medica visual, confiavel e de longo prazo, com base `offline-first`, uso conectado quando disponivel, e caminho real para evolucao para web mais rica, app de Mac e app de iOS.

O nucleo clinico e CVC, mas o nucleo pedagogico e mais amplo:

- decisao antes da tecnica
- menor invasividade suficiente
- escalonamento racional do acesso
- escolha do dispositivo em funcao da terapia
- confirmacao, manutencao e complicacoes como parte da mesma historia
- ensino, supervisao e debriefing como extensoes da competencia clinica

Em outras palavras: o projeto nao quer ensinar "como puncionar". Quer ensinar `como pensar acesso`, `quando nao invadir`, `quando invadir`, `como escolher`, `como executar`, `como confirmar`, `como manter`, `como evitar dano` e `como ensinar isso com seriedade`.

## Tese pedagogica central

O eixo conceitual do produto e uma escada de escalonamento.

As perguntas fundamentais sao:

1. O paciente precisa mesmo de acesso agora?
2. Precisa ser uma via invasiva?
3. Via oral resolve?
4. Se nao resolve, por que preciso de via endovenosa?
5. Entre as vias possiveis, qual entrega o objetivo terapeutico com menor custo biologico?
6. Se preciso escalar, para qual dispositivo, qual sitio e qual tecnica?
7. Como confirmo, acompanho e ensino essa decisao sem transformar medicina em automatismo?

Por isso, o projeto orbita CVC, mas nao se limita a CVC.
Ele naturalmente toca:

- decisao de acesso
- periferico e escalada
- familias de dispositivos
- indicacoes e contraindicacoes
- imagem e confirmacao
- bundles e manutencao
- complicacoes
- territorios hostis
- ensino, preceptoria e debriefing
- procedimentos correlatos e transicoes para outros temas

## O que este produto precisa ser

### 1. Plataforma offline-first

O projeto deve abrir e funcionar localmente como pacote HTML.
O nucleo do conteudo nao pode depender de internet para existir.

### 2. Plataforma conectavel

Estar conectado e parte do mundo real de uso.
Portanto, o produto pode e deve aceitar:

- links externos para referencia complementar
- citacoes e fontes online quando fizer sentido
- navegacao para paginas externas de apoio
- expansoes futuras que aproveitem conectividade

O principio correto nao e "offline ou online".
E `offline-first, connected-when-useful`.

### 3. Plataforma visual

Sem imagem real, comparador, board, sequence, radiografia, ultrassom, dispositivo e contexto clinico, isso vira apostila generica.
Este projeto precisa ser explicitamente visual.

### 4. Plataforma confiavel

O objetivo nao e competir com conteudo raso da internet.
O objetivo e ser uma fonte seria de educacao medica:

- didaticamente clara
- visualmente rica
- clinicamente prudente
- rastreavel
- menos supersticiosa
- menos decorativa

### 5. Plataforma com vocacao multiplataforma

O HTML offline nao e um fim em si mesmo.
Ele e a base exportavel para:

- web local ou conectada
- dashboard web
- shell de Mac
- shell de iOS

Isso exige separacao progressiva entre `conteudo`, `midia`, `metadado`, `navegacao` e `casca de interface`.

## O que o dashboard significa aqui

O dashboard nao e enfeite.
Tambem nao deve ser tratado como vaidade de interface.
Ele e uma superficie legitima do produto.

Papel do dashboard:

- ser porta de entrada superior do ecossistema
- organizar trilhas de estudo, revisao e treino
- mostrar hubs, atlas, casos e overkills
- reduzir sensacao de arquipelago de paginas soltas
- servir como mapa do projeto inteiro
- apoiar filtros por Part, dominio, formato e finalidade
- preparar o caminho para Mac e iOS sem reescrever a alma do conteudo

Regra importante:

- o dashboard faz parte da arquitetura alvo desde ja
- mas sua implementacao madura depende de base canonica, conteudo e metadado suficientemente organizados

## Superficies de produto

O produto final deve combinar, no minimo, estas superficies:

### A. Trilha principal

Partes 1 a 9 com narrativa clinica coerente.

### B. Overkills por dominio

Masterclass, exercicios, code labs, OSCEs, atlas e outros formatos de aprofundamento.

### C. Premium layer

Review transversal, atlas premium, casos e linguagem de expertise.

### D. Dashboard web

Mapa superior da plataforma, com navegacao clara, filtros e trajetorias.

### E. Treino serio

MCQ, V/F, pegadinhas, OSCE visual, casos multi-step, rubricas e feedback graduado.

### F. Conectividade externa

Links para referencias, paginas ou fontes externas quando isso ampliar o valor sem fragilizar o nucleo offline.

### G. Casca de app

Evolucao futura para Mac e iOS, com aproveitamento maximo da base HTML, dos manifests e da organizacao de conteudo.

## Arquitetura de conteudo esperada

Cada Part, em seu estado maduro, deve carregar uma espinha recognoscivel.
Uma forma robusta de pensar isso e:

- abertura clinica
- pergunta central
- mapa mental
- bloco nuclear
- comparadores
- pitfalls
- casos
- treino
- checklist
- ponte para a proxima etapa

Esse projeto nao deve ser uma colecao de paginas isoladas.
Deve ter coerencia interna de plataforma.

## Regra de ouro da midia

Educacao medica sem imagem real e contexto visual confiavel degrada rapido.
Logo, a midia aqui nao e "decoracao". Ela e parte do raciocinio.

Hierarquia didatica esperada:

- midia clinica real de alto valor
- midia derivada didatica de alto valor
- treino visual
- texto de suporte

Uma pagina forte nao e a que tem mais texto.
E a que consegue transformar decisao, tecnica, imagem, risco e manutencao em experiencia cognitiva clara.

## Governanca de midia e confiabilidade

Todo item de midia deveria caminhar para um metadado minimo, com campos como:

- id
- arquivo
- dominio
- subdominio
- part_targets
- media_type
- didactic_function
- source_type
- source_reference
- license_or_permission
- anonymization_status
- trust_level
- status
- priority
- reuse_targets
- notes

Separacoes que precisam ser respeitadas:

- real vs derivado vs treino
- ativo pronto vs placeholder
- fonte interna vs curadoria externa
- uso publico vs uso restrito

## Modelo operacional do projeto

O projeto cresce em duas velocidades.

### Maquina A: producao interna

Tudo que depende so da equipe:

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
- hubs e dashboard web

### Maquina B: curadoria externa e acervo real

Tudo que depende de sourcing:

- fotos clinicas reais
- radiografias reais
- ultrassons reais
- loops e microvideos
- complicacoes reais
- dispositivos reais em uso
- contextos hostis reais
- acervo proprio com permissao
- ingestao com metadado e rastreabilidade

As duas maquinas nao competem.
Elas precisam ser desenhadas para rodar em paralelo.

## Regra de PR e continuidade

Sim: a regra operacional correta e fechar este ciclo em um PR proprio e, quando a conversa continuar com um novo lote de trabalho, abrir outro PR.

Isso significa:

- um ciclo coerente de entrega = um branch + um PR
- uma retomada futura do trabalho = novo branch + novo PR
- nao continuar inflando o mesmo PR por inercia entre conversas diferentes
- so continuar no mesmo PR se isso for pedido explicitamente pelo usuario
- antes de fechar cada PR, sincronizar `codex.md`, `roadmap.md`, `master_schema.md` e `execution_matrix.md` se o estado real do projeto tiver mudado

Mesmo que o repositorio ainda nao tenha historico remoto maduro, esta deve ser a politica padrao daqui em diante.

## Estado atual do workspace

Depois da limpeza da pasta, a estrutura local ficou assim:

- `project/cvc_academy_v20_premium_dual_layer/`: projeto ativo e canonico
- `reference/`: PDFs e material de referencia
- `archive/zips/legacy/`: snapshots historicos v12-v19
- `archive/zips/v20/`: snapshots do ciclo v20
- `archive/zips/docs/`: pacotes de documentacao e execution packs
- `index.html`: launcher offline simples na raiz do workspace
- `dashboard.zsh`: launcher HTTP local para uso via terminal
- `RUN_LOCAL.md`: guia de execucao e teste humano
- `MEGA_MVP_HANDOFF.md`: estado atual, limites e lacunas prioritarias
- `master_schema.md`: schema operacional por Part e por superficie
- `execution_matrix.md`: backlog operacional priorizado
- `tools/validate_bundle.py`: auditoria estrutural do pacote canonico
- `tools/run_bundle.py`: servidor local do bundle canonico
- `tools/smoke_test_bundle.py`: smoke test HTTP do bundle canonico
- `codex.md` e `roadmap.md`: guias operacionais locais

## Estado atual do projeto ativo

Tomando `project/cvc_academy_v20_premium_dual_layer` como base:

- `index.html`: ponto de entrada principal, agora tambem ligado ao runtime local de estudo
- `pages/`: 39 paginas HTML
- `docs/`: 17 documentos
- `data/`: 12 JSONs
- `assets/`: 374 arquivos de imagem
- `scripts/`: 14 arquivos locais de suporte

Superficies hoje presentes em HTML:

- Part 1: reality class, masterclass, exercicios, code lab
- Part 2: reality class, masterclass, exercicios, code lab
- Part 3: reality class, masterclass, exercicios, code lab, atlas
- Part 4: reality class, masterclass, exercicios, code lab, OSCE
- Part 5: reality class, masterclass, exercicios, code lab, atlas, OSCE
- Part 6: reality class
- Part 7: reality class
- Part 8: reality class
- Part 9: reality class
- Superficies transversais: alpha hub, dashboard alpha, training arena, premium hub, premium review, premium atlas, cross-part cases, graphics catalog, revisao integral, modo professor

Camadas superiores hoje existentes como camada funcional inicial:

- `pages/v20-premium-hub.html`
- `pages/v20-premium-atlas.html`
- `pages/v20-premium-review.html`
- `pages/v20-cross-part-cases.html`
- `pages/v20-graphics-catalog.html`
- `pages/dashboard-alpha.html`
- `pages/training-arena.html`

Esses arquivos agora ja se articulam com contrato, mapa premium, casos, catalogo, treino, dashboard alpha, memoria local de aprendizagem, favoritos, concluidos, recentes, retomada de estudo e um primeiro lote real aberto com licenca rastreavel, embora ainda possam ganhar filtros globais mais profundos e sincronismo entre navegadores.

Camada de metadado minimo agora presente no proprio bundle:

- `docs/METADATA_MINIMUM.md`
- `data/v20_surface_registry.json`
- `data/v20_media_registry_seed.json`
- `data/v20_premium_map.json`
- `data/v20_case_registry.json`
- `data/v20_training_registry.json`
- `data/v20_open_media_queue.json`
- `scripts/training-arena-data.js`
- `scripts/training-arena.js`
- `scripts/dashboard-alpha.js`

Camada de midia real aberta agora presente no proprio bundle:

- `docs/OPEN_MEDIA_SOURCING.md`
- `assets/real/open/`
- `data/v20_open_media_queue.json`
- entradas `clinical_real` em `data/v20_media_registry_seed.json`

Lotes 2, 3 e 4 da midia real aberta agora presentes no proprio bundle:

- US real de jugular hostil
- RX real de malposicao de port em azigos
- curativo e suturas reais de manutencao
- foto procedural real de US no pescoco
- par AP-lateral real de malposicao em azigos
- CT real de trombose de veia cava superior
- foto real de sitio de saida de cateter
- biofilme real de cateter por staph
- biofilme real com Alcaligenes e material fibrinoide

## O que ja esta claro no material

- existe uma direcao pedagogica forte
- a escada de decisao ja aparece no DNA do projeto
- Parts 2 a 5 ja acumulam bom volume de assets
- Parts 7 e 8 mostram a ambicao de sair do procedural simples e entrar em ensino, manutencao e contexto ruim
- ha intencao real de premium review, premium atlas, hubs e dashboard

## Onde a documentacao anterior estava aquem

O entendimento anterior subestimava alguns pontos que agora ficam explicitos:

- o dashboard nao e opcional
- conectividade externa e permitida e desejavel quando util
- o projeto nao e "somente HTML"; HTML e a base operacional atual
- Mac e iOS nao sao fantasia aleatoria; sao caminhos plausiveis e devem influenciar a arquitetura
- CVC e eixo, nao fronteira total do conteudo
- a visualidade nao e acessorio; e criterio de qualidade pedagogica

## Limites e dividas tecnicas atuais

Hoje o pacote ainda esta abaixo da ambicao do produto.

Pontos principais:

- a infraestrutura minima do pacote foi recomposta com `manifest.json`, `styles/site.css`, `scripts/`, `sw.js` e icones locais
- o bundle local agora fecha com zero referencias HTML quebradas quando validado pela rotina local
- varias superficies novas existem, mas muitas ainda estao em estagio inicial e precisam densidade didatica real
- o premium deixou de ser placeholder, mas ainda precisa subir para camada editorial robusta
- a separacao entre conteudo, metadado, navegacao e casca ainda nao esta madura
- o dashboard continua como alvo correto, mas ainda nao como interface implementada

## Regras para qualquer contribuicao futura

1. Nunca reduzir o projeto a "passagem de CVC".
2. Sempre preservar a escada de decisao antes da tecnica.
3. Nao tratar imagem como enfeite.
4. Nao publicar navegacao que a arvore real nao suporta.
5. Nao misturar midia real, derivada e treino sem metadado claro.
6. Nao deixar dashboard virar distracao cenografica.
7. Nao planejar Mac/iOS como reescrita total; planejar como evolucao da base canonica.
8. Nao aceitar conteudo que soe generico, superficial ou "papagaiado".

## Prioridade tecnica imediata

Se alguem for retomar o trabalho agora, a ordem correta e:

1. consolidar a espinha estrutural e o treino minimo das reality classes novas
2. fixar metadado e governanca de midia e superficies
3. fortalecer a camada premium, os casos transversais e o catalogo grafico como produto real
4. desenhar a arquitetura de informacao do dashboard alpha
5. rodar `python3 tools/validate_bundle.py` antes de cada release local
5. preparar a arquitetura para dashboard e futuras cascas de app

## Frase-guia

O CVC Academy deve crescer como uma plataforma visual e confiavel de decisao, acesso, tecnica, imagem, complicacao, manutencao e ensino, com base offline-first, conectividade util e caminho real para dashboard, Mac e iOS.
