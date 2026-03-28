# GitHub Pages

## Objetivo

Publicar o bundle canonico do `CVC Academy` como superficie online oficial, sem abandonar a natureza `offline-first` do projeto.

O que deve ir para a web:

- `project/cvc_academy_v20_premium_dual_layer/`

O que nao deve ser publicado:

- `archive/`
- `reference/`
- `tools/`
- launcher da raiz
- docs operacionais da raiz

## Estrategia adotada

O deploy deve ser feito por `GitHub Actions`, nao por publicacao direta da raiz do branch.

Motivo:

- o GitHub Pages, por branch, publica apenas `/(root)` ou `/docs`
- o bundle real mora em `project/cvc_academy_v20_premium_dual_layer/`
- publicar a raiz do repositorio misturaria material operacional com o site

Workflow oficial:

- `.github/workflows/pages.yml`

Artefato publicado:

- `project/cvc_academy_v20_premium_dual_layer`

## Pre-requisitos no GitHub

1. O repositorio precisa ter remoto configurado e `main` publicado.
2. Em `Settings > Pages`, a fonte deve ser `GitHub Actions`.
3. O branch `main` deve conter:
   - `.github/workflows/pages.yml`
   - `project/cvc_academy_v20_premium_dual_layer/`

## URL esperada

Se for um repositorio de projeto:

- `https://SEU_USUARIO.github.io/NOME_DO_REPO/`

Se for site de usuario ou organizacao no repositorio especial:

- `https://SEU_USUARIO.github.io/`

## Regras de compatibilidade

O bundle precisa continuar obedecendo estas regras para funcionar bem no Pages:

- usar caminhos relativos
- nao depender de `file://`
- nao referenciar assets locais com caminho absoluto `/`
- nao depender de backend
- manter `manifest.json`, `sw.js` e `scripts/sw-register.js` com escopo relativo

## Publicacao

Depois de dar push para `main`, o deploy roda automaticamente.

Fluxo minimo:

```bash
git checkout main
git push -u origin main
```

Se a configuracao do Pages ja estiver em `GitHub Actions`, o deploy deve aparecer na aba `Actions`.

## Validacao pos-deploy

Checar:

- home do bundle
- `pages/dashboard-alpha.html`
- `pages/training-arena.html`
- `pages/v20-premium-hub.html`
- `manifest.json`
- registro do service worker em contexto HTTPS

Comandos uteis para revisao automatizada:

```bash
python3 tools/browser_walk_bundle.py --browser safari --base-url https://drmcoelho.github.io/cvc --include-404 --report browser_walk_live_report.md
python3 tools/review_live_interactions.py --base-url https://drmcoelho.github.io/cvc --report live_interaction_report.md
```

O primeiro faz walkthrough estrutural do site publicado.
O segundo valida interacao real em Safari: estado local, dashboard, arena e service worker.

## Observacao importante

O site online nao substitui o pacote local.

O modelo correto continua sendo:

- `offline-first` como base
- `GitHub Pages` como espelho publico e superficie conectada
- futura casca de app para `Mac` e `iOS` sobre a mesma base canonica
