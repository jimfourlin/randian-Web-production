# Scroll Morph Arc Gallery Design

## Scope

Replace the sixth hero effect, currently named Scroll Morph, with a curved image
gallery based on the supplied reference image. The replacement applies only to
the Scroll Morph template and keeps the other hero templates unchanged.

## User-facing behavior

- The gallery uses the existing Scroll Morph slot count and `state.hero.media`
  data, so each slot remains uploadable, replaceable, reorderable, and able to
  render an empty placeholder.
- Cards form a continuous horizontal arc. The center cards are larger and
  face the viewer; cards toward either edge become smaller and rotate outward.
- Images move continuously around the arc. The first and last items wrap
  through the same normalized loop position, so no card visibly jumps at the
  boundary.
- Animation plays automatically when the global animation setting is enabled.
- Wheel input and pointer drag change the same loop position. Input is eased
  toward a target position and does not move the page while the pointer is in
  the gallery.
- A soft center light/spotlight emphasizes the focal area. It is decorative,
  pointer-transparent, and does not change card geometry.
- There is no title, subtitle, flip face, detail back, or extra visible copy in
  the gallery.

## Component and data flow

`renderScrollMorph(items)` will render one `.scroll-morph` container with a
decorative `.scroll-morph-spotlight`, a `.scroll-morph-stage`, and one
`.scroll-morph-card` per slot. Each card keeps the existing `mediaImage` and
placeholder rendering path.

`initScrollMorphs(root)` will own one animation state per gallery:

- `position`: eased current loop position
- `targetPosition`: wheel/drag destination
- `velocity`: automatic movement contribution
- `dragging`, `pointerX`, and `lastTime`: pointer input state

Each frame computes a wrapped slot position, maps it to an arc x/y offset,
rotation, scale, opacity, and z-index, then writes CSS custom properties. The
card DOM order remains the slot order; visual ordering comes from z-index and
the wrapped position.

## Responsive behavior

The arc radius, card width, vertical bend, and visible spread are calculated
from the gallery width and height. Narrow canvases reduce card size and arc
spread while preserving a visible center card and partial edge cards. The
layout must remain usable for all existing canvas ratios.

## Styling and theme behavior

The existing Scroll Morph text, flip-face, and scattered-state styles will be
removed or made unused. The new front face will use the current project card
tokens and full-bleed images. Ivory background styling will use the same flat
card treatment as the first four effects; black background styling will retain
the dark visual language. The spotlight will use a restrained radial gradient
with `pointer-events: none` and no card shadow.

## Edge cases

- Empty slots render the normal placeholder mark and participate in the same
  arc calculations as image cards.
- A single populated slot remains centered instead of being pushed to an edge.
- Drag release preserves the eased target position and does not trigger a
  click-like action.
- Cleanup cancels the animation frame and removes wheel, pointer, and keyboard
  listeners before the preview is rerendered.
- Export/static rendering continues to use the existing static fallback path;
  this change does not alter other template exports.

## Verification

- `node --check app.js`
- `git diff --check`
- Real browser checks for all five canvas ratios, empty and populated slots,
  automatic movement, wheel movement, pointer drag, wraparound continuity,
  and ivory/black backgrounds.
