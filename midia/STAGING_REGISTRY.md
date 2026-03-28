# Staging Registry — midia/

## Status

Staging area de mídia própria e curada.
Nenhum arquivo aqui está aprovado para o bundle até ter entrada válida em `v20_media_registry_seed.json`.

**Declaração LGPD:** imagens clínicas próprias seguem LGPD (titular: responsável editorial do projeto).
**Protocolo de entrada:** `docs/foundation/anonymization_protocol.md`

---

## midia/real/ — 30 arquivos

### Legenda

- `risco_paciente`: `none` · `baixo` · `alto`
  - `none` = equipamento, material, diagrama — sem dado de paciente
  - `baixo` = dispositivo em uso mas sem face/identificador óbvio
  - `alto` = anatomia visível (mão, pescoço, virilha, pele), imagem clínica (RX/US/CT), curativo com pele exposta
- `lgpd_ok`: `sim` (titular declarou LGPD · anon. verificada) · `verificar` (anon. não confirmada ainda) · `n/a` (sem dado de paciente)
- `status`: `pronto` · `verificar_anon` · `suspeito` · `duplicata_potencial`

---

### Equipamentos e materiais — sem risco de paciente

| arquivo_atual | nome_canônico_proposto | domínio | parts_alvo | risco_paciente | lgpd_ok | status | obs |
|---|---|---|---|---|---|---|---|
| `kit_cvc.jpg` | `device__cvc_nontunneled__kit_components__01.jpg` | device | 3 | none | n/a | pronto | Verificar se duplica `central_venous_catheter_set_wikimedia.jpg` (873KB vs 142KB — provavelmente diferente) |
| `cvc_diagram.png` | `device__cvc_nontunneled__diagram_overview__01.png` | device | 1, 3 | none | n/a | pronto | Derivado — confirmar se é próprio ou captura de fonte |
| `cvc_nontunneled_diagram.png` | `device__cvc_nontunneled__diagram_detail__01.png` | device | 3 | none | n/a | pronto | Derivado — idem |
| `tunneled_device.png` | `device__cvc_tunneled__diagram_overview__01.png` | device | 3 | none | n/a | pronto | Derivado |
| `cardiac_monitor.jpg` | `context__monitoring__cardiac_monitor__01.jpg` | context | 4, 8 | none | n/a | pronto | |
| `iv_pump.jpg` | `context__infusion__iv_pump__01.jpg` | context | 7, 9 | none | n/a | pronto | |
| `npt_bag.jpg` | `indication__npt__bag_standard__01.jpg` | indication | 1, 3 | none | n/a | pronto | |
| `npt_lipid.jpg` | `indication__npt__lipid_emulsion__01.jpg` | indication | 1, 3 | none | n/a | pronto | |
| `npt_smof.jpg` | `indication__npt__smof_lipid__01.jpg` | indication | 1, 3 | none | n/a | pronto | |
| `thoracic_veins_anatomy.jpg` | `anatomy__thoracic_veins__overview__01.jpg` | anatomy | 2, 5 | none | n/a | pronto | Verificar se é ilustração própria ou captura de fonte |
| `huber_gripper.jpg` | `device__port__huber_gripper_needle__01.jpg` | device | 3, 7 | none | n/a | **suspeito** | **4KB — arquivo provavelmente truncado ou corrompido. Verificar antes de usar.** |

**Seldinger SVGs (derivados, próprios):**

| arquivo_atual | nome_canônico_proposto | domínio | parts_alvo | risco_paciente | lgpd_ok | status |
|---|---|---|---|---|---|---|
| `seldinger_catheter.svg` | `technique__seldinger__catheter_step__01.svg` | technique | 4 | none | n/a | pronto |
| `seldinger_wire.svg` | `technique__seldinger__wire_step__01.svg` | technique | 4 | none | n/a | pronto |
| `seldinger_final.svg` | `technique__seldinger__final_step__01.svg` | technique | 4 | none | n/a | pronto |

---

### Clínicos — titular declarou LGPD · anon. a verificar por arquivo

| arquivo_atual | nome_canônico_proposto | domínio | parts_alvo | risco_paciente | lgpd_ok | status | obs |
|---|---|---|---|---|---|---|---|
| `cvc_triple.jpg` | `device__cvc_nontunneled__triple_lumen_in_use__01.jpg` | device | 3 | baixo | verificar | verificar_anon | Dispositivo em uso — confirmar que sem face/identificador |
| `hd_catheter.jpg` | `device__cvc_hd__temporary_hd_catheter__01.jpg` | device | 3 | baixo | verificar | verificar_anon | Provavelmente diferente da wikimedia (694KB vs 882KB). Confirmar origem. |
| `hickman.jpg` | `device__cvc_tunneled__hickman_in_use__01.jpg` | device | 3 | baixo | verificar | verificar_anon | Dispositivo tunelizado em uso |
| `permacath.jpg` | `device__cvc_hd__permacath_tunneled__01.jpg` | device | 3 | baixo | verificar | verificar_anon | |
| `picc.jpg` | `device__picc__picc_in_use__01.jpg` | device | 3 | baixo | verificar | verificar_anon | Provavelmente diferente da wikimedia (248KB vs 1.27MB) |
| `port_closeup.jpg` | `device__port__port_closeup__01.jpg` | device | 3, 7 | baixo | verificar | verificar_anon | |
| `pneumothorax_xray.jpg` | `complication__mechanical__pneumothorax_xray__01.jpg` | complication | 6 | alto | verificar | verificar_anon | RX — verificar ausência de dados DICOM/identificadores de imagem |
| `jugular_us_variant.jpg` | `technique__ij__us_operator_view__01.jpg` | technique | 4 | alto | verificar | verificar_anon | US — verificar ausência de dados de paciente na imagem |
| `jugular_externa.jpg` | `technique__ej__external_jugular_access__01.jpg` | technique | 2, 4 | alto | verificar | verificar_anon | Anatomia de pescoço — confirmar anonimização |
| `cvc_femoral.jpg` | `technique__femoral__cvc_femoral_in_use__01.jpg` | technique | 2, 4 | alto | verificar | verificar_anon | Virilha — alto risco de identificação por contexto |
| `periferico_braco.jpg` | `technique__peripheral__iv_arm__01.jpg` | technique | 1, 2 | alto | verificar | verificar_anon | Braço exposto |
| `periferico_mao.jpg` | `technique__peripheral__iv_hand__01.jpg` | technique | 1, 2 | alto | verificar | verificar_anon | Mão exposta |
| `io_access.jpg` | `technique__io__intraosseous_access__01.jpg` | technique | 1 | incerto | verificar | verificar_anon | Confirmar visualmente se mostra anatomia de paciente |
| `arterial_vs_venous_blood.jpg` | `technique__puncture__arterial_vs_venous_blood__01.jpg` | technique | 4 | alto | verificar | verificar_anon | Sangue — confirmar ausência de identificadores de seringa/contexto |
| `curativo_central.jpg` | `maintenance__dressing__central_line_dressing__01.jpg` | maintenance | 7, 9 | alto | verificar | verificar_anon | Pele + dispositivo — confirmar anonimização |
| `chest_drain.jpg` | `complication__thoracic__chest_drain_in_situ__01.jpg` | complication | 6 | alto | verificar | verificar_anon | Tórax — confirmar ausência de face e marcas identificadoras |

---

## midia/svg/ — 10 SVGs AI-generated

Todos derivados (AI-generated, sem dado clínico real). Nível 4 da hierarquia de mídia — entram como suporte inline, nunca em posição de âncora visual.

**Nenhum referenciado em nenhuma página do bundle ainda.**

| arquivo | nome_canônico_proposto | partes_alvo | status | obs |
|---|---|---|---|---|
| `indicacao-decision-tree-board.svg` | `board__indication__decision_tree__01.svg` | 1, 2 | pronto para V2/V3 | Árvore de decisão — útil como suporte em Part 1 |
| `maintenance-daily-protocol-board.svg` | `board__maintenance__daily_protocol__01.svg` | 7, 9 | pronto para V3 | |
| `us-technique-guide-board.svg` | `board__technique__us_guide__01.svg` | 4 | pronto para V3 | |
| `peripheral-access-territory.svg` | `board__technique__peripheral_territory__01.svg` | 1, 2 | pronto para V2/V3 | |
| `seldinger-sequence-board.svg` | `board__technique__seldinger_sequence__01.svg` | 4 | pronto para V3 | |
| `icsrc-4-vias-board.svg` | `board__complication__icsrc_4_vias__01.svg` | 6, 9 | pronto para V3 | |
| `malposition-types-board.svg` | `board__complication__malposition_types__01.svg` | 5, 6 | pronto para V3 | |
| `mindmap-part3-technique.svg` | `board__device__mindmap_part3__01.svg` | 3 | pronto para V3 | |
| `mindmap-part8-special.svg` | `board__continuity__mindmap_part8__01.svg` | 8 | pronto para V3 | |
| `mindmap-part9-icsrc.svg` | `board__checklist__mindmap_part9__01.svg` | 9 | pronto para V3 | |

---

## midia/sourcing/ — 3 docs

Notas de curadoria de sessões anteriores. Cobrem ~5 das imagens da pasta `midia/real/`.
A ser movido para `docs/media/curation_log/` quando commitado.

| arquivo | cobre | status |
|---|---|---|
| `v0.2_day1_curated_sources.md` | CVC set, RX tipos, fixação, categoria Wikimedia | válido, mover |
| `v0.2_day2_curated_sources.md` | PICC, HD temporário, CVC isolado | válido, mover |
| `v0.2_day3_curated_sources.md` | RX subclávio, RX tórax adulto, hemotórax, pneumotórax | válido, mover |

---

## Próximos passos por grupo

### Grupo 1 — equipment (status: pronto) — 13 arquivos
Podem entrar no bundle assim que:
- [ ] Confirmação de que `cvc_diagram.png`, `cvc_nontunneled_diagram.png`, `tunneled_device.png` e `thoracic_veins_anatomy.jpg` são criação própria (sem captura de fonte externa)
- [ ] `huber_gripper.jpg` verificado visualmente (4KB suspeito)
- [ ] Entrada criada em `v20_media_registry_seed.json` com `source: "proprio"` e `lgpd_basis: "equipamento_sem_dado_paciente"`
- [ ] Renomear para convenção canônica antes de mover para `assets/`

### Grupo 2 — clinical (status: verificar_anon) — 16 arquivos
Antes de entrar no bundle:
- [ ] Verificar ausência de identificadores em cada arquivo (rostos, tatuagens, marcas, dados de imagem DICOM/EXIF)
- [ ] Confirmar base LGPD por arquivo (titular, finalidade educacional, anonimização)
- [ ] Preencher `anonymized_by` e `anonymized_date` no registro
- [ ] Entrada criada em `v20_media_registry_seed.json` com `source: "proprio"` e `lgpd_basis: "titular_anonimizado"`
- [ ] Renomear para convenção canônica antes de mover para `assets/real/proprio/`

### Grupo 3 — SVGs (status: pronto para V3) — 10 arquivos
- [ ] Entrar no bundle em V3 ou quando a Part correspondente for densificada
- [ ] Mover para `assets/` com nome canônico
- [ ] Entrada em registry com `source: "proprio_derivado"`, `maturity: "functional"`

---

## Alerta: huber_gripper.jpg

Tamanho de 4KB é inconsistente com uma fotografia real. Verificar visualmente antes de qualquer uso.
