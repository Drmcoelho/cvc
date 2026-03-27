# Metadata Minimum v20+

## Finalidade

Este documento define o contrato minimo para duas coisas:

- midia
- superficies do produto

Ele existe para impedir que assets, pages e hubs entrem no pacote sem destino didatico claro.

## Regras basicas

1. Todo asset novo entra com id estavel.
2. Toda superficie nova entra com rota, funcao e maturidade.
3. Midia real, derivada e de treino nao se misturam sem rotulo.
4. Nenhum arquivo entra sem Part alvo ou superficie alvo.
5. Status editorial e status de uso sao obrigatorios.
6. Midia externa aberta exige origem e licenca verificaveis.

## Campos minimos para midia

| Campo | Obrigatorio | Exemplo | Funcao |
| --- | --- | --- | --- |
| `id` | sim | `part7_bundle_board_v1` | identificador estavel |
| `file` | sim | `assets/real/derived/maintenance_bundles_board.jpg` | caminho local |
| `part_targets` | sim | `["part7"]` | Parts onde a midia entra |
| `surface_targets` | sim | `["reality_class","teacher_mode"]` | superficies onde a midia sera usada |
| `domain` | sim | `teaching` | dominio clinico ou pedagogico |
| `subdomain` | sim | `bundle_audit` | recorte mais fino |
| `media_type` | sim | `derived_didactic` | tipo de midia |
| `didactic_function` | sim | `comparison_board` | papel didatico |
| `source_type` | sim | `internal_production` | origem |
| `source_reference` | sim | `project_local_v20` | referencia de origem |
| `permission_or_license` | sim | `internal_use_allowed` | permissao de uso |
| `source_page_url` | condicional | `https://commons.wikimedia.org/wiki/File:PICC_line.jpg` | pagina canonica da fonte externa |
| `download_url` | condicional | `https://upload.wikimedia.org/.../PICC_line.jpg` | arquivo realmente ingerido |
| `creator_attribution` | condicional | `Nurseirie` | atribuicao exigida pela fonte |
| `license_url` | condicional | `https://creativecommons.org/licenses/by-sa/3.0/` | texto da licenca |
| `verified_at` | condicional | `2026-03-26` | data da verificacao editorial |
| `patient_identifiability` | condicional | `none_visible` | risco de identificacao |
| `anonymization_status` | sim | `not_applicable` | anonimizado ou nao |
| `trust_level` | sim | `editorial_reviewed` | grau de confiabilidade |
| `status` | sim | `placed` | estado no fluxo |
| `priority` | sim | `high` | prioridade editorial |
| `notes` | nao | `bridge for part7 and teacher mode` | observacao curta |

## Campos minimos para superficies

| Campo | Obrigatorio | Exemplo | Funcao |
| --- | --- | --- | --- |
| `id` | sim | `reality_part1` | identificador estavel |
| `title` | sim | `Part 1 · Antes do CVC` | nome visivel |
| `part_targets` | sim | `["part1"]` | Parts cobertas |
| `surface_type` | sim | `reality_class` | tipo de superficie |
| `route` | sim | `pages/v20-reality-class-part1.html` | rota local |
| `status` | sim | `active` | publicada, draft ou archived |
| `maturity` | sim | `staged` | absent, placeholder, partial, staged, functional, mature |
| `didactic_function` | sim | `entry_point` | papel principal |
| `offline_ready` | sim | `true` | pronta para uso local |
| `primary_assets` | sim | `[]` | assets principais ligados a ela |
| `primary_docs` | nao | `["docs/V20_PART2_BOOST_MASTER.md"]` | docs de apoio |
| `updated_at` | sim | `2026-03-26` | ultima revisao |
| `notes` | nao | `needs denser training block` | observacao curta |

## Vocabulario canonico

### `media_type`

- `clinical_real`
- `derived_didactic`
- `training_visual`
- `reference_external`
- `loop_or_microvideo`

### `source_type`

- `internal_production`
- `open_license_external`
- `owned_clinical_archive`

### `status` para midia

- `planned`
- `curated`
- `ingested`
- `placed`
- `reused`
- `archived`

### `maturity` para superficies

- `absent`
- `placeholder`
- `partial`
- `staged`
- `functional`
- `mature`

## Arquivos canonicos no bundle

- `data/v20_surface_registry.json`
- `data/v20_media_registry_seed.json`
- `data/v20_open_media_queue.json`

O primeiro registra superficies ativas.
O segundo serve como seed minimo para o catalogo de midia.
O terceiro organiza fila e lote de midia real aberta.

## Regra de manutencao

Toda nova Part, hub, atlas, board ou imagem relevante deve atualizar pelo menos um desses registros no mesmo lote.
