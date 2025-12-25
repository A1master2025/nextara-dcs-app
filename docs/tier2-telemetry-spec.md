# Tier 2 Telemetry Specification

**Page**: `/dcs-diagnostic`  
**Version**: 1.0  
**Status**: Implementation-ready

---

## Overview

DIOS telemetry for the DCS Diagnostic page (Tier 2). All events fire through **GTM container `GTM-N6HDR6L7`** to **GA4 Measurement ID `G-49KJHVBX3Q`**.

**FAIL-CLOSED**: If `nt_system_ready` is not detected (via `window.__NT_SYSTEM_READY_EMITTED__`), Tier 2 emits **nothing**.

---

## Preconditions

Tier 2 telemetry requires the baseline initializer:

- `src/components/TelemetryInit.astro` must:
  - set `window.__NT_SYSTEM_READY_EMITTED__ = true;`
  - push `{ event: 'nt_system_ready', ... }` to `dataLayer`

Tier 2 telemetry component:

- `src/components/Tier2Telemetry.astro` must:
  - wait for `window.__NT_SYSTEM_READY_EMITTED__`
  - emit Tier 2 events only after readiness is detected
  - never “proceed anyway” if readiness is missing

---

## Event Inventory

| Event | Type | Fires | Guard |
|------|------|------|------|
| `nt_tier2_view` | Pageview | Once, after system_ready | Yes |
| `nt_symptoms_view` | Visibility | 50% viewport, once | Yes |
| `nt_reframing_view` | Visibility | 50% viewport, once | Yes |
| `nt_dcs_definition_view` | Visibility | 50% viewport, once | Yes |
| `nt_telemetry_explainer_view` | Visibility | 50% viewport, once | Yes |
| `nt_outcomes_view` | Visibility | 50% viewport, once | Yes |
| `nt_primary_cta_view` | Visibility | 50% viewport, once | Yes |
| `nt_primary_cta_click` | Click | Each click | No |
| `nt_scroll_depth` | Scroll | 25/50/75/90 buckets | Per bucket |

---

## DIOS Attribute Mapping

| data-nt-section | data-nt-track | section_name |
|-----------------|---------------|--------------|
| `symptoms` | `nt_symptoms_view` | `symptoms` |
| `reframing` | `nt_reframing_view` | `reframing` |
| `dcs_definition` | `nt_dcs_definition_view` | `dcs_definition` |
| `telemetry_value` | `nt_telemetry_explainer_view` | `telemetry_value` |
| `outcomes` | `nt_outcomes_view` | `outcomes` |
| `diagnostic_cta` | `nt_primary_cta_view` | `diagnostic_cta` |

**Rule**: `data-nt-section` values are **snake_case** and the emitted `section_name` must match exactly.

---

## Event Payloads

### nt_tier2_view
```js
{
  event: 'nt_tier2_view',
  page_name: 'dcs_diagnostic',
  page_path: '/dcs-diagnostic',
  page_title: '...'
}
