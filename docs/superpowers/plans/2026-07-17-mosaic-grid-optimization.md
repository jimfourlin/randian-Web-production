# Mosaic Grid Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Mosaic Grid more orderly and space-efficient while adding a smooth click-to-focus interaction that works in editor and published previews.

**Architecture:** Keep the existing absolute-positioned layer model, but replace the seven loose percentages with a container-relative 4-column editorial collage and responsive layout variables. Extend the existing `applyMosaicLayerZoom` state transition so click, Escape, blank-stage click, and wheel zoom share one focus/restore path in both the editor and generated published script.

**Tech Stack:** Vanilla JavaScript, CSS custom properties, HTML templates, Edge headless screenshot verification.

## Global Constraints

- Modify only Mosaic-specific paths in `app.js`, `styles.css`, and the synchronized inline stylesheet in `index.html`.
- Keep Orbit Carousel, Circular Gallery, and Card Totem behavior unchanged.
- Preserve real images, Slot placeholders, existing fonts, borders, and color tokens.
- Use container-relative dimensions and verify 16:9, 1:1, 4:5, and 9:16 layouts.

### Task 1: Replace Mosaic Layout Geometry

**Files:**
- Modify: `app.js:2524-2550`
- Modify: `styles.css` Mosaic layout rules
- Modify: `index.html` synchronized inline Mosaic layout rules

**Interfaces:**
- Produces seven `.zoom-parallax-layer` nodes with the same `data-home-z` and image content contract.
- Consumes the existing `.zoom-parallax-stage` dimensions and CSS custom properties `--x`, `--y`, `--w`, `--h`.

- [ ] Replace the loose scattered percentages with a 4-column editorial map: one large left card, two stacked cards in the middle columns, one large right card, and two lower cards. Keep every slot addressable by index.
- [ ] Add responsive layout overrides for 1:1, 4:5, and 9:16 so the stage remains filled without clipping.
- [ ] Run `node --check app.js` and `git diff --check`.

### Task 2: Add Focus and Restore Interaction

**Files:**
- Modify: `app.js:4001-4100`
- Modify: `app.js:7573-7600`
- Modify: `styles.css` Mosaic interaction rules
- Modify: `index.html` synchronized inline Mosaic interaction rules

**Interfaces:**
- Reuses `applyMosaicLayerZoom(container, layer, nextZoom, activate)` as the only zoom/state transition function.
- Adds a focus state on `.zoom-parallax-layer.is-active` and a container blank-stage restore path.

- [ ] Make a card click focus it at the stage center with a smooth scale transition; clicking the active card toggles it back to its home state.
- [ ] Handle `Escape` at the gallery level and clicking the blank stage to restore the active card.
- [ ] Keep wheel zoom scoped to the card under the pointer and prevent page scrolling only while a card is targeted.
- [ ] Mirror the same event behavior in the published inline script.

### Task 3: Visual and Behavioral Verification

**Files:**
- Verify: `app.js`, `styles.css`, `index.html`
- Artifact: `.playwright-cli/mosaic-grid-*.png`

- [ ] Use Edge headless to capture the Mosaic preview at 16:9, 1:1, 4:5, and 9:16.
- [ ] Assert the page has seven Mosaic layers, no layer extends beyond the stage in the default state, and the active layer receives the focus class after a click.
- [ ] Verify Escape and blank-stage click remove the focus state.
- [ ] Run `node --check app.js` and `git diff --check` again after all edits.
